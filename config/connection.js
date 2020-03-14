// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "br6pxrjtzivqpbqj",
  password: "hn4c49sjyq6tyxzj",
  database: "hfa0ofhxmzki8387"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
