exports.assertion = function(booleanValue, msg) {

    this.message  = msg || 'testing true or false';
    this.expected = true;

    this.pass = function(value) {
        return value === this.expected;
    };

    this.value = function(result) {
        return result.value;
    };

    this.command = function(callback){
        this.api.execute(function(booleanValue){
            return booleanValue;
        }, [booleanValue], callback);
    };

};