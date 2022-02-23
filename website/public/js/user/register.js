window.addEventListener("load", function(){

    let error = []    
    let name = document.querySelector("#name")
    let lastName = document.querySelector("#lastName")
    let email = document.querySelector("#email")
    let password = document.querySelector("#password")
    let avatar = document.querySelector("#avatar")
    
    if (name.value == ""){
        error.push("Debe tener mas de 2 caracteres")
    }
    if (error.length > 1){
        event.preventDefault()
    }

    if (lastName.value == ""){
        error.push("Debe tener mas de 2 caracteres")
    }
    if (error.length > 1){
        event.preventDefault()
    }

    

})