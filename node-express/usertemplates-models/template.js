"use strict";
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define(
    "Template",
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      img: DataTypes.STRING,
      newTemplate: DataTypes.BOOLEAN,
      nameTemplateUrl: DataTypes.STRING
    },
    {}
  );
  Template.associate = function(models) {
    Template.belongsToMany(models.User, {
      through: "UsersTemplate",
      foreignKey: "templateId",
      as: "users"
    });
  };
  return Template;
};
