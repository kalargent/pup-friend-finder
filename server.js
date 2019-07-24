// REQUIRED NPM PACKAGES 
var express = require("express");

// SET UP EXPRESS 
// variables
var app = express(); 
var PORT = process.env.PORT || 3000; 

// allow express to take in data 
app.use(express.urlencoded({extended: true})); 

// CONNECTING THE MIDDLEWARE FILES 

app.use(express.static(".app/public")); 
app.use(express.static(__dirname + "app/css")); 

require("./app/routing/htmlRoutes.js")(app); 
require("./app/routing/apiRoutes.js")(app); 
// require("./app/routing/")(app); 

// LISTENER 
app.listen(PORT, function (){ 
    console.log("The app is listening on port " + 3000); 
}); 