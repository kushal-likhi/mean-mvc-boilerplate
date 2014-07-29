/**
 *
 * Model Cluster Worker
 * This model defines the schema of the Cluster Worker Domain.
 *
 * This collection is intended to store the list of currently functioning workers just for monitoring and debugging purposes.
 * */

/*
 * Define the Schema of the collection (MongooseJS schema definition)
 * */
exports.schema = {
    workerId: String,
    environment: String,
    processName: String,
    versions: {},
    architecture: String,
    platform: String,
    environmentVariables: {},
    pid: Number,
    features: {},
    debugPort: Number,
    listeningPort: Number,
    nodeFilePath: String,
    processConfig: {},
    hostname: String,
    uptime: Number,
    ram: {},
    cpus: {},
    osType: {},
    networkInterfaces: {},
    tempDir: String,
    updated: Number
};

/*
 * Define some static methods
 * */
exports.static = {
    /**
     * Static method on this domain to get a paginated list of workers.
     *
     * @param {Number} skip The offset to pass.
     * @param {Number} limit Total number of records wanted
     * @param {Function} callback The callback method, arguments(err, workers, total)
     *
     * */
    ListPaginated: function (skip, limit, callback) {
        var Model = this;
        Model.count(function (err, total) {
            if (err) callback(err);
            else {
                var query = Model.find().skip(skip);
                if (limit > 0) query.limit(limit);
                query.exec(function (err, workers) {
                    if (err) callback(err);
                    else callback(null, workers, total);
                });
            }
        });
    }
};