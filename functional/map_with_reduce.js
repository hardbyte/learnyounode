

module.exports = function arrayMap(arr, fn) {
    return arr.reduce(function(acc, value){
        acc.push(fn(value));
        return acc;
    }, []);

};