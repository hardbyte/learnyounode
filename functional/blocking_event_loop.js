

function repeat(operation, num) {
      // release control every iteration
      if (num <= 0) return;
      setTimeout(function(){
          operation();
          repeat(operation, num-1);
      }, 0);
}

module.exports = repeat;
