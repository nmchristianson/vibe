const { User } = require('../models');

const userData = [
  {
    userName: 'RonaldFir',
    password: 'password'
  },
  {
    userName: 'VirginiaWoolf',
    password: 'malina'
  },
  {
    userName: 'CharlesLeRoi',
    password: 'heyheyhey'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
