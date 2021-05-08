const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Moods extends Model {}

Moods.init(
    {
        moodsID: {
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