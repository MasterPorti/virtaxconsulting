import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileCTA from "./components/MobileCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <MobileCTA />

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <span className="urgency-badge text-white text-[10px] font-bold px-2 py-1 rounded-full">
                LIMITADO
              </span>
              <span className="text-sm text-red-700 font-medium">
                Solo 5 espacios disponibles esta semana
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.05] tracking-tight mb-6">
              ¿Riesgos fiscales <span className="gradient-text italic">no identificados</span> en tu empresa?
            </h1>

            <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-6 leading-relaxed">
              En VIRTax Consulting realizamos un{" "}
              <strong>diagnostico financiero y fiscal express gratuito</strong> para
              orientarte a detectar riesgos antes de que se conviertan en multas
              y auditorias del SAT.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4 mb-2 text-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-cta text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                100% Gratis
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-cta text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                Sin compromiso
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-cta text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                Resultados en 48hrs*
              </span>
            </div>
            <p className="text-xs text-on-surface-variant/70 mb-6">
              *Una vez contando con la informacion que proporcione la empresa
            </p>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="#contacto"
                className="cta-button cta-pulse px-8 py-5 rounded-lg font-bold text-base tracking-wide uppercase flex items-center justify-center gap-3 shadow-xl"
              >
                AGENDA TU DIAGNOSTICO GRATIS
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 md:gap-12 pt-8 border-t border-outline-variant/20">
              <div>
                <p className="text-3xl md:text-4xl font-headline font-extrabold text-primary">
                  20+
                </p>
                <p className="text-sm text-on-surface-variant">
                  Anos de experiencia
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-headline font-extrabold text-primary">
                  200+
                </p>
                <p className="text-sm text-on-surface-variant">
                  Empresas protegidas
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-headline font-extrabold text-primary">
                  $0
                </p>
                <p className="text-sm text-on-surface-variant">
                  Costo del diagnostico
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9aPxmBn5SNPg7DYnzxTDXWact8yQk0Br_MdgmubO_zmWz_sYkwSq9C15_mIL0H8jzDUrf7tqc4vecZ2xPs8isaSPfK08er8qMgTaSBnMpS4-SvMciDvzpUf6i1zl_6mYi1_3gbGKhvVZW5sZWn3AI-S3VUEYV4W9ci18suyOWXnbfHi5C3fNmMfOBEm8RH7NciDu2Du3ZdNUkQ322yUfuPMfhyjMH35_CFovP0UiDKWv6ulGPIeOpZSnsSY-fPTCD0kqrCclNXw"
                alt="Especialistas fiscales VIRTax"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-12 bg-white p-4 md:p-6 rounded-xl shadow-2xl border border-outline-variant/10 max-w-[220px] animate-float">
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="material-symbols-outlined text-cta text-2xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface opacity-60">
                  Garantizado
                </span>
              </div>
              <p className="text-sm font-medium leading-tight">
                Identificamos riesgos antes de que el SAT los encuentre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 bg-surface-container border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-sm text-on-surface-variant mb-6 uppercase tracking-widest">
            Empresas que confian en nosotros
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="text-2xl font-headline font-bold">Distribuidora QMB</div>
            <div className="text-2xl font-headline font-bold">Binomio Actuarial</div>
            <div className="text-2xl font-headline font-bold">Panarte</div>
            <div className="text-2xl font-headline font-bold">Eissa Ingenieria</div>
          </div>
        </div>
      </section>

      {/* Pain Points - "Te suena familiar?" */}
      <section className="py-20 bg-surface-container-highest">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span
              className="material-symbols-outlined text-5xl text-primary mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              help
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface mb-4">
              ¿Te suena familiar?
            </h2>
            <p className="text-on-surface-variant text-lg">
              Marca los que apliquen a tu situacion...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {[
              "Recibo muchas cartas invitacion del SAT",
              "¿Porque mi opinion de cumplimiento salio negativa si ya pague todo?",
              "¿Porque mi empresa tiene tantas discrepancias fiscales con el SAT?",
              "¿Que pasa si mis depositos bancarios no coinciden con lo que facture?",
              "Me llegan multas por falta de cumplimiento de obligaciones",
              "Adeudos de impuestos, ¿como me puedo regularizar?",
              "¿Que gastos puedo deducir realmente para bajar mis impuestos?",
            ].map((pain, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-white rounded-lg border border-outline-variant/20 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-6 h-6 rounded border-2 border-outline-variant/40 group-hover:border-primary group-hover:bg-primary/10 transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    check
                  </span>
                </div>
                <span className="text-on-surface">{pain}</span>
              </div>
            ))}
          </div>

          <div className="text-center bg-primary/5 border border-primary/20 rounded-xl p-6">
            <p className="text-lg font-medium text-on-surface">
              Si marcaste{" "}
              <span className="text-primary font-bold">aunque sea UNO</span>,
              necesitas este diagnostico.
            </p>
            <Link
              href="#contacto"
              className="cta-button inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm uppercase mt-4"
            >
              SOLICITAR DIAGNOSTICO GRATIS
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Agitation */}
      <section className="py-20 bg-red-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <span
            className="material-symbols-outlined text-5xl text-red-500 mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            warning
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface mb-6">
            Pequenos errores = <span className="text-red-600">Grandes multas</span>
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-8 max-w-2xl mx-auto">
            Un error simple en tu contabilidad puede costarte{" "}
            <strong className="text-red-600">de $6,000 a $20,000 MXN por cada error</strong> en
            multas. Muchos empresarios lo descubren cuando ya es demasiado tarde.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-4xl font-headline font-bold text-red-600 mb-2">
                70-85%
              </p>
              <p className="text-sm text-on-surface-variant">
                de PYMES tienen inconsistencias en sus declaraciones
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-4xl font-headline font-bold text-red-600 mb-2">
                Variables
              </p>
              <p className="text-sm text-on-surface-variant">
                multas del SAT por inconsistencias o incumplimientos
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-4xl font-headline font-bold text-red-600 mb-2">
                15 dias
              </p>
              <p className="text-sm text-on-surface-variant">
                plazo para contestar inconsistencias detectadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution - 3 Simple Steps */}
      <section id="nosotros" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-label uppercase tracking-widest font-bold text-cta mb-4">
              Proceso Simple
            </h2>
            <h3 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight">
              Como funciona en 3 pasos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative text-center p-8">
              <div className="w-16 h-16 bg-cta text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h4 className="font-headline font-bold text-xl mb-3">
                Agenda tu llamada
              </h4>
              <p className="text-on-surface-variant">
                Solo toma 2 minutos. Elige el horario que mejor te funcione.
              </p>
              {/* Arrow */}
              <div className="hidden md:block absolute top-12 -right-4 text-outline-variant">
                <span className="material-symbols-outlined text-4xl">
                  arrow_forward
                </span>
              </div>
            </div>

            <div className="relative text-center p-8">
              <div className="w-16 h-16 bg-cta text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h4 className="font-headline font-bold text-xl mb-3">
                Analizamos tu situacion fiscal
              </h4>
              <p className="text-on-surface-variant">
                Revisamos de manera global tus cifras contables y fiscales en busca de discrepancias fiscales y riesgos.
              </p>
              {/* Arrow */}
              <div className="hidden md:block absolute top-12 -right-4 text-outline-variant">
                <span className="material-symbols-outlined text-4xl">
                  arrow_forward
                </span>
              </div>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-cta text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h4 className="font-headline font-bold text-xl mb-3">
                Recibe tu reporte
              </h4>
              <p className="text-on-surface-variant">
                En 72hrs una vez recibida la informacion, tendras un reporte claro de los riesgos generales detectados y recomendaciones.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="#contacto"
              className="cta-button cta-pulse inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-sm uppercase"
            >
              COMENZAR AHORA - ES GRATIS
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section id="servicios" className="py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-label uppercase tracking-widest font-bold text-primary mb-4">
              Diagnostico Gratuito
            </h2>
            <h3 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight mb-4">
              ¿Que incluye tu diagnostico?
            </h3>
            <div className="inline-flex items-center gap-2 text-lg">
              <span className="line-through text-on-surface-variant">
                Valor: $5,000 MXN
              </span>
              <span className="bg-cta text-white px-3 py-1 rounded-full font-bold text-sm">
                GRATUITO POR TIEMPO LIMITADO
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-outline-variant/10">
              <div className="w-14 h-14 bg-cta/10 rounded-xl flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-3xl text-cta"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  analytics
                </span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-3 text-on-surface">
                Analisis Express de Cifras
              </h4>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Revision basica/general de tus cifras contables y fiscales para
                verificar la congruencia entre lo que declaras y tus operaciones
                reales segun registros contables.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-cta text-lg">
                    check
                  </span>
                  Comparativo anual de CFDIs emitidos y recibidos vs declarados
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-cta text-lg">
                    check
                  </span>
                  Revision selectiva del IVA en meses atipicos
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-cta text-lg">
                    check
                  </span>
                  Deteccion de proveedores en listas negras del SAT
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-cta text-lg">
                    check
                  </span>
                  Cuestionario de cumplimiento fiscal
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-cta text-lg">
                    check
                  </span>
                  Evaluacion general de obligaciones corporativas
                </li>
              </ul>
            </div>

            {/* Card 2 - Featured */}
            <div className="bg-cta text-white rounded-2xl p-8 shadow-xl transform md:-translate-y-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  search
                </span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-3">
                Detectamos Riesgos
              </h4>
              <p className="opacity-90 leading-relaxed mb-4">
                Identificamos posibles riesgos fiscales, legales (relacionados
                con el tema fiscal) o contables-financieros que podrian afectar
                tu empresa.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm opacity-90">
                  <span className="material-symbols-outlined text-lg">
                    check
                  </span>
                  Riesgos ante el SAT
                </li>
                <li className="flex items-center gap-2 text-sm opacity-90">
                  <span className="material-symbols-outlined text-lg">
                    check
                  </span>
                  Inconsistencias detectadas
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-outline-variant/10">
              <div className="w-14 h-14 bg-cta/10 rounded-xl flex items-center justify-center mb-6">
                <span
                  className="material-symbols-outlined text-3xl text-cta"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  description
                </span>
              </div>
              <h4 className="text-xl font-headline font-bold mb-3 text-on-surface">
                Recomendaciones Claras
              </h4>
              <p className="text-on-surface-variant leading-relaxed mb-4">
                Te entregamos un reporte con los riesgos identificados y
                sugerencias claras de como corregirlos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-cta text-lg">
                    check
                  </span>
                  Reporte ejecutivo PDF
                </li>
                <li className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-cta text-lg">
                    check
                  </span>
                  Plan de accion sugerido
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-label uppercase tracking-widest font-bold text-primary mb-4">
              Testimonios
            </h2>
            <h3 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight">
              Lo que dicen nuestros clientes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Luisa M. Cano",
                company: "Grupo Restaurantero Argentino",
                quote:
                  "Descubrieron que estaba pagando de mas en impuestos al ano por errores en mis ingresos y deducciones. Ahora me asesoran fiscalmente.",
                savings: "Ahorro +$200,000/ano",
              },
              {
                name: "Heriberto Mendoza",
                company: "Proveedor de equipo y alimentos a Zoologicos",
                quote:
                  "Tenia temor de una auditoria, con las sugerencias de VIRTax corregimos todo a tiempo. Ahora estamos en continua mejora planificando nuestras finanzas y los impuestos con el soporte de los contadores.",
                savings: "Auditoria evitada",
              },
              {
                name: "Arely Rodriguez",
                company: "E-commerce Fashion",
                quote:
                  "Por fin entiendo mi situacion fiscal. Me ubicaron en el regimen adecuado donde pago impuestos justos que me permiten operar con crecimiento y en terminos simples, no en lenguaje de contador.",
                savings: "Pago justo de impuestos",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-outline-variant/10"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="material-symbols-outlined text-yellow-400"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="text-on-surface leading-relaxed mb-6 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-on-surface">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      {testimonial.company}
                    </p>
                  </div>
                  <div className="bg-cta/10 px-3 py-1 rounded-full">
                    <p className="text-sm font-bold text-cta">
                      {testimonial.savings}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-label uppercase tracking-widest font-bold text-primary mb-4">
              Preguntas Frecuentes
            </h2>
            <h3 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight">
              Resolvemos tus dudas
            </h3>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "¿Es realmente gratis?",
                a: "Si, el diagnostico express inicial es 100% gratuito y sin compromiso, es por tiempo limitado. No hay cargos ocultos ni obligacion de contratar.",
              },
              {
                q: "¿Cuanto tiempo toma?",
                a: "La llamada inicial dura aproximadamente 30 minutos donde se solicita informacion a la empresa. El reporte completo lo tendras en 72 horas a partir de que la empresa entregue completa la informacion.",
              },
              {
                q: "¿Mis datos estan seguros?",
                a: "Absolutamente. Toda la informacion es 100% confidencial y manejada bajo estrictos protocolos de seguridad, la informacion de los CFDIs se descarga del SAT utilizando las contrasenas de la empresa que maneja su mismo personal, no manejamos claves ni firmas electronicas de terceros.",
              },
              {
                q: "¿Que pasa despues del diagnostico?",
                a: "Te presentamos los hallazgos y, si lo deseas, podemos ayudarte a corregir los problemas encontrados. Sin ninguna presion.",
              },
              {
                q: "¿Si soy persona fisica con actividad empresarial me pueden hacer un diagnostico?",
                a: "Claro que si, en caso que no cuentes con la contabilidad formal se te hara el diagnostico con base en los CFDIs emitidos y recibidos y con base en las respuestas que des al cuestionario de cumplimiento que aplicamos podemos revisar algun otro tema de interes para tu negocio.",
              },
              {
                q: "¿Si soy persona fisica extranjera que inicie mi negocio en Mexico me pueden hacer un diagnostico?",
                a: "Claro que si, en el check list adicionalmente revisamos la correcta apertura y cumplimiento de obligaciones en Mexico, ademas del aspecto fiscal.",
              },
              {
                q: "¿Sirve para mi tipo de empresa?",
                a: "Atendemos todo tipo de empresas: PYMES, emprendedores, comercios, servicios profesionales y mas.",
              },
              {
                q: "¿El diagnostico express incluye correcciones a mis declaraciones o discrepancias con el SAT?",
                a: "Solo incluye el diagnostico y reporte de sugerencias o recomendaciones, si requieren un servicio adicional podemos hacerles una cotizacion con precios justos sin compromiso.",
              },
              {
                q: "¿Si requiero un servicio especializado como abogados, notarios o actuarios, pueden ayudarme?",
                a: "Si, trabajamos con diversos especialistas de manera continua que nos permite proporcionar un servicio integral a los clientes o referirlos segun sea el caso.",
              },
              {
                q: "¿Estan autorizados para presentar dictamenes ante el IMSS, Infonavit o SAT?",
                a: "Si, contamos con los registros para dictaminar ante el IMSS, Infonavit, 3% ante las secretarias de Finanzas de la CDMX o Estado de Mexico y tambien para dictamenes fiscales voluntarios ante el SAT o dictamen fiscal por enajenacion de acciones.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-outline-variant/10"
              >
                <h4 className="font-bold text-on-surface mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-cta">
                    help
                  </span>
                  {faq.q}
                </h4>
                <p className="text-on-surface-variant pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-on-primary">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-6">
            ¿Prefieres descubrir tus riesgos AHORA gratis...
          </h2>
          <p className="text-xl opacity-90 mb-8">
            ...o esperar a que el SAT te encuentre primero?
          </p>

          <Link
            href="#contacto"
            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg uppercase tracking-wide hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
          >
            QUIERO MI DIAGNOSTICO GRATIS
            <span className="material-symbols-outlined text-2xl">
              arrow_forward
            </span>
          </Link>

          <p className="mt-6 text-sm opacity-80">
            Sin costo · Sin compromiso · Resultados en 48hrs
          </p>

          <div className="flex justify-center gap-8 mt-10 pt-10 border-t border-white/20">
            <div>
              <p className="text-4xl font-bold">20+</p>
              <p className="text-sm opacity-80">Anos de experiencia</p>
            </div>
            <div>
              <p className="text-4xl font-bold">200+</p>
              <p className="text-sm opacity-80">Empresas protegidas</p>
            </div>
            <div>
              <p className="text-4xl font-bold">100%</p>
              <p className="text-sm opacity-80">Confidencial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Simplified */}
      <section id="contacto" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 rounded-full mb-6">
              <span className="material-symbols-outlined text-cta">
                schedule
              </span>
              <span className="text-sm font-medium text-cta">
                Solo quedan 5 espacios esta semana
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-headline font-extrabold tracking-tight mb-4">
              Agenda tu diagnostico gratuito
            </h2>
            <p className="text-on-surface-variant text-lg">
              Completa el formulario y te contactamos en menos de 24 horas.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-outline-variant/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant/40 focus:border-cta focus:ring-2 focus:ring-cta/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">
                    Nombre de tu empresa *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant/40 focus:border-cta focus:ring-2 focus:ring-cta/20 transition-all"
                    placeholder="Empresa S.A. de C.V."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant/40 focus:border-cta focus:ring-2 focus:ring-cta/20 transition-all"
                    placeholder="55 1234 5678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface mb-2">
                    Correo electronico *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant/40 focus:border-cta focus:ring-2 focus:ring-cta/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="cta-button cta-pulse w-full py-5 rounded-xl font-bold text-lg uppercase tracking-wide flex items-center justify-center gap-3"
              >
                SOLICITAR MI DIAGNOSTICO GRATIS
                <span className="material-symbols-outlined text-2xl">
                  arrow_forward
                </span>
              </button>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-cta text-lg">
                    lock
                  </span>
                  100% Seguro
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-cta text-lg">
                    visibility_off
                  </span>
                  Confidencial
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-cta text-lg">
                    money_off
                  </span>
                  Sin costo
                </span>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <span className="material-symbols-outlined text-3xl text-primary mb-3">
                location_on
              </span>
              <p className="font-bold text-on-surface">Oficina CDMX</p>
              <p className="text-sm text-on-surface-variant">
                Eugenia N°115, Col. Del Valle
              </p>
            </div>
            <div className="p-6">
              <span className="material-symbols-outlined text-3xl text-primary mb-3">
                call
              </span>
              <p className="font-bold text-on-surface">Telefono</p>
              <p className="text-sm text-on-surface-variant">
                +52 (55) 5523-1568
              </p>
            </div>
            <div className="p-6">
              <span className="material-symbols-outlined text-3xl text-primary mb-3">
                mail
              </span>
              <p className="font-bold text-on-surface">Email</p>
              <p className="text-sm text-on-surface-variant">
                {/* TODO: verificar si contacto@virtax.com.mx esta activo */}
                info@virtaxconsulting.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
