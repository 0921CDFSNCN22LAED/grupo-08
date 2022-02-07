const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "RightEye";
  const cols = {
    sphere: dataTypes.REAL,
    cylinder: dataTypes.REAL,
    axis: dataTypes.REAL,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const RightEye = sequelize.define(alias, cols, config);
  RightEye.associate = (models) => {
    RightEye.hasOne(models.ValueEye, {
      as: "valueEye",
      foreignKey: "rightEye_id",
    });
  };
  return RightEye;
};
