const connection = require("./connection.js");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM" + table + ";";
    connection.query(queryString, [table], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [table, cols, vals], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, col, val, cb) {
    var queryString = "UPDATE ?? SET ?? = '?'";
    connection.query(queryString, [table, col, val, cb], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
