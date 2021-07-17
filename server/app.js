const express = require('express');
const app = express();
const port = 3000;
const data = require('../favs.json');

app.use(express.json()); // for parsing application/json

app.post('/api/v1/favorites', (req, res) => {
  // get the post request body
  // add validation
  // add it to the favs file
  if (!req.body.data) {
    return res.json({ success: false });
  }
  return res.json({ success: true });
});

app.get('/api/v1/favorites', (req, res) => {
  res.json({ data: data.favorites });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
