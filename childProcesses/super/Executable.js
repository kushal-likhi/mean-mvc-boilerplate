"use strict";

//Import deps
var util = require("util"),
    assert = require("assert"),
    EventEmitter = require("events").EventEmitter;


/**
 * This file defines the parent for child processes. It abstracts the basic methods/interface.
 *
 * @abstract
 * @class Executable
 * */
function Executable() {

    var _this = this, nodeProcess;

    //Call super constructor
    EventEmitter.call(this);

    /**
     * Start
     * This starts the child process and returns the process handle @this
     * */
    this.start = function () {
        //assert various required configs
        assert(_this._id, "Please specify the _id for the child process runner. Add line in ChildProcess `this._id = __filename;`");
        assert(_this.task, "Please specify the task function which is required to be run.");

        //Launch process
        nodeProcess = require('child_process').spawn('node', [_this._id], {env: process.env, stdio: ['ipc']});

        //Handle IPC Messages (Incoming)
        nodeProcess.on("message", function (message) {
            //Handle event messages
            if (message && message.command === "childProcessEvent") {
                _this.emit(message.event, message.data);
            }
        });

        //Handles exit scenario
        nodeProcess.on('exit', function (code) {
            log.debug('Child process', _this._id, 'exited with code ' + code);
            _this.emit("exit", code);
        });

        //Log StdOut
        nodeProcess.stdout.on('data', function (data) {
            log.debug("[Child Process STDOUT", _this._id, "]", data.toString());
        });

        //Log StdErr
        nodeProcess.stderr.on('data', function (data) {
            log.error("[Child Process STDERR", _this._id, "]", data.toString());
        });

        //Handle cases in which the master dies and child dangles
        process.on("exit", function () {
            try {
                nodeProcess.kill();
            } catch (c) {
            }
        });

        //Save the pid
        _this.pid = nodeProcess.pid;

        //Send execution directive
        nodeProcess.send({
            command: "startChildProcessExecution",
            args: arguments
        });

        return _this;
    };

    //Kill the process
    this.kill = function () {
        try {
            nodeProcess.kill();
        } catch (c) {
            log.error(c);
        }
    };

    //Send event at time of execution
    this.sendEvent = function (eventName, data) {
        process.send({
            command: "childProcessEvent",
            event: eventName,
            data: data
        });
        return _this;
    }
}

//Inherit
util.inherits(Executable, EventEmitter);

//Export
exports = module.exports = Executable;

//make a process listener, for child processes
if (process && process.on && !Boolean(global.__cpExecListenerBound)) process.on("message", function (message) {
    global.__cpExecListenerBound = true;
    console.log(message, argsToArray(message.args));
    if (message && message.command === "startChildProcessExecution") {
        var childProcessControllerObj = new module.parent.exports();
        if (childProcessControllerObj && childProcessControllerObj.task) {
            childProcessControllerObj.task.apply(childProcessControllerObj, argsToArray(message.args));
        } else throw new Error("No runner task defined");
    }
});

function argsToArray(args) {
    var i = 0, argsArr = [];
    while (args.hasOwnProperty("" + i)) {
        argsArr.push(args["" + i]);
        i++;
    }
    return argsArr;
}