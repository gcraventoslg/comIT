"use strict";
module.exports = (sequelize, DataTypes) => {
  const contentUsersTemplate = sequelize.define(
    "contentUsersTemplate",
    {
      nameComponent: DataTypes.STRING,
      content: DataTypes.JSON,
      idUserTemplates: DataTypes.INTEGER,
      recordone: DataTypes.STRING
    },
    {}
  );
  contentUsersTemplate.associate = function(models) {
    contentUsersTemplate.belongsTo(models.UserTemplate, {
      foreignKey: "idUserTemplates",
      as: "userTemplate"
    });
  };
  return contentUsersTemplate;
};
