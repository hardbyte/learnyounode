var net = require('net');
var strftime = require('strftime');

function respond(socket){
    // "2013-07-06 07:42"
    var dstr = strftime("%F %k:%M");
    socket.write(dstr);
    socket.end();
}

var server = net.createServer(respond);

server.listen(process.argv[2]);