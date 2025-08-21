"use client";
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

  const locale = pathname.split("/")[1] || "en";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const switchTo = (next: string) => {
    const parts = pathname.split("/");
    parts[1] = next;
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

    function onScroll() {
      setScrolled(window.scrollY > 20);
    }

    function onResize() {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", onDown);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isMenuOpen]);

  const menuItems = [
    { label: tNav("home"), href: `/` },
    { label: tNav("about"), href: `/Pages/About` },
    { label: tNav("projects"), href: `/Pages/Projects` },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? "bg-black/70 supports-[backdrop-filter]:bg-black/20 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-2 sm:py-3"
            : "bg-transparent py-4 sm:py-6"
        }`}
        style={{
          WebkitBackdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
          backdropFilter: scrolled ? "blur(40px) saturate(180%)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo responsivo */}
            <Link
              href={`/`}
              className="group flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-bold transition-all duration-500 ease-out hover:scale-105 active:scale-95"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 ease-out transform group-hover:scale-110"
                  style={{
                    filter: "blur(8px) sm:blur(12px)",
                    WebkitFilter: "blur(8px) sm:blur(12px)",
                  }}
                ></div>
                <div className="relative bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/25">
                  <Terminal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white drop-shadow-sm" />
                </div>
              </div>
              <span
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent font-black tracking-tight"
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 20px rgba(56, 189, 248, 0.3)",
                }}
              >
                {tHeader("brand")}
              </span>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium text-base tracking-wide"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                </Link>
              ))}
            </nav>

            {/* Controles del lado derecho */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
              {/* Toggle de idioma responsivo */}
              <div className="relative">
                <button
                  onClick={() => switchTo(locale === "es" ? "en" : "es")}
                  className={`relative w-12 h-7 sm:w-14 sm:h-8 md:w-16 md:h-9 rounded-full transition-all duration-500 ease-out shadow-inner ${
                    locale === "es"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-blue-500/30"
                      : "bg-gradient-to-r from-indigo-500 to-purple-500 shadow-purple-500/30"
                  }`}
                  style={{
                    boxShadow: `inset 0 1px 3px rgba(0,0,0,0.1), 0 2px 10px ${
                      locale === "es"
                        ? "rgba(59, 130, 246, 0.3)"
                        : "rgba(139, 92, 246, 0.3)"
                    }`,
                  }}
                >
                  <div
                    className={`absolute top-0.5 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded-full transition-all duration-500 ease-out flex items-center justify-center transform ${
                      locale === "es"
                        ? "translate-x-0.5"
                        : "translate-x-5 sm:translate-x-6 md:translate-x-7"
                    }`}
                    style={{
                      boxShadow:
                        "0 1px 4px rgba(0,0,0,0.15), 0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  >
                    <span className="text-xs font-bold text-gray-800 tracking-wide">
                      {locale.toUpperCase()}
                    </span>
                  </div>
                </button>
              </div>

              {/* Botón menú - Solo visible en móvil y tablet */}
              <div className="lg:hidden relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen((v) => !v)}
                  className="group relative p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-500 ease-out active:scale-95"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow:
                      "0 4px 16px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    WebkitBackdropFilter: "blur(20px) saturate(180%)",
                    backdropFilter: "blur(20px) saturate(180%)",
                  }}
                >
                  <div className="relative z-10">
                    {isMenuOpen ? (
                      <X className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 ease-out rotate-0 group-hover:rotate-90 drop-shadow-sm" />
                    ) : (
                      <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-500 ease-out group-hover:scale-110 drop-shadow-sm" />
                    )}
                  </div>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                    style={{
                      filter: "blur(1px)",
                      WebkitFilter: "blur(1px)",
                    }}
                  ></div>
                </button>

                {/* Mobile/Tablet Dropdown */}
                <div
                  className={`absolute top-16 sm:top-20 right-0 w-64 sm:w-72 transition-all duration-500 ease-out origin-top-right ${
                    isMenuOpen
                      ? "opacity-100 scale-100 visible translate-y-0"
                      : "opacity-0 scale-95 invisible -translate-y-4"
                  }`}
                >
                  <div
                    className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl"
                    style={{
                      background: "rgba(20, 20, 20, 0.85)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      boxShadow:
                        "0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 25px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                      WebkitBackdropFilter: "blur(40px) saturate(180%)",
                      backdropFilter: "blur(40px) saturate(180%)",
                    }}
                  >
                    <div className="p-2 sm:p-3">
                      {menuItems.map((item, i) => (
                        <Link
                          key={i}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="group flex items-center px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-gray-300 hover:text-white transition-all duration-300 ease-out font-medium text-sm sm:text-base active:scale-98"
                          style={{
                            background: "transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(255, 255, 255, 0.08)";
                            e.currentTarget.style.boxShadow =
                              "inset 0 1px 0 rgba(255, 255, 255, 0.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          <span className="ml-1 sm:ml-2 tracking-wide">
                            {item.label}
                          </span>
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                            <div
                              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                              style={{
                                background:
                                  "linear-gradient(45deg, #3b82f6, #06b6d4)",
                                boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)",
                              }}
                            ></div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div
                      className="h-0.5"
                      style={{
                        background:
                          "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay - Solo en móvil */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-out"
          onClick={() => setIsMenuOpen(false)}
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            WebkitBackdropFilter: "blur(10px) saturate(120%)",
            backdropFilter: "blur(10px) saturate(120%)",
          }}
        />
      )}

      {/* Espaciador responsivo */}
      <div className="h-16 sm:h-20 md:h-24"></div>
    </>
  );
}

export default Header;
