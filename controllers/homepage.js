const router = require('express').Router();
const { Post } = require('../models');

router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: ['post_id', 'post_title'],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render('dashboard', {
        posts,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
