// REQUIRE PATH 
var path = require("path"); 

// ADD A GET FOR THE HOME PAGE 

module.exports = function (app) { 
    app.get("/", function (req, res) {
        res.sendfile(path.join(__dirname + "/../public/home.html"))
    })

    app.get("/survey", function (req, res) {
        res.sendfile(path.join(__dirname + "/../public/survey.html"))
    })
}





// ADD A GET FOR THE SURVEY PAGE 