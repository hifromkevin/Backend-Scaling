const express = require('express');
const app = express();
const mysql = require('mysql');
const path = require('path');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static('./client/dist/'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'they_got'
});

connection.connect(function(err) {
  if (err) {
    console.log('BAD MYSQL DATABASE: ', err);
  }
    console.log('Connected to the MySQL database!!');
});

app.get('/api.restaurants/:id/overview', function(req, res) {
  var id = req.params.id;

  var idQuery = `SELECT * FROM overview WHERE id = '${id}'`;
  connection.query(idQuery, function(err, row, fields) {
    if (err) throw err;
    res.status(201).send(rows[0]);
  });
});

app.get("/:id", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/dist/index.html"));
});

app.listen(3002, () => {
  console.log('Listening on port 3002');
});

