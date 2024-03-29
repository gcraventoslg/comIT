"use strict";
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define(
    "Template",
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      img: DataTypes.STRING,
      newTemplate: DataTypes.BOOLEAN,
      newTemplateUrl: DataTypes.STRING,
      active: DataTypes.BOOLEAN
    },
    {}
  );
  Template.associate = function(models) {
    Template.belongsToMany(models.User, {
      through: "UserTemplate"
    });
  };
  return Template;
};
