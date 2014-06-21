var http = require("http");
var url = require("url");


function start(route) {
    var onRequest = function (request, response) {
        var path = url.parse(request.url, true);
        var pathname = path.pathname;
        //console.log("Request for " + pathname + " received");

        var responseF = route(pathname);

        var obj = responseF(path.query);

        response.writeHead(200,
            {"Content-Type": "application/json"});

        response.write(JSON.stringify(obj));
        response.end();
    };
    http.createServer(onRequest).listen(process.argv[2]);

}
exports.start = start;