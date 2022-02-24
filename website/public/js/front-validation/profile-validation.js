window.onload = function () {
    const form = document.querySelector("#formProfile");
    const userName = document.querySelector("#profileName");
    const lastName = document.querySelector("#profileLastName");
    const nameError = document.querySelector("#errorName");
    const LastNameError = document.querySelector("#errorLastName");

    form.addEventListener("submit", function (e) {
        let errors = {};

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

        if (lastName.value == "") {
            errors.name = "El nombre no puede estar vacio";
        }
        if (Object.keys(errors) === 0) {
            form.submit();
        } else if (Object.keys(errors) != 0) {
            e.preventDefault();
            console.log(errors);
            LastNameError.innerText = errors.lastName;
        } else {
            delete errors.lastName;
        }
    });
};
