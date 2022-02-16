const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "ShoppingCart";
  const cols = {
    user_id: dataTypes.INTEGER,
    orderDate: dataTypes.DATE,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const ShoppingCart = sequelize.define(alias, cols, config);
  ShoppingCart.associate = function (models) {
    //al belongsTo hay que leerlo al revés se lee =>
    //(en la tabla ShoppingCarts el campo que hacer referencia a la tabla User es user_id osea la foreignKey)
    //documentación
    //La A.belongsTo(B)asociación significa que existe una relación uno a uno entre A y B, con la clave externa definida en el modelo fuente(A).
    ShoppingCart.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id",
    });
    ShoppingCart.belongsToMany(models.Product, {
      as: "shoppingCar",
      through: "product_shopping_cars",
      foreignKey: "shoppingCar_id",
      otherKey: "products_id",
    });
  };
  return ShoppingCart;
};
