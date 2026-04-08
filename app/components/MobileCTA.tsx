"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-300 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-outline-variant/20 p-4 shadow-2xl">
        <Link
          href="#contacto"
          className="cta-button w-full py-4 rounded-lg text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">calendar_today</span>
          AGENDA TU DIAGNOSTICO GRATIS
        </Link>
        <p className="text-center text-xs text-on-surface-variant mt-2">
          Sin costo · Sin compromiso · Resultados en 72 HRS
        </p>
      </div>
    </div>
  );
}
