// import all models
const Post = require('./Post');
const User=require("./User")
const Complaint=require("./Complaint")
// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});


Complaint.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Complaint.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

User.hasMany(Complaint, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Post.hasMany(Complaint, {
  foreignKey: 'post_id',
});

module.exports = { Post,Complaint,User };
