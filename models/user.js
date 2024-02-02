'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, {foreignKey: "authorId"})
      User.hasMany(models.Image, {foreignKey: "userId"})
      User.hasMany(models.Comment, {foreignKey: "userId"})
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    registeredAt: DataTypes.DATE,
    intro: DataTypes.STRING,
    profile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};