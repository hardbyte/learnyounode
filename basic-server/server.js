var http = require("http");
var url = require("url");


function start(route) {
    var onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received");

        route(pathname);

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello");
        response.end();
    };
    http.createServer(onRequest).listen(8888);

    console.log("Server started");
}

exports.start = start;