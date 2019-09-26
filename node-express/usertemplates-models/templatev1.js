"use strict";
module.exports = (sequelize, DataTypes) => {
  const Template = sequelize.define(
    "Template",
    {
      title: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      img: DataTypes.STRING,
      newTemplate: DataTypes.TINYINT
    },
    {}
  );
  Template.associate = function(models) {
    // associations can be defined here
    Template.belongsToMany(models.User, {
      through: "UsersTemplate",
      foreignKey: "templateId",
      as: "users"
    });
  };
  return Template;
};
