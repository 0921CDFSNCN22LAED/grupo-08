const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Order";
  const cols = {
    user_id: dataTypes.INTEGER,
    orderDate: dataTypes.DATE,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Order = sequelize.define(alias, cols, config);

  return Order;
};

