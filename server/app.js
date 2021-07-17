const express = require('express');
const app = express();
const port = 3000;
const data = require('./favs.json');
const fs = require('fs');

app.use(express.json());
app.use(express.static('public'));

app.post('/api/v1/favorites', (req, res) => {
  if (!req.body.data) {
    return res.json({ success: false });
  }
  const updatedData = data;
  updatedData.favorites.push(req.body.data);
  fs.writeFile('./server/favs.json', JSON.stringify(updatedData), err => {
    if (err) throw err;
    console.log('Received a post fetch request for a new favorite');
    res.json({ success: true });
  });
});

app.get('/api/v1/favorites', (req, res) => {
  console.log('Received a get fetch request for the list of favorites');
  res.json({ data: data.favorites });
});

app.get('/', (req, res) => {
  console.log('Received a get request for the main page');
  res.send('index.html');
});

app.listen(process.env.PORT || port, () => {
  console.log(`App listening at ${port}`);
});
