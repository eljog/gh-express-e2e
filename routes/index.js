var express = require('express');
var router = express.Router();
var products = require("../data/products.json");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { products: products });
});
router.get('/test', function (req, res, next) {
  res.render('index', { products: products });
});

module.exports = router;
