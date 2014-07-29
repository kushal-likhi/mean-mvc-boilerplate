"use strict";

//The Job Class
function Job(config) {
    var _this = this;
    this.name = config.name;
    this.id = config.id;
    this.dateCreated = config.dateCreated;
    console.log("Creating Job:", this.name);

    var JobMutex = config.JobMutexModel;

    this.executeTask = function (timeStamp) {
        try {
            config.taskFunction.call(_this, function () {
                var currentTimeStamp = +new Date();

                function release() {
                    JobMutex.findOneAndUpdate({jobId: _this.id}, {$set: {locked: false}}, {upsert: false}, function (err, mutex) {
                        if (err) {
                            console.log("Error releasing the Mutex.", _this.name, _this.id);
                        }
                    });
                }

                if (currentTimeStamp - timeStamp < 1000) {
                    setTimeout(release, 1000 - (currentTimeStamp - timeStamp))
                } else {
                    release();
                }
            });
        } catch (c) {
            console.log("Error executing job:", _this.name, ":", _this.id, "\n Exception:" + c, "Job Stopped");
        }
    };
    this.executeTrigger = function (date, callback) {
        if (Boolean(config.triggerFunction)) {
            if (config.triggerFunction(date)) {
                JobMutex.findOneAndUpdate({jobId: _this.id, $or: [
                    {locked: {$exists: false}},
                    {locked: false}
                ]}, {$set: {locked: true}}, {upsert: false}, function (err, mutex) {
                    if (err) {
                        console.log("Error locking the Mutex.", _this.name, _this.id);
                        callback(false);
                    } else if (Boolean(mutex)) {
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
            } else callback(false);
        } else callback(true);
    };

    JobMutex.findOneAndUpdate({jobId: _this.id}, {jobId: _this.id, name: _this.name, dateCreated: new Date(), locked: false}, {upsert: true}, function (err, mutex) {
        if (err) {
            console.log("Error saving the Job.", _this.name, _this.id);
        }
        config.callback();
    });
}

//Export
exports = module.exports = Job;