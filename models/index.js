const User = require('./User');
const Mood = require('./Mood');
const Journal = require('./Journal');
const Question = require('./Question');
const Answer = require('./Answer');

// create associations

// between Journal and Mood
Mood.hasMany(Journal, {
    foreignKey: 'moodID',
});

Journal.belongsTo(Mood, {
    foreignKey: 'moodID',
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

// between Log and User
User.hasMany(Log, {
    foreignKey: 'userID',
});

Log.belongsTo(User, {
    foreignKey: 'userID',
});

module.exports = {
    User,
    Mood_Level,
    Mood,
    Comment,
    Login,
    Log,
    Question,
    Media
};