"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pupillary_distances", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      oneValue: {
        type: Sequelize.REAL,
      },
      rightPD: {
        type: Sequelize.REAL,
      },
      leftPD: {
        type: Sequelize.REAL,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pupillary_disctances");
  },
};
