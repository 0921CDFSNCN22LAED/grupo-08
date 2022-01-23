const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "productSize"; // esto debería estar en singular
  const cols = {
    product_id: dataTypes.INTEGER,

    size_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const productSize = sequelize.define(alias, cols, config);
  return productSize;
};
