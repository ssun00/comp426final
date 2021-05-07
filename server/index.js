const path = require('path');
const express = require("express");

const mysql = require("mysql");
const dbConfig = require("../db.config");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.post('/addUser', (req, res) => {
  console.log("halp");
  const username = req.body.username;
  const password = req.body.password;
  const gradYear = req.body.gradYear;

  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body.gradYear);
  const query = `
    INSERT INTO users (email, password, gradYear)
    VALUES (
  ` + mysql.escape(username) + `, ` + mysql.escape(password) + `, ` + mysql.escape(gradYear) + `)`;

  connection.query(query, (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    console.log(results);
  });
});
