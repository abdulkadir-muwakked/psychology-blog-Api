'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {foreignKey: "authorId"})
      Post.hasMany(models.Image, {foreignKey: "postId"})
      Post.hasMany(models.Comment, {foreignKey: "postId"})
      Post.hasMany(models.Category, {foreignKey: "postId"})
      Post.hasMany(models.Tag, {foreignKey: "postId"})

      // define association here
    }
  }
  Post.init({
    authorId: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    metaTitle: DataTypes.STRING,
    slug: DataTypes.STRING,
    summary: DataTypes.TEXT,
    published: DataTypes.BOOLEAN,
    content: DataTypes.TEX,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};