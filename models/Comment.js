const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }

Comment.init(
    {
        commentID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        commentNote: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'userID'
            }
        },
        questionID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            references: {
                model: 'question',
                key: 'questionID'
            }
        },
        mediaID: {
            type: DataTypes.INTEGER,
            allowNull: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
            references: {
                model: 'media',
                key: 'mediaID'
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
        modelName: 'comment'
    }
);

module.exports = Comment;