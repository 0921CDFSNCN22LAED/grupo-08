const { Sequelize } = require(".");
const dataTypes = Sequelize.DataTypes;
modelue.exports = (sequelize) => {
  const alias = "Prescription";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.BOLEEAN,
      allowNull: true,
    },
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Prescriptions = sequelize.define(alias, cols, config);
  return Prescriptions;
};
