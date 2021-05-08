const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mood extends Model { }

Mood.init(
    {
        moodID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        delFlag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
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