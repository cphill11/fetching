const seedUsers = require('./user-seeds');
const seedPets = require('./pet-seeds');
// const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedPets();
  console.log('\n----- PETS SEEDED -----\n');


  process.exit(0);
};

seedAll();