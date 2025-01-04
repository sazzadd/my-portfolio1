import React from "react";
import {
  FaHome,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div
      className="fixed top-4 left-0 right-0 z-50 flex justify-center"
      style={{
        pointerEvents: "auto",
      }}
    >
      <div className="bg-[#112836] mx-auto px-4 py-3 rounded-full border-2 border-[#38bdf8] max-w-3xl shadow-lg">
        <ul className="flex justify-around items-center text-white text-sm space-x-8">
          <li className="flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:bg-[#38bdf8] hover:text-white hover:scale-105 p-2 rounded-full">
            <FaHome className="text-lg sm:text-base" />
            <span className="hidden sm:inline">Home</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:bg-[#38bdf8] hover:text-white hover:scale-105 p-2 rounded-full">
            <FaCode className="text-lg sm:text-base" />
            <span className="hidden sm:inline">Skills</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:bg-[#38bdf8] hover:text-white hover:scale-105 p-2 rounded-full">
            <FaBriefcase className="text-lg sm:text-base" />
            <span className="hidden sm:inline">Experience</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:bg-[#38bdf8] hover:text-white hover:scale-105 p-2 rounded-full">
            <FaGraduationCap className="text-lg sm:text-base" />
            <span className="hidden sm:inline">Education</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:bg-[#38bdf8] hover:text-white hover:scale-105 p-2 rounded-full">
            <FaProjectDiagram className="text-lg sm:text-base" />
            <span className="hidden sm:inline">Projects</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer transition-all duration-300 hover:bg-[#38bdf8] hover:text-white hover:scale-105 p-2 rounded-full">
            <FaEnvelope className="text-lg sm:text-base" />
            <span className="hidden sm:inline">Contact</span>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
