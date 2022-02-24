window.addEventListener("load", function () {
  alert("hola");
  const formValidation = document.querySelector("#formProfile");
  const blankName = document.querySelector("#profileName");
  const blankLastName = document.querySelector("#profileLastName");
  const errorName = document.querySelector("#errorName");
  const errorLastName = document.querySelector("#errorLastName");

  formValidation.addEventListener("submit", function (e) {
    const errors = [];

    form.addEventListener("submit", function (e) {
        if (userName.value == "") {
            errors.name = "El nombre no puede estar vacio";
        }
        //object.keys recorre el objeto completo
        if (Object.keys(errors) === 0) {
            form.submit();
        } else if (Object.keys(errors) != 0) {
            e.preventDefault();
            console.log(errors);
            nameError.innerText = errors.name;
        }
        //eliminar propiedad de un objeto
        delete errors.name;
    });
};
