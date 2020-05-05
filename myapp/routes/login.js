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
  var username=req.body.username
  var password=req.body.password
  //mysql query
  connection.query("select password from users where username = '" + username + "'", function(err, output) {
    if (err)
      throw err;
    else
      console.log(output)
      if (output[0].password == password)
        res.send(JSON.stringify({status: "good", username:username}));
      else 
        res.send(JSON.stringify({status: "bad"}));
  })
});
module.exports = router;
