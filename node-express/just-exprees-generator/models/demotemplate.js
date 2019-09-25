"use strict";
module.exports = (sequelize, DataTypes) => {
  const DemoTemplate = sequelize.define(
    "DemoTemplate",
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      img: DataTypes.STRING,
      newTemplate: DataTypes.BOOLEAN
    },
    {}
  );
  DemoTemplate.associate = function(models) {
    DemoTemplate.belongsToMany(models.User, {
      through: "demoUserTemplate",
      as: "templates",
      foreignKey: "demotemplateId",
      otherKey: "userId"
    });
  };
  return DemoTemplate;
};
