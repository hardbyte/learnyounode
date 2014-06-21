
var fs = require("fs");
var args = process.argv;

fs.readFile(args[2], function(err, data){
    if(!err){
        var numLines = data.toString().split('\n').length - 1;
        console.log(numLines);
    }
});

