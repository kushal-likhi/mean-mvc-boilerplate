/*
 * This file contains the common util methods
 * */

var crypto = require('crypto');
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;
var Role = require("../src/enum/Role");

/**
 * Used to generate a random key of desired bytes.
 *
 * @param {Number} length Length of the bytes in key string.
 *
 * @return {String} the crypt key
 * */
exports.generateRandomKey = function (length) {
    length = length || 64;
    try {
        return crypto.randomBytes(length).toString('hex');
    } catch (ex) {
        return crypto.pseudoRandomBytes(length).toString('hex');
    }
};

/**
 * Convert To ObjectId
 * This method returns the object of ObjectId from the string passed. If the string is invalid then null is returned.
 *
 * @param {String} id The String ID
 *
 * @return {ObjectID} the objectId instance
 *
 * */
exports.convertToObjectId = function (id) {
    var objectId = null;
    if (id instanceof ObjectId) {
        objectId = id;
    } else {
        try {
            objectId = ObjectId(id);
        } catch (c) {
            objectId = null;
        }
    }
    return objectId;
};

/**
 * This method verifies the Bearer token
 *
 * @param {String} token Token passed in request
 * @param {Function} done Callback function
 *
 * */
exports.verifyBearerToken = function (token, done) {
    var tokenData = null;
    try {
        var decipher = crypto.createDecipher(_config.oauth.bearer.generatorAlgorithm, _config.oauth.bearer.generatorSecret);
        tokenData = JSON.parse(decipher.update(token, 'hex') + decipher.final());
    } catch (c) {
        c.message = "Request made with invalid token. " + c.message;
        log.warn(c);
    }
    if (tokenData && tokenData.e > +new Date()) done(null, {_id: tokenData.i, roles: Role.fromShortNotationToRolesArray(tokenData.r), name: tokenData.n}, { scope: tokenData.s });
    else done(new Error("Invalid Token."));
};


/**
 * Bearer transfer middleware
 * This middleware transfers the local stateless sessions to bearer strategy files the ll as the session access.
 *
 * */
exports.localToBearerStrategyMiddleWare = function (req, res, next) {
    if (!req.headers["authorization"]) {
        if (req.param("token")) req.headers.authorization = "Bearer " + req.param("token");
        else if (req.cookies[_config.statelessCookieName]) req.headers.authorization = "Bearer " + req.cookies[_config.statelessCookieName];
    }

    //Create user session
    res.loginUser = function (id, name, roles) {
        var expiry = new Date(Date.now() + _config.sessionTimeMills);
        var tokenData = {
            i: id,
            n: name,
            r: Role.toShortNotation(roles),
            s: "all",
            e: expiry.getTime()
        };
        res.cookie(_config.statelessCookieName, createToken(tokenData), { path: '/', expires: expiry, httpOnly: true });
    };

    //Clear user session
    res.logoutUser = function () {
        res.clearCookie(_config.statelessCookieName, { path: '/' });
    };

    //Check session
    req.checkLoggedIn = function () {
        var token = req.headers["authorization"];
        if (token) {
            token = token.replace(/^ *bearer +/i, "");
            var user = null;
            exports.verifyBearerToken(token, function (err, data) {
                if (data) {
                    user = data;
                }
            });
            return user;
        } else return null;
    };

    //If user is constantly using the system, he/she should not log out.
    if (req.cookies[_config.statelessCookieName]) {
        exports.verifyBearerToken(req.cookies[_config.statelessCookieName], function (err, data) {
            if (data) {
                //refreshes the token to new expiry time.
                res.loginUser(data._id, data.name, data.roles);
            }
        });
    }

    res.locals.__defineGetter__("user", function () {
        return req.user || null;
    });

    res.locals.param = function (param) {
        return req.param(param) || "";
    };

    next();
};

/**
 * Generate the token from data
 *
 * @param {Object} data the data token has to carry
 *
 * @return {String} The access token
 * */
function createToken(data) {
    var json = JSON.stringify(data);
    try {
        var cipher = crypto.createCipher(_config.oauth.bearer.generatorAlgorithm, _config.oauth.bearer.generatorSecret);
        return cipher.update(json, 'binary', 'hex') + cipher.final('hex');
    } catch (c) {
        log.error(c);
        return null;
    }
}