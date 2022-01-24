const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
	const alias = "User"; // esto debería estar en singular
	const cols = {
		name: dataTypes.STRING,

		lastName: dataTypes.STRING,

		country: dataTypes.STRING,

		dateBirth: dataTypes.DATE,

		country: dataTypes.STRING,

		email: dataTypes.STRING,

		password: dataTypes.STRING,

		confirmPassword: dataTypes.STRING,

		streetAddress: dataTypes.STRING,

		buySell: dataTypes.STRING,

		favoriteCategory: dataTypes.STRING,

		avatar: dataTypes.STRING,
	};
	const config = {
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		deletedAt: false,
	};
	const User = sequelize.define(alias, cols, config);

	User.associate = function (modelos) {
		User.belongsTo(modelos.Car, {
			as: "car",
			foreignKey: "user_id",
		});
		User.belongsToMany(modelos.Orders, {
			as: "orders",
			through: "order_detail",
			foreignKey: "user_id",
			otherId: "order_id",
		});
	};
	return User;
};
