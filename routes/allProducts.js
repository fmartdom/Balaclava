var express = require('express');
var router = express.Router();

/* GET products lists */
router.get('/', function(req, res, next) {
  res.render('allProducts');
});

module.exports = router;