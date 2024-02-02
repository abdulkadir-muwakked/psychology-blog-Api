'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Post, {foreignKey: "postId"})
      Category.hasMany(models.Image, {foreignKey: "categoryId"})
      // define association here
    }
  }
  Category.init({
    parentId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    metaTitle: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.TEXT,
    keywords: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};