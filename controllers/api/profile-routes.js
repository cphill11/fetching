const router = require("express").Router();
const { Profile } = require('../../models');

router.get("/", (req, res) => {
    Profile.findAll({
        attributes: ['id', 'petName', 'owner', 'age', 'gender', 'breed', 'description']
    })
    .then(dbProfileData => {res.json(dbProfileData)
         console.log("hello");})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })

})

//add new dog profile
router.post("/", (req, res) => {
    Profile.create({
        petName: req.body.petName,
        owner: req.body.owner,
        age: req.body.age,
        gender: req.body.gender,
        breed: req.body.breed,
        description: req.body.description
    })
    .then(dbProfileData => res.json(dbProfileData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
