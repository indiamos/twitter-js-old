'use strict';

const _ = require('lodash');

var data = [];

function add(name, content) {
  data.push({ name: name, content: content });
}

function list() {
  return _.cloneDeep(data);
}

function find(properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add(getFakeName(), getFakeTweet());
}

data = [ { name: 'Ben OLogn',
    content: 'Fullstack Academy is impressive! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Ashi Stackson',
    content: 'Fullstack Academy is funny! The instructors are just so awesome. #fullstacklove #codedreams' },
  { name: 'Ben Dunderproto',
    content: 'Fullstack Academy is amazing! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Omri McQueue',
    content: 'Fullstack Academy is amazing! The instructors are just so sweet. #fullstacklove #codedreams' },
  { name: 'Joe Docsreader',
    content: 'Fullstack Academy is amazing! The instructors are just so mindblowing. #fullstacklove #codedreams' },
  { name: 'Ashi Binder',
    content: 'Fullstack Academy is amazing! The instructors are just so amazing. #fullstacklove #codedreams' },
  { name: 'Omri OLogn',
    content: 'Fullstack Academy is awesome! The instructors are just so awesome. #fullstacklove #codedreams' },
  { name: 'Dan Ecma',
    content: 'Fullstack Academy is impressive! The instructors are just so wonderful. #fullstacklove #codedreams' },
  { name: 'David McQueue',
    content: 'Fullstack Academy is cool! The instructors are just so mindblowing. #fullstacklove #codedreams' },
  { name: 'David Binder',
    content: 'Fullstack Academy is funny! The instructors are just so sweet. #fullstacklove #codedreams' } ];

console.log(data);
