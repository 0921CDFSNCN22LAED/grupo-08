window.onload = function () {
  //   const body = document.querySelector("body");
  //   body.style.backgroundColor = "red";
  const containerForm = document.getElementById("containerForm");
  containerForm.classList.add("formNone");
  const btnEdit = document.getElementById("btnEdit");
  btnEdit.addEventListener("click", () => {
    const formNone = containerForm.classList.contains("formNone");
    console.log(formNone);
    if (formNone) {
      containerForm.classList.replace("formNone", "formBlock");
    } else {
      containerForm.classList.replace("formBlock", "formNone");
    }
  });
};
