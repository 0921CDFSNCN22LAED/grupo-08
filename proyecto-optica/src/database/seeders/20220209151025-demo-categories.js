"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", [
      {
        categoryName: "hombre",
      },
      {
        categoryName: "mujer",
      },
      {
        categoryName: "niños",
      },
      {
        categoryName: "sol",
      },
      {
        categoryName: "leer",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
