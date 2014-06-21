/**

You will be given text on process.stdin. Buffer the text and reverse it using
the `concat-stream` module before writing it to stdout.

 */

var concat = require('concat-stream');

function reverse(s){
    return s.split("").reverse().join("");
}

process.stdin
    .pipe(concat(function(body){
        // have the whole body here...
        var response = reverse(body.toString());

        //
        console.log(response);
    }));
