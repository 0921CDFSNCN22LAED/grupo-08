window.onload = function () {
  //   const body = document.querySelector("body");
  //   body.style.backgroundColor = "red";
  const formDeleteAccount = document.getElementById("deleteAccount");
  const containerForm = document.getElementById("containerForm");
  containerForm.classList.add("none");
  const btnEnviar = document.getElementById("btnEnviar");
  btnEnviar.classList.add("none");

  const btnEdit = document.getElementById("btnEdit");
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
};
