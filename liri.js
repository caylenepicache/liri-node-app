require("dotenv").config();
var fs = require("fs");
var request = require('request');

var Spotify = require('node-spotify-api');
var Twitter = require('twitter');

var keys = ('./keys.js');
var spotifyKey = new Spotify(keys.spotify);
var clientTwitter = new Twitter(keys.twitter);


console.log(process.argv[1]);
var userInput = process.argv.slice(3).join('+');
console.log(userInput);



/*
if (userInput === "spotify-this-song") {
  if (!process.argv[3]) {
    doSpotify();
  }
}

function doSpotify() {

  spotify.search({ type: 'track', query: 'The Sign', limit: 10 }, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      console.log("=============================================");
      //artist name
      console.log("The artist name is: " + data.tracks.items[5].artists[0].name)
      //song name
      console.log("The song name is: " + data.tracks.items[5].name)
      //preview link
      console.log("The preview link is: " + data.tracks.items[5].artists[0].href)
      //album name
      console.log("The album name is: " + data.tracks.items[5].album.name)
      console.log("=============================================");
    });
  
}; 
*/