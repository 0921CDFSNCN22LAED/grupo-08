const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Prescription";
  const cols = {
    name: dataTypes.STRING,
    valueStatus: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Prescription = sequelize.define(alias, cols, config);
  Prescription.associate = (models) => {
    Prescription.hasMany(models.PrescriptionValue, {
      as: "prescriptionValue",
      foreignKey: "prescription_id",
    });
  };

  return Prescription;
};
