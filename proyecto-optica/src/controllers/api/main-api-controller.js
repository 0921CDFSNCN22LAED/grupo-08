const db = require("../../database/models");
module.exports = {
  listHome: async (req, res) => {
    const products = await db.Product.findAll({
      where: {
        active: 1,
      },
      include: [{ association: "image" }, { association: "price" }],
      limit: 12,
    });
    let status;
    if (products) {
      status = 200;
    } else {
      status = 404;
    }
    let response = {
      meta: {
        status: status,
        total: products.length,
        url: "/",
      },
      data: products,
    };
    res.json(response);
  },
};
