window.addEventListener("load", function(){

    const error = []  
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const form = document.getElementById("formLogin")
    const form = document.getElementById("formLogin")
    const errorEmail = document.getElementById("errorEmail")
    const errorPasword = document.getElementById("errorPasword")
    
    const userDb = fetch("/api/users/validationUser")
    
    form.addEventListener("submit", function(event){

    })

})