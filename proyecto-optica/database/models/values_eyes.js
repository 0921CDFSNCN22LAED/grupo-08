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
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const ValueEye = sequelize.define(alias, cols, config);
  ValueEye.associate = (models) => {
    ValueEye.belongsToMany(models.Prescription, {
      as: "prescription",
      through: "prescriptions_values",
      foreignKey: "valueEye_id",
      otherKey: "prescription_id",
    });
    ValueEye.belongsTo(models.RightEye, {
      as: "rightEye",
      foreignKey: "rightEye_id",
    });
    ValueEye.belongsTo(models.LeftEye, {
      as: "lefts_eyes",
      foreignKey: "leftEye_id",
    });
    ValueEye.belongsTo(models.pupillaryDistance, {
      as: "pupillary_distances",
      foreignKey: "pupillaryDistance_id",
    });
  };
  return ValueEye;
};
