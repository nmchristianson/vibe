const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

// create user model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        // define an id column
        userID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        //define username column
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        delFlag: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        sequelize,
        // don't pluralize name of database table
        freezeTableName: true,
        // make it so our model name stays lowercase in the database
        modelName: 'user'
    }
);

module.exports = User;
