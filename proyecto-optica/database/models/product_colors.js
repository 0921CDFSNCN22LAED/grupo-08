const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "productColor"; // esto debería estar en singular
  const cols = {
    product_id: dataTypes.INTEGER,

    color_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const productColor = sequelize.define(alias, cols, config);
  return productColor;
};
