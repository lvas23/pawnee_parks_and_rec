const router = require('express').Router();
const { Post } = require('../models');
const { sequelize } = require('../models/Post');


router.get("/about",(req,res) => {
  res.render("about")
})

router.get("/calendar", (req,res)=> {
  res.render("calendar")
})

router.get("/events", (req,res)=> {
  res.render("events")
})
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

router.get('/post/:id' , (req, res) => {
 Post.findAll({
   where: {
     id: req.params.id
   },
   attributes: [
     'id',
     'title',
     'created_at',
     [sequelize.literal('(SELECT COUNT (*) FROM calendar Where post.id = title.post_id)'), 'post_title']
   ],
   order: [['created_at', DESC]],
   include: [
     {
       model: Post,
       attributes: [ 'id', 'title', 'created_at' ]
     }
   ]
 })
 .then(dbPostData => {
   const posts = dbPostData.map(post => post.get({ plain: true}));
   res.render('homepage', {posts});
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

module.exports = router;
