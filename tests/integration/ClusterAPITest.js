var assert = require("assert");
describe('Cluster API Test Suite', function () {
    var nodeProcess = null;
    var application = null;
    var apiUser = null;
    var accessToken = null;
    before(function (done) {
        this.timeout(10000);
        nodeProcess = require("./helper/StartTestServer")(function (app) {
            application = app;
//            require("./helper/GetAccessToken")(nodeProcess, application, function (user, token) {
                accessToken = token;
                apiUser = user;
                done();
//            });
        });
    });

    describe('Test Listing Of Workers', function () {
        it('should return full list when no limit or skip passed', function (done) {
            require("request").get(application.serverUrl + "/cluster/worker/list", {headers: {authorization: "Bearer " + accessToken}}, function (err, resp, body) {
                if (err) throw err;
                var bodyObj = JSON.parse(body);
                assert.equal(200, resp.statusCode);
                assert.equal(bodyObj.total, bodyObj.data.length);
                assert.equal(application.listCap, bodyObj.limit);
                assert.equal(0, bodyObj.skip);
                done();
            });
        });
        it('should return full list when only skip passed', function (done) {
            require("request").get(application.serverUrl + "/cluster/worker/list?skip=0", {headers: {authorization: "Bearer " + accessToken}}, function (err, resp, body) {
                if (err) throw err;
                var bodyObj = JSON.parse(body);
                assert.equal(200, resp.statusCode);
                assert.equal(bodyObj.total, bodyObj.data.length);
                assert.equal(application.listCap, bodyObj.limit);
                assert.equal(0, bodyObj.skip);
                done();
            });
        });
        it('should return full list when only infinite limit passed', function (done) {
            require("request").get(application.serverUrl + "/cluster/worker/list?limit=-1", {headers: {authorization: "Bearer " + accessToken}}, function (err, resp, body) {
                if (err) throw err;
                var bodyObj = JSON.parse(body);
                assert.equal(200, resp.statusCode);
                assert.equal(bodyObj.total, bodyObj.data.length);
                assert.equal(application.listCap, bodyObj.limit);
                assert.equal(0, bodyObj.skip);
                done();
            });
        });
        it('should return list when only finite limit passed', function (done) {
            require("request").get(application.serverUrl + "/cluster/worker/list?limit=1", {headers: {authorization: "Bearer " + accessToken}}, function (err, resp, body) {
                if (err) throw err;
                var bodyObj = JSON.parse(body);
                assert.equal(200, resp.statusCode);
                assert.equal(1, bodyObj.data.length);
                assert.equal(1, bodyObj.limit);
                assert.equal(0, bodyObj.skip);
                done();
            });
        });
        it('should return list when both skip and limit are passed', function (done) {
            require("request").get(application.serverUrl + "/cluster/worker/list?limit=1&skip=0", {headers: {authorization: "Bearer " + accessToken}}, function (err, resp, body) {
                if (err) throw err;
                var bodyObj = JSON.parse(body);
                assert.equal(200, resp.statusCode);
                assert.equal(1, bodyObj.data.length);
                assert.equal(1, bodyObj.limit);
                assert.equal(0, bodyObj.skip);
                done();
            });
        });
        it('should return list when both skip and limit are passed', function (done) {
            require("request").get(application.serverUrl + "/cluster/worker/list?limit=-1&skip=0", {headers: {authorization: "Bearer " + accessToken}}, function (err, resp, body) {
                if (err) throw err;
                var bodyObj = JSON.parse(body);
                assert.equal(200, resp.statusCode);
                assert.equal(bodyObj.total, bodyObj.data.length);
                assert.equal(application.listCap, bodyObj.limit);
                assert.equal(0, bodyObj.skip);
                done();
            });
        });
    });

    after(function () {
        nodeProcess.kill();
    });
});