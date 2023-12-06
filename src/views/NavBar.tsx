import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isScreenSmall = () => {
    return windowWidth <= 980;
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { icon: <FaHome />, label: "Inicio", sectionId: "home" },
    { icon: <FaUser />, label: "Sobre mi", sectionId: "about" },
    { icon: <FaTools />, label: "Habilidades", sectionId: "skills" },
    { icon: <FaBriefcase />, label: "Proyectos", sectionId: "works" },
    { icon: <FaEnvelope />, label: "Contacto", sectionId: "contact" },
  ];

  return (
    <div className={`justify-center items-center bg-black text-white p-[0.5rem] fixed w-[50%] rounded-full z-30 shadow-lg shadow-blue-700 mt-[2rem] max-[400px]:w-full max-[450px]:w-full ${isScreenSmall() ? 'flex' : 'flex'}`}>
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`p-[0.5rem] flex items-center justify-center ${isScreenSmall() ? 'mb-[0.5rem] w-full' : 'w-full'} active:border-b-4 active:border-blue-700 focus:border-b-4 focus:border-blue-700`}
          onClick={() => scrollToSection(item.sectionId)}
        >
          {isScreenSmall() ? item.icon : (
            <>
              {item.icon}
              <span className="ml-[0.5rem]">{item.label}</span>
            </>
          )}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
