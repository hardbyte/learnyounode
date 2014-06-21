
function parseTime(query){
    var d = new Date(query.iso);

    return {
        "hour": d.getHours(),
        "minute": d.getMinutes(),
        "second": d.getSeconds()
    };
}

function unixTime(query){
    var d = new Date(query.iso);
    console.log(d);
    console.log(d.getTime());
    return {
        'unixtime': d.getTime()
    };
}

function respond404(query){
    return "Nope";
}

function route(pathname) {

    if (pathname === '/api/parsetime'){
        return parseTime;
    }

    if (pathname === '/api/unixtime'){
        return unixTime;
    }

    return respond404;

}

exports.route = route;
