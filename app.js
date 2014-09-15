var express = require('express'),
    AppBuilder = require("./custom_modules/AppBuilder"),
    path = require('path'),
    http = require('http'),
    passport = require("passport"),
    BearerStrategy = require("passport-http-bearer"),
    expressValidator = require('express-validator'),
    connectFormidable = require('./custom_modules/connect-formidable'),
    Util = require("./src/Utils"),
    viewEngine = require("ejs-locals"),
    socket = require('socket.io');


// Use the BearerStrategy with Passport.
passport.use(new BearerStrategy(Util.verifyBearerToken));
global.__defineGetter__("_passport", function () {
    return passport
});

//give this worker a special Id
var workerId = Util.generateRandomKey(64);
global.__defineGetter__("_workerId", function () {
    return workerId;
});

//Add noop function in global context
global.noop = function () {
    log.info("Noop Executed with params:", arguments)
};

//Create Express App
var app = express();

//set the base dir of project in global, This is done to maintain the correct base in case of forked processes.
global.__appBaseDir = __dirname;

//Get the Environment
global.__appEnv = process.env.NODE_ENV || "development";
console.log("Initializing with environment:", __appEnv);

//Initialize the config. Now the configurations will be available in _config global getter.
AppBuilder.initConfig({
    postProcess: function (config) {
        //Check if port is defined in environment then set that one.
        config.port = process.env.PORT || config.port;
        return config;
    }
});

//Initialize the Logger. this is available in the "log" global object.
var logOnStdOut = _config.logger.stdout.enabled;
AppBuilder.initLogger(function (message, level) {
    if (logOnStdOut) {
        //Print on console the fully formatted message
        console.log(message.fullyFormattedMessage);
    }
});

//Initialize the Express middlewares
app.set('port', _config.port);
app.set('views', path.join(__dirname, "views"));
app.engine('ejs', viewEngine);
app.set('view engine', 'ejs');
app.use(express.logger("dev"));

//Web dirs are conditional
if (__appEnv == "production") {
    app.use(express.static(path.join(__dirname, 'web-app', "dist")));
} else {
    app.use(express.static(path.join(__dirname, 'web-app', "bower_components")));
    app.use(express.static(path.join(__dirname, 'web-app', "dev")));
}
app.use(express.cookieParser());
app.use(Util.localToBearerStrategyMiddleWare);
app.use(express.json());
app.use(express.urlencoded());
app.use(expressValidator());
app.use(express.methodOverride());
app.use(AppBuilder.apiHelperToolInjectionMiddleware);
app.use(connectFormidable());
app.use(app.router);
app.configure('development', function () {
    express.errorHandler.title = _config.appName;
    app.use(express.errorHandler());
});

//Export the app via getter in global
global.__defineGetter__("_app", function () {
    return app;
});


//Initialize the Database connection and load models
AppBuilder.initDomains(function () {
    //Init Hooks
    AppBuilder.initHooks();

    //Inject Services
    AppBuilder.initServices();

    //Register the cluster worker
    AppBuilder.registerClusterWorker();

    require("./conf/URLMappings");
    require("./conf/Bootstrap").init();

    var _server = http.createServer(app);
    _server.on("error", function (err) {
        log.error(err);
    });
    var server = _server.listen(app.get('port'), function () {
        log.info('Server listening on', _config.serverUrl);

        //Initialize Socket IO Server
        globalEvent.emit("OnSocketIoStarted", socket.listen(server));

        //Initialize IPC for test environment
        if (__appEnv == "test" && process.send) {
            try {
                //Register the IPC commands
                AppBuilder.addIPCTestCommandHandlers();
                //send message to parent thread in case of integration testing using IPC
                process.send({event: "ready", serverUrl: _config.serverUrl, port: _config.port, env: __appEnv, listCap: _config.maxCountForListingApi});
            } catch (c) {
            }
        }

        //Send Online event
        if (process.send) {
            process.send({
                type: "server-running",
                pid: process.pid,
                env: __appEnv, port: app.get("port"),
                url: _config.serverUrl,
                file: process.argv[1],
                node: process.argv[0],
                workerId: workerId
            });
        }

    });
    server.on("error", function (err) {
        log.error(err);
    });
});

