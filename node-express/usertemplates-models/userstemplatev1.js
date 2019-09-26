"use strict";
module.exports = (sequelize, DataTypes) => {
  const UsersTemplate = sequelize.define(
    "UsersTemplate",
    {
      siteUrl: DataTypes.STRING,
      urlParameter: DataTypes.STRING,
      published: DataTypes.TINYINT,
      userId: DataTypes.INTEGER,
      templateId: DataTypes.INTEGER
    },
    {}
  );
  UsersTemplate.associate = function(models) {
    // associations can be defined here
    UsersTemplate.belongsTo(models.User, { foreignKey: "userId" });
    UsersTemplate.belongsTo(models.Template, {
      foreignKey: "templateId"
    });
  };
  return UsersTemplate;
};
