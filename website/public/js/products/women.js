window.onload = async function () {
  const query = location.search;
  const footerResults = document.querySelector(".footer-results");
  const PROT = "http://localhost:3001";
  const response = await fetch(`${PROT}/api/products/women`);
  const data = await response.json();
  console.log(data);
  const containerProducts = document.getElementById("container-products");
  const gondola = document.createElement("div");
  gondola.setAttribute("class", "gondola");

  if (data.data.length != 0) {
    data.data.forEach((product) => {
      const article = document.createElement("article");
      article.setAttribute(
        "class",
        "margin-10 productos container-products-list"
      );
      const a = document.createElement("a");
      a.setAttribute("href", `products/${product.id}`);
      const div1 = document.createElement("div");
      div1.setAttribute("class", "precios-descripcion shadows");
      const img = document.createElement("img");
      img.setAttribute("class", "fotos");
      img.setAttribute("src", `/img/products/${product.image[0].filename}`);

      const div2 = document.createElement("div");
      div2.setAttribute("class", "bolsa");
      const i = document.createElement("i");
      i.setAttribute("class", "fas fa-shopping-bag bagBlue");
      const div3 = document.createElement("div");
      const p = document.createElement("p");
      p.setAttribute("class", "precios");
      if (product.price[0]) {
        p.innerText = product.price[0].price;
      }
      const h4 = document.createElement("h4");
      h4.setAttribute("class", "name");
      h4.innerText = product.name;

      // asignación de jerarquía
      containerProducts.appendChild(gondola);
      gondola.appendChild(article);
      article.appendChild(a);
      a.appendChild(div1);
      div1.appendChild(img);
      div1.appendChild(div2);
      div2.appendChild(i);
      div1.appendChild(div3);
      div3.appendChild(p);
      div3.appendChild(h4);
    });
  }
};
