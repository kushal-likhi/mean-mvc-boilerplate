var ConfigManager = require("./modules/ConfigManager");
var Logger = require("./modules/Logger");
var MongoDatabaseProvider = require("./modules/MongoDatabaseProvider");
var fs = require("fs");
var path = require("path");
require("colors");

//Populate the configurations by reading the AppConfig as well as the Config.json files. The environment is considered.
exports.initConfig = function (options) {
    new ConfigManager(options, function (config) {
        Object.defineProperty(global, '_config', {
            get: function () {
                return config;
            }
        });
    });
};

//Initialize teh logger for the application. Consumer is teh method which will consume the produces logs.
exports.initLogger = function (consumer) {
    global.log = new Logger(consumer, _config.logger);
};

//Init all database Models
exports.initDomains = function (callback) {
    MongoDatabaseProvider.getDatabase(function (db) {
        Object.defineProperty(global, '_db', {
            get: function () {
                return db;
            }
        });
        fs.readdir(path.join(__appBaseDir, "domain"), function (err, list) {
            if (err) log.error(err);
            else {
                list.forEach(function (item) {
                    var name = item.toString().replace(/\.js$/, "");
                    var model = db.getDomain(name);
                    model.ensureAllManuallyDefinedSchemaIndexes();
                    Object.defineProperty(global, name, {
                        get: function () {
                            return model;
                        }
                    });
                });
            }
            callback();
        });
    });
};

//Inject all Singleton Services
exports.initServices = function () {
    try {
        var list = fs.readdirSync(path.join(__appBaseDir, "services"));
        list.forEach(function (item) {
            var name = item.toString().replace(/\.js$/, "");
            var service = require(path.join(__appBaseDir, "services", name));
            Object.defineProperty(global, name, {
                get: function () {
                    return service;
                }
            });
        });
    } catch (err) {
        log.error(err);
    }
};

//Enable global app event hooks
exports.initHooks = function () {
    try {
        global.globalEvent = new process.EventEmitter();
        var list = fs.readdirSync(path.join(__appBaseDir, "hooks"));
        list.forEach(function (item) {
            var name = item.toString().replace(/\.js$/, "");
            var hook = require(path.join(__appBaseDir, "hooks", name));
            if (typeof(hook.onEvent) == 'function') {
                global.globalEvent.on(name, hook.onEvent);
            } else {
                log.error(new Error("Hook: [" + item + "] is invalid. Please define a function named 'onEvent' in the Hook file. This function will be called on event."));
            }
        });
    } catch (err) {
        log.error(err);
    }
};

//Register the health of cluster worker in db
exports.registerClusterWorker = function () {
    setInterval((function (fn) {
        fn();
        return fn;
    })(function () {
        var os = require("os");
        var details = {
            workerId: _workerId,
            environment: __appEnv,
            processName: process.title,
            versions: process.versions,
            architecture: process.arch,
            platform: process.platform,
            environmentVariables: process.env,
            pid: process.pid,
            features: process.features,
            debugPort: process.debugPort,
            listeningPort: _app.get('port'),
            nodeFilePath: process.execPath,
            processConfig: process.config,
            hostname: os.hostname(),
            uptime: os.uptime(),
            ram: {
                free: os.freemem(),
                total: os.totalmem()
            },
            cpus: os.cpus(),
            osType: {
                name: os.type(),
                release: os.release(),
                arch: os.arch()
            },
            networkInterfaces: os.networkInterfaces(),
            tempDir: os.tmpDir(),
            updated: new Date().getTime()
        };
        details = JSON.parse(JSON.stringify(details)); //sanitize
        ClusterWorker.update({workerId: _workerId}, {$set: details}, {upsert: true}, function (err) {
            if (err) log.error(err);
        });
        try {
            ClusterWorker.find({updated: {$lt: (new Date().getTime() - (1000 * 40))}}, function (err, objList) {
                objList.forEach(function (obj) {
                    ClusterWorker.remove({_id: obj._id}, function (err) {
                        if (err) log.error(err);
                        else globalEvent.emit("OnClusterWorkerFoundInactive", obj);
                    });
                });
            });
        } catch (c) {
            log.error(c);
        }
    }), 1000 * 30);
};

//Middleware to deal with the api communication
exports.apiHelperToolInjectionMiddleware = function (req, res, next) {
    function sendResponse(dataObj, headers, status) {
        if (Boolean(status)) status = parseInt(status, 10);
        else status = 200;
        headers = headers || {};
        headers["Content-Type"] = Boolean(req.param('callback')) ? 'text/javascript' : 'application/json';
        res.writeHead(status, headers);
        if (Boolean(req.param('callback'))) {
            res.end(req.param('callback') + "(" + JSON.stringify(dataObj) + ")");
        } else {
            res.end(JSON.stringify(dataObj));
        }
    }

    res.sendErrorAPIResponse = function (message, status, headers) {
        sendResponse({
            error: message
        }, headers, status);
    };
    res.sendSuccessAPIResponse = function (data, status, headers) {
        if (typeof(data) == 'string' || data instanceof String) {
            data = {message: data};
        }
        sendResponse(data, headers, status);
    };
    req.setDefaultParams = function (map) {
        Object.keys(map).forEach(function (key) {
            if (req.param(key) == null || typeof(req.param(key)) == 'undefined') req.params[key] = map[key] + "";
        });
    };
    next();
};

//For Testing we enable some IPC Commands
exports.addIPCTestCommandHandlers = function () {
    require("./modules/IPCForTesting"); //Initialize the IPC
};

/**
 * This method is a helper for making the action secured for specified roles
 *
 * @param {...String} [role] role you want to authorize
 * */
Function.prototype.securedAPI = function (role) {
    var permittedRoles = arguments;
    var actionFunction = this;

    return function (req, res, next) {
        var that = this;
        _passport.authenticate('bearer', function (err, user, info) {
            if (err || !user) {
                res.sendErrorAPIResponse("Invalid Or No Access token supplied. Please provide a valid Access Token.", 401);
            } else {
                if ((!permittedRoles.length && !!user) || (!!user && permittedRoles.length > 0 && arrayIntersect(user.roles, permittedRoles))) {
                    req.user = user;
                    actionFunction.call(that, req, res, next);
                } else res.sendErrorAPIResponse("You are not authorized to perform this operation", 401);
            }
        })(req, res, next);
    };
};

/**
 * This method is a helper for making the action secured for specified roles
 *
 * @param {...String} [role] role you want to authorize
 * */
Function.prototype.secured = function (role) {
    var permittedRoles = arguments;
    var actionFunction = this;

    return function (req, res, next) {
        var that = this;
        _passport.authenticate('bearer', function (err, user, info) {
            if (err || !user) {
                res.redirect(_config.authFailRedirectUrl);
            } else {
                if ((!permittedRoles.length && !!user) || (!!user && permittedRoles.length > 0 && arrayIntersect(user.roles, permittedRoles))) {
                    req.user = user;
                    actionFunction.call(that, req, res, next);
                } else res.redirect(_config.authFailRedirectUrl);
            }
        })(req, res, next);
    };
};

//Add a emitter transform for functions.
Function.prototype.toEmitter = function () {
    var origFunc = this;
    return function () {
        var args = arguments;
        var emitter = new process.EventEmitter();
        process.nextTick(function () {
            origFunc.apply(emitter, args);
        });
        return emitter;
    }
};

/**
 * Helper function, Returns true if two arrays intersect.
 *
 * @param {Array} arr1 Array 1
 * @param {Array} arr2 Array 2
 *
 * @return {Boolean} true if array intersect, otherwise false
 * */
function arrayIntersect(arr1, arr2) {
    var mapper = {};
    var intersect = false;
    arr1.forEach(function (el) {
        mapper[el] = true;
    });
    for (var index in arr2) {
        if (arr2.hasOwnProperty(index) && Boolean(mapper[arr2[index]])) {
            intersect = true;
            break;
        }
    }
    return intersect;
}