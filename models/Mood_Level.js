const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Mood_Level extends Model {}

Mood_Level.init(
    {
        moodLevelID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'mood_level'
    }
);

module.exports = Mood_Level;