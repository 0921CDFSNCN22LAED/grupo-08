const jsonHelper = require("./jsonHelper");
const productsFilePath = "../data/productsDataBase.json";
module.exports = {
  firstLetterUpperCase: (query) => {
    const upperCaseInput = query.charAt(0).toUpperCase() + query.slice(1);
    return upperCaseInput;
  },
  indexOne: (productId, products) => {
    const index = products.findIndex((prod) => {
      /*retorna el indice del elemento que cumple esa condicion*/
      return productId == prod.productId;
    });
    return index;
  },
  fileNameImage: (files) => {
    const filenames = files.map((image) => {
      return image.filename;
    });
    return filenames;
  },
  estructuraCreateObject: (productId, body, name, filenames, products) => {
    const createProduct = {
      productId: productId,
      name: name,
      shortDescription: body.shortDescription,
      price: {
        price: body.price,
        discount: body.discount,
      },
      seller: "",
      category: "",
      image: filenames,
      specification: {
        color: body.color,
        longDescription: body.longDescription,
        size: body.size,
        weigth: body.weigth,
        material: body.material,
        shape: body.shape,
        border: body.border,
        glassSpecification: body.glassSpecification,
      },
      envio: body.envio,
    };
    products.push(createProduct);

    jsonHelper.seveData(products, productsFilePath);
  },
  estructuraUpdateObject: (body, name, filenames, index, products) => {
    const images = products[index].image;
    if (images.length > 0) {
      for (image of filenames) {
        images.push(image);
      }
    } else {
      images = filenames;
    }
    const updateProduct = {
      productId: products[index].productId,
      name: name,
      shortDescription: body.shortDescription,
      price: {
        price: body.price,
        discount: body.discount,
      },
      seller: "",
      category: "",
      image: images,
      specification: {
        color: body.color,
        longDescription: body.longDescription,
        size: body.size,
        weigth: body.weigth,
        material: body.material,
        shape: body.shape,
        border: body.border,
        glassSpecification: body.glassSpecification,
      },
      envio: body.envio,
    };
    products[index] = updateProduct;
    jsonHelper.seveData(products, productsFilePath);
  },
};
