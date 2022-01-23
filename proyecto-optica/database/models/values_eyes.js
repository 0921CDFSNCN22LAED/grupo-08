const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "valueEye";
  const cols = {
    rightEye_id: dataTypes.INTEGER,
    leftEye_id: dataTypes.INTEGER,
    pupillaryDistance_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const valueEye = sequelize.define(alias, cols, config);
  return valueEye;
};
