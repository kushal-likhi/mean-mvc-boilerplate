module.exports = function (grunt) {

    grunt.initConfig({

    });

    //Register the custom tasks
    grunt.registerTask('update-package-ver', 'Updates the package versions in the package.json', require("./grunt/auto-update-npm-package-versions")(grunt));

};