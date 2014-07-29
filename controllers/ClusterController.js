"use strict";

//Import Enums
var EventName = require("../src/enum/EventName");
var Role = require("../src/enum/Role");
var HttpStatusCode = require("../src/enum/HttpStatusCode");


/*
 * Listing the workers
 * */
exports.list = function (req, res) {
    //If following params are not provided, then set the default value
    req.setDefaultParams({
        skip: 0,
        limit: -1
    });
    //Validations
    req.assert('skip', 'Skip parameter should be integer.').isInt();
    req.assert('skip', 'Skip should be greater than 0').min(0);
    req.assert('limit', 'Limit parameter should be integer.').isInt();
    req.assert('limit', 'Limit should be greater than 1 or -1 for infinite.').not(/0/).min(-1);
    //Check for Errors
    var errors = req.validationErrors();

    if (Boolean(errors)) {
        res.sendErrorAPIResponse(errors, HttpStatusCode.VALIDATION_ERROR);  //Validation Failed
    } else {
        //Go Ahead With Listing
        var skip = req.param("skip");
        var limit = req.param("limit");
        ClusterService.listWorkers(limit, skip)
            .on(EventName.ERROR, function (err) {
                log.error(err);
                res.sendErrorAPIResponse(err.message, HttpStatusCode.SERVER_ERROR);
            })
            .on(EventName.DONE, function (workerList, total, limit, skip) {
                res.sendSuccessAPIResponse({
                    total: total,
                    limit: limit,
                    skip: skip,
                    data: workerList || []
                }, HttpStatusCode.SUCCESS_READ_OPERATION_PERFORMED);
            });
    }
}.securedAPI(Role.ADMIN, Role.SUPER_ADMIN); //Access granted to admins only