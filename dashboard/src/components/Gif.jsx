import React from "react";

class Gif extends Component {

    constructor(props){
    super(props);
    this.state = {
            gif: ""
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
        this.traerGifNuevo
    }    

    traerGifNuevo = ("", this.mostrarGif)

    mostrarGif=(data)=>{
        this.setState(
            {
                git: data.data.img_url
            }
        )
    }
    componentDidUpdate(){
        console.log("me actualice");
        alert("soy un gif nuevo")
    }

    render(){
        console.log("estoy renderizando")

        let contenido;

        if(this.state.gif == ""){
            contenido = <p>cargando...</p>
        }
        else{
            contenido = <img src = {this.state.gif}></img>
        }

        return( 
            <div>
                {contenido}
                <button onClick={ () => traerGifNuevo }>Randum Gif</button>
            </div>
        );
    }

}