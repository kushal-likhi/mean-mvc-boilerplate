"use strict";

//Import Enums
var EventName = require("../src/enum/EventName");

/*
 * List all cluster workers implementation
 * */
exports.listWorkers = function (limit, skip) {
    var emitter = this;
    if (limit == -1 || limit > _config.maxCountForListingApi) limit = _config.maxCountForListingApi;
    ClusterWorker.count(function (err, total) {
        if (err) emitter.emit(EventName.ERROR, err);
        else {
            var query = ClusterWorker.find().skip(skip);
            if (limit > 0) query.limit(limit);
            query.exec(function (err, workers) {
                if (err) emitter.emit(EventName.ERROR, err);
                else emitter.emit(EventName.DONE, workers, total, limit, skip);
            });
        }
    });
}.toEmitter();