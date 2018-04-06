require("dotenv").config();
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var fs = require("fs");
var myKey = ('./keys.js');

console.log(process.argv[1]);
var userInput = process.argv[2];
console.log(userInput);

