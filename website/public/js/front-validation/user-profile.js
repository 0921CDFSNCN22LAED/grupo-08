window.onload = function () {
    //   const body = document.querySelector("body");
    //   body.style.backgroundColor = "red";
    const formDeleteAccount = document.getElementById("deleteAccount");
    const containerForm = document.getElementById("containerForm");
    containerForm.classList.add("none");
    const btnEnviar = document.getElementById("btnEnviarProfile");
    btnEnviar.classList.add("none");

    const btnEdit = document.getElementById("btnEditProfile");
    btnEdit.addEventListener("click", () => {
        const formNone = containerForm.classList.contains("none");
        const enviarNone = btnEnviar.classList.contains("none");
        //if ternario
        formNone
            ? containerForm.classList.replace("none", "block")
            : containerForm.classList.replace("block", "none");
        //if ternario
        enviarNone
            ? btnEnviar.classList.replace("none", "block")
            : btnEnviar.classList.replace("block", "none");
    });
    console.log(swal);
    formDeleteAccount.addEventListener("submit", (event) => {
        event.preventDefault();
        swal(
            "Esta seguro que desea eliminar su cuenta, no podrá volver a usarla?",
            {
                dangerMode: true,
                buttons: true,
            }
        ).then((response) => {
            console.log(response);
            if (response) {
                formDeleteAccount.submit();
            }
        });
    });

    const form = document.querySelector("#formProfile");
    const userName = document.querySelector("#profileName");
    const nameError = document.querySelector("#errorName");
    const lastName = document.querySelector("#userLastName");
    const lastNameError = document.querySelector("#errorLastName");
    const adress = document.querySelector("#adress");
    const adressError = document.querySelector("#adressError");
    const password = document.querySelector("#password");

    const PORT = `http://localhost:3001/`;

    async function getPasswordInDb(password) {
        const response = await fetch(
            `${PORT}api/users/validationUser?passwordFront=${password}`
        );
        const data = response.json();
        return data;
    }
    const userPassword = getPasswordInDb(password.value);

    console.log(userPassword);

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let errors = {};

        if (userName.value == "") {
            errors.name = "El nombre no puede estar vacio";
        } else {
            if (errors.name) {
                delete errors.name;
                nameError.innerText = "";
            }
        }

        if (lastName.value == "") {
            errors.lastname = "El apellido no puede estar vacio";
        } else {
            if (errors.lastname) {
                delete errors.lastname;
                lastNameError.innerText = "";
            }
        }

        if (adress.value == "" || adress.value.length < 6) {
            errors.adress =
                "La direccion debe contener mas de 5 caracteres y no puede estar vacia";
        } else {
            if (errors.adress) {
                delete errors.adress;
                adressError.innerText = "";
            }
        }
        console.log(errors);
        if (Object.keys(errors) == 0) {
            form.submit();
            console.log("No se encontraron errores");
        } else {
            if (errors.name) {
                nameError.innerText = errors.name;
            }
            if (errors.lastname) {
                lastNameError.innerText = errors.lastname;
            }
            if (errors.adress) {
                adressError.innerText = errors.adress;
            }
        }
        //--------------------------------------------------------------------//
    });
};
