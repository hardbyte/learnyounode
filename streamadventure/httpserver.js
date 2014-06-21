var http = require('http');
var through = require('through');

var toUpper = through(function (buf){
    this.queue(buf.toString().toUpperCase());}
);

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(toUpper).pipe(res);
    } else {
        res.end('SEND POST DATA');
    }
});

server.listen(process.argv[2]);