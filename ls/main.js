
var mod = require('./mod');

mod(process.argv[2], process.argv[3], function(err, fnames){
    fnames.forEach(function(name){
        console.log(name);
    });
});