"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("product_shopping_cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        paranoid: true,
      },
      product_id: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        paranoid: true,
        references: {
          model: "products",
          key: "id",
        },
      },
      shoppingCar_id: {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        paranoid: true,
        references: {
          model: "shopping_cars",
        },
      },
      createdAt: {
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("product_shopping_cars");
  },
};
