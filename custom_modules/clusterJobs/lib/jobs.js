"use strict";

//Import the Job Scheduler class
var JobScheduler = require("./JobScheduler");

//Import modules
var assert = require("assert"),
    path = require("path");

//Export the Init method. Should be initiated after DB connection is made. Probably in Bootstrap.
exports.init = function (options) {
    //Default options
    options.jobsDirPath = options.jobsDirPath || path.join(__appBaseDir, "/jobs");

    //Job Model should be present
    assert(options.JobMutexModel);

    //Return a new scheduler
    return new JobScheduler(options.jobsDirPath, options.JobMutexModel);
};