'use strict';
module.exports = (sequelize, DataTypes) => {
  const demoUserTemplate = sequelize.define('demoUserTemplate', {
    siteUrl: DataTypes.STRING,
    published: DataTypes.TINYINT,
    urlParameter: DataTypes.STRING
  }, {});
  demoUserTemplate.associate = function(models) {
    // associations can be defined here
  };
  return demoUserTemplate;
};