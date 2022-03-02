window.addEventListener("load", function(){

    const errors = {}
    const form = document.querySelector("#formRegister")
    const name = document.querySelector("#name")
    const errorsName = document.querySelector("#errorsName")
    

    

    

    form.addEventListener("submit", function(e){
         

        if (name.value == "" || name.value.length <= 2){
            errors.name = "Debe tener mas de 2"

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
        

    })
}) 