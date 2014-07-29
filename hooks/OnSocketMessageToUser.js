/**
 * Handler for the event OnMessageToAPIUser
 * */
exports.onEvent = function (apiUserId, message, eventName) {

    eventName = eventName || "DefaultEvent";

    log.trace("Sending message to API User:", {
        apiUserId: apiUserId, message: message, eventName: eventName
    });

    //Handle string message
    if (typeof(message) == 'string') message = {message: message};

    //Add event name
    message.eventName = eventName;

    //Send
    __io.
        of(_config.socketEndpointURI).
        in(apiUserId.toString()).
        emit("message", message);

};