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

router.post('/login', (req, res) => {
  console.log(req.body)
  User.findOne({
    where: {
      email:req.body.email
    }
  }).then(dbUser => {
    if(!dbUser) {
      res.status(400).json('Yo, this user is not in our database, swag.');
      return
    }
    
    //if there is a user, check password
    const validPass = dbUser.checkPass(req.body.password)
    
    if(!validPass) {
      res.status(400).json('Yo, this user is got a wrong password, swag.');
      return
    }

    //create the session
    req.session.save(() => {
      req.session.user_id = dbUser.id
      req.session.username = dbUser.username
      req.session.loggedIn = true;

      res.json('Logged in succesfully')
    })
  })
})
module.exports = router;
