import React, { useState } from "react";
import { FaHome, FaUser, FaTools, FaBriefcase, FaEnvelope } from "react-icons/fa";

const NavBar: React.FC = () => {
  const [buttonClicked, setButtonClicked] = useState<string | null>(null)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setButtonClicked(sectionId)
    }
  }

  return (
    <div className="justify-center items-center gradient-navBar text-white p-[0.5rem] fixed w-screen mt-[-4rem]">
      <div className="flex justify-center font-secondary">
        <button className={`p-[0.5rem] flex items-center ${buttonClicked === "home" ? " border-b-4 border-blue-700" : ""}`} onClick={() => scrollToSection("home")}>
          <FaHome className="text-2xl mr-1" />
          Home
        </button>

        <button className={`p-[0.5rem] flex items-center mr-2 ${buttonClicked === "about" ? "border-b-4 border-blue-700" : ""}`} onClick={() => scrollToSection("about")}>
          <FaUser className="text-2xl mr-1" />
          About
        </button>

        <button className={`p-[0.5rem] flex items-center mr-2 ${buttonClicked === "skills" ? "border-b-4 border-blue-700" : ""}`} onClick={() => scrollToSection("skills")}>
          <FaTools className="text-2xl mr-1" />
          Skills
        </button>

        <button className={`p-[0.5rem] flex items-center mr-2 rounded-lg ${buttonClicked === "works" ? "border-b-4 border-blue-700" : ""}`} onClick={() => scrollToSection("works")}>
          <FaBriefcase className="text-2xl mr-1" />
          Works
        </button>

        <button className={`p-[0.5rem] flex items-center mr-2 rounded-lg ${buttonClicked === "contact" ? "border-b-4 border-blue-700" : ""}`} onClick={() => scrollToSection("contact")}>
          <FaEnvelope className="text-2xl mr-1" />
          Contact
        </button>
      </div>
    </div>
    
  );
};

export default NavBar;
