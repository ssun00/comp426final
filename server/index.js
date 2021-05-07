const path = require('path');
const express = require("express");

const mysql = require("mysql");
const dbConfig = require("../db.config");

const PORT = process.env.PORT || 3001;

const app = express();


var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

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

app.post('/addUser/:email', (req, res) => {
  res.json({message: req.params});
})

module.exports = connection;
