/**
 This file brings in the functionality to read Domain schema and give us the Domain objects. Interceptors are also defined here.
 */

function Database(callback) {
    var _this = this;
    var path = require('path');
    var fs = require('fs');
    var mongoose = require("mongoose");
    this.connection = mongoose.createConnection(_config.dataSource.mongo.url, {poolSize: _config.dataSource.mongo.poolSize});
    this.connection.on('error', function () {
        log.error(arguments);
        if (_config.dataSource.mongo.ignoreConnectionError) callback(_this);
    });
    this.connection.once('open', function () {
        callback(_this);
    });
    var models = {};
    var Domain = function (domainName) {
        var domainDescriptor = require(path.join(__appBaseDir, "domain", domainName));
        var schema = new mongoose.Schema(domainDescriptor.schema);
        for (var method in domainDescriptor.methods) {
            if (domainDescriptor.methods.hasOwnProperty(method)) schema.methods[method] = domainDescriptor.methods[method];
        }
        for (var staticMethod in domainDescriptor.static) {
            if (domainDescriptor.static.hasOwnProperty(staticMethod)) schema.statics[staticMethod] = domainDescriptor.static[staticMethod];
        }
        schema.statics.ensureAllManuallyDefinedSchemaIndexes = function () {
            for (var indexDescriptor in domainDescriptor.indexes) {
                if (domainDescriptor.indexes.hasOwnProperty(indexDescriptor)) {
                    schema.index(domainDescriptor.indexes[indexDescriptor]);
                }
            }
            _this.connection.model(domainName, schema).ensureIndexes(function (err) {
                if (err) log.error(err);
            });
        };
        this.createModel = function () {
            return _this.connection.model(domainName, schema);
        }
    };
    this.getDomain = function (name) {
        if (!Boolean(models[name])) models[name] = new Domain(name).createModel();
        return models[name];
    };
}


/**
 * @param {function} callback
 * @returns {Database}
 */
exports.getDatabase = function (callback) {
    return new Database(callback);
};