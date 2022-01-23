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
  return Category;
};
