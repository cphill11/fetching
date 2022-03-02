const { User } = require('../models');

const userData = [
  {
    user_name: 'Criste Phillips',
    pet_name: 'Ripley',
    comment_text: ''
  },
  {
    user_name: 'Dariga Iskakova',
    pet_name: 'Ripley',
    comment_text: ''
  },
  {
    product_name: 'Danielle Fortin',
    pet_name: 'Ripley',
    comment_text: ''
  },
  {
    product_name: 'Michael Monihan',
    pet_name: 'Ripley',
    comment_text: ''
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;