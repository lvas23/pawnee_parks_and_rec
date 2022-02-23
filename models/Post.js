const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class Post extends Model {
  // static upvote(body, models) {
  //   return models.Vote.create({
  //     user_id: body.user_id,
  //     post_id: body.post_id,
  //   }).then(() => {
  //     return Post.findOne({
  //       where: {
  //         id: body.post_id,
  //       },
  //       attributes: [
  //         'id',
  //         'title',
  //         // [
  //         //   sequelize.literal(
  //         //     '(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'
  //         //   ),
  //         //   'vote_count',
  //         // ],
  //       ],
  //     });
  //   });
  // }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
