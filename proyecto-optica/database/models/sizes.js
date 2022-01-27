const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
	const alias = "Size"; //siempre en singular, en mayus
	const cols = {
		size: dataTypes.STRING,

		product_id: dataTypes.INTEGER,
	};
	const config = {
		timestamps: true,
		deletedAt: false,
	};
	const Size = sequelize.define(alias, cols, config);

	//alias de comentarios van en minus

	Size.associate = (models) => {
		Size.belongsTo(models.Product, {
			as: "product",
			foreignKey: "product_id",
		});
	};

	return Size;
};
