const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "OrderDetail";
  const cols = {
    order_id: dataTypes.INTEGER,
    product_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const OrderDetail = sequelize.define(alias, cols, config);
  return OrderDetail;
};
