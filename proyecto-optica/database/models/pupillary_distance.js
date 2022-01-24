const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "pupillaryDistance";
  const cols = {
    oneValue: dataTypes.REAL,
    rightPD: dataTypes.REAL,
    leftPD: dataTypes.REAL,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const pupillaryDistance = sequelize.define(alias, cols, config);

  pupillaryDistance.associate = (models) => {
    pupillaryDistance.belongsTo(models.ValueEye, {
      as: "valueEye",
      foreignKey: "pupillaryDistance_id",
    });
    return pupillaryDistance;
  };
};
