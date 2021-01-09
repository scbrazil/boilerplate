const mysql = require("mysql");
const mysqlPassword = require("./config.example")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: mysqlPassword,
  database: "cows_db"
});

db.connect();
