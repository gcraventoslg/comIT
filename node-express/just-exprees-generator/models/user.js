"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.belongsToMany(models.DemoTemplate, {
      through: "demoUserTemplate",
      as: "templates",
      foreignKey: "userId",
      otherKey: "demotemplateId"
    });
  };
  return User;
};
