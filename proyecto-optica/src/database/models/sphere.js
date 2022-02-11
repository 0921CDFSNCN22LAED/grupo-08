const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Sphere";
  const cols = {
    sphere: dataTypes.DOUBLE,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Sphere = sequelize.define(alias, cols, config);

  Sphere.associate = (models) => {
    Sphere.hasMany(models.ValueEye, {
      as: "valueEye",
      foreignKey: "sphere_id",
    });
  };
  return Sphere;
};
