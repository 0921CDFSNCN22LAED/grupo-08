window.onload = function () {
    const form = document.querySelector("#formProfile");
    const userName = document.querySelector("#profileName");
    const nameError = document.querySelector("#errorName");
    /*const expresiones = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    };*/
    console.log(form);

    let errors = {};

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
