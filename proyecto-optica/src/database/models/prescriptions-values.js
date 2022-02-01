const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "PrescriptionValue";
  const cols = {
    prescription_id: dataTypes.INTEGER,
    valueEye_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const PrescriptionValue = sequelize.define(alias, cols, config);
  PrescriptionValue.associate = (models) => {
    PrescriptionValue.belongsTo(models.Prescription, {
      as: "Prescription",
      foreignKey: "prescription_id",
    });
  };
  return PrescriptionValue;
};
