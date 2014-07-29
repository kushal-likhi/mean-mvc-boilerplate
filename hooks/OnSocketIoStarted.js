var socket = require('socket.io')
    , Utils = require("../src/Utils")
    , redis = require('socket.io-redis');

/**
 * Handler for the event OnSocketIoStarted
 * */
exports.onEvent = function (io) {
    log.info("Socket IO Started:");

    //Export the io object
    global.__io = io;

    //Error event for socket
    io.on && io.on("error", function (err) {
        log.error(err);
    });
    io.adapter(redis({ host: _config.dataSource.redis.url, port: _config.dataSource.redis.port }));

    io.use(function (socket, next) {
        var handshakeData = socket.request;
        var token = handshakeData._query.token;
        if (Boolean(token)) {
            log.debug("New Connection with Token:- ", token);
            Utils.verifyBearerToken(token, function (err, data, authorizations) {
                if (err) {
                    log.error(err);
                    next(new Error("Invalid token."));
                } else {
                    handshakeData.userId = data._id;
                    next(null, true);
                }
            });
        } else {
            next(new Error("Access Token not provided. please provide a 'token' in the query."));
        }
    });

    //Handle connections for MSC(API USER APP) communication.
    io.
        of(_config.socketEndpointURI).
        on('connection',function (socket) {

            log.debug("Connection Created for: ", socket.handshake.userId);

            //Error event for socket
            socket.on("error", function (err) {
                log.error(err);
            });

            //Say hello to connected user.
            socket.emit("HELLO", {message: "Hello From Server"});

            //Enable a ping check mechanism. For testing purposes of created sockets by client apps or other consumers.
            socket.on("PING", function (message) {
                log.debug("A PING is received from", socket.handshake.userId, message);
                socket.emit("PINGBACK", message);
            });

            //Enable broadcasting to all connections to the endpoint.
            socket.on("BROADCAST", function (message) {
                log.debug("A BROADCAST is received from", socket.handshake.userId, message);
                __io.in(socket.handshake.userId).emit("BROADCAST_MESSAGE", message);
            });

            //Log disconnection
            socket.on('disconnect', function () {
                log.debug("Socket disconnected");
            });

            //Join the room for user events.
            if (Boolean(socket.handshake.userId)) {
                log.trace("Joining Room:", socket.handshake.userId);
                socket.join(socket.handshake.userId);
                socket.emit("ready", {id: socket.handshake.userId});
            } else {
                socket.disconnect();
            }

            //Trigger an event.
            globalEvent.emit("OnSocketConnectionEstablished", socket.handshake.userId);
        }).
        on("error", function (err) {
            log.error(err);
        });

};
