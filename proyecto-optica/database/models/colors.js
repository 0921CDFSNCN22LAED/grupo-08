module.exports = (sequelize, dataTypes) => {
  const alias = "colors"; // esto debería estar en singular
  const cols = {
    id: {
      type: dataTypes.BIGINT(10).UNSIGNED,
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
