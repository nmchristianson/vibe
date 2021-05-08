const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Journal extends Model { }

Journal.init(
    {
        journalID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        journalNote: {
            type: DataTypes.STRING,
            allowNull: true,
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
        photoUrl: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isURL: true,
            }
        },
        moodID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            references: {
                model: 'mood',
                key: 'moodID'
            }
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
        modelName: 'journal'
    }
);

module.exports = Journal;