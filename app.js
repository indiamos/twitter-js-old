'use strict';

const chalk = require('chalk');
const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

// SAMPLE DATA TO FEED TO NUNJUCKS
const people = [
  {name: 'Full'},
  {name: 'Stacker'},
  {name: 'Son'}
];

const locals = {
  title: 'An Example',
  people: [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermione' }
  ]
};

// CONFIGURE NUNJUCKS
nunjucks.configure('views', { noCache: true }); // point nunjucks to the proper directory for templates, and turn off caching while we're developing
nunjucks.render('index.html', locals, function(err, output) {
  console.log(output);
});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

// TELL THE SERVER TO LISTEN FOR REQUESTS
app.listen(3000, () => {
  console.log('server listening');
});

// // RESPOND TO REQUESTS
// app.use((request, response, next) => {
//   // LOG EACH REQUEST TO CONSOLE
//   var requestParams = Object.keys(request.params).length === 0 ? "" : request.params;
//   var requestQuery = Object.keys(request.query).length === 0 ? "" : request.query;
//   // Per review video: log response only after it's been completed
//   response.on('finish', () => {
//     console.log(chalk.magenta(request.method), chalk.yellow(request.path), requestQuery, chalk.cyan(requestParams), response.statusCode);
//   }
//   // Why doesn't chalk work with objects, such as request.query?
//   // var queryString = request.query.toString();
//   // console.log("queryString: ",queryString);

//   // TEST NUNJUCKS INTEGRATION
//   // response.render( 'index', {title: 'Hall of Fame', people: people} );
//   response.render( 'index', locals );
//   next();
// })

// An easier way to do all of the above, per review video:
const morgan = require('morgan');
app.use(morgan('dev'));

app.use((request, response, next) => {
  // TEST NUNJUCKS INTEGRATION
  // response.render( 'index', {title: 'Hall of Fame', people: people} );
  response.render( 'index', locals );
  next();
})

// app.use("/special/", (request, response, next) => {
//   console.log("Welcome to the Special Area");
//   next();
// })

// app.get('/', (request, response) => {
//   response.send('Welcome to Twitter! This is a new get.response.');
// });

// app.get('/news', (request, response) => {
//   response.send('You are now in the /news path. And /news is now NEW.');
// });

