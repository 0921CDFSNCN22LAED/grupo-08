const db = require("../database/models");
const jsonHelper = require("../lib/jsonHelper");
const libFunctions = require("../lib/libFunctions");
const productsFilePath = "../data/productsDataBase.json";
const products = jsonHelper.getData(productsFilePath);

module.exports = {
  listProductsHome: async () => {
    try {
      const products = await db.Product.findAll({
        where: {
          active: 1,
        },
        include: [{ association: "image" }, { association: "price" }],
        limit: 12,
      });

      return products;
    } catch (error) {
      console.log(error);
    }
  },

  findOne: (productId) => {
    try {
      const product = products.find((prod) => {
        return productId == prod.productId;
      });
      return product;
    } catch (error) {
      console.log(error);
    }
  },

  createOne: async (body, files) => {
    try {
      const product = await db.Product.create({
        name: body.name,
        shortDescription: body.shortDescription,
        longDescription: body.longDescription,
        material_id: body.material,
        active: 1,
      });
      product.setSize(body.size);
      product.setMaterial(body.material);
      const productId = product.id;
      //  IMAGE
      const dataImages = libFunctions.dataImages(files);
      //dataImages es un array de objetos que tienen la estructura qeu requiere la DB (es decir las cols con sus filas)
      dataImages.forEach(async (file) => {
        const image = await db.Image.create({
          ...file,
        });
        image.setProduct(productId);
      });
      //  PRICE
      let priceDiscount;
      if (body.discount) {
        const discount = (body.discount * body.price) / 100;
        priceDiscount = body.price - discount;
      } else {
        priceDiscount = null;
      }
      const price = await db.Price.create({
        price: body.price,
        discount: body.discount,
        priceDiscount: priceDiscount,
      });
      price.setProduct(productId);
      //  COLOR
      const color = await db.Color.create({
        name: body.color,
      });
      color.setProduct(productId);
      return productId;
    } catch (error) {
      console.log(error);
    }
    //falta hacer todo eso con todas los demás campos del formulario que tengan relaciones
  },
  search: (query) => {
    const searchar = products.filter((prod) => {
      return prod.name.indexOf(libFunctions.firstLetterUpperCase(query)) != -1;
    });
    return searchar;
  },
  updateOne: async (productId, body, files) => {
    try {
      const name = libFunctions.firstLetterUpperCase(body.name);
      const newImages = libFunctions.dataImages(files);
      //newImages me devuelve un array de objetos como esta en la db la tabla images
      const product = await db.Product.update(
        {
          name: body.name,
          shortDescription: body.shortDescription,
          longDescription: body.longDescription,
          active: 1,
        },
        {
          where: {
            id: productId,
          },
        }
      );
      product.setSize(body.size);
      product.setMaterial(body.material);
      let priceDiscount;
      if (body.discount) {
        const discount = (body.discount * body.price) / 100;
        priceDiscount = body.price - discount;
      } else {
        priceDiscount = null;
      }
      const price = await db.Price.update(
        {
          price: body.price,
          discount: body.discount,
          priceDiscount: priceDiscount,
        },
        {
          where: {
            id: productId,
          },
        }
      );

      const color = await db.Color.update(
        {
          name: body.color,
        },
        {
          where: {
            id: productId,
          },
        }
      );
      const ImagesInDB = await db.Image.findAll({
        //devuelve instancia de Image, que es un array de objetos de las datos de imágenes relacionadas con producto en la DB
        where: {
          product_id: productId,
        },
        raw: true,
        nest: true,
      });
      const countImagesActives = libFunctions.countImagesActives(ImagesInDB);
      //devuelve un numero con la cantidad de imágenes que hay en la db relacionada con este producto
      const countImagesIngresadas = libFunctions.countImagesActives(newImages);
      //devuelve un numero con la cantidad de imágenes que quiere ingresar
      if (8 - countImagesActives > 0) {
        //si tiene menos de 8 fotos activas entra al if
        for (let i = 0; i < 8 - countImagesActives; i++) {
          //maximo de 8 fotos , recorro el nuevo array con fotos y las voy subiendo a la db hasta que complete un máximo de 8
          if (countImagesIngresadas > i) {
            // aca entra la cantidad de veces que de fotos tiene
            //sin ese if, tendría lugar para 5 fotos sube 3  pero en la db quedan subidas 5 y 2 de las 5 están en null
            const image = await db.Image.create({
              ...newImages[i],
              product_id: productId,
            });
          }
        }
      }
      return `/products/${productId}`;
    } catch (error) {
      console.log(error);
    }
  },

  eliminatedOne: async (productId) => {
    try {
      const product = await db.Product.findByPk(productId);
      product.set({
        active: 0,
      });
      product.save();
    } catch (error) {
      console.log(error);
    }
  },
};
