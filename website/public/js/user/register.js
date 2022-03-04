window.addEventListener("load", function () {
  const errors = {};
  const form = document.getElementById("formRegister");
  const name = document.getElementById("name");
  const errorsName = document.getElementById("errorsName");
  const lastName = document.getElementById("lastName");
  const errorLastName = document.getElementById("errorLastName");
  const password = document.getElementById("password");
  const errorPassword = document.getElementById("errorPassword");
  const email = document.getElementById("email");
  const erroresEmail = document.getElementById("erroresEmail");
  const PORT = `http://localhost:3001/`;
  async function getUserInDb(email) {
    const response = await fetch(
      `${PORT}api/users/validationUser?userDB=${email}`
    );
    const data = await response.json();
    return data;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (name.value == "") {
      errors.name = "El campo Nombre no puede estar vació Front";
    } else {
      if (errors.name) {
        delete errors.name;
        errorsName.innerText = "";
      }
      if (name.value.length <= 2) {
        errors.name = "El campo Nombre debe tener al menos 2 caracteres Front";
      } else {
        if (errors.name) {
          delete errors.name;
          errorsName.innerText = "";
        }
      }
    }

    if (lastName.value == "") {
      errors.lastName = "El campo apellido no puede estar vació Front";
    } else {
      if (errors.name) {
        delete errors.lastName;
        errorLastName.innerText = "";
      }
      if (lastName.value.length <= 2) {
        errors.lastName =
          "Debe campo apellido tener al menos 2 caracteres  Front";
      } else {
        if (errors.name) {
          delete errors.lastName;
          errorLastName.innerText = "";
        }
      }
    }

    if (password.value == "") {
      errors.password = "El campo contraseña no puede estar vació Front";
    } else {
      if (errors.password) {
        delete errors.password;
        errorPassword.innerText = "";
      }
      if (password.value.length <= 8) {
        errors.password =
          "El campo contraseña debe tener al menos 8 caracteres Front";
      } else {
        if (errors.password) {
          delete errors.password;
          errorPassword.innerText = "";
        }
      }
    }

    if (Object.keys(errors) == 0) {
      form.submit();
      console.log("no hubo errores");
    } else {
      if (errors.name) {
        errorsName.innerText = errors.name;
      }
      if (errors.lastName) {
        errorLastName.innerText = errors.lastName;
      }
      if (errors.password) {
        errorPassword.innerText = errors.password;
      }
    }
  });
});
