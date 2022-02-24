const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "ValueEye";
  const cols = {
    sphere_id: dataTypes.INTEGER,
    cylinder_id: dataTypes.INTEGER,
    pupillaryDistance_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const ValueEye = sequelize.define(alias, cols, config);
  ValueEye.associate = (models) => {
    ValueEye.belongsTo(models.Sphere, {
      as: "sphere",
      foreignKey: "sphere_id",
    });

    ValueEye.belongsTo(models.Pupillary_Distance, {
      as: "pupillaryDistance",
      foreignKey: "pupillaryDistance_id",
    });

    ValueEye.belongsTo(models.Cylinder, {
      as: "cylinder",
      foreignKey: "cylinder_id",
    });
  };
  return ValueEye;
};
