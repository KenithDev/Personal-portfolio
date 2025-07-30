"use client";
// Header.tsx

import React, { useState } from "react";
import { MoonStar, Sun } from "@mynaui/icons-react";

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState("ES");

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ES" ? "EN" : "ES"));
  };

  return (
    <header className="flex items-center justify-between px-5 py-4 sm:px-10 sm:py-8 xl:px-20 text-white mb-10 md:mb-20">
      <div className="text-xl font-bold flex items-center gap-1 transition-transform duration-300 hover:scale-110">
        <a href="/">
          <span className="text-blue-500">&lt;</span>
          <span className="text-white font-bold font-poppins">KenithDev</span>
          <span className="text-blue-500">/&gt;</span>
        </a>
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

        <button
          onClick={toggleTheme}
          className="transition-transform duration-300 transform hover:scale-110"
        >
          <div className="relative w-6 h-6 overflow-hidden">
            {/* Moon */}
            <MoonStar
              className={`absolute left-0 w-5 h-5 transition-all duration-500 ${
                isDarkMode ? "top-0 opacity-100" : "top-8 opacity-0"
              }`}
            />
            {/* Sun */}
            <Sun
              className={`absolute left-0 w-5 h-5 text-yellow-400 transition-all duration-500 ${
                isDarkMode ? "top-8 opacity-0" : "top-0 opacity-100"
              }`}
            />
          </div>
        </button>
        <button className="transition-transform duration-300 transform hover:scale-110">
          <img src="/Assets/menu.gif" alt="Menu" />
        </button>
      </div>
    </header>
  );
}

export default Header;
