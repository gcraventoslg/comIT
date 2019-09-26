"use strict";
module.exports = (sequelize, DataTypes) => {
  const UsersTemplate = sequelize.define(
    "UsersTemplate",
    {
      siteUrl: DataTypes.STRING,
      urlParameter: DataTypes.STRING,
      published: DataTypes.BOOLEAN,
      userId: DataTypes.INTEGER,
      templateId: DataTypes.INTEGER,
      siteName: DataTypes.STRING
    },
    {}
  );
  UsersTemplate.associate = function(models) {
    UsersTemplate.belongsTo(models.User, { foreignKey: "userId" });
    UsersTemplate.belongsTo(models.Template, {
      foreignKey: "templateId"
    });
  };
  return UsersTemplate;
};
