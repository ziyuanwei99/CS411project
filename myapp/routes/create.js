var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'developer',
  password: 'cs411',
  database: 'concert_db'
})

connection.connect();

router.post('/', function(req, res) {
  var username=req.body.username
  var password=req.body.password
  var favSong=req.body.favSong
  var favSinger=req.body.favSinger
  var favAlbum=req.body.favAlbum
  var favConcert=req.body.favConcert
  var favType=req.body.favType
  var recConcert=req.recConcert
  var planConcert=req.planConcert
  //mysql query
  connection.query("INSERT INTO users (username, password, favSong, favSinger, favType, favAlbum, favConcert, recConcert, planConcert) values (" + username + ", " + "'" + password + "'"
  + ", " + "'" + favSong + "'" + ", " + "'" + favSinger + "'" + ", " + "'" + favType + "'" + ", " + favAlbum + ", " + "'" + favConcert + "'" + ", " + "'" + recConcert + "'" + ", " + "'" + planConcert + "'" + ")", function(err, output) {
    if (err)
      throw err;
    else
      if (output == password)
        res.send(JSON.stringify({status: "good", username:username}));
      else 
        res.send(JSON.stringify({status: "bad"}));
  })
});

module.exports = router;
connection.end()