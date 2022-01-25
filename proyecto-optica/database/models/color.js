const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
	const alias = "Color"; // esto debería estar en singular
	const cols = {
		colorName: dataTypes.DATE,
	};
	const config = {
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		deletedAt: false,
	};
	const Color = sequelize.define(alias, cols, config);

	Color.associate = function (models) {
		Color.belongsToMany(models.Products, {
			as: "Product",
			through: "product_color",
			foreignKey: "color_id",
			otherKey: "product_id",
		});
	};

	return Color;
};
