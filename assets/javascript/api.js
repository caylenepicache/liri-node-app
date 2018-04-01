var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '0BDqDgYISCbuISe2Lwv6KBnOw',
  consumer_secret: 'LD5ZV8z4Hoey4VFViEpSu5zLRmaDxizS0dfHZYeqs9x49YYadb',
  access_token_key: '980150747374350336-muAQobx5Dk3tYPkTsSDpYhPlVhOzFbA',
  access_token_secret: 'T4H8Pxky6UpqMarGqKBTuO9a0TFyQZhgaa3JzJTwl9zzS'
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