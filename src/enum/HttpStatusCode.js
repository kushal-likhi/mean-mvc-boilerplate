/**
 * This file contains all the status codes that the APi returns.
 * */
"use strict";

module.exports = {

    //In case of error in the system.
    SERVER_ERROR: 500,

    //Success OK when only read operations are performed
    SUCCESS_READ_OPERATION_PERFORMED: 200,

    //Success OK when any creation or write operation is performed
    SUCCESS_WRITE_OPERATION_PERFORMED: 201,

    //Validation errors
    VALIDATION_ERROR: 400,

    //Authorization failed
    UNAUTHORIZED: 401,

    //Authorization failed
    FORBIDDEN: 403,

    //When the requested data to be processed on is not found. Happens when bad reference is provided, ex: invalid ID
    ERROR_UN_PROCESSABLE_ENTITY: 422
};