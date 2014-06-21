// Ex 7

var http = require('http');

function wget(url, cb){

    http.get(url, function(stream){
        // stream is a Node Stream object
        stream.setEncoding("utf8");

        var res = [];
        stream.on('data', function(s){
            res.push(s);
        });

        stream.on('end', function(s){
            // Deal with results
            cb(res.join(''));

        });

    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
}


// Main
var results = [];
var countResults = 0;
function onDone(){
    // We MIGHT be done here
    if(countResults > 2){
        results.forEach(function(res){
            console.log(res);
        });
    }
}

wget(process.argv[2], function(data){
    results[0] = data;
    countResults += 1;
    onDone();
});
wget(process.argv[3], function(data){
    results[1] = data;
    countResults += 1;
    onDone();
});
wget(process.argv[4], function(data){
    results[2] = data;
    countResults += 1;
    onDone();
});

