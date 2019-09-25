var models = require("../models");

var express = require("express");
var router = express.Router();

/* GET templates listing. */
router.get("/", function(req, res, next) {
  console.log("entro");
  models.demoUserTemplate
    .findAll({
      //include: [models.User, models.DemoTemplate]
    })
    .then(function(templates) {
      res.json({
        //title: "Sequelize: Express Example",
        demostemplates: templates
      });
    });
});

//POST /
router.post("/", function(req, res) {
  models.demoUserTemplate
    .create({
      siteUrl: req.body.siteUrl,
      published: req.body.published,
      urlParameter: req.body.urlParameter,
      userId: req.body.iduser,
      TemplateId: req.body.idtemplate,
      demotemplateId: req.body.demotemplateId
    })
    .then(result => res.json(result));
});

//PUT /:id
router.put("/:id", async function(req, res) {
  const results = await models.demoUserTemplate.update(
    {
      siteUrl: req.body.siteUrl,
      published: req.body.published,
      urlParameter: req.body.urlParameter
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  let template;
  if (results == 1) {
    template = await models.demoUserTemplate.findOne({
      where: { id: req.params.id }
    });
  }
  res.json({ template: template });
});
//DELETE /:id
router.delete("/:id", (req, res) => {
  models.demoUserTemplate
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(result => res.json(result));
});

module.exports = router;
