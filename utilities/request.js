module.exports = function(options, cb) {
    var http = require("https");
    var req = http.request(options, function(res) {
        var chunks = [];
        res.on("data", function(chunk) {
            chunks.push(chunk);
        });
        res.on("end", function() {
            var body = Buffer.concat(chunks);
            cb.call(this, body);
        });
    });
    req.end();
};