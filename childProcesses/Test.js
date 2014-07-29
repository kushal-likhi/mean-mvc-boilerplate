var Executable = require("./super/Executable");

function Test() {
    //Super constructor
    Executable.call(this);

    //Important, tell how to identify, Set it to which file to run. Always has to be filePath as it is read.
    this._id = __filename;

    /**
     * This is called when task executes.
     *
     * @arguments The same as the one you pass to start.
     * */
    this.task = function (config) {
        var _this = this;
        this.sendEvent("launched", +new Date());
        console.log(config, process.pid);
        setTimeout(function(){
            _this.sendEvent("done", +new Date());
            process.exit(0);
        }, 5000);
    }

}

require("util").inherits(Test, Executable);

exports = module.exports = Test;