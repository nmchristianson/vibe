const { Mood } = require('../models');

const moodData = [
  {
    title: 'joyful, happy, relaxed',
    color: 'pink',
  },
  {
    title: 'sad, lonely, depressed',
    color: 'blue',
  },
  {
    title: 'productive, energetic, active',
    color: 'green',
  },
  {
    title: 'sick, tired, lazy',
    color: 'yellow',
  },
  {
    title: 'average, normal, good',
    color: 'orange',
  },
  {
    title: 'angry, anxious, frustrated',
    color: 'red',
  }
];

const seedMood = () => Mood.bulkCreate(moodData);

module.exports = seedMood;
