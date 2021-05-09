const seedUser = require('./user-seeds');
const seedMood = require('./mood-seeds');
const seedJournal = require('./journal-seeds');
const seedQuestion = require('./question-seeds');
const seedAnswer = require('./answer-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');

  await seedMood();
  console.log('\n----- MOOD SEEDED -----\n');

  await seedJournal();
  console.log('\n----- JOURNAL SEEDED -----\n');

  await seedQuestion();
  console.log('\n----- QUESTION SEEDED -----\n');

  await seedAnswer();
  console.log('\n----- ANSWER SEEDED -----\n');

  process.exit(0);
};

seedAll();
