const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('server listening');
});

app.get('/', (request, response) => {
  response.send('Welcome to Twitter!');
});

