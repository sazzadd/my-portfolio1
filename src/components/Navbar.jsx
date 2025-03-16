"use client";

import { useState } from "react";
import {
  FaBars,
  FaCode,
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaProjectDiagram,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#banner", icon: <FaHome />, text: "Home" },
    { href: "#skills", icon: <FaCode />, text: "Skills" },
    { href: "#education", icon: <FaGraduationCap />, text: "Education" },
    { href: "#projects", icon: <FaProjectDiagram />, text: "Projects" },
    { href: "#contact", icon: <FaEnvelope />, text: "Contact" },
  ];

  return (
    <>
      {/* Desktop and Tablet Navigation */}
      <div
        className="fixed top-4 left-0 right-0 z-50 flex max-w-[200px] xs:max-w-[240px] sm:max-w-sm  md:max-w-[900px] mx-auto justify-center px-2"
        style={{
          pointerEvents: "auto",
        }}
      >
        <div className="bg-[#112836] w-auto max-w-[200px] xs:max-w-[240px] sm:max-w-sm md:max-w-[900px] px-1 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-3 rounded-full border border-[#38bdf8] sm:border-2 shadow-lg relative">
          {/* Hamburger Menu Button - Visible on mobile/medium */}
          {/* <button
            className="md:hidden sm:hidden absolute left-1.5 top-1/2 transform -translate-y-1/2 text-white p-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FaTimes className="text-base" />
            ) : (
              <FaBars className="text-base" />
            )}
          </button> */}

          {/* Desktop Navigation - Hidden on mobile */}
          <ul className="hidden md:flex flex-wrap justify-between items-center text-white text-xs sm:text-sm">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center cursor-pointer transition-all duration-300 hover:bg-[#38bdf8] hover:text-white hover:scale-105 p-2 rounded-full"
              >
                <a href={item.href} className="flex items-center">
                  <span className="text-lg">{item.icon}</span>
                  <span className="ml-1">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation - Icons only, centered */}
          <ul className="md:hidden flex justify-center  items-center text-white gap-1 xs:gap-2 sm:gap-3 pl-6">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center cursor-pointer transition-all duration-300 hover:bg-[#38bdf8] hover:text-white active:bg-[#38bdf8] p-1.5 rounded-full"
              >
                <a
                  href={item.href}
                  className="flex items-center"
                  aria-label={item.text}
                >
                  <span className="text-xs xs:text-sm sm:text-base">
                    {item.icon}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={closeMenu}
        >
          <div
            className="fixed top-16 left-1/2 -translate-x-1/2 w-[85%] max-w-[250px] bg-[#112836] rounded-xl border border-[#38bdf8] sm:border-2 shadow-lg p-3 z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col space-y-1 text-white">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="transition-all duration-300  hover:bg-[#38bdf8] hover:text-white rounded-lg"
                >
                  <a
                    href={item.href}
                    className="flex items-center p-2.5"
                    onClick={closeMenu}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="ml-3 text-sm">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
