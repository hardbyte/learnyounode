/*
    Not exactly sure what the lesson was on here...
 */

function duckCount(){
    var isDuck = function(obj){
        return Object.prototype.hasOwnProperty.call(obj, 'quack');
    };
    return Array.prototype.slice.call(arguments).filter(isDuck).length;
}

module.exports = duckCount;