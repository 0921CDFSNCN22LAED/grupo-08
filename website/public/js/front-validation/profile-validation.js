window.addEventListener("load", function () {
  alert("hola");
  const formValidation = document.querySelector("#formProfile");
  const blankName = document.querySelector("#profileName");
  const blankLastName = document.querySelector("#profileLastName");
  const errorName = document.querySelector("#errorName");
  const errorLastName = document.querySelector("#errorLastName");

  formValidation.addEventListener("submit", function (e) {
    const errors = [];

    if (blankName.value == "") {
      errors.push("");
    }
    if (errors.length > 0) {
      errorName.innerText = "El nombre debe estar lleno";
      e.preventDefault();
    }
    if (blankLastName.value == "") {
      errors.push("");
    }
    if (errors.length > 0) {
      errorLastName.innerText = "El apellido debe estar lleno";
      e.preventDefault();
    }
  });
});
