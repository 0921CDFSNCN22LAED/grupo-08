const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
	const alias = "Price"; // esto debería estar en singular
	const cols = {
		price: dataTypes.DOUBLE,

		discount: dataTypes.INTEGER,
	};
	const config = {
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		deletedAt: false,
	};
	const Price = sequelize.define(alias, cols, config);

	Price.associate = function (models) {
		Price.hasMany(models.Products, {
			as: "Product",
			foreignKey: "price_id",
		});
	};
	return Price;
};
