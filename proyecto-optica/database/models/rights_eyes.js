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
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const RightEye = sequelize.define(alias, cols, config);
  //preguntar como usar belongsTO
  //usan la foreignKey porque no usan hasOne?
  RightEye.associate = (models) => {
    RightEye.belongsTo(models.ValueEye, {
      as: "valueEye",
      foreignKey: "rightEye_id",
    });
  };
  return RightEye;
};
