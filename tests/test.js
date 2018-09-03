"use strict";
module.exports = {
    "Simple Test": function(browser) {
        browser.perform(function(client, done) {
            var assert = client.assert;
            var data = require("../data/test/correct.json");
            var options = data.options;
            var request = require("../utilities/request.js")(options, function(body) {
                if (body.toString() !== data.testvalue) {
                    assert.isValidResponse(false, "Is Value " + data.testvalue);
                } else {
                    assert.isValidResponse(true, "Is Value " + data.testvalue);
                }
                done();
            })
        }).end();
    }
};