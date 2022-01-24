const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Car";
  const cols = {
    user_id: dataTypes.INTEGER,
    orderDate: dataTypes.DATE,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Car = sequelize.define(alias, cols, config);

  Car.associate = function (modelos) {
    Car.belongsTo(modelos.User, {
      as: "user",
      foreignKey: "user_id",
    });
  };

  return Car;
};

