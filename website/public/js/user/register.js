window.addEventListener("load", function(){

    const errors = {}
    const form = document.querySelector("#formRegister")
    const name = document.querySelector("#name")
    const errorsName = document.querySelector("#errorsName")
    const lastName = document.querySelector("#lastName")
    const erroesLastName = document.querySelector("#erroesLastName")
    const password = document.querySelector("#password")
    const erroresPasword = document.querySelector("#erroresPasword")
    const email = document.querySelector("#email")
    const erroresEmail = document.querySelector("#email")

    
        form.addEventListener("submit", function(e){
         

        if (name.value == "" || name.value.length <= 2){
            errors.name = "Debe tener mas de 2 caracteres"

        } else {
           if (errors.name) { 
            //eliminar propiedad de un objeto
            delete errors.name;
            errorsName.innerText = ""
        }}
         console.log(errors);
        //object.keys recorre el objeto completo
        if (Object.keys(errors) == 0) {
            form.submit();
            console.log("no hubo errores")
        } else  { 
            e.preventDefault();
            if(errors.name){
                errorsName.innerText = errors.name
                console.log("hubo errores")
            }
            }


        if (lastName.value == "" || lastName.value.length <= 2){
            errors.lastName = "Debe tener mas de 2 caracteres"

        } else {
           if (errors.name) { 
            //eliminar propiedad de un objeto
            delete errors.lastName;
            erroesLastName.innerText = ""
        }}
         console.log(errors);
        //object.keys recorre el objeto completo
        if (Object.keys(errors) == 0) {
            form.submit();
            console.log("no hubo errores")
        } else  { 
            e.preventDefault();
            if(errors.lastName){
                erroesLastName.innerText = errors.lastName
                console.log("hubo errores")
            }
            }


        

        if (password.value == "" || password.value.length <= 8){
        errors.password = "Debe tener mas de 8 caracteres"

        } else {
           if (errors.password) { 
            //eliminar propiedad de un objeto
            delete errors.password;
            erroresPasword.innerText = ""
        }}
         console.log(errors);
        //object.keys recorre el objeto completo
        if (Object.keys(errors) == 0) {
            form.submit();
            console.log("no hubo errores")
        } else  { 
            e.preventDefault();
            if(errors.password){
                erroresPasword.innerText = errors.password
                console.log("hubo errores")
            }
            }
        

    })
}) 