const mysql = require("mysql");
const mysqlPassword = require("./config")
const Promise = require('bluebird');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: mysqlPassword,
  database: "dogs"
});

connection.connect(err => {
  if (err) {
    console.error('Cannot connect to mySQL database: ', err);
  } else {
    console.log('Successfully connected to mySQL database.')
  }
});

// const dogQuerier = Promise.promisifyAll(connection);

// const getAllDogs = () => {
//   return dogQuerier.queryAsync('SELECT * FROM breeds')
//   .then(dogs => { return herd; })
//   .catch(err => { return err; })
// }

const getAllDogs = function(callback) {
  connection.query('SELECT * FROM breeds', (err, dogs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, dogs);
    }
  })
}

module.exports = {
  // dogQuerier,
  getAllDogs
}
