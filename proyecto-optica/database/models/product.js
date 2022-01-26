const sequelize = require("sequelize");
const dataTypes = sequelize.DataTypes;
module.exports = (sequelize) => {
  const alias = "Product"; // esto debería estar en singular
  const cols = {
    name: dataTypes.STRING,

    shortDescription: dataTypes.STRING,

    longDescription: dataTypes.TEXT,

    prescription_id: dataTypes.INTEGER,

    status: dataTypes.INTEGER,
  };
  const config = {
    timestamps: true,
    deletedAt: false,
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    //__hasMany se lee => en el modelo Price la clave foránea que hace referencia al modelo Product es price_id
    Product.hasMany(models.Price, {
      as: "price",
      foreignKey: "product_id",
    });
    Product.hasMany(models.Color, {
      as: "color",
      foreignKey: "product_id",
    });
    //la clave foránea de products en la tabla categories es product_id   y...
    //la otherKey es category_id, que visto desde la otra tabla seria al revés,
    Product.belongsToMany(models.Category, {
      as: "category",
      through: "products_category",
      foreignKey: "product_id",
      otherKey: "category_id",
    });

    Product.hasMany(models.Image, {
      as: "image",
      foreignKey: "product_id",
    });

    Product.hasMany(models.Material, {
      as: "material",
      foreignKey: "product_id",
    });

    Product.belongsToMany(models.ShoppingCart, {
      as: "shoppingCart",
      through: "product_shopping_cars",
      foreignKey: "product_id",
      otherKey: "shoppingCar_id",
    });

    Product.belongsToMany(models.Order, {
      as: "order",
      through: "orders_details",
      foreignKey: "product_id",
      otherKey: "order_id",
    });

    Product.hasMany(models.Size, {
      as: "size",
      foreignKey: "product_id",
    });
  };

  return Product;
};
