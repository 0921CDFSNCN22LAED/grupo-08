const products = [
  {
    id: 1,
    name: "JOSS negro mate",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/joss-negro-mate.jpg",
    category: "lente",
    color: "black",
    size: "M",
    price: 6999,
  },
  {
    id: 2,
    name: "JOSS rosa",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/joss-rosa.jpg",
    category: "lente",
    color: "rose",
    size: "M",
    price: 7499,
  },
  {
    id: 3,
    name: "AHREN carey habano",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/ahren-carey-habano.jpg",
    category: "lente",
    color: "brown",
    size: "M",
    price: 8999,
  },
  {
    id: 4,
    name: "AHREN cristal",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/ahren-cristal.jpg",
    category: "lente",
    color: "white",
    size: "M",
    price: 9499,
  },
  {
    id: 5,
    name: "JOSS negro mate",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/joss-negro-mate.jpg",
    category: "lente",
    color: "black",
    size: "M",
    price: 6999,
  },
  {
    id: 6,
    name: "JOSS rosa",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/joss-rosa.jpg",
    category: "lente",
    color: "rose",
    size: "M",
    price: 7499,
  },
  {
    id: 7,
    name: "AHREN carey habano",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/ahren-carey-habano.jpg",
    category: "lente",
    color: "brown",
    size: "M",
    price: 8999,
  },
  {
    id: 8,
    name: "AHREN cristal",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/ahren-cristal.jpg",
    category: "lente",
    color: "white",
    size: "M",
    price: 9499,
  },
  {
    id: 9,
    name: "JOSS negro mate",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/joss-negro-mate.jpg",
    category: "lente",
    color: "black",
    size: "M",
    price: 6999,
  },
  {
    id: 10,
    name: "JOSS rosa",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/joss-rosa.jpg",
    category: "lente",
    color: "rose",
    size: "M",
    price: 7499,
  },
  {
    id: 11,
    name: "AHREN carey habano",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/ahren-carey-habano.jpg",
    category: "lente",
    color: "brown",
    size: "M",
    price: 8999,
  },
  {
    id: 12,
    name: "AHREN cristal",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, magni. Animi autdignissimos voluptatibus",
    seller: "Nombre de vendedor",
    img: "/img/ahren-cristal.jpg",
    category: "lente",
    color: "white",
    size: "M",
    price: 9499,
  },
];
module.exports = {
  home: function (req, res) {
    res.render("home", {
      products: products,
    });
  },
  howToRead: function (req, res) {
    res.render("how-to-read");
  },
  productos: function (req, res) {
    const id = req.params.id;
    const productoBuscado = products.find((element) => {
      return id == element.id;
    });
    if (productoBuscado) {
      res.render("products/product-detail", {
        product: productoBuscado,
      });
    } else {
      res.send("error 404");
    }
  },
  carrito: function (req, res) {
    res.render("carrito", products);
  },
  login: function (req, res) {
    res.render("users/login");
  },
  register: (req, res) => {
    res.render("users/register");
  },
};
