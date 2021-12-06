const { name } = require("ejs");
const fs = require("fs");
const path = require("path");
const { brotliDecompress } = require("zlib");
const libFunctions = require("../lib/libFunctions");
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const productsDateBase = fs.readFileSync(productsFilePath, {
  encoding: "utf-8",
});

const products = JSON.parse(productsDateBase);

function saveProducts() {
  const texto = JSON.stringify(products, null, 4);
  fs.writeFileSync(productsFilePath, texto, "utf-8");
}

module.exports = {
  products,

  saveProducts,

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
      products,
      saveProducts
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
    libFunctions.estructuraUpdateObject(
      body,
      name,
      filenames,
      index,
      products,
      saveProducts
    );
  },
  eliminatedOne: (productId) => {
    const index = products.findIndex((prod) => {
      return productId == prod.productId;
    });
    products.splice(index, 1);
    saveProducts();
  },
};
