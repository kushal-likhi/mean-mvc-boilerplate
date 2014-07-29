/*
 * Load dependent modules
 * */
var path = require("path");
var fs = require("fs");

/*
 * Initialize the event listener for messages
 * */
process.on("message", function (message) {
    if (message && typeof(message.cbEvent) != 'undefined' && typeof(message.event) != 'undefined') {
        var commandPath = path.join(__dirname, "commands", message.event + ".js");
        //Check if a command is defined
        if (fs.existsSync(commandPath)) {
            require(commandPath).execute(message.data, function (err, resp) {
                process.send({event: message.cbEvent, error: err, resp: resp});
            });
        } else {
            process.send({event: message.cbEvent, error: "No such command defined. please define it in: " + commandPath.replace(__appBaseDir, "")});
        }
    }
});