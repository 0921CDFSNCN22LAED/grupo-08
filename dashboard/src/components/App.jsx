import React from "react";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import "../App.css";


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" exact={ true } element={<Home/>} />
      </Routes>
    </div>
  );
}
export default App;
