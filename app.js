'use strict';

const chalk = require('chalk');
const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('server listening');
});

app.use((request, response, next) => {
  var requestParams = Object.keys(request.params).length === 0 ? "" : request.params;
  var requestQuery = Object.keys(request.query).length === 0 ? "" : request.query;
  console.log(chalk.magenta(request.method), chalk.yellow(request.path), requestQuery, chalk.cyan(requestParams),response.statusCode);
  // Why doesn't chalk work with objects, such as request.query?
  // var queryString = request.query.toString();
  // console.log("queryString: ",queryString);
  next();
})

app.use("/special/", (request, response, next) => {
  console.log("Welcome to the Special Area");
  next();
})

app.get('/', (request, response) => {
  response.send('Welcome to Twitter! This is a new get.response.');
});

app.get('/news', (request, response) => {
  response.send('You are now in the /news path. And /news is now NEW.');
});
