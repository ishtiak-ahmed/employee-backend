var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<h1>Welcome to my first mysql node server</h1>')
});

module.exports = router;
