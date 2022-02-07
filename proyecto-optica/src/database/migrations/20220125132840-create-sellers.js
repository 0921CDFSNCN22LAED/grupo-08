"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sellers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      cellPhone: {
        type: Sequelize.INTEGER,
      },
      shippingWay: {
        type: Sequelize.STRING,
      },
      orderDetail_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders_details",
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
    await queryInterface.dropTable("sellers");
  },
};
