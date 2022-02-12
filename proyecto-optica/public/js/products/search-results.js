window.onload = async function () {
  const query = location.search;
  console.log(query);
  const response = await fetch(`http://localhost:3001/api/search${query}`);
  const search = await response.json();

  const containerProducts = document.getElementById("container-products");

  if (search.length != 0) {
    search.data.forEach((product) => {
      const gondola = document.createElement("div");
      gondola.setAttribute("class", "gondola");
      const article = document.createElement("article");
      article.setAttribute("class", "margin-10 productos");
      const a = document.createElement("a");
      a.setAttribute("href", `products/${product.id}`);
      const div1 = document.createElement("div");
      div1.setAttribute("class", "precios-descripcion shadows");
      const img = document.createElement("img");
      img.setAttribute("class", "fotos");
      if (product.image[0]) {
        img.setAttribute("href", `/img/products/${product.image[0].filename}`);
      } else {
        img.setAttribute("href", "");
      }
      const div2 = document.createElement("div");
      div2.setAttribute("class", "bolsa");
      const i = document.createElement("i");
      i.setAttribute("class", "fas fa-shopping-bag");
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
  } else {
    //parte si falla es decir si no hay resultados de búsqueda
    const divNoResults = document.createElement("div");
    divNoResults.setAttribute("col-12");
    const h2NoResults = document.createAttribute("h2");
    h2NoResults.setAttribute("class", "products-title");
    h2NoResults.style.color = "#0bc197";
    h2NoResults.innerText = "No hay productos que coincidan con esa búsqueda";
  }
};
