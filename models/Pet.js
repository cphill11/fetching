const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Pet extends Model {}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        petName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        owner_id: {
            type: DataTypes.INTEGER,
            references:{
                model: 'user',
                key: 'id'
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
            //if true = male, if false = female
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // place for url of image to be accepted 
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "pet"
    }
);

module.exports = Pet;