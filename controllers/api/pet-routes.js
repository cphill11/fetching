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
        attributes: ['id', 'petName', 'owner_id', 'age', 'gender', 'breed', 'description']
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
            res.stuats(404).json({ message: 'No pet found with this id'})
            return;
        }
        res.json(dbPetData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

//add new dog profile
router.post("/", (req, res) => {
    Pet.create({
        petName: req.body.petName,
        owner_id: req.body.owner_id,
        age: req.body.age,
        gender: req.body.gender,
        breed: req.body.breed,
        description: req.body.description
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
