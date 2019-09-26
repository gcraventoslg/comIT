"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contentUsersTemplates", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameComponent: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.JSON
      },
      idUserTemplates: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "UsersTemplate",
          key: "id"
        }
      },
      recordone: {
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
    return queryInterface.dropTable("contentUsersTemplates");
  }
};
