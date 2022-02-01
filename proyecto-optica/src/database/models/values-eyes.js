const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "ValueEye";
  const cols = {
    rightEye_id: dataTypes.INTEGER,
    leftEye_id: dataTypes.INTEGER,
    pupillaryDistance_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const ValueEye = sequelize.define(alias, cols, config);
  ValueEye.associate = (models) => {
    ValueEye.belongsTo(models.LeftEye, {
      as: "leftEye",
      foreignKey: "leftEye_id",
    });

    ValueEye.belongsTo(models.PupillaryDistance, {
      as: "pupillaryDistance",
      foreignKey: "pupillaryDistance_id",
    });

    ValueEye.belongsTo(models.RightEye, {
      as: "rightEye",
      foreignKey: "rightEye_id",
    });
  };
  return ValueEye;
};
