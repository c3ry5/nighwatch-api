"use strict";
module.exports = {
    "Decryption service returns decrypted string which was passed in encrypted!": function(browser) {
        var api = require('api.js');
        var data = {
            "options": {
                "method": "GET",
                "hostname": "forms-public-dev3.stcdev.com",
                "path": "/application/decrypt",
                "headers": {
                    "value": "cFK4UhfsW3nw5qj5QKxbjIUc9uCOy2J5GplDC7f4d/u6A7I4mMGHBz11j58=",
                    "team-token": "M6/uYg3CDtgcPWAK/3Ukc2NDgUdzV604kFdjsvuN4QXtKoZsDVUK/xcmAGaolwWneIUh6peqcEbOWtc4xQ==",
                    "team-member-token": "kXayXUpnbuK0Mpg2/XPv4UkrkSlKj4GfPkHhnoDYC9gYvnvpNDKB/knzFppIKroR4E/2yaEPZsae1bKXyJ3fnt+3Cm3cKQ=="
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