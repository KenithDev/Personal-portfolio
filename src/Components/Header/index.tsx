"use client";
// Header.tsx

import React, { useState, useEffect, useRef } from "react";
import { X } from "@mynaui/icons-react";
import Image from "next/image";
import Link from "next/dist/client/link";

function Header() {
  /* const [isDarkMode, setIsDarkMode] = useState(true); */
  const [language, setLanguage] = useState("ES");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

/*   const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }; */

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ES" ? "EN" : "ES"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Cerrar menú con tecla Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: language === "ES" ? "INICIO" : "HOME", href: "/" },
    { label: language === "ES" ? "ACERCA" : "ABOUT", href: "/Pages/About" },
    { label: language === "ES" ? "PROYECTOS" : "PROJECTS", href: "/Pages/Projects" },
  ];

  return (
    <>
      <header className="flex items-center justify-between px-5 py-4 sm:px-10 sm:py-8 xl:px-20 text-white mb-10 md:mb-20 relative z-40">
        <div className="text-xl font-bold flex items-center gap-1 transition-transform duration-300 hover:scale-110">
          <Link href="/">
            <span className="text-blue-500">&lt;</span>
            <span className="text-white font-bold font-poppins">KenithDev</span>
            <span className="text-blue-500">/&gt;</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-5 xl:gap-10">
          <button
            onClick={changeLanguage}
            className="relative w-10 h-6 overflow-hidden transition-transform duration-300 transform hover:scale-110"
          >
            {/* ES */}
            <span
              className={`absolute left-0 w-full text-sm font-bold font-poppins transition-all duration-500 ${
                language === "ES" ? "top-0 opacity-100" : "top-8 opacity-0"
              }`}
            >
              ES
            </span>
            {/* EN */}
            <span
              className={`absolute left-0 w-full text-sm font-bold font-poppins transition-all duration-500 ${
                language === "EN" ? "top-0 opacity-100" : "top-8 opacity-0"
              }`}
            >
              EN
            </span>
          </button>

          {/* Botón del menú */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="transition-transform duration-300 transform hover:scale-110 relative z-50"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Image  src="/Assets/menu.gif" alt="Menu" width={24} height={24} />
              )}
            </button>

            {/* Menú desplegable */}
            <div
              className={`absolute top-12 right-0 bg-[#0f0c1d]/95 backdrop-blur-md border border-blue-500/50 rounded-xl shadow-2xl transition-all duration-300 origin-top-right ${
                isMenuOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <div className="py-2 min-w-[160px]">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-6 py-3 text-white hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 font-medium text-sm tracking-wide"
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Tema (comentado como en el original) */}
                {/*
                <button
                  onClick={() => {
                    toggleTheme();
                    closeMenu();
                  }}
                  className="flex items-center gap-3 w-full px-6 py-3 text-white hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 font-medium text-sm tracking-wide"
                >
                  <div className="relative w-4 h-4 overflow-hidden">
                    <MoonStar
                      className={`absolute left-0 w-4 h-4 transition-all duration-300 ${
                        isDarkMode ? "top-0 opacity-100" : "top-6 opacity-0"
                      }`}
                    />
                    <Sun
                      className={`absolute left-0 w-4 h-4 text-yellow-400 transition-all duration-300 ${
                        isDarkMode ? "top-6 opacity-0" : "top-0 opacity-100"
                      }`}
                    />
                  </div>
                  {isDarkMode 
                    ? (language === "ES" ? "Modo Claro" : "Light Mode")
                    : (language === "ES" ? "Modo Oscuro" : "Dark Mode")
                  }
                </button>
                */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay para cerrar el menú en móvil */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}

export default Header;
