require('node-spotify-api');
var spotify =require('./spotify.js');
var tmdb =require('./tmdb.js');
require('colors');
var doWhatItSays = require('./doWhatItSays.js');
var inquirer = require("inquirer"); 
var colors = require('colors');
var fs = require('fs');

var log = process.argv.slice(2).join(" ");

fs.appendFile('./log.txt', 'node liri '+log+'\r\n', function (err) {
  if (err){
    console.log('|'+'~~~~~ Somthing Went Wrong :( ~~~~'.bgRed.black+'|');
    console.error('Error occurred: ' + err);
  }
});

var command =  process.argv[2];
module.exports = command;
var searchKey = process.argv.splice(3);

if(command =="spotify-this-song"){
  spotify(searchKey);
}else if(command == "movie-this"){
  tmdb(searchKey);
}else if(command =="do-what-it-says"){
  doWhatItSays();
}else if(command =="help" || command == "-h"){
  console.log("You can type something like: \r\n".bgWhite.black+"- spotify-this-song <your artist name>\r\n".green+"- movie-this <your movie>".green);
}



