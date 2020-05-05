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
  //mysql query
  connection.query("select pswd from users where name = '" + username + "'", function(err, output) {
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