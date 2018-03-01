var express = require("express");
var bodyParser = require("body-parser");
var path= require("path");
var friends = require("./app/data/friends");
var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("./app/public"));

var apiRoutes = require("./app/routing/apiRoutes")(app);
var htmlRoutes= require("./app/routing/htmlRoutes")(app, path);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


