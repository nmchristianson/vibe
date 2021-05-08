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

// between Journal and User
User.hasMany(Journal, {
    foreignKey: 'userID',
});

Journal.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// between Answer and Question
Question.hasMany(Answer, {
    foreignKey: 'questionID',
});

Answer.belongsTo(Question, {
    foreignKey: 'questionID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

// between User and Answer
User.hasMany(Answer, {
    foreignKey: 'userID',
});

Answer.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});

module.exports = {
    User,
    Mood,
    Journal,
    Question,
    Answer
};