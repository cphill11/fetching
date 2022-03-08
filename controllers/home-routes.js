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
    res.render('pet-profile');
});

router.get('/pet/:id', (req, res) => {
  const pet = {
    id: 1,
    petName: "Ms. Frizzle",
    age: 2,
    gender: true,
    breed: "Collie Mix",
    description: "Frizz is a good dog."
  }
  res.render('pet-card', { pet });
});


module.exports = router;