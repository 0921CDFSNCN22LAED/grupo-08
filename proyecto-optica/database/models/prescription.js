modelue.exports = (sequelize, dataTypes) => {
	let alias = "Prescriptions";
	let cols = {
		id: {
			type: dataTypes.BIGINIT(100),
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		name: {
			type: dataTypes.BOLEEAN,
			allowNull: true,
		},
	};
	let config = {
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
		deletedAt: false,
	};
	const Prescriptions = sequelize.define(alias, cols, config);
	return Prescriptions;
};
