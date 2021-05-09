const seedUsers = require('./user-seeds');
const seedMood = require('./mood-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

//   await seedProducts();
//   console.log('\n----- PRODUCTS SEEDED -----\n');

//   await seedTags();
//   console.log('\n----- TAGS SEEDED -----\n');

  await seedMood();
  console.log('\n----- MOOD SEEDED -----\n');

  process.exit(0);
};

seedAll();
