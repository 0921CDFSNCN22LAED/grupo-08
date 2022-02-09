window.onload = function () {
  //   const body = document.querySelector("body");
  //   body.style.backgroundColor = "red";
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
};
