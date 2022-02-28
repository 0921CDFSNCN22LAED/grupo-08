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
    Prescription.belongsToMany(models.Value_Eye, {
      as: "valueEye",
      foreignKey: "prescription_id",
      through: "prescription_values",
      // otherKey: "valueEye_id",
    });
  };

  return Prescription;
};
