const router = require('express').Router();
const { Complaint } = require('../../models');

// get all users
router.get('/', (req, res) => {
  console.log('======================');
  Complaint.findAll({
    attributes: ['complaint_id', 'complaint_title'],
  })
    .then((dbComplaintData) => res.json(dbComplaintData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['compaint_id', 'compaint_title'],
  })
    .then((dbComplaintData) => {
      if (!dbComplaintData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbComplaintData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
  Post.create({
    complait_title: req.body.title,
    // post_url: req.body.post_url,
    // user_id: req.session.user_id
  })
    .then((dbComplaintData) => res.json(dbComplaintData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  Complaint.update(
    {
      complaint_title: req.body.title,
    },
    {
      where: {
        complaint_id: req.params.id,
      },
    }
  )
    .then((dbComplaintData) => {
      if (!dbComplaintData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbComplaintData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  console.log('id', req.params.id);
  Complaint.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbComplaintData) => {
      if (!dbComplaintData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbComplaintData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
