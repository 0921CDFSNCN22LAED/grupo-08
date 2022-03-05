window.addEventListener("load", function () {
    const errors = {};
    const form = document.querySelector("#formRegister");
    const name = document.querySelector("#name");
    const errorsName = document.querySelector("#errorsName");
    const lastName = document.querySelector("#lastName");
    const erroesLastName = document.querySelector("#erroesLastName");
    const password = document.querySelector("#password");
    const erroresPasword = document.querySelector("#erroresPasword");
    const email = document.querySelector("#email");
    const erroresEmail = document.querySelector("#erroresEmail");
    const images = document.querySelector("#avatar");
    const errorsImages = document.querySelector("#errorsImages");

    const PORT = `http://localhost:3001/`;

    async function getUserInDb(email) {
        const respnse = await fetch(
            `${PORT}api/users/validationUser?userDB=${email}`
        );
        const data = await response.json();
        return data;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (name.value == "" || name.value.length <= 2) {
            errors.name = "Debe tener mas de 2 caracteres";
        } else {
            if (errors.name) {
                //eliminar propiedad de un objeto
                delete errors.name;
                errorsName.innerText = "";
            }
        }

        if (lastName.value == "" || lastName.value.length <= 2) {
            errors.lastName = "Debe tener mas de 2 caracteres";
        } else {
            if (errors.lastName) {
                //eliminar propiedad de un objeto
                delete errors.lastName;
                erroesLastName.innerText = "";
            }
        }

        const user = getUserInDb(email.value);
        console.log(user);
        if (user) {
            errors.email;
        }

        /* console.log(email.value.indexOf(".com") == -1)
        if (email.value == "" || email.value.indexOf(".com") == -1){
            errors.email = "Debe ser un email"

        } else {
           if (errors.email) { 
            //eliminar propiedad de un objeto
            delete errors.email;
            erroresEmail.innerText = ""
        }} */

        if (password.value == "" || password.value.length <= 8) {
            errors.password = "Debe tener mas de 8 caracteres";
        } else {
            if (errors.password) {
                //eliminar propiedad de un objeto
                delete errors.password;
                erroresPasword.innerText = "";
            }
        }

        const extensionAcepte = ["image/gif", "image/jpg", "image/jpeg"];

        if (images.value.indexOf == extensionAcepte) {
            console.log(images);
            errors.images = "Formatos aceptados son jpg, png, gif, jpeg";
        } else {
            if (errors.images) {
                delete errors.images;
                errorsImages.innerText = "";
            }
        }

        console.log(errors);

        //object.keys recorre el objeto completo
        if (Object.keys(errors) == 0) {
            form.submit();
            console.log("no hubo errores");
        } else {
            if (errors.name) {
                errorsName.innerText = errors.name;
                errorsName.style.color = "red";
            }
            if (errors.lastName) {
                erroesLastName.innerText = errors.lastName;
                erroesLastName.style.color = "red";
            }
            if (errors.email) {
                erroresEmail.innerText = errors.email;
                erroresEmail.style.color = "red";
            }
            if (errors.password) {
                erroresPasword.innerText = errors.password;
                erroresPasword.style.color = "red";
            }
            if (errors.images) {
                errorsImages.innerText = errors.images;
                errorsImages.style.color = "red";
            }
        }
    });
});
