"use strict";

var formidable = require('formidable');

var hasBody = function (req) {
    var encoding = 'transfer-encoding' in req.headers;
    var length = 'content-length' in req.headers && req.headers['content-length'] !== '0';
    return encoding || length;
};

var mime = function (req) {
    var str = req.headers['content-type'] || '';
    return str.split(';')[0];
};

exports = module.exports = function (options) {
    options = options || {};
    return function (req, res, next) {
        if (req._body) return next();
        req.body = req.body || {};
        req.files = req.files || {};
        if (!hasBody(req)) return next();
        if ('GET' == req.method || 'HEAD' == req.method) return next();
        if ('multipart/form-data' != mime(req)) return next();
        req._body = true;
        var form = new formidable.IncomingForm();
        form.uploadDir = options.uploadDir || '/tmp';
        form.keepExtensions = options.keepExtensions || true;
        form.parse(req, function (err, fields, files) {
            if (err) return next(err);
            req.body = fields;
            req.files = files;
            next();
        });

    }
};
