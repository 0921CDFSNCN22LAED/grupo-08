window.onload = async () => {
  i.setAttribute("class", "fas fa-shopping-bag ");

  const favProduct = getFavoriteIds();
  const index = favProduct.indexOf(id);

  if (index != -1) {
    i.classList.add("bagRose");
  } else {
    i.classList.add("bagBlue");
  }

  const setFavoriteDb = document.createElement("a");
  setFavoriteDb.setAttribute("href", `/api/products/favorite/${id}`);

  bag.addEventListener("click", (event) => {
    const favoritesProduct = getFavoriteIds();
    const index = favoritesProduct.indexOf(id);
    if (index == -1) {
      favoritesProduct.push(id);
      i.classList.replace("bagBlue", "bagRose");
    } else {
      favoritesProduct.splice(index, 1);
      i.classList.replace("bagRose", "bagBlue");
    }
    localStorage.setItem("favoritesProduct", JSON.stringify(favoritesProduct));
  });
};
