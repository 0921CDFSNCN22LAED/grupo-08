const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Image"; //siempre en singular
  const cols = {
    filename: dataTypes.STRING,
    format: dataTypes.STRING,
    product_id: dataTypes.INTEGER,
    status: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Image = sequelize.define(alias, cols, config);
  Image.associate = (models) => {
    //al belongsTo hay que leerlo al revés, osea que lo aplico cuando la FK esta en esa tabla 
    //(en la tabla Image el campo que hacer referencia a la tabla Product es image_id osea la foreignKey)
    Image.belongsTo(models.Product, {
      as: "product",
      foreignKey: "product_id",
    });
  };
  return Image;
};
