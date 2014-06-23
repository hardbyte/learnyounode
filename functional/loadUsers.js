function loadUsers(userIds, load, done) {
    var users = [];
    var numLoaded = 0;


  userIds.forEach(function(userId, index){
    load(userId, function(user){
        users[index] = user;
        numLoaded += 1;
        if (numLoaded === userIds.length){
          done(users);
        }
    });
  });

}

module.exports = loadUsers;