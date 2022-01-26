const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Color"; // siempre singular
  const cols = {
    colorName: dataTypes.DATE,
    product_id: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Color = sequelize.define(alias, cols, config);

  Color.associate = function (models) {
    Color.belongsTo(models.Product, {
      as: "products",
      foreignKey: "product_id",
    });
  };

  return Color;
};
