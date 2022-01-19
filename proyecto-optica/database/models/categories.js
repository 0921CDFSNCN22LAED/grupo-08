modelue.exports = (sequelize, dataTypes) => {
	let alias = "Categories";
	let cols = {
		id: {
			type: dataTypes.BIGINIT(100),
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: {
			type: dataTypes.STRING(200),
			allowNull: true,
		},
	};
	let config = {
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		deletedAt: false,
	};
	const Categories = sequelize.define(alias, cols, config);
	return Categories;
};
