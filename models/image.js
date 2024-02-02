'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Image.belongsTo(models.Post, {foreignKey: "postId"})
      Image.belongsTo(models.User, {foreignKey: "userId"})
      Image.belongsTo(models.Comment, {foreignKey: "commentId"})
      Image.belongsTo(models.Tag, {foreignKey: "tagId"})
      Image.belongsTo(models.Category, {foreignKey: "categoryId"})

      // define association here
    }
  }
  Image.init({
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    key: DataTypes.STRING,
    content: DataTypes.TEXT,
    createdAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};