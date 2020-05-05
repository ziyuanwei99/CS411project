var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'developer',
  password: 'cs411',
  database: 'concert_db'
})

connection.connect()




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
connection.end();