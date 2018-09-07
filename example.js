"use strict";
module.exports = {
    "Example API request": function(browser) {
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
            if (body.toString() !== "test") {
                assert.isValidResponse(false, "Is Value test");
            } else {
                assert.isValidResponse(true, "Is Value test");
            }
            done();
        }).end();
    }
};
