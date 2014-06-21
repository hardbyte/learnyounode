var fs = require("fs");
var extname = require('path').extname;

module.exports = function(dir, ftype, cb){
    var res = [];

    fs.readdir(dir, function(err, list){

        if(err)
            return cb(err);

        list.forEach(function(fname){
            if(extname(fname).slice(1) == ftype){
                res.push(fname);
            }
        });
        cb(null, res);
    });

};