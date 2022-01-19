const { Sequelize } = require(".");
const dataTypes = Sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "price"; // esto debería estar en singular
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    price: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    discount: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };
  const config = {
    tableName: "price",
    timestamps: true,
  };
  const Price = sequelize.define(alias, cols, config);

  Price.associate = function (modelos) {
    Price.belongsTo(modelos.Products, {
      as: "products",
      foreignKey: "price_id",
    });
  };
  return Price;
};
