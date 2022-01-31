const jsonHelper = require("./jsonHelper");
const funciones = require("./functions");
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
  countImagesActives: (imagesInDb) => {
    let countImagesActives = 0;
    for (let i = 0; i < imagesInDb.length; i++) {
      if (imagesInDb[i].active == 1) {
        countImagesActives++;
      }
    }
    return countImagesActives;
  },

  dataImages: (files) => {
    //files me devuelve un array de objetos con todos los datos de las fotos de multer
    //creo la estructura que hay en mi db y le asigno los datos que van llegando por multer
    const array = [];
    for (let file of files) {
      const obj = {};
      (obj.filename = file.filename),
        (obj.format = funciones.extractFormat(file.path)),
        (obj.active = 1);
      array.push(obj);
    }
    return array;
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
