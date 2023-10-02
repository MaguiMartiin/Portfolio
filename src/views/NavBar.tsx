import React from "react";
import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

const NavBar: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="justify-center items-center bg-black text-white p-[0.5rem] fixed w-[50%] rounded-full z-30 shadow-lg shadow-blue-700 mt-[2rem] max-[400px]:w-full">
      <div className="flex font-secondary ">
        <button className="p-[0.5rem] flex items-center w-full justify-center active:border-b-4 active:border-blue-700 focus:border-b-4 focus:border-blue-700" onClick={() => scrollToSection("home")} >
          <FaHome className="text-base mr-[0.5rem]" />
          Inicio
        </button>

        <button className="p-[0.5rem] flex items-center w-full justify-center active:border-b-4 active:border-blue-700 focus:border-b-4 focus:border-blue-700" onClick={() => scrollToSection("about")}>
          <FaUser className="text-base mr-[0.5rem]" />
          Sobre mi
        </button>

        <button className="p-[0.5rem] flex items-center w-full justify-center active:border-b-4 active:border-blue-700 focus:border-b-4 focus:border-blue-700"  onClick={() => scrollToSection("skills")}>
          <FaTools className="text-base mr-[0.5rem]" />
          Habilidades
        </button>

        <button className="p-[0.5rem] flex items-center w-full justify-center active:border-b-4 active:border-blue-700 focus:border-b-4 focus:border-blue-700"   onClick={() => scrollToSection("works")}>
          <FaBriefcase className="text-base mr-[0.5rem]" />
          Proyectos
        </button>

        <button className="p-[0.5rem] flex items-center w-full justify-center active:border-b-4 active:border-blue-700 focus:border-b-4 focus:border-blue-700"   onClick={() => scrollToSection("contact")}>
          <FaEnvelope className="ttext-base mr-[0.5rem]" />
          Contacto
        </button>
      </div>
    </div>
    
  );
};

export default NavBar;
