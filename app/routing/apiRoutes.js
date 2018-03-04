// get route to /api/friends
// post route to /api/friendse
var friends =  require("../data/friends");

function friendsRoutes(app) {
    app.get("/api/friends", (req, res) => res.json(friends));
    app.post("/api/friends", function(req, res) {
        var user = req.body;
        friends.push(user);
        console.log(res.ServerResponse);
    })
    // do math in post route 
}


module.exports = friendsRoutes;