'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');

const {SALT}  = require('../config/serverConfig');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init({
    email: {
      type : DataTypes.STRING,
      allowNUll : false,
      unique: true,
      validate : {
        isEmail: true
      }
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });

  Admin.beforeCreate((user) => {
    const encryptedpassword = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedpassword;
 });

  return Admin;
};