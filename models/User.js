// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt")
// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model {
  checkPass(passwordAttempt) {
    return bcrypt.compareSync(passwordAttempt, this.password)
  }
}

// create up fields and rules for User model
User.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      // there cannot be any duplicate email values in this table
      unique: true,
      // if allowNull is set to false, we can run our data through validators before creating the table data
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // this means the password must be at least eight characters long
        len: [8],
      },
    },

    comment_text: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [250],
      },
    },
    // for owners to comment (?)  or 'like' profile
    // post_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "post",
    //     key: "id",
    //   },
  },
  {
    hooks: {
      async beforeCreate(newData) {
        newData.password = await bcrypt.hash(newData.password, 10);
        return newData
      },
      async beforeUpdate(updateData) {
        newData.password = await bcrypt.hash(newData.password, 10);
        return updateData
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
