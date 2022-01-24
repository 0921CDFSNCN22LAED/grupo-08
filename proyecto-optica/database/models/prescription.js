const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
modelue.exports = (sequelize) => {
  const alias = "Prescription";
  const cols = {
    prescriptionName: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Prescription = sequelize.define(alias, cols, config);
  Prescription.associate = (models) => {
    Prescription.hasMany(models.Product);
    Prescription.belongsToMany(models.ValueEye, {
      as: "ValueEyes",
      through: "prescriptions_values",
      foreignKey: "prescription_id",
      otherKey: "values_eyes",
    });
  };
  return Prescription;
};
