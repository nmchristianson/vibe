const { User } = require('../models');

const userData = [
  {
    userName: 'RonaldFir',
  },
  {
    userName: 'VirginiaWoolf',
  },
  {
    userName: 'CharlesLeRoi',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
