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
  return Prescription;
};
