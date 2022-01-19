module.exports = (sequelize, dataTypes) => {
  const alias = "Orders"; // esto debería estar en singular
  const cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    oderDate: {
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
