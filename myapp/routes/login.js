var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  var username=req.body.username
  var password=req.body.password
  //mysql query
  res.send(JSON.stringify({status: "good", username: username}))
});

module.exports = router;
