var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
      title: 'ユーザー画面'
    });
});

module.exports = router;