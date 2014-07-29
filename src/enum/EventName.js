/**
 * This defines the Service event types.
 * */
"use strict";

module.exports = {

    //When some error occurs
    ERROR: "ERROR",

    //When the job is done
    DONE: "DONE",

    //When the job is already done
    NO_CHANGE: "NO_CHANGE",

    //When the entity us not processable. the data with ID is not found.
    NOT_FOUND: "NOT_FOUND",

    //When the user does not have rights on that data
    UNAUTHORIZED: "UNAUTHORIZED"
};