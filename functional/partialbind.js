
var slice = Array.prototype.slice;

function logger(namespace) {
    return console.log.bind(null, namespace);
}

module.exports = logger;