'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.hasMany(models.Image, {foreignKey: "commentId"})
      Comment.belongsTo(models.Post, {foreignKey: "postId"})
      Comment.belongsTo(models.User, {foreignKey: "userId"})
      // define association here
    }
  }
  Comment.init({
    postId: DataTypes.INTEGER,
    parentId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    commentName: DataTypes.STRING,
    commentEmal: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};