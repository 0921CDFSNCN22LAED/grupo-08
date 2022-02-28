window.onload = function () {
  //   const body = document.querySelector("body");
  //   body.style.backgroundColor = "red";
  const nameUserHeader = document.getElementById("nameUserLoggedHeader");
  console.log(nameUserHeader);
  const btnBuy = document.getElementById("btnBuyPrescription");
  const fromBuy = document.getElementById("fromBuyProductPrescription");
  fromBuy.addEventListener("submit", (event) => {
    if (nameUserHeader) {
      event.preventDefault();
      swal({
        buttons: {
          cancel: true,
          confirm: true,
        },
      }).then((response) => {
        console.log(response);
        if (response) {
          swal({
            icon: "success",
          });
          fromBuy.submit();
        }
      });
    }
  });
};
