var connection = require('./mysqlConnection');

module.exports = function(req, res, next) {
  var userId = req.session.id;
  if (userId) {
    var query = 'SELECT id, user_name FROM users WHERE id = ' + userId;
    connection.query(query, function(err, rows) {
      if (!err) {
        res.locals.user = rows.length? rows[0]: false;
      }
    });
  }
  next();
};