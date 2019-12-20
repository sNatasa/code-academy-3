var mysql = require('mysql');
require('dotenv/config');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "5467/Npm",
  database: "code_academy_a2"
});
   
connection.connect((error) => {
  if (error) {
    console.log('Problem with DB connection : ' + error.message);
  } else {
    console.log('DB connected!');
  }
});

module.exports = connection;