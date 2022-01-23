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
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const PrescriptionValue = sequelize.define(alias, cols, config);
  return PrescriptionValue;
};
