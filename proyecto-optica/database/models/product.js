const { Sequelize } = require(".");
const dataTypes = Sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Product"; // esto debería estar en singular
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    productName: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    shortDescription: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    longDescription: {
      type: dataTypes.TEXT,
      allowNull: false,
    },
  };
  const config = {
    tableName: "products",
    timestamps: true,
  };
  const Products = sequelize.define(alias, cols, config);

  Products.associate = function (modelos) {
    Products.belongsTo(modelos.Price, {
      as: "price",
      foreignKey: "price_id",
    });
    Products.belongsToMany(modelos.Color, {
      as: "colors",
      through: "product_color",
      foreignKey: "product_id",
      otherKey: "color_id",
    });
  };

  return Products;
};
