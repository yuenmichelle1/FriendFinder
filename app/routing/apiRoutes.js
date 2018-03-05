var friends = require("../data/friends");

function friendsRoutes(app) {
  app.get("/api/friends", (req, res) => res.json(friends));
  app.post("/api/friends", function(req, res) {
    var user = req.body;
    var sortedFriends = JSON.parse(JSON.stringify(friends));
    sortedFriends.forEach(friend => {
      var differenceArr = friend.scores.map((score, i) => {
        var dbFriendScore = parseInt(score);
        var userScore = parseInt(user.score[i]);
        return Math.abs(dbFriendScore - userScore);
      });
    //   adding the differences after getting the Absolute Val of friend score and suer score
      var totalDiff = differenceArr.reduce((a, b) => a + b);
    //   creating a new key-value pair for sortedFriendsArr 
      friend.totalDiff = totalDiff;
    });
    // actually sorting friends to find the best match in ascending order then grabbing the first match as the BFF
    var bestFriend = sortedFriends.sort((a,b) => a.totalDiff - b.totalDiff)[0];
    friends.push(user);
    console.log(bestFriend);
    res.json(bestFriend);
  });
}



module.exports = friendsRoutes;
