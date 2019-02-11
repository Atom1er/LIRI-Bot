require("dotenv").config();
var  SpotifyWebApi = require('node-spotify-api');
var keys = require("./keys.js");

module.exports = function spotifyFunction(song){
var spotify = new SpotifyWebApi(keys.spotify);

    spotify
        .search({ type:'track', query:song})
        .then(function(response) {
            console.log('|'+'~~~~~ Successfully processed ~~~~'.bgGreen.black+'|');

                console.log("|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|");
                console.log('| Artist Name: '.underline.red +response.tracks.items[0].artists[0].name);
                console.log('| Track: '.underline.red +response.tracks.items[0].name);
                console.log('| Album: '.underline.red +response.tracks.items[0].album.name);
                console.log('| Preview: '.underline.red +response.tracks.items[0].preview_url);
                console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');

            console.log("|"+"~~~~~~~~~~~~ Done ~~~~~~~~~~~~~~~".bgGreen.black+"|");
            console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
        })
        .catch(function(err) {
            console.log('|'+'~~~~~ Somthing Went Wrong :( ~~~~'.bgRed.black+'|');
            console.error('Error occurred: ' + err);
        });
}
