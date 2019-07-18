// REQUIRED NPM PACKAGES 
var express = require("express");

// SET UP EXPRESS 
// variables
var app = express(); 
var PORT = process.env.PORT || 3000; 

// allow express to take in data 
app.use(express.urlencoded({extended: true})); 

// LISTENER 
app.listen(PORT, function (){ 
    console.log("The app is listening on port " + 3000); 
})