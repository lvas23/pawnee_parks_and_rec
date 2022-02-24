const { Post } = require('../models');

const postData = [
  {
    post_id: 1,
    post_title: 'Donec posuere metus vitae ipsum.',

  },
  {
    post_id: 2,
    post_title: 'Morbi non quam nec dui luctus rutrum.',

  },
  {
    post_id: 3,
    post_title:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
