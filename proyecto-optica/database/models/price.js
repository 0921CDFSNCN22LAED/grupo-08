const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Price"; // siempre en singular
  const cols = {
    price: dataTypes.DOUBLE,

    discount: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Price = sequelize.define(alias, cols, config);

  Price.associate = function (models) {
    //la clave foranea en la tabla Price
    //en la tabla Price el campo que hace referencia a la FK del precio: price_id
    Price.belongsTo(models.Product, {
      as: "products",
      foreignKey: "product_id",
    });
  };
  return Price;
};
