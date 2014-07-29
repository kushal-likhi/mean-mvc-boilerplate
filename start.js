/**
 * Start.js
 *
 * This file is responsible for starting a local cluster on the server.
 *
 * This file also communicates the processes to gracefully start or die.
 *
 * */

/**
 * Local App Cluster Class
 *
 * @constructor
 * @class
 *
 * This is responsible to launch the local machine cluster for a particular server machine
 * */
function LocalAppCluster(workerPerCore, appFile) {

    //Import modules
    require("colors");
    var crypto = require("crypto");
    var qrcode = require('qrcode-terminal');
    var Table = require('cli-table');
    var cluster = require('cluster');

    //Assign the machine ID to cluster set
    var machineId = process.env["X-MACHINE-ID"] || generateMachineId();
    this.__defineGetter__("machineId", function () {
        return machineId
    });

    //Print Init Sticker
    (function () {
        if (!cluster.isMaster) return;
        console.log("\nStarting...".yellow.bold);
        console.log("\nInitializing physical machine:".magenta, machineId.green.bold);
        console.log("\n  MACHINE ID FOOTPRINT");
        console.log(getVisualizationSticker(machineId));
        console.log("\nMaster PID:", process.pid);
        if (process.env.DEBUG) qrcode.generate(process.pid);
    })();

    //Init setup data
    var numCpus = require('os').cpus().length,
        numWorkers = Math.ceil(numCpus * workerPerCore),
        pending = numWorkers + 0,
        workers = [],
        reFork = true,
        forkResetTimeOut,
        gracefulShutdown = false;

    /**
     * Launch the sub cluster on this physical machine
     * */
    this.launch = function () {
        if (cluster.isMaster) {
            //Prepare config table
            var configTable = new Table({ head: ["", "Value"] });
            configTable.push(
                { 'NUMBER OF CPUs': [numCpus] },
                { 'NUMBER OF WORKERS PER CPU': [workerPerCore] },
                { 'NUMBER OF WORKERS TRIGGERED': [numWorkers] }
            );
            console.log("\nCONFIGURATIONS".underline.bold.green);
            console.log(configTable.toString());

            //Launch workers
            for (var idx = 0; idx < numWorkers; idx++) {
                forkWorker();
            }
        } else {
            console.log("\n[SYSTEM] Loading Worker...", process.pid);
            //Print machine sticker for debug
            if (process.env.DEBUG) console.log(getVisualizationSticker(machineId));

            //Add Graceful control helper methods for worker
            global._enableGracefulShutDownMode = function () {
                if (process.send) {
                    process.send({type: "enable-graceful-shutdown"});
                } else {
                    console.log("[SUBSYSTEM ERROR] Cannot enable the graceful shutdown mode as IPC seems to be disabled.".red.bold);
                }
            };
            global._disableGracefulShutDownMode = function () {
                if (process.send) {
                    process.send({type: "disable-graceful-shutdown"});
                } else {
                    console.log("[SUBSYSTEM ERROR] Cannot disable the graceful shutdown mode as IPC seems to be disabled.".red.bold);
                }
            };

            //Load the application
            require(appFile);
        }
    };

    /**
     * @private Fork worker
     * */
    function forkWorker() {
        var worker = cluster.fork({"X-MACHINE-ID": machineId});
        //Bind events
        worker
            .on("message", function (message) {
                if (message && message.type) {
                    switch (message.type) {
                        case "server-running":
                            pending--;
                            workers.push(message);
                            if (!pending) {
                                var workerTable = new Table({ head: ["S.NO.", "PID", "ENVIRONMENT", "PORT", "URL", "FILE", "WORKER ID"] });
                                workers.forEach(function (worker, idx) {
                                    workerTable.push([
                                        idx + 1,
                                        worker.pid,
                                        worker.env,
                                        worker.port,
                                        worker.url,
                                        worker.file.replace(/.*\/([^\/]+)$/, "$1") + "->" + appFile,
                                        worker.workerId.substr(0, 5) + "..." + worker.workerId.substr(-5)
                                    ]);
                                });
                                console.log("\nLAUNCHED WORKERS".underline.bold.green);
                                console.log(workerTable.toString());
                            }
                            break;
                        case "enable-graceful-shutdown":
                            gracefulShutdown = true;
                            console.log("[SUBSYSTEM] Enabled graceful shutdown mode.".blue.bold);
                            break;
                        case "disable-graceful-shutdown":
                            gracefulShutdown = false;
                            console.log("[SUBSYSTEM] Disabled graceful shutdown mode.".blue.bold);
                            //Restore dead workers as graceful is disabled
                            if (cluster.workers.length < numWorkers) {
                                console.log("[SUBSYSTEM REPAIR] Restoring dead workers:".blue.bold, numWorkers - cluster.workers.length);
                                for (var i = 0; i < (numWorkers - cluster.workers.length); i++) {
                                    forkWorker();
                                }
                            }
                            break;
                    }
                }
            })
            .on('fork', function () {
                console.log("[SYSTEM] Forked Worker...", worker.process.pid);
            })
            .on('online', function () {
                console.log("[SYSTEM] Online Worker...", worker.process.pid);
            })
            .on('exit', function (code, signal) {
                console.log("[SYSTEM] Worker Exited...", worker.process.pid, code, signal);
                if (gracefulShutdown) return;
                //ReFork a new one
                if (reFork) {
                    reFork = false;
                    clearTimeout(forkResetTimeOut);
                    forkResetTimeOut = setTimeout(function () {
                        reFork = true;
                    }, 5000);
                    forkWorker();
                } else {
                    console.log("[SOMETHING NOT RIGHT] The worker restarted quickly, this is fishy. Not ReForking!".red.bold);
                    reFork = true;
                }
            });
    }

    /**
     * @private Generate random machine ID
     * */
    function generateMachineId() {
        var length = 64;
        try {
            return crypto.randomBytes(length).toString('hex');
        } catch (ex) {
            return crypto.pseudoRandomBytes(length).toString('hex');
        }
    }

    /**
     * Make the fingerprint sticker
     * */
    function getVisualizationSticker(value, cols, scale) {
        cols = cols || 8;
        scale = scale || 2;

        var fingerPrint = "";

        //Add Header
        for (var i = 0; i < (cols * scale) + 8; i++) fingerPrint += " ".red.inverse;
        fingerPrint += "\n";
        fingerPrint += "  ".red.inverse;
        for (i = 0; i < (cols * scale) + 4; i++) fingerPrint += " ";
        fingerPrint += "  ".red.inverse;

        //Print footprint
        var numLines = Math.ceil(value.length / cols), probability = 50.00;
        for (i = 0; i < numLines; i++) {
            fingerPrint += "\n";
            fingerPrint += "  ".red.inverse;
            var string = " " + value.substr(i * cols, cols) + " ";
            var exChars = scale - 1;
            for (var j = 0; j < string.length; j++) {
                fingerPrint += string.charAt(j).green;
                for (var k = 0; k < exChars; k++) {
                    fingerPrint += string.charAt(string.length - j).blue;
                }
            }
            fingerPrint += " ";
            fingerPrint += "  ".red.inverse;
            fingerPrint += ("  <-" + probability.toFixed(2) + "%").grey;
            probability = 100 - ((100 - probability) / 2);
        }

        //Add footer
        fingerPrint += "\n";
        fingerPrint += "  ".red.inverse;
        for (i = 0; i < (cols * scale) + 4; i++) fingerPrint += " ";
        fingerPrint += "  ".red.inverse;
        fingerPrint += "\n";
        for (i = 0; i < (cols * scale) + 8; i++) fingerPrint += " ".red.inverse;

        return fingerPrint;
    }

}

/**
 * Launch the sub cluster
 * */

//Constants
var NUMBER_OF_WORKERS_PER_CPU = 1;

//Create the Sub cluster launcher
var localAppCluster = new LocalAppCluster(NUMBER_OF_WORKERS_PER_CPU, "./app.js");

//Launch sub cluster
localAppCluster.launch();

