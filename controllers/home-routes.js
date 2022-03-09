const { Pet, User } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login');
  });

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/pet-profile', (req, res) => {
  //get user including pet 
    res.render('pet-profile');
});

router.get('/pet/:id', (req, res) => {
  Pet.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      "id",
      "petName", 
      "age",
      "gender",
      "breed",
      "description"
    ],
    include: [
      {
        model: User,
        attributes: ['username'],
      }
    ]
  })
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404),json({ messag: 'No peet found with this id'});
        requestAnimationFrame;
      }

      const pet = dbPetData.get({ plain: true});

      res.render('pet-profile', {
        pet,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});


module.exports = router;