"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "inicio", label: "Inicio" },
    { id: "nosotros", label: "Nosotros" },
    { id: "servicios", label: "Servicios" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-[#fbf9f8]/80 backdrop-blur-md shadow-sm py-4"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8">
        <Link
          href="#"
          className="text-lg md:text-xl font-bold tracking-tighter text-primary font-headline"
        >
          VIRTax Consulting
        </Link>

        <div className="hidden lg:flex items-center gap-8 font-headline tracking-tight text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setActiveLink(link.id)}
              className={
                activeLink === link.id
                  ? "text-primary border-b-2 border-primary pb-1 transition-all"
                  : "text-on-surface opacity-70 hover:opacity-100 hover:text-primary transition-all"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contacto"
          className="cta-button cta-pulse px-4 md:px-6 py-2.5 rounded-lg text-xs md:text-sm font-bold uppercase tracking-wide flex items-center gap-2"
        >
          <span className="hidden sm:inline">Diagnostico</span> GRATIS
          <span className="material-symbols-outlined text-lg">
            arrow_forward
          </span>
        </Link>
      </div>
    </nav>
  );
}
