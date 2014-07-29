/*
 * Execution point for the command
 *
 * Remove all the File Source
 * */
exports.execute = function (data, callback) {
    new FileSource({
        "_id": "52ce9607f7d43b4f16000004",
        "name": "testVideo2",
        "description": "this is test Video3",
        "videoFileId": "VideoFiles/testVideo1"
    }).save(callback);
};