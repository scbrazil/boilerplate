const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/');

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')))
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from the server.');
})

// app.get('/api/dogs', (req, res) => {
//   db.getAllDogs()
//   .then(dogs => { res.status(200).json(dogs) })
//   .catch(err => { res.sendStatus(500) })
// })

app.get('/api/dogs', (req, res) => {
  db.getAllDogs((err, dogs) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(dogs);
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});

