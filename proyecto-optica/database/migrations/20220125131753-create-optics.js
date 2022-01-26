"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("optics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      postalCode: {
        type: Sequelize.INTEGER(6),
      },
      province: {
        type: Sequelize.STRING(100),
      },
      schedule: {
        type: Sequelize.STRING,
      },
      cellPhone: {
        type: Sequelize.INTEGER(12),
      },
      shippingWay: {
        type: Sequelize.STRING,
      },
      logo: {
        type: Sequelize.STRING,
      },
      orderDetail_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "orders_details",
          key: "id",
        },
      },
      status: {
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
    await queryInterface.dropTable("optics");
  },
};
