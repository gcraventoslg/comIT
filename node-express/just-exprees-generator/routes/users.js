var models = require("../models");

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  //findAll(options: Object): Promise<Array<Model>>
  models.User.findAll({
    include: [models.Task]
  }).then(function(users) {
    res.json({
      title: "Sequelize: Express Example",
      users: users
    });
  });
});
//get user ById
router.get("/:id", (req, res, next) => {
  models.User.findByPk(req.params.id).then(result => res.json(result));
});

//POST /
router.post("/", function(req, res) {
  //res.send("send post");
  //upsert(values: Object, options: Object): Promise<boolean>
  models.User.create({
    username: req.body.username,
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  }).then(result => res.json(result));
});

//PUT /:id
router.put("/:id", async function(req, res) {
  const results = await models.User.update(
    {
      username: req.body.username
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  let user;
  if (results == 1) {
    user = await models.User.findOne({ where: { id: req.params.id } });
  }
  res.json({ user: user });
});
//DELETE /:id
router.delete("/:id", (req, res) => {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => res.json(result));
});

module.exports = router;
