const User = require('./User');
const Mood_Level = require('./Mood_Level');
const Mood = require('./Mood');
const Comment = require('./Comment');
const Question = require('./Question');
const Media = require('./Media');
const Log = require('./Log');
const Login = require('./Login');

// create associations
User.hasMany(Mood, {
    foreignKey: 'userID',
});

Mood.belongsTo(User, {
    foreignKey: 'userID'
})

