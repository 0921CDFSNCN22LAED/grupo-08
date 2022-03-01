window.addEventListener("load", function(){

    const error = []    
    const form = document.getElementById("formRegister")
    const name = document.getElementById("name")
    const lastName = document.getElementById("lastName")
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const avatar = document.getElementById("avatar")
    const erroresName = document.getElementById("erroresName")
    const erroresLastName = document.getElementById("erroresLastName")
    const erroresPasword = document.getElementById("erroresPasword")
    const errorsImages = document.getElementById("errorsImages")
    const erroresEmail = document.getElementById("erroresEmail")
    console.log(form)
    console.log(name)


    form.addEventListener("submit", function(event){
        let extensionErrors = [];
        const extensionAcepte = ["image/gif", "image/jpg", "image/jpeg"];
        

    if (name.value != "" && name.value <= 2){
        error.push("a")
        erroresName.innerText = "Debe llenar por lo menos 2 caracteres. front"
    }
    if (lastName.value != "" && lastName.value <= 2){
        error.push("a")
        erroresLastName.innerText = "Debe llenar por lo menos 2 caracteres. front"
    }
    if (password.value != "" && password.value <= 8){
        error.push("a")
        erroresPasword.innerText = "Debe llenar por lo menos 8 caracteres. front"
    }
    for (element of avatar) {
            if (!extensionAcepte.includes(element.type)) {
                extensionErrors.push(element);
            }
        }
    if (extensionErrors.length != 0) {
            errorsImages.innerText =
            " debe ingresar una foto con formato valido front-end los formatos aceptados son jpg, png, gif, jpeg";
            
        }
    if (!email.isEmail()){
        erroresEmail.innerText = "Debe ser un email"
    }

    })
    
})