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
        this.apiCall("", this.mostrarGif)
    }    
}