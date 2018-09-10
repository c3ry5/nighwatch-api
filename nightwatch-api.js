var api = {
    setProtocol: function(protocol) {
        if (protocol === 'https') {
            return require("https");
        } else {
            return require("http");
        }
    },
    request: function(assert, protocol, data, callback, done) {
        var http = this.setProtocol(protocol);
        var req = http.request(data.options, function(res) {
            var chunks = [];
            res.on("data", function(chunk) {
                chunks.push(chunk);
            });
            res.on("end", function() {
                var body = Buffer.concat(chunks);
                callback.call(this, assert, body, done);
            });
        });
        req.end();
    },
    perform: function(browser, protocol, data, callback) {        
        return browser.perform(function(client, done) {
            _this.request(client.assert, protocol, data, callback, done);            
        });
    }
};
module.exports = api;