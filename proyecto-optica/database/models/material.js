const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Material"; //siempre en singular
  const cols = {
    material: dataTypes.STRING,
    product_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Material = sequelize.define(alias, cols, config);
  Material.associate = (models) => {
    Material.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
  };

  return Material;
};
