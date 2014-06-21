var http = require('http');
var map = require('through2-map');


function respond(req, res){
    if(req.method != 'POST'){
        return res.end('POST me your data');
    }

    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(res);
}

var server = http.createServer(respond);

server.listen(process.argv[2]);