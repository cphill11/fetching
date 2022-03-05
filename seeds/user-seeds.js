const { User } = require('../models');

const userData = [
  {
    username: 'Criste Phillips',
    // pet_name: 'Ripley',
    comment_text: '',
    email: 'a@a.com',
    password: '12345678'
  },
  {
    username: 'Dariga Iskakova',
    // pet_name: 'Patrick',
    comment_text: '',
    email: 'b@a.com',
    password: '12345678'
  },
  {
    username: 'Dariga Iskakova',
    // pet_name: 'Baby Birkin',
    comment_text: '',
    email: 'c@a.com',
    password: '12345678'
  },
  {
    username: 'Danielle Fortin',
    // pet_name: 'Chance',
    comment_text: '',
    email: 'd@a.com',
    password: '12345678'
  },
  {
    username: 'Michael Monihan',
    // pet_name: 'Lexi',
    comment_text: '',
    email: 'e@a.coms',
    password: '12345678'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;