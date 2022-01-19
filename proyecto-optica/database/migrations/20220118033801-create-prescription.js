"use strict";

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("prescriptions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prescriptionName: {
        type: Sequelize.STRING,
      },
    });
  },
  //20220118035801-create-prescription
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("prescriptions");
  },
};
