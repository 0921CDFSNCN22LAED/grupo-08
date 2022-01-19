const { Sequelize } = require(".");
const dataTypes = Sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "User"; // esto debería estar en singular
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    dateBirth: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    country: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(500),
      allowNull: false,
    },
    streetAdress: {
      type: dataTypes.BIGINT(100),
      allowNull: false,
    },
  };
  const config = {
    tableName: "user",
    timestamps: true,
  };
  const User = sequelize.define(alias, cols, config);

  User.associate = function (modelos) {
    User.belongsTo(modelos.Car, {
      as: "car",
      foreignKey: "user_id",
    });
    User.belongsToMany(modelos.Orders, {
      as: "orders",
      through: "order_detail",
      foreignKey: "user_id",
      otherId: "order_id",
    });
  };
  return User;
};
