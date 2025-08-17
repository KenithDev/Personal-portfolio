"use client";
// Header.tsx
import React, { useState, useEffect, useRef } from "react";
import { X, Terminal } from "@mynaui/icons-react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

function Header() {
  const tHeader = useTranslations("Header");
  const tNav = useTranslations("nav");
  const tLang = useTranslations("lang");
  const router = useRouter();
  const pathname = usePathname();

  // Obtener el locale del router
  const locale = pathname.split("/")[1] || "en"; // Esto obtiene el locale de la URL

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const switchTo = (next: string) => {
    const parts = pathname.split("/");
    parts[1] = next; // Cambia el segmento del idioma
    router.push(parts.join("/"));
  };

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [isMenuOpen]);

  const menuItems = [
    { label: tNav("home"), href: `/` },
    { label: tNav("about"), href: `/Pages/About` },
    { label: tNav("projects"), href: `/Pages/Projects` },
  ];

  return (
    <>
      <header className="flex items-center  justify-between px-5 py-4 gap-10 sm:px-10 sm:py-8 xl:px-20 text-white relative z-40">
        <div className="text-xl font-bold flex items-center gap-1 transition-transform duration-300 hover:scale-110 md:text-2xl ">
          <Link href={`/`}>
            <span className="text-blue-500">&lt;</span>
            <span className="text-white font-bold ">{tHeader("brand")}</span>
            <span className="text-blue-500">/&gt;</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-5 xl:gap-10">
          {/* Switch ES/EN */}
          <div className="relative w-10 h-6 overflow-hidden font-Sans_Code text-lg transition-transform duration-300 transform hover:scale-110">
            <button
              onClick={() => switchTo(locale === "es" ? "en" : "es")}
              className="relative w-full h-full  "
            >
              <span
                className={`absolute left-0 w-full 
                   transition-all duration-500 ${
                     locale === "es" ? "top-0 opacity-100" : "top-8 opacity-0"
                   }`}
              >
                {tLang("es")}
              </span>
              <span
                className={`absolute left-0 w-full 
                  transition-all duration-500 ${
                    locale === "en" ? "top-0 opacity-100" : "top-8 opacity-0"
                  }`}
              >
                {tLang("en")}
              </span>
            </button>
          </div>

          {/* Menú */}
          <div className="flex relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="transition-transform duration-300 transform hover:scale-110 relative z-50"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Terminal className="w-8 h-8 text-white" />
              )}
            </button>

            <div
              className={`absolute top-10 right-0 bg-[#0f0c1d]/95 backdrop-blur-md border border-blue-500/50 rounded-xl shadow-2xl transition-all duration-300 origin-top-right ${
                isMenuOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <div className="py-2 min-w-[160px]">
                {menuItems.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-white hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 font-medium text-sm tracking-wide"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
