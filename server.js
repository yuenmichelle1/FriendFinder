var express = require("express");
var bodyParser = require("body-parser");
var path= require("path");
var friends = require("./app/data/friends");
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.get("/", __dirname, function(req, res){

// })

var apiRoutes = require("./app/routing/apiRoutes")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


