var models = require("../models");

var express = require("express");
var router = express.Router();

/* GET templates listing. */
router.get("/", function(req, res, next) {
  models.DemoTemplate.findAll({
    //include: [models.Task]
  }).then(function(templates) {
    res.json({
      //title: "Sequelize: Express Example",
      templates: templates
    });
  });
});

//POST /
router.post("/", function(req, res) {
  //res.send("send post");
  //upsert(values: Object, options: Object): Promise<boolean>
  models.DemoTemplate.create({
    title: req.body.title,
    img: req.body.img,
    price: req.body.price,
    newTemplate: req.body.newTemplate
  }).then(result => res.json(result));
});

//PUT /:id
router.put("/:id", async function(req, res) {
  const results = await models.DemoTemplate.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  );
  let template;
  if (results == 1) {
    template = await models.DemoTemplate.findOne({
      where: { id: req.params.id }
    });
  }
  res.json({ template: template });
});
//DELETE /:id
router.delete("/:id", (req, res) => {
  models.DemoTemplate.destroy({
    where: {
      id: req.params.id
    }
  }).then(result => res.json(result));
});

module.exports = router;
