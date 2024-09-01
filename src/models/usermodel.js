"use strict";
const { Model } = require("sequelize");

const bcrypt = require("bcrypt");

const {SALT}  = require('../config/serverConfig');

module.exports = (sequelize, DataTypes) => {
  class Usermodel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usermodel.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNUll: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNUll: false,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usermodel",
    }
  );

  Usermodel.beforeCreate((user) => {
     const encryptedpassword = bcrypt.hashSync(user.password, SALT);
     user.password = encryptedpassword;
  });
  return Usermodel;
};