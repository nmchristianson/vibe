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
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// between Mood and Mood_Level
Mood_Level.hasMany(Mood, {
    foreignKey: 'moodLevelID',
});

Mood.belongsTo(Mood_Level, {
    foreignKey: 'moodLevelID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// between Comment and User
User.hasMany(Comment, {
    foreignKey: 'userID',
});

Comment.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// between Comment and Question
Question.hasMany(Comment, {
    foreignKey: 'questionID',
});

Comment.belongsTo(Question, {
    foreignKey: 'questionID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// between Comment and Media
Comment.hasMany(Media, {
    foreignKey: 'mediaID',
});

Media.belongsTo(Comment, {
    foreignKey: 'mediaID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// between Login and User
User.hasMany(Login, {
    foreignKey: 'userID',
});

Login.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});