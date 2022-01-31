window.addEventListener("load", function () {
  const smallCarrusel = document.querySelectorAll(".small-carrusel img");
  console.log(smallCarrusel);
  smallCarrusel.addEventListener("click", function (e) {
    console.log(this);
    this.style.backgroundColor = "red";
  });
});
