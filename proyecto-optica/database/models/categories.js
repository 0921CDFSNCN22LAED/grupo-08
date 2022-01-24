const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
modelue.exports = (sequelize) => {
  const alias = "Category";
  const cols = {
    categoryName: dataTypes.STRING,
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Category = sequelize.define(alias, cols, config);

  Category.associate = function (modelos) {
   Category.belongsToMany(modelos.Product, {
      as: "Product",
      through: "products_categories",
      foreignKey: "category_id", 
      otherKey: "product_id",
    });

  };
  return Category;
};
