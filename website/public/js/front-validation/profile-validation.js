window.addEventListener("load", function () {
    alert("hola");
    const formValidation = document.querySelector("#formProfile");
    const blankName = document.querySelector("#profileName");
    const ulErrors = document.querySelector("#errores");

    formValidation.addEventListener("submit", function (e) {
        const errors = [];
        console.log(blankName);

        if (blankName.value == "") {
            errors.push("El nombre no puede estar vacio");
        }
        if (errors.length > 0) {
            ulErrors.innerText = "tenes que llenar este campo gilaso culea";
            e.preventDefault();
        }
    });
});
