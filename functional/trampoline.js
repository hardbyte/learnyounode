function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return;

  return function(){
      operation();
      return repeat(operation, --num)
  };
}

function trampoline(fn) {

    // fn should return either a "thunk" a function that should be called
    // to get the actual answer OR a final result

    while( fn instanceof Function) {
        fn = fn();
    }

    return fn;
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(function(){return repeat(operation, num)});
};


function test(){

    function factorial (n) {
      var go = trampoline( function myself (acc, n) {
        return n
        ? function () { return myself(acc * n, n - 1); }
        : acc
      });

      return go(1, n);
    }

    console.log("Factorial:");
    console.log(factorial(3));
    //console.log(factorial(33456));

}

//test();