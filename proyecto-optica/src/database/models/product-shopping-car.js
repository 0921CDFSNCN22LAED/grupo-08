const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "productShoppingCar"; // esto debería estar en singular
  const cols = {
    product_id: dataTypes.INTEGER,
    shoppingCar_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const productShoppingCar = sequelize.define(alias, cols, config);

  //productShoppingCar.associate = function (models) {
  //la clave foranea en la tabla Price
  //en la tabla Price el campo que hace referencia a la foreignKey del precio es price_id
  /*  productShoppingCar.belongsTo(models.Product, {
      as: "products",
      foreignKey: "price_id",
    }); */
  return productShoppingCar;
};
