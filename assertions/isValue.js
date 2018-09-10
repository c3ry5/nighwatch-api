exports.assertion = function(val, exp, msg) {

    this.message  = msg || 'value is ' + exp;
    this.expected = exp;

    this.pass = function(value) {
        return val === this.expected;
    };

    this.value = function(result) {
        return result.value;
    };

    this.command = function(callback){
        this.api.execute(function(val){
            return val;
        }, [val], callback);
    };

};