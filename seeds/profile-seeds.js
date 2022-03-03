const { Profile } = require('../models')

const profileData = [

    {
        petName: "Chance",
        owner: "Danielle",
        age: "5",
        gender: "true",
        breed: "East African Village Dog",
        description: "Chance is  super cute dog."
    },
    {
        petName: "Frizz",
        owner: "Kathleen",
        age: "3",
        gender: "true",
        breed: "Collie Mix",
        description: "Frizz is a good pooch."
    },
    {
        petName: "Ripley",
        owner: "Criste",
        age: "5",
        gender: "true",
        breed: "Doberman",
        description: "Ripley is a nice doberman."
    },
    {
        petName: "Luna",
        owner: "Olivia",
        age: "2",
        gender: "true",
        breed: "Pitbull Mix",
        description: "Luna is a silly dog."
    },
]

const seedProfiles = () => Profile.bulkCreate(profileData);

module.exports = seedProfiles;
