var through = require('through');
var split = require('split');

var lineNum = 1;

var tr = through(function (buffer){
    var line = buffer.toString();
    var res;
    if(lineNum % 2 === 0){
        res = line.toUpperCase();
    } else {
        res = line.toLowerCase();
    }

    lineNum += 1;
    this.queue(res + "\n");
    //return res;
  });

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);