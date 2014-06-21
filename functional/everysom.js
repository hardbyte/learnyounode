function checkUsersValid(goodUsers){
    var goodIds = goodUsers.map(function(u){return u.id;});

    return function(submittedUsers){
        return submittedUsers.every(function(subUser){
            return  goodIds.some(function(x){return x === subUser.id});
        })
    }

}

module.exports = checkUsersValid;