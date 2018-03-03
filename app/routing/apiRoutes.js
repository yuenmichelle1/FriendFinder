// get route to /api/friends
// post route to /api/friendse
var friends =  require("../data/friends");

function friendsRoutes(app) {
    app.get("/api/friends", (req, res) => res.json(friends));
    app.post("/api/friends", (req, res) => friends.push(req.body));
    // do math in post route 
}


module.exports = friendsRoutes;