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
        type: Sequelize.STRING,
      },
      longDescriptions: {
        type: Sequelize.STRING,
      },
      prescription_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "prescriptions",
          key: "id",
        },
      },
      image_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "images",
          key: "id",
        },
      },
      price_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "prices",
          key: "id",
        },
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
