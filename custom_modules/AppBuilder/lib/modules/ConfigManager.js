var extend = require("extend");
var path = require("path");

exports = module.exports = function ConfigManager(options, callback) {
    var appConfigRaw = require(path.join(__appBaseDir, "conf/AppConfig.json"));
    var configRaw = require(path.join(__appBaseDir, "conf/Config.json"));
    options.postProcess = options.postProcess || function (config) {
        return config;
    };
    callback(options.postProcess(extend(true, {}, appConfigRaw.common, configRaw.common, appConfigRaw[__appEnv], configRaw[__appEnv])));
};