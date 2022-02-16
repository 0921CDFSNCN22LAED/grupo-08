"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        categoryName: "hombre",
        active: 1,
      },
      {
        categoryName: "mujer",
        active: 1,
      },
      {
        categoryName: "niños",
        active: 1,
      },
      {
        categoryName: "sol",
        active: 1,
      },
      {
        categoryName: "leer",
        active: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
