const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Size";
  const cols = {
    size: dataTypes.STRING,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Size = sequelize.define(alias, cols, config);

  Product.associate = function (modelos) {
    Product.belongsToMany(modelos.Sizes, {
      as: "Size",
      through: "products_sizes",
      foreignKey: "size_id",
      otherKey: "product_id",

    });
  }
  
  return Size;
};