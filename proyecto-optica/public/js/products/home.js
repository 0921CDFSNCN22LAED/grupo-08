window.onload = async () => {
  //   const main = document.querySelector("main");
  //   main.style.backgroundColor = "red";
  const sectionContainer = document.querySelector(".container-products");
  const divGondola = document.createElement("div");
  divGondola.setAttribute("class", "gondola");
  const response = await fetch("http://localhost:3001/api/");
  const products = await response.json();
  console.log(products);
  products.data.forEach((product) => {
    const id = product.id;
    const article = document.createElement("article");
    article.setAttribute(
      "class",
      "margin-10 productos container-products-list"
    );
    const a1 = document.createElement("a");
    a1.setAttribute("href", `products/${id}`);
    const div1 = document.createElement("div");
    div1.setAttribute("class", "precios-descripcion shadows");
    const img = document.createElement("img");
    img.setAttribute("class", "fotos");
    if (product.image[0]) {
      img.setAttribute("src", `/img/products/${product.image[0].filename}`);
    } else {
      img.setAttribute("src", "");
    }
    const div2 = document.createElement("div");
    div2.setAttribute("class", "bolsa");
    const a2 = document.createElement("a");
    a2.setAttribute("href", "");
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-shopping-bag");
    const a3 = document.createElement("a");
    a3.setAttribute("href", `products/${id}`);
    const div3 = document.createElement("div");
    const p = document.createElement("p");
    p.innerText = product.price[0].price;
    p.setAttribute("class", "precios");
    const h4 = document.createElement("h4");
    h4.innerText = product.name;
    h4.setAttribute("class", "name");

    //jerarquía
    sectionContainer.appendChild(divGondola);
    divGondola.appendChild(article);
    article.appendChild(a1);
    a1.appendChild(div1);
    div1.appendChild(img);
    div1.appendChild(div2);
    div2.appendChild(a2);
    a2.appendChild(i);
    div1.appendChild(a3);
    a3.appendChild(div3);
    div3.appendChild(p);
    div3.appendChild(h4);
  });
};
