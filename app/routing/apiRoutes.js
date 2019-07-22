// REQUIRE PATH 
var path = require("path"); 

// ADD A GET FOR THE HOME PAGE 

module.exports = function (app) { 
    app.post("/api/friends", function (req, res) {
        var doggo = req.body; 
        // console.log(doggo); 
        console.log ("hi"); 
    })
}