const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Moods extends Model {}

Moods.init(
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
        modelName: 'moods'
    }
);

module.exports = Moods;