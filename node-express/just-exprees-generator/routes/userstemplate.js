var models = require("../models");
var express = require("express");
var router = express.Router();

/* GET templates listing. */
router.get("/", function(req, res, next) {
  console.log("entro");
  models.UsersTemplate.findAll({
    //include: [models.User, models.DemoTemplate]
  }).then(function(templates) {
    res.json({
      //title: "Sequelize: Express Example",
      userstemplates: templates
    });
  });
});

//POST / Insert
router.post("/", function(req, res) {
  models.UsersTemplate.create({
    userId: req.body.userId,
    templateId: req.body.templateId
  })
    .then(result => res.json(result))
    .catch(error => {
      console.log(error);
    });
});

//PUT /:id
router.put("/:id", async function(req, res) {
  console.log(req.body);
  const results = await models.UsersTemplate.update(
    {
      siteUrl: req.body.siteUrl,
      urlParameter: req.body.siteName
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  let template;
  if (results == 1) {
    template = await models.UsersTemplate.findOne({
      where: { id: req.params.id }
    });
  }
  res.json({ template: template });
});
//DELETE /:id
router.delete("/:id", (req, res) => {
  models.UsersTemplate.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => res.json(result));
});

/* GET by userID templates listing. */
router.get("/:id", function(req, res, next) {
  models.UsersTemplate.findAll({
    attributes: [
      "id",
      "siteUrl",
      "urlParameter",
      "published",
      "userId",
      "templateId",
      "siteName"
    ],
    include: [
      {
        model: models.Template
      }
    ],
    where: { userId: req.params.id }
  }).then(function(templates) {
    res.json({
      userTemplates: templates
    });
  });
});

module.exports = router;
