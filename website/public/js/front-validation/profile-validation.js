window.onload = function () {
    const form = document.querySelector("#formProfile");
    const userName = document.querySelector("#profileName");
    const nameError = document.querySelector("#errorName");
    //const lastName = document.querySelector("#userLastName");
    //const lastNameError = document.querySelector("#errorLastName");

    form.addEventListener("submit", function (e) {
        let errors = {};

        if (userName.value == "") {
            errors.name = "El nombre no puede estar vacio";
        }
        //--------------------------------------------------------------------//
        //object.keys recorre el objeto completo
        if (Object.keys(errors) != 0) {
            e.preventDefault();
            console.log(errors);
            nameError.innerText = errors.name;
        } else if (errors.name) {
            //eliminar propiedad de un objeto
            delete errors.name;
            form.submit();
        }
        //--------------------------------------------------------------------//
    });
};
