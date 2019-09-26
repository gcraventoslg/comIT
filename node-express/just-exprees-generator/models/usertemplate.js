"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserTemplate = sequelize.define(
    "UserTemplate",
    {
      siteUrl: DataTypes.STRING,
      urlParameter: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      templateId: DataTypes.INTEGER,
      siteName: DataTypes.STRING
    },
    {}
  );
  UserTemplate.associate = function(models) {
    UserTemplate.belongsTo(models.User, { foreignKey: "userId" });
    UserTemplate.belongsTo(models.Template, { foreignKey: "templateId" });
  };
  return UserTemplate;
};
