const User = require('./User');
const Mood_Level = require('./Mood_Level');
const Mood = require('./Mood');
const Comment = require('./Comment');
const Question = require('./Question');
const Media = require('./Media');
const Log = require('./Log');
const Login = require('./Login');

// create associations

// between User and Mood
User.hasMany(Mood, {
    foreignKey: 'userID',
});

Mood.belongsTo(User, {
    foreignKey: 'userID',
});

// between Mood and Mood_Level
Mood_Level.hasMany(Mood, {
    foreignKey: 'moodLevelID',
});

Mood.belongsTo(Mood_Level, {
    foreignKey: 'moodLevelID',
});
