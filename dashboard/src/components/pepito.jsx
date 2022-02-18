import React, { Component } from "react";

import "../App.css";

class pepito extends  Component {
  
  
  constructor(){
    super()
    this.state={
      data: ""
    }
  }
  api = ()=>{fetch("http://localhost:3001/api/search") 
    .then(Response=>{Response.json})
    .then(data=> { this.setState({data})})
    .catch(e => {console.log(e)})
  }
  
  componentDidMount(){
    this.api
  }

  render(){ 
    console.log(this.api)
  return (
    <div>


    </div>
  )};
  }
export default pepito;
