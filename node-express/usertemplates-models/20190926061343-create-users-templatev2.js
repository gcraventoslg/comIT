"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UsersTemplates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      siteUrl: {
        type: Sequelize.STRING
      },
      urlParameter: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // User hasMany WorkingDays n:n
          model: "User",
          key: "id"
        }
      },
      templateId: {
        type: Sequelize.INTEGER,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          // WorkingDays hasMany Users n:n
          model: "Template",
          key: "id"
        }
      },
      content: {
        type: Sequelize.JSON
      },
      recordOne: {
        type: Sequelize.STRING
      },
      recordtwo: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("UsersTemplates");
  }
};
