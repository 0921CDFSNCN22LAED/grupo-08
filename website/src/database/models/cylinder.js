const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Cylinder";
  const cols = {
    cylinder: dataTypes.DOUBLE,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Cylinder = sequelize.define(alias, cols, config);
  Cylinder.associate = (models) => {
    Cylinder.hasMany(models.ValueEye, {
      as: "valueEye",
      foreignKey: "cylinder_id",
    });
  };
  return Cylinder;
};
