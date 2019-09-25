"use strict";
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define(
    "Template",
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      img: DataTypes.STRING,
      newTemplate: DataTypes.BOOLEAN
    },
    {}
  );
  Template.associate = function(models) {
    // associations can be defined here
    Template.hasMany(models.demoUserTemplate);
  };
  return Template;
};
