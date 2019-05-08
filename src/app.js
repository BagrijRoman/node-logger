const express = require('express');
const { httpLogger } = require('./middlewares');
const { logger } = require('./utils');

const PORT = 3005;
const app = express();

app.use(httpLogger);

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
  logger.info(`Server listening on port ${PORT}`);
});
