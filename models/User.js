// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
// Initialize Product model (table) by extending off Sequelize's Model class
class User extends Model {}


// set up fields and rules for Product model
User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // price: {
    //   type: DataTypes.DECIMAL(10, 2),
    //   allowNull: false,
    //   validate: {
    //     isDecimal: true
    //   }
    // },
    // stock: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   defaultValue: 10,
    //   validate: {
    //     isNumeric: true
    //   }
    // },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;