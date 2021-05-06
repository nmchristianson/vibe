const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Log extends Model {}

Log.init(
    {
        logID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
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
        modelName: 'log'
    }
);

module.exports = Log;