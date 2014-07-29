/**
 * Handler for the event OnSocketConnectionEstablished
 * */
exports.onEvent = function (userId) {
    log.info("Socket Endpoint established:", {
        userId: userId,
        time: +new Date(),
        humanTime: new Date()
    });
};