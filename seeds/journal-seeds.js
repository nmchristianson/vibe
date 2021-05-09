const { Journal } = require('../models');

const journalData = [
  {
    journalNote: 'Today was great for me',
    userID: 1,
    moodID: 1
  },
  {
    journalNote: 'I was not productive today',
    userID: 2,
    moodID: 4
  },
  {
    journalNote: 'I am so angry with my brother',
    userID: 3,
    moodID: 6
  }
];

const seedJournal = () => Journal.bulkCreate(journalData);

module.exports = seedJournal;
