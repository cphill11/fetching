const { Pet, User } = require('../models');

const router = require('express').Router();

// router.get('/', (req, res) => {
//   res.render('homepage', {loggedIn: req.session.loggedIn});
// });

router.get('/', (req, res) => {
  Pet.findAll({
    attributes: [
      "id", 
      "petName",
      "age",
      "breed",
      "description"
    ],  
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPetData => {
    const pets = dbPetData.map(pet => pet.get({ plain: true}));
    res.render('homepage',{ pets, loggedIn: req.session.loggedIn});
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
})

router.get('/login', (req, res) => {
    res.render('login', {loggedIn: req.session.loggedIn});
  });

router.get('/signup', (req, res) => {
    res.render('signup', {loggedIn: req.session.loggedIn});
});

router.get('/logout', (req, res) => {
  res.render('login', {loggedIn: req.session.loggedIn});
  //get user including pet 
    res.render('pet-profile');
});

router.get('/pet/:id', (req, res) => {
  // Pet.findOne({
  //   where: {
  //     id: req.params.id
  //   },
  //   attributes: [
  //     "id",
  //     "petName", 
  //     "age",
  //     "gender",
  //     "breed",
  //     "description"
  //   ],
  //   include: [
  //     {
  //       model: User,
  //       attributes: ['username'],
  //     }
  //   ]
  // })
  //   .then(dbPetData => {
  //     if (!dbPetData) {
  //       res.status(404).json({ messag: 'No pet found with this id'});
  //       requestAnimationFrame;
  //     }

  //     const pet = dbPetData.get({ plain: true});

  //     res.render('pet-profile', {
  //       pet,
  //       loggedIn: req.session.loggedIn
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   })
});


module.exports = router;