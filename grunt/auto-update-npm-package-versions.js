//The task function
exports = module.exports = function (grunt) {
    var fs = require("fs");
    var path = require("path");
    return function () {
        var mainFilePath = path.join(__dirname, "../", "package.json");
        grunt.log.write("Starting...").ok();
        grunt.log.write(mainFilePath, "...").ok();

        var mainFile = require(mainFilePath);

        Object.keys(mainFile.dependencies).forEach(function (packageName) {
            mainFile.dependencies[packageName] = getVersionOfPackage(packageName);
            grunt.log.write(packageName, mainFile.dependencies[packageName], "...").ok();
        });

        Object.keys(mainFile.devDependencies).forEach(function (packageName) {
            mainFile.devDependencies[packageName] = getVersionOfPackage(packageName);
            grunt.log.write(packageName, mainFile.devDependencies[packageName], "...").ok();
        });

        fs.writeFileSync(mainFilePath, JSON.stringify(mainFile, null, 4));
    };

    function getVersionOfPackage(name) {
        try {
            var packageFile = require(path.join(__dirname, "../node_modules", name, "package.json"));
            return packageFile.version || "*";
        } catch (c) {
            grunt.log.warn("Unable to fetch the package info for", name);
            return "*";
        }
    }
};