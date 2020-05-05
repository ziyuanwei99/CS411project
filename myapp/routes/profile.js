var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '11111111',
    database: 'concert_db',
    port: 3306
  })

connection.connect();

router.post('/', function(req, res) {
  var username = req.body.username   
  var favSong=req.body.favSong
  var favSinger=req.body.favSinger
  var favType=req.body.favType
  var favAlbum=req.body.favAlbum
  var favConcert=req.body.favConcert
  var recConcert=req.body.recConcert
  var planConcert=req.body.planConcert
  //mysql query
  connection.query("UPDATE users SET favSong= " + "'" + favSong + "'" + "," + "favSinger=" + "'" + favSinger + "'" + ", favType=" + "'" + favType + "'" + ",favAlbum=" + "'" + favAlbum + "'" + ", favConcert=" + "'" + favConcert + "'" + ", recConcert=" + "'" + recConcert +"'" + ", planConcert=" + "'" + planConcert +"'"
  + " where username = username"   , function(err, output) {
    if (err)
      res.send(JSON.stringify({status: "bad"}));
      throw err;
    res.send(JSON.stringify({status: "good", username:username}));       
  })
});

module.exports = router;
