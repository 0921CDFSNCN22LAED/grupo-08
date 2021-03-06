"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Cylinders", [
      { cylinder: -12.75 },
      { cylinder: -12.51 },
      { cylinder: -12.25 },
      { cylinder: -12.01 },
      { cylinder: -11.75 },
      { cylinder: -11.51 },
      { cylinder: -11.25 },
      { cylinder: -11.01 },
      { cylinder: -10.75 },
      { cylinder: -10.51 },
      { cylinder: -10.25 },
      { cylinder: -10.01 },
      { cylinder: -9.75 },
      { cylinder: -9.51 },
      { cylinder: -9.25 },
      { cylinder: -9.01 },
      { cylinder: -8.75 },
      { cylinder: -8.51 },
      { cylinder: -8.25 },
      { cylinder: -8.01 },
      { cylinder: -7.75 },
      { cylinder: -7.51 },
      { cylinder: -7.25 },
      { cylinder: -7.01 },
      { cylinder: -6.75 },
      { cylinder: -6.51 },
      { cylinder: -6.25 },
      { cylinder: -6.01 },
      { cylinder: -5.75 },
      { cylinder: -5.51 },
      { cylinder: -5.25 },
      { cylinder: -5.01 },
      { cylinder: -4.75 },
      { cylinder: -4.51 },
      { cylinder: -4.25 },
      { cylinder: -4.01 },
      { cylinder: -3.75 },
      { cylinder: -3.51 },
      { cylinder: -3.25 },
      { cylinder: -3.01 },
      { cylinder: -2.75 },
      { cylinder: -2.51 },
      { cylinder: -2.25 },
      { cylinder: -2.01 },
      { cylinder: -1.75 },
      { cylinder: -1.51 },
      { cylinder: -1.25 },
      { cylinder: -1.01 },
      { cylinder: -0.75 },
      { cylinder: -0.51 },
      { cylinder: -0.25 },
      { cylinder: 0 },
      { cylinder: 0.25 },
      { cylinder: 0.51 },
      { cylinder: 0.75 },
      { cylinder: 1.01 },
      { cylinder: 1.25 },
      { cylinder: 1.51 },
      { cylinder: 1.75 },
      { cylinder: 2.01 },
      { cylinder: 2.25 },
      { cylinder: 2.51 },
      { cylinder: 2.75 },
      { cylinder: 3.01 },
      { cylinder: 3.25 },
      { cylinder: 3.51 },
      { cylinder: 3.75 },
      { cylinder: 4.01 },
      { cylinder: 4.25 },
      { cylinder: 4.51 },
      { cylinder: 4.75 },
      { cylinder: 5.01 },
      { cylinder: 5.25 },
      { cylinder: 5.51 },
      { cylinder: 5.75 },
      { cylinder: 6.01 },
      { cylinder: 6.25 },
      { cylinder: 6.51 },
      { cylinder: 6.75 },
      { cylinder: 7.01 },
      { cylinder: 7.25 },
      { cylinder: 7.51 },
      { cylinder: 7.75 },
      { cylinder: 8.01 },
      { cylinder: 8.25 },
      { cylinder: 8.51 },
      { cylinder: 8.75 },
      { cylinder: 9.01 },
      { cylinder: 9.25 },
      { cylinder: 9.51 },
      { cylinder: 9.75 },
      { cylinder: 10.01 },
      { cylinder: 10.25 },
      { cylinder: 10.51 },
      { cylinder: 10.75 },
      { cylinder: 11.01 },
      { cylinder: 11.25 },
      { cylinder: 11.51 },
      { cylinder: 11.75 },
      { cylinder: 12.01 },
      { cylinder: 12.25 },
      { cylinder: 12.51 },
      { cylinder: 12.75 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cylinders", null, {});
  },
};
