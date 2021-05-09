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

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
