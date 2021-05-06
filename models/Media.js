const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Media extends Model {}

Media.init(
    {
        mediaID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        fakePath: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        delFlag: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'media'
    }
);

module.exports = Media;