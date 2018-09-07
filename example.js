"use strict";
module.exports = {
    "Decryption service returns decrypted string which was passed in encrypted!": function(browser) {
        var api = require('api.js');
        var data = {
            "options": {
                "method": "GET",
                "hostname": "localhost:8000",
                "path": "/sample",
                "headers": {
                    "foo": "bar"
                }
            }
        };
        api.perform(browser, 'https', data, function(assert, body, done) {
            if (body.toString() !== "02-83-14") {
                assert.isValidResponse(false, "Is Value 02-83-14");
            } else {
                assert.isValidResponse(true, "Is Value ");
            }
            done();
        }).end();
    }
};
