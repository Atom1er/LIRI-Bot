var axios = require('axios');
var colors = require('colors');

var apiKey = "1cf649ce";
var link = "http://www.omdbapi.com/?t=";


module.exports = function theMovieDB(movie){
    var qUrl = link + movie +"&apikey=" + apiKey;
    axios({
        method:'get',
        url: qUrl,
      })
        .then(function(response) {
            console.log('|~~~~~ '+'Successfully processed'.bgGreen.black+' ~~~~|');

            console.log('| Title: '.red.underline +response.data.Title.bgWhite.black);
            console.log('| Release Date: '.red.underline +response.data.Released);
            console.log('| Ratings IMDb: '.red.underline +response.data.imdbRating.yellow);
            console.log('| Ratings Rotten Tomatoes: '.red.underline +response.data.Ratings[1].Value.yellow);
            console.log('| Country : '.red.underline +response.data.Country.blue);
            console.log('| Language : '.red.underline +response.data.Language.blue);
            console.log('| Plot : '.red.underline +response.data.Plot);
            console.log('| Actors : '.red.underline +response.data.Actors.green);

            console.log("|~~~~~~~~~~~~ "+"Done".bgGreen.black+" ~~~~~~~~~~~~~~~|");
            console.log('|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|');
      })
      .catch(function(err) {
        console.log('|'+'~~~~~ Somthing Went Wrong :( ~~~~'.bgRed.black+'|');
        console.error('Error occurred: ' + err);
    });
}