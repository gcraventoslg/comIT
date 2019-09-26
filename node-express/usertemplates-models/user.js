"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
      lastName: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
    /*User.belongsToMany(models.Template, {
      through: "UsersTemplate",
      foreignKey: "userId",
      as: "templates"
    });*/
  };
  return User;
};
