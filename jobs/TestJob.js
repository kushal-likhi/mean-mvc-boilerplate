exports.trigger = function (date) {
    //Run every 5 seconds
    return (date.getSeconds() % 5 == 0);
};

exports.task = function (callback) {
    log.info("Executing job:", this.name, this.id, this.dateCreated, new Date());
    callback();
};