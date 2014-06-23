/**
 * Create a basic Spy object
 */

function Spy(object, method){
    var original = object[method];
    var stats = {count: 0};
    object[method] = function(){
        stats.count += 1;
        return original.apply(object, arguments);
    };
    return stats;
}


function test(){
    var spy = Spy(console, 'error');

    console.error('calling console.error');
    console.error('calling console.error');
    console.error('calling console.error');
    console.info('calling console.info');

    console.log(spy.count); // 3
}

//test();

module.exports = Spy;