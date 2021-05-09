const { Question } = require('../models');

const questionData = [
  {
    questionText: 'What is the reason behind your mood today?',
  },
  {
    questionText: 'What can you do to make you feel better?',
  },
  {
    questionText: 'What do you want the most today?',
  },
];

const seedQuestion = () => Question.bulkCreate(questionData);

module.exports = seedQuestion;
