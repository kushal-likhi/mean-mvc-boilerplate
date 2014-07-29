"use strict";

//JobScheduler Class
function JobScheduler(jobsDirPath, JobMutexModel) {
    //Import modules
    var fs = require("fs"),
        async = require('async'),
        path = require("path"),
        Job = require("./Job");

    //Store all defined jobs
    var jobs = [];

    //Read all job descriptors
    fs.readdir(jobsDirPath, function (err, list) {
        if (err) console.log(err);
        else {
            var tasks = [];

            //Populate tasks
            list.forEach(function (item) {
                tasks.push(function (callback) {
                    var jobName = item.toString().replace(/\.js$/, "");
                    var jobDescriptor = require(path.join(jobsDirPath, jobName));
                    jobs.push(new Job({
                        id: jobName.replace(/([a-z])([A-Z])/g,function () {
                            return (arguments[1] + "_" + arguments[2]);
                        }).toLowerCase(),
                        name: jobName.replace(/([a-z])([A-Z])/g, function () {
                            return (arguments[1] + " " + arguments[2]);
                        }),
                        triggerFunction: jobDescriptor.trigger,
                        taskFunction: jobDescriptor.task,
                        dateCreated: new Date(),
                        JobMutexModel: JobMutexModel,
                        callback: callback
                    }));
                });
            });

            //Execute tasks
            async.series(tasks, function () {
                if (jobs.length) {
                    //Run the Quartz for trigger control
                    setInterval(function () {
                        var date = new Date();
                        jobs.forEach(function (job) {
                            job.executeTrigger(date, function (fire) {
                                if (fire) {
                                    process.nextTick(function () {
                                        job.executeTask(+date);
                                    });
                                }
                            });
                        });
                    }, 1000);
                }
            });
        }
    });
}

//Export
exports = module.exports = JobScheduler;
