const { Sequelize } = require(".");
const dataTypes = Sequelize.DataTypes;
modelue.exports = (sequelize) => {
  const alias = "Category";
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING(200),
      allowNull: true,
    },
  };
  const config = {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: false,
  };
  const Categories = sequelize.define(alias, cols, config);
  return Categories;
};
