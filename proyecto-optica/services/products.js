const jsonHelper = require("../lib/jsonHelper");
const libFunctions = require("../lib/libFunctions");
const productsFilePath = "../data/productsDataBase.json";
const products = jsonHelper.getData(productsFilePath);

module.exports = {
  products,

  listProductsHome: () => {
    const arrayProducts = [];
    const productsHome = products.forEach((element, index) => {
      if (index < 12) {
        arrayProducts.push(element);
      }
    });
    return arrayProducts;
  },

  findOne: (productId) => {
    const product = products.find((prod) => {
      return productId == prod.productId;
    });
    return product;
  },

  createOne: (body, files) => {
    const productId = Date.now();

    const filenames = libFunctions.fileNameImage(files);
    const name = libFunctions.firstLetterUpperCase(body.name);
    libFunctions.estructuraCreateObject(
      productId,
      body,
      name,
      filenames,
      products
    );
    return productId;
  },
  search: (query) => {
    const searchar = products.filter((prod) => {
      return prod.name.indexOf(libFunctions.firstLetterUpperCase(query)) != -1;
    });
    return searchar;
  },
  updateOne: (productId, body, files) => {
    const index = libFunctions.indexOne(productId, products);
    const filenames = libFunctions.fileNameImage(files);
    const name = libFunctions.firstLetterUpperCase(body.name);
    libFunctions.estructuraUpdateObject(body, name, filenames, index, products);
  },
  eliminatedOne: (productId) => {
    const index = products.findIndex((prod) => {
      return productId == prod.productId;
    });
    products.splice(index, 1);
    jsonHelper.seveData(products, productsFilePath);
  },
};
