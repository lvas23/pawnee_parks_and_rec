const { Post } = require('../models');

const postData = [
  {
    post_id: 1,
    post_events:
      'Sign said do not drink sprinkler water, so I made sun tea with it and now I have an infection.',
  },
  {
    post_id: 2,
    post_events:
      'I found a sandwich in one of your parks and I want to know why it didnt have mayonnaise.',
  },
  {
    post_id: 3,
    post_events:
      'My dog went to one of your parks and ate another dogs feces and Im going to sue you for that.',
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
