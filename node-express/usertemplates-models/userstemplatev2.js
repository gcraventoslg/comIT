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
      content: DataTypes.JSON,
      recordOne: DataTypes.STRING,
      recordtwo: DataTypes.STRING
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
