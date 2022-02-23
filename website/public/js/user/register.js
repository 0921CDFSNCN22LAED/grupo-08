window.addEventListener("load", function(){

    let error = []    
    let form = document.getElementById("formRegister")
    let name = document.getElementById("name")
    let lastName = document.getElementById("lastName")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let avatar = document.getElementById("avatar")
    let erroresName = document.getElementById("erroresName")
    console.log(form)
    console.log(name)

    form.addEventListener("submit", function(event){

    if (name.value == ""){
        error.push("a")
        erroresName.innerText = "Debe llenar por lo menos 2 caracteres. front"
    }
    console.log(error)
    if (error.length != 0){
        event.preventDefault()
    }

    

})
    
})