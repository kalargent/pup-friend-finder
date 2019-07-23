// REQUIRE PATH 
var path = require("path"); 
var friends = require("../data/friends.js")

// ADD A GET FOR THE HOME PAGE 

module.exports = function (app) { 

    // NEED A WAY TO GET THE OBJECTS FROM FRIENDS.JS
    app.get("/api/friends", function (req,res) { 
        // console.log("hello"); 
        res.json(friends); 
        // console.log (friends); 
    })

    // POST FUNCTION TO GET THE RESULTS OF THE DOGGO RESPONSES 
    app.post("/api/friends", function (req, res) {
        var newDoggo = req.body; 
        console.log(newDoggo);

        // New variable that takes the scores value from newDoggo
        var doggoScores = newDoggo.scores; 
        
        // New varable that stores matching doggos 
        var doggoMatch = {
            name: "", 
            photo: "", 
            difference: 1000
        }

        // For loop that loops through both the doggos scores and the ones in the json
        for (var i = 0; i < friends.length; i++) {
            var currentDoggo = friends[i]; 
            var totalDiff = 0; 
            console.log (currentDoggo.name); 
            // console.log(currentDoggo.scores); 
            // console.log (doggoScores); 

            for (var h = 0; h < currentDoggo.scores.length; h++) {
                totalDiff += Math.abs(parseInt(currentDoggo.scores[h]) - parseInt(doggoScores[h])); 
                // console.log("current dog" + currentDoggo.scores[h]); 
                // console.log("doggo" + doggoScores[h]); 
            }
            console.log (totalDiff); 
            console.log(doggoMatch.difference); 
            if (totalDiff <= doggoMatch.difference) { 
                doggoMatch.name = friends[i].name; 
                doggoMatch.photo = friends[i].photo; 
                doggoMatch.difference = totalDiff; 
            }
            console.log(doggoMatch.difference); 
            console.log ("--------------------------"); 
        }
       

        console.log(doggoMatch);
        console.log ("---------------");
        friends.push(newDoggo); 
        // console.log(friends);  

        res.json(doggoMatch); 

    
    })


}