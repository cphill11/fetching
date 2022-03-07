const { Pet } = require('../models')

const petData = [

    {
        petName: "Chance",
        owner: "3",
        age: "5",
        gender: "female",
        breed: "East African Village Dog",
        description: "Chance is a super cute dog."
    },
    {
        petName: "Frizz",
        owner: "1",
        age: "3",
        gender: "female",
        breed: "Collie Mix",
        description: "Frizz is a good pooch."
    },
    {
        petName: "Ripley",
        owner: "3",
        age: "5",
        gender: "female",
        breed: "Doberman",
        description: "Ripley is a nice doberman."
    }
]

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;
