var fs = require("fs");
var extname = require('path').extname;


var print = require("console").log;

function main(args){
    var dir = args[0];
    var filter = false;
    var ftype;

    if(args.length > 1){
        ftype = args[1];
        filter = true;
    }

    fs.readdir(dir, function(err, list){
        list.forEach(function(fname){
            if(!filter || extname(fname).slice(1) == ftype){
                print(fname);
            }
        });
    });
}

main(process.argv.slice(2));