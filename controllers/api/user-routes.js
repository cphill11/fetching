const router = require("express").Router();
const { User } = require("../../models");

// GET all users
router.get("/", (req, res) => {
    console.log(User);
  User.findAll({
    attributes: ["id", "username", "email", "password", "comment_text"],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET one user by it's `id`
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "username", "email", "password", "comment_text"],
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No User found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// CREATE new user data
router.post("/", (req, res) => {
     User.create({
        username: req.body.username,
        // comment_text: req.body.comment_text
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// update user data by it's `id' value
router.put("/:id", (req, res) => {
  User.update(
      {
        username: req.body.username
      },
      {
        where: {
            id: req.params.id,
        }
    })
  .then(dbUserData => {
    if(!dbUserData) {
        res.status(404).json({ message: 'No User found with this id'})
        return;
    }
    res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// delete one user by its `id` value
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No User found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
