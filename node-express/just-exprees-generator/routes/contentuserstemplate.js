var models = require("../models");
var express = require("express");
var router = express.Router();

//POST / Insert
router.post("/", function(req, res) {
  models.contentUsersTemplate
    .create({
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
  console.log(req.params.id);
  const results = await models.contentUsersTemplate.update(
    {
      content: req.body
    },
    {
      where: {
        idUserTemplates: req.params.id
      }
    }
  );
  let template;
  if (results == 1) {
    template = await models.contentUsersTemplate.findOne({
      where: { id: req.params.id }
    });
  }
  res.json({ template: template });
});
//DELETE /:id
router.delete("/:id", (req, res) => {
  models.contentUsersTemplate
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(result => res.json(result));
});

/* GET by userID templates listing. */
router.get("/:id", function(req, res, next) {
  models.contentUsersTemplate
    .findAll({
      where: { idUserTemplates: req.params.id }
    })
    .then(function(templates) {
      res.json({
        contentTemplates: templates
      });
    });
});

module.exports = router;
