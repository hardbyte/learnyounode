// Ex 2
var args = process.argv;

var nums = args.slice(2).map(function(x){return parseInt(x);});
var sum = nums.reduce(function(a, b){return a + b;}, 0);


console.log(sum);