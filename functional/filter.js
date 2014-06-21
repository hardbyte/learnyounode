
function getShortMessages(messages){
    return messages.map(function(m){return m.message;}).filter(function(s){
        return s.length < 50;
    });
}

module.exports = getShortMessages;