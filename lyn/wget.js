// Ex 7

var http = require('http');

http.get(process.argv[2], function(stream){
    // stream is a Node Stream object
    stream.setEncoding("utf8");

    stream.on('data', function(s){
        console.log(s);
    });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
});