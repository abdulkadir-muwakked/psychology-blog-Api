'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tag.hasMany(models.Post, {foreignKey: "postId"})
      Tag.hasMany(models.Image, {foreignKey: "tagId"})
      // define association here
    }
  }
  Tag.init({
    parentId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    metaTitle: DataTypes.STRING,
    slug: DataTypes.STRING,
    content: DataTypes.TEXT,
    keywords: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};