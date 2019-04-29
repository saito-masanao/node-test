var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection');

router.get('/', function(req, res, next) {
  res.render('register', {
    title: '新規会員登録'
  });
});

router.post('/', function(req, res, next) {
  var userName = req.body.user_name;
  var email = req.body.email;
  var password = req.body.password;
  var emailExistsQuery = 'SELECT * FROM users WHERE email = "' + email + '" LIMIT 1';
  var registerQuery = 'INSERT INTO users (user_name, email, password) VALUES ("' + userName + '", ' + '"' + email + '", ' + '"' + password + '")';
  connection.query(emailExistsQuery, function(err, email) {
      connection.query(registerQuery, function(err, rows) {
        res.redirect('/login');
      });
  });
});

module.exports = router;