var http = require('http');
var fs = require('fs');

var fname = process.argv[3];

function respond(req, res){
    fs.createReadStream(fname).pipe(res)

}

var server = http.createServer(respond);

server.listen(process.argv[2]);