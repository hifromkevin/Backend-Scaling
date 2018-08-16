const mysql = require('mysql');
//const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'they_got'
});

connection.connect(function(err) {
  if (err) {
    console.log('Database connection is bad', err);
  }
    console.log('Connected to the database!!');
});

module.exports = connection;
