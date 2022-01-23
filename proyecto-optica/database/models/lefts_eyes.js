const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "LeftEye";
  const cols = {
    sphere: dataTypes.REAL,
    cylinder: dataTypes.REAL,
    axis: dataTypes.REAL,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const LeftEye = sequelize.define(alias, cols, config);
  return LeftEye;
};
