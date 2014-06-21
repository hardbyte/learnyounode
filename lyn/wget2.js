// Ex 7

var http = require('http');

http.get(process.argv[2], function(stream){
    // stream is a Node Stream object
    stream.setEncoding("utf8");

    var res = [];
    var count = 0;
    stream.on('data', function(s){
        count += s.length;
        res.push(s);
    });

    stream.on('end', function(s){
        // Deal with results
        console.log(count);
        console.log(res.join(''));
    });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});