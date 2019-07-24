// REQUIRED 
var path = require("path"); 

// ADD A GET FOR THE HOME PAGE AND FOR THE SURVEY PAGE  

module.exports = function (app) { 
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"))
    })

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"))
    })
}
