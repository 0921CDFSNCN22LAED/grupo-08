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
    deletedAt: false,
  };
  const LeftEye = sequelize.define(alias, cols, config);

  LeftEye.associate = (models) => {
    LeftEye.hasOne(models.ValueEye, {
      as: "valueEye",
      foreignKey: "leftEye_id",
    });
  };
  return LeftEye;
};
