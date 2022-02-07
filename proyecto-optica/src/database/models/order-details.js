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
    deletedAt: false,
  };
  const OrderDetail = sequelize.define(alias, cols, config);
  OrderDetail.associate = (models) => {
    //preguntar  * OrderDetail.hasOne(models.Optic * si esta bien , y sino , como se hace ?
    OrderDetail.hasOne(models.Optic, {
      // pongo hasOne porque con esa orden solo vale para una óptica o para un seller
      as: "seller",
      as: "optic",
      foreignKey: "orderDetail_id",
    });
    OrderDetail.hasOne(models.Seller, {
      as: "seller",
      foreignKey: "orderDetail_id",
    });
  };
  return OrderDetail;
};
