const friends = require("../data/friends");

module.exports.getter = function(app) {
    app.get("/api/friends", function(req, res) {
        let arr = friends.friendsArr;

        res.json(friends.friendsArr);
    });    
}

module.exports.poster = function(app) {
    app.post("/api/friends", function(req, res) {
        //MAGIC WILL SOON GO HERE :D
        let friend = req.body;
        console.log(friend);
        friends.addFriend(friend);
        res.json(friends.friendsArr);
    });    
}
