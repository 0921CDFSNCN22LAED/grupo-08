"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("prescriptions_values", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      prescriptionName_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "prescriptions",
          key: "id",
        },
      },
      valueEye_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "values_eyes",
          key: "id",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("prescriptions_values");
  },
};
