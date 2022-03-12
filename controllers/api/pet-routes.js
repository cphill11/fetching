const router = require("express").Router();
const { Pet } = require('../../models');

//get all pets 
router.get("/", (req, res) => {
    Pet.findAll({
        attributes: ['id', 'petName', 'owner_id', 'age', 'gender', 'breed', 'description']
    })
    .then((dbPetData) => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//get one pet 
router.get('/:id', (req, res) => {
    Pet.findOne({
        where: {
            id: req.params.id
        },
        // image pulled in from model/pet.js
        attributes: ['id', 'petName', 'owner_id', 'age', 'gender', 'breed', 'description', 'image']
    })
    .then(dbPetData => {
        if(!dbPetData) {
            res.status(404).json({ message: 'No pet found with this id.' })
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//update dog profile
router.put('/:id', (req, res) => {
    Pet.update(
        {
            description: req.body.description
        },
        {
            where: {
                id: req.params.id
            }
        }    
    )
    .then(dbPetData => {
        if(!dbPetData) {
            res.status(404).json({ message: 'No pet found with this id'})
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

//add new dog profile, image method added 
router.post("/", (req, res) => {
    Pet.create({
        petName: req.body.petName,
        owner_id: req.session.user_id,
        age: req.body.petAge,
        gender: req.body.petGender,
        breed: req.body.petBreed,
        description: req.body.petBio,
        image: req.body.image
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// using cloudinary; req 2nd post method
router.post("/shabang", (req, res) => {
    console.log(req.body);
    res.json("upload maybe")
});

module.exports = router;
