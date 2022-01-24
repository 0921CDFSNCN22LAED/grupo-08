const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Image";
  const cols = {
    name: dataTypes.STRING,
    format: dataTypes.STRING,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Image = sequelize.define(alias, cols, config);


  Image.associate = function (modelos) {
    Image.belongsTo(modelos.Products, {
      as: "Product",
      foreignKey: "image_id",
    });
  };
  return Price;
};

