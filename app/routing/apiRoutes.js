// get route to /api/friends
// post route to /api/friendse
var friends =  require("../data/friends");

// console.log(friends);
var bunny;

function friendsRoutes(app) {
    app.get("/api/friends", (req, res) => res.json(friends));
}


module.exports = friendsRoutes;