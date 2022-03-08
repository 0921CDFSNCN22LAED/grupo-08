const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Shopping_car";
  const cols = {
    user_id: dataTypes.INTEGER,
    // orderDate: dataTypes.DATE,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Shopping_car = sequelize.define(alias, cols, config);
  Shopping_car.associate = function (models) {
    //al belongsTo hay que leerlo al revés se lee =>
    //(en la tabla Shopping_cars el campo que hacer referencia a la tabla User es user_id osea la foreignKey)
    //documentación
    //La A.belongsTo(B)asociación significa que existe una relación uno a uno entre A y B, con la clave externa definida en el modelo fuente(A).
    Shopping_car.belongsTo(models.User, {
      as: "user",
      foreignKey: "user_id",
    });
    Shopping_car.belongsToMany(models.Product, {
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      constraints: false,
      as: "product",
      through: "product_shopping_cars",
      foreignKey: "shoppingCar_id",
      paranoid: true,
      //otherKey: "products_id",
    });
  };
  return Shopping_car;
};
