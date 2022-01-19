const { Sequelize } = require(".");
const dataTypes = Sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Car";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    orderDate: dataTypes.DATE,
    allowNull: false,
  };
  const config = {
    tableName: "user",
    timestamps: true,
  };
  const Car = sequelize.define(alias, cols, config);
  return Car;
};
