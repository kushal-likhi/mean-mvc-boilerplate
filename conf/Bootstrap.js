/*
 * Loading Modules
 * */
var async = require("async");
var Role = require("../src/enum/Role");


/*
 * This is the start point for BootStrap. This method is triggered externally from app.js when the instance is loaded.
 * This is only called once when the instance spins up.
 * */
exports.init = function () {
    log.info("Executing Bootstrap");

    //Init jobs module
    require("../custom_modules/clusterJobs").init({
        JobMutexModel: ClusterJobMutex
    });

    switch (__appEnv) {
        case "development":
            bootstrapForDevelopment();
            break;
        case "test":
            bootstrapForTest();
            break;
        case "production":
            bootstrapForProduction();
            break;
        case "qa":
            bootstrapForQa();
            break;
        default:
            log.info("No Bootstrap for the Environment:", __appEnv);
    }
};

/*
 * Bootstrap execution for the env "development"
 * */
function bootstrapForDevelopment() {
    var tasks = [];

    //Define the tasks in order of execution
    tasks.push(createSuperAdminUserIfDoesNotExist);

    async.series(tasks, function () {
        log.info("Finished executing Bootstrap for 'development'");
    });
}

/*
 * Bootstrap execution for the env "production"
 * */
function bootstrapForProduction() {
    var tasks = [];

    //Define the tasks in order of execution
    tasks.push(createSuperAdminUserIfDoesNotExist);

    async.series(tasks, function () {
        log.info("Finished executing Bootstrap for 'production'");
    });
}

/*
 * Bootstrap execution for the env "test"
 * */
function bootstrapForTest() {
    var tasks = [];

    //Define the tasks in order of execution
    tasks.push(createSuperAdminUserIfDoesNotExist);

    async.series(tasks, function () {
        log.info("Finished executing Bootstrap for 'test'");
    });
}

/*
 * Bootstrap execution for the env "qa"
 * */
function bootstrapForQa() {
    var tasks = [];

    //Define the tasks in order of execution
    tasks.push(createSuperAdminUserIfDoesNotExist);

    async.series(tasks, function () {
        log.info("Finished executing Bootstrap for 'qa'");
    });
}


/***********************************************************************************************
 *
 * Individual task methods are described below.
 *
 ***********************************************************************************************/

/*
 * Create A super admin user if does not exist.
 * */
function createSuperAdminUserIfDoesNotExist(callback) {
    //Todo
    callback();
}
