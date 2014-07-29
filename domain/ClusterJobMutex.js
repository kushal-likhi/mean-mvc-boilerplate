/**
 *
 * Model Cluster Job Mutex
 * This model defines the schema of the Cluster Job Mutex Domain.
 *
 * This collection is intended to store mutex locks for running scheduled jobs on cluster.
 * */

/*
 * Define the Schema of the collection (MongooseJS schema definition)
 * */
exports.schema = {
    jobId: String,
    name: String,
    locked: Boolean,
    lastTriggered: Date,
    dateCreated: Date
};

//Define indexes
exports.indexes = [
    {'jobId': 1},
    {'jobId': 1, locked: 1}
];