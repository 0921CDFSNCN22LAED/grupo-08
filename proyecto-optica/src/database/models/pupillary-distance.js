const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "PupillaryDistance";
  const cols = {
    oneValue: dataTypes.REAL,
    rightPD: dataTypes.REAL,
    leftPD: dataTypes.REAL,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const PupillaryDistance = sequelize.define(alias, cols, config);
  PupillaryDistance.associate = (models) => {
    PupillaryDistance.hasOne(models.ValueEye, {
      as: "valueEye",
      foreignKey: "pupillaryDistance_id",
    });
  };

  return PupillaryDistance;
};
