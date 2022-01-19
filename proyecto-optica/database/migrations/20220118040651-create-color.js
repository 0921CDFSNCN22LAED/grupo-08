"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("colors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameColor: {
        type: Sequelize.STRING(100),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("colors");
  },
};
