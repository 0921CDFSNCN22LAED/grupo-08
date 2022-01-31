"use strict";
/* const bcryptjs = require("bcryptjs");
const password = bcryptjs.hashSync("12345678", 10);
console.log(password); */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Admin",
        lastName: "Admin",
        country: "Admin",
        dateBirth: "2022-01-03 00:00:00",
        email: "admin@admin.com",
        password:
          "$2a$10$DRUCinrbPtHwG.jMNgeF5.SRAgbvwE8LrzsJz3hGegwmZJ9kmIXbK",
        confirmPassword:
          "$2a$10$DRUCinrbPtHwG.jMNgeF5.SRAgbvwE8LrzsJz3hGegwmZJ9kmIXbK",
        streetAddress: "Admin",
        buySell: null,
        favoriteCategory: null,
        avatar: "default.png",
        active: 1,
        admin: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
