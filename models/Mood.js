const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Mood extends Model {}

Mood.init(
    {
        moodID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        moodLevelID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            references: {
                model: 'mood_level',
                key: 'moodLevelID'
            }
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            references: {
                model: 'user',
                key: 'userID'
            }
        },
        delFlag: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'mood'
    }
);

module.exports = Mood;