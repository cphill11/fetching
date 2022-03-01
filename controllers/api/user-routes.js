const router = require("express").Router();
const { User } = require("../../models");

// The `/api/products` endpoint

// GET all products, including associated (?) data
router.get("/", (req, res) => {
  User.findAll({
    // include: [
    //   Category,
    //   {
    //     model: Tag,
    //     through: ProductTag,
    //   },
    // ],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET one user by it's `id`, inclduing associated (?) data
router.get("/:id", (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    // include: [
    //   Category,
    //   {
    //     model: Tag,
    //     through: ProductTag,
    //   },
    // ],
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

// create new user data 
User.post("/", (req, res) => {
    User.create(req.body)
    .then((user) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const userIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return UserTag.bulkCreate(userIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(user);
    })
    // .then((productTagIds) => res.status(200).json(productTagIds))
    // .catch((err) => {
    //   console.log(err);
    //   res.status(400).json(err);
    // });
});

// update user data by it's `id' value
router.put("/:id", (req, res) => {
    User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    // .then((updatedProductTags) => res.json(updatedProductTags))
    // .catch((err) => {
    //   // console.log(err);
    //   res.status(400).json(err);
    // });
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
