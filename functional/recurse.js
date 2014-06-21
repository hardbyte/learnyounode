/*
Implement reduce AKA fold.

The tutorial suggests arguments should include index and the
original array but that is just silly talk.
 */

function fold(arr, fn, init){
    if(arr.length == 0){
        return init;
    }
    return fold(arr.slice(1), fn, fn(init, arr[0]) );
}

module.exports = fold;