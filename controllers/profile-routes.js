const router = require('express').Router();
const { Pet, User } = require('../models');


//find all pets associate with user id
router.get('/', (req, res) => {
    console.log("!!!!!!!!!!!!!",req.session.user_id)
    Pet.findAll({
        where: {
            owner_id: req.session.user_id
        },
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
                attributes: ["username", "id"]
            }
        ]
    })
    .then(dbPetData => {
        const pets = dbPetData.map(pet=> pet.get({ plain: true}));
        res.render('pet-profile', {pets, loggedIn: true});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;