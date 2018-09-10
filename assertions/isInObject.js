exports.assertion = function(key, val, obj, msg) {

    this.message  = msg || val + ' is in object';
    this.expected = val;

    this.pass = function(value) {
        return obj[key] === this.expected;
    };

    this.value = function(result) {
        return result.value;
    };

    this.command = function(callback){
        this.api.execute(function(booleanValue){
            return val;
        }, [booleanValue], callback);
    };

};