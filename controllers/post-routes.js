const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title'],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
