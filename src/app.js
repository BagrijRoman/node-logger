const express = require('express');
const app = express();
const PORT = 3005;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send('Hello from home endpoint!');
});

app.get('/user', (req, res) => {
  res.send('Hello from user endpoint!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
