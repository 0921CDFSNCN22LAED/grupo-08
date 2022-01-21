const { Sequelize } = require(".");
const dataTypes = Sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Order"; // esto debería estar en singular
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    orderDate: {
      type: dataTypes.DATE,
      allowNull: false,
    },
  };
  const config = {
    tableName: "oders",
    timestamps: true,
  };
  const Orders = sequelize.define(alias, cols, config);

  return Orders;
};
