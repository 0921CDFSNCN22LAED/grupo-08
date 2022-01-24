const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
	const alias = "Product"; // esto debería estar en singular
	const cols = {
		productName: dataTypes.STRING,

		shortDescription: dataTypes.STRING,

		longDescription: dataTypes.TEXT,

		prescription_id: dataTypes.INTEGER,

		image_id: dataTypes.INTEGER,
	};
	const config = {
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		deletedAt: false,
	};
	const Product = sequelize.define(alias, cols, config);

	Product.associate = function (modelos) {
		Product.belongsTo(modelos.Price, {
			as: "Price",
			foreignKey: "price_id",
		});
		Product.belongsToMany(modelos.Color, {
			as: "Color",
			through: "product_color",
			foreignKey: "product_id",
			otherKey: "color_id",
		});
		Product.belongsTo(modelos.Image, {
			as: "Image",
			foreignKey: "image_id",
		});
		Product.belongsToMany(modelos.Sizes, {
			as: "Size",
			through: "products_sizes",
			foreignKey: "product_id",
			otherKey: "size_id",
		});
		Product.belongsToMany(modelos.Category, {
			as: "Category",
			through: "products_categories",
			foreignKey: "product_id",
			otherKey: "category_id",
		});
		Product.belongsToMany(modelos.Prescription, {
			as: "Prescription",
			through: "products_prescription",
			foreignKey: "product_id",
			otherKey: "prescription_id",
		});
		Product.belongsTo(modelos.Orders, {
			as: "orders",
			through: "orders_details",
			foreignKey: "product_id",
			otherKey: "order_id",
		});
		Product.belongsToMany(modelos.Car, {
			as: "car",
			through: "products_cars",
			foreignKey: "product_id",
			otherKey: "car_id",
		});
	};

	return Product;
};
