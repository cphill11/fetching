const seedUsers = require('./user-seeds');
// const seedProfiles = require('./profiles-seeds');
// const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

//   await seedProfiles();
//   console.log('\n----- PROFILES SEEDED -----\n');

//   await seedTags();
//   console.log('\n----- TAGS SEEDED -----\n');

//   await seedProductTags();
//   console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();