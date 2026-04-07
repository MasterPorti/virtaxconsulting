import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-on-surface text-white">
      {/* Mini CTA */}
      <div className="bg-cta py-6 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-lg font-bold text-center md:text-left">
            ¿Listo para proteger tu empresa?
          </p>
          <Link
            href="#contacto"
            className="bg-white text-cta px-6 py-3 rounded-lg font-bold text-sm uppercase hover:bg-gray-100 transition-all flex items-center gap-2"
          >
            Diagnostico Gratis
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>

      <div className="py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-lg font-black mb-4">VIRTax Consulting S.C.</h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Especialistas en diagnostico fiscal empresarial. Protegemos a las
              PYMES mexicanas y emprendedores personas fisicas de riesgos
              fiscales y multas del SAT.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-lg">
                  public
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs tracking-wide uppercase font-bold text-white/80 mb-6">
              Servicios
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#servicios"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Diagnostico Fiscal
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Contabilidad
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Asesoria Fiscal
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Auditoria
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-wide uppercase font-bold text-white/80 mb-6">
              Empresa
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#nosotros"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  Terminos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-wide uppercase font-bold text-white/80 mb-6">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">
                  location_on
                </span>
                CDMX, Col. Del Valle
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">call</span>
                +52 (55) 5523-1568
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-lg">mail</span>
                {/* TODO: verificar si contacto@virtax.com.mx esta activo */}
                info@virtaxconsulting.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2024 VIRTax Consulting S.C. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/40">
            20+ anos protegiendo empresas mexicanas
          </p>
        </div>
      </div>
    </footer>
  );
}
