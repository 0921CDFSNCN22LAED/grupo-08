import React from "react";

class Usuarios extends Component {

    constructor(props){
    super(props);
    this.state = {
            usuario: ""
      }
    }

    apiCall(url, concecuencia){
        fetch(url)
        .then(response => response.json())
        .then(data => concecuencia(data))
        .catch(error => console.log(error))
    }
    
    complonentDidMount(){
        console.log("me monte");
        this.traerUsuario
    }    

    traerUsuario = ("", this.mostrarUsuario)

    mostrarUsuario=(data)=>{
        this.setState(
            {
                git: data.data.img_url
            }
        )
    }
    componentDidUpdate(){
        console.log("me actualice");
        alert("soy un usuario")
    }

    render(){
        console.log("estoy renderizando")

        let contenido;

        if(this.state.usuario == ""){
            contenido = <p>cargando...</p>
        }
        else{
            contenido = <img src = {this.state.usuario}></img>
        }

        return( 
            <div>
                {contenido}
                <button onClick={ () => traerUsuario }>Randum usuario</button>
            </div>
        );
    }

}
export default Usuarios