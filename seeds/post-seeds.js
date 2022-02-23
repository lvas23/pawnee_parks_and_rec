const { Post } = require('../models');

const postdata = [
  {
    post_id: 10,
    post_title: 'Donec posuere metus vitae ipsum.',
    // post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
  },
  {
    post_id: 5,
    post_title: 'Morbi non quam nec dui luctus rutrum.',
    // post_url: 'https://nasa.gov/donec.json',
    // user_id: 8,
  },
  {
    post_id: 4,
    post_title:
      'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    // post_url:
    //   'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    // user_id: 1,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
