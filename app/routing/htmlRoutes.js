// get route to /survey survey.html
//  default route to home.html
function htmlRoutes(app, path){
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}

module.exports = htmlRoutes;