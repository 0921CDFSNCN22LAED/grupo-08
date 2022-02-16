const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "PupillaryDistance";
  const cols = {
    pupillaryDistance: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const PupillaryDistance = sequelize.define(alias, cols, config);
  PupillaryDistance.associate = (models) => {
    PupillaryDistance.hasMany(models.ValueEye, {
      as: "valueEye",
      foreignKey: "pupillaryDistance_id",
    });
  };

  return PupillaryDistance;
};
