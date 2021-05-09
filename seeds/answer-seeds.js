const { Answer } = require('../models');

const answerData = [
  {
    answerText: 'I talked to one of my school friends',
    questionID: 1,
    userID: 1
  },
  {
    answerText: 'I should exercise everyday',
    questionID: 2,
    userID: 2
  },
  {
    answerText: 'I was not on time for my meeting',
    questionID: 1,
    userID: 3
  }
];

const seedAnswer = () => Answer.bulkCreate(answerData);

module.exports = seedAnswer;
