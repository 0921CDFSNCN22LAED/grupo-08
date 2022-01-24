const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Product"; // esto debería estar en singular
  const cols = {
    productName: dataTypes.STRING,

    shortDescription: dataTypes.STRING,

    longDescription: dataTypes.TEXT,

    prescription_id: dataTypes.INTEGER,

    image_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (modelos) {
    Product.hasMany(modelos.Price, {
      as: "price",
      foreignKey: "price_id",
    });
    Product.belongsToMany(modelos.Color, {
      as: "colors",
      through: "product_color",
      foreignKey: "product_id",
      otherKey: "color_id",
    });
  };

  return Product;
};