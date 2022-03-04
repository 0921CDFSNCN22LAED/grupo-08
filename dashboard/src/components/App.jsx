import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import Sidebar from "./Sidebar";
import ButtonHiddenMenu from "./ButtonHiddenMenu";
import About from "./Abaut";
import Home from "./home";
import Products from "./Products";
import Categories from "./Categories";
import Users from "./Users";

export default function App() {
  function hiddenNavbar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    sidebar.classList.toggle("activeSidebar");
    content.classList.toggle("activeContent");
  }
  return (
    <>
      <Sidebar />
      <div class="page-content p-5" id="content">
        <ButtonHiddenMenu hiddenNavbar={hiddenNavbar} />
        <div class="separator"></div>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}
