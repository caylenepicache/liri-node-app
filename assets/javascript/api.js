var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'DO6kV2E2S0KxpaIh1UDCG7PXg',
  consumer_secret: 'yhFiDLc5ewcFRvi9rsX9KfXqvg3jl3Sw0yTJe2DTDLF5w7yeMy',
  access_token_key: '980150747374350336-h12edwD22GxUSW9s5cIk5YqcJDzgktX',
  access_token_secret: 'rDEPqjI7sdr7r1d5KOUuDJLmT6wdsFol4aWpuf4zG0hOy'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "62446ee503504409834bf46fb95f4363",
  secret: "076b759b13f3465ea9535477feadc1e9"
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });