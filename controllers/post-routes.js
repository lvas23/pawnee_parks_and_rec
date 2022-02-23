const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['post_id', 'post_title'],
  }).then((dbPostData) => res.render('dashboard'));
  const posts = dbPostData.map((post) => post.get({ plain: true }));
  res.render('dashboard', { posts }).catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
