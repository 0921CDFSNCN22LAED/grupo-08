"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("rights_eyes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sphere: {
        type: Sequelize.REAL,
      },
      cylinder: {
        type: Sequelize.REAL,
      },
      axis: {
        type: Sequelize.REAL,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("rights_eyes");
  },
};
