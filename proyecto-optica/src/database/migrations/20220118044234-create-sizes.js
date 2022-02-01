"use strict";
module.exports = {
<<<<<<< HEAD:proyecto-optica/database/migrations/20220118044234-create-sizes.js
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("sizes", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			size: {
				type: Sequelize.STRING(2),
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
		await queryInterface.dropTable("sizes");
	},
=======
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sizes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      size: {
        type: Sequelize.STRING(2),
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
    await queryInterface.dropTable("sizes");
  },
>>>>>>> e1a826ee316c0f253ebe3317ab333989d90fb48a:proyecto-optica/src/database/migrations/20220118044234-create-sizes.js
};
