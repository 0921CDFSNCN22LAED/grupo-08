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
      sphere_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "spheres",
          key: "id",
        },
      },
      cylinder_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "cylinders",
          key: "id",
        },
      },
      pupillaryDistance_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
