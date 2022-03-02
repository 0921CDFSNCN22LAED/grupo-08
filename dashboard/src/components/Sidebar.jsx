import React from "react";
import ButtonHiddenMenu from "./ButtonHiddenMenu";
import Contenido from "./Contenido";
import RealSidebar from "./RealSidebar";

export default function Sidebar() {
  function hiddenNavbar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    console.log(sidebar);
    console.log(content);
    sidebar.classList.toggle("activeSidebar");
    content.classList.toggle("activeContent");
  }
  return (
    <>
      <RealSidebar />

      <div class="page-content p-5" id="content">
        {/*   <!-- Toggle button --> */}
        <ButtonHiddenMenu hiddenNavbar={hiddenNavbar} />
        <div class="separator"></div>
        <Contenido />
      </div>
    </>
  );
}
