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
    connection.query("INSERT INTO users (username, password) values (" + "'" + username + "'" + ", " + "'" + password +  "'" + ")", function(err, output) {
        if (err)
            res.send(JSON.stringify({status: "bad"}));
            throw err;
        res.send(JSON.stringify({status: "good", username:username}));       
  })
});

module.exports = router;
