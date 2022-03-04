const { Profile } = require('../models')

const profileData = [

    {
        petName: "Chance",
        owner: "3",
        age: "5",
        gender: "true",
        breed: "East African Village Dog",
        description: "Chance is  super cute dog."
    },
    {
        petName: "Frizz",
        owner: "1",
        age: "3",
        gender: "true",
        breed: "Collie Mix",
        description: "Frizz is a good pooch."
    },
    {
        petName: "Ripley",
        owner: "3",
        age: "5",
        gender: "true",
        breed: "Doberman",
        description: "Ripley is a nice doberman."
    }
]

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;
