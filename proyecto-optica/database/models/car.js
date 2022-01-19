module.exports = (sequelize, dataTypes) => {
  const alias = "Car";
  const cols = {
    id: {
      type: dataTypes.BIGINIT(100),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    orderDate: dataTypes.DATEONLYE,
    allowNull: false,
  };
  const config = {
    tableName: "user",
    timestamps: true,
  };
  const Car = sequelize.define(alias, cols, config);
  return Car;
};
