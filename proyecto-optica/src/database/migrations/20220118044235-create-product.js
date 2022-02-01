"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      shortDescription: {
        type: Sequelize.STRING(500),
      },
      longDescription: {
        type: Sequelize.TEXT,
      },
      prescription_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "prescriptions",
          key: "id",
        },
      },
      size_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sizes",
          key: "id",
        },
      },
      material_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "materials",
          key: "id",
        },
      },
      active: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("products");
  },
};
