var cp = require('child_process');

exports = module.exports = function (callback) {

    var nodeProcess = cp.spawn('node', ["app.js"], {env: {NODE_ENV: "test", PATH: process.env.PATH}, stdio: ['ipc']});

    nodeProcess.on('message', function (message) {
        if (message.event == "ready") callback(message);
    });

    nodeProcess.stdout.on('data', function (data) {
        console.log("[APPLICATION STDOUT]", data.toString());
    });

    nodeProcess.stderr.on('data', function (data) {
        console.log("[APPLICATION STDERR]", data.toString());
    });

    process.on("exit", function () {
        try {
            nodeProcess.kill();
        } catch (c) {
        }
    });

    nodeProcess.sendIPCCommand = function (command, data, callback) {
        var cbEventName = +new Date() + command;
        nodeProcess.on('message', function (message) {
            if (message.event == cbEventName) callback(message.error, message.resp);
        });
        nodeProcess.send({event: command, data: data, cbEvent: cbEventName});
    };
    //nodeProcess.send({event: "ready", serverUrl: _config.serverUrl, port: _config.port, env: __appEnv});

    return nodeProcess;
};