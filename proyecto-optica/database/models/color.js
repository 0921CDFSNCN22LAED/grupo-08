const { Sequelize } = require(".");
const dataTypes = Sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "color"; // esto debería estar en singular
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // created_at: dataTypes.TIMESTAMP,
    // updated_at: dataTypes.TIMESTAMP,
    nameColor: {
      type: dataTypes.DATE,
      allowNull: false,
    },
  };
  const config = {
    tableName: "colors",
    timestamps: true,
  };
  const Color = sequelize.define(alias, cols, config);

  Color.associate = function (modelos) {
    Color.belongsToMany(modelos.Products, {
      as: "products",
      through: "product_color",
      foreignKey: "color_id",
      otherKey: "product_id",
    });
  };

  return Colors;
};
