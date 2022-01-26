"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("values_eyes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rightEye_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "rights_eyes",
          key: "id",
        },
      },
      leftEye_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "lefts_eyes",
          key: "id",
        },
      },
      pupillaryDistance_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "pupillary_distances",
          key: "id",
        },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("values_eyes");
  },
};
