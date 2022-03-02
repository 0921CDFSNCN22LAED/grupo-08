window.onload = function () {
    const form = document.querySelector("#formProfile");
    const userName = document.querySelector("#profileName");
    const nameError = document.querySelector("#errorName");
    const lastName = document.querySelector("#userLastName");
    const lastNameError = document.querySelector("#errorLastName");
    const adress = document.querySelector("#adress");
    const adressError = document.querySelector("#adressError");
    alert("test");
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
        if (lastName.value == "") {
            errors.lastname = "El apellido no puede estar vacio";
        }

        if (Object.keys(errors) != 0) {
            e.preventDefault();
            console.log(errors);
            lastNameError.innerText = errors.lastname;
        } else if (errors.lastname) {
            //eliminar propiedad de un objeto
            delete errors.lastname;
            form.submit();
        }

        //--------------------------------------------------------------------//
        if (adress.value == "" || adress.value.length < 6) {
            errors.adress =
                "La direccion debe contener mas de 5 caracteres y no puede estar vacia";
        }

        if (Object.keys(errors) != 0) {
            e.preventDefault();
            console.log(errors);
            adressError.innerText = errors.adress;
        } else if (errors.adress) {
            //eliminar propiedad de un objeto
            delete errors.adress;
            form.submit();
        }
    });
};
