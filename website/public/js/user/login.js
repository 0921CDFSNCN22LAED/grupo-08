window.addEventListener("load", function(){

    const error = []  
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const form = document.getElementById("formLogin")
    const errorEmail = document.getElementById("errorEmail")
    const errorPasword = document.getElementById("errorPasword")
    
    const PORT = `http://localhost:3001/`;
    
    
    async function getUserInDb(email){ 
        const respnse = await fetch(
      `${PORT}api/users/validationUser?userDB=${email}`

    );
            const data = await response.json()
    
    form.addEventListener("submit", function(event){
        
    })
    }
})