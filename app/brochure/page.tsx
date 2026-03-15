"use client"

import { Radar, Sparkles, Scale, ScanSearch, Microscope, Workflow, BadgeDollarSign, Target } from "lucide-react"

const servicesA = [
  {
    icon: Radar,
    title: "Inteligencia Territorial",
    description: "Análisis cuantitativo del territorio representado por el congresista: estructura demográfica, vulnerabilidad socioeconómica y patrones electorales a nivel municipal.",
    for: "UTL · Congresistas · Senado · Cámara",
  },
  {
    icon: Sparkles,
    title: "Copiloto de Control Político",
    description: "Sistema de inteligencia basado en IA para analizar informes institucionales, datos oficiales y series estadísticas como insumo para la preparación de debates de control político.",
    for: "UTL · Debates · Citaciones",
  },
  {
    icon: Scale,
    title: "Análisis Legislativo con IA",
    description: "Procesamiento automatizado de proyectos de ley: generación de resúmenes técnicos, comparación entre versiones y construcción de fichas legislativas estructuradas.",
    for: "UTL · Producción legislativa",
  },
  {
    icon: ScanSearch,
    title: "Observatorio Legislativo",
    description: "Monitoreo continuo de agenda legislativa, votaciones y proyectos por temática mediante dashboards y alertas periódicas para equipos legislativos.",
    for: "UTL · Multi-cliente",
  },
]

const servicesB = [
  {
    icon: Microscope,
    title: "Diagnóstico de Madurez de Datos",
    description: "Evaluación del estado de procesos, infraestructura analítica y digitalización institucional con hoja de ruta priorizada de mejora.",
    for: "Ministerios · Entidades públicas",
  },
  {
    icon: Workflow,
    title: "Arquitectura de Sistemas Institucionales",
    description: "Diseño y desarrollo de sistemas orientados a digitalizar procesos críticos y mejorar la trazabilidad operativa dentro de la entidad.",
    for: "Ministerios · Organismos · ONG",
  },
  {
    icon: BadgeDollarSign,
    title: "Gestión Inteligente de Cuentas de Cobro",
    description: "Plataforma digital para registro, seguimiento y trazabilidad de cuentas de cobro en entidades públicas con parametrización institucional.",
    for: "Entidades públicas · UTL · Ministerios",
  },
  {
    icon: Target,
    title: "Evaluación de Impacto de Política Pública",
    description: "Análisis cuantitativo del impacto territorial y socioeconómico de programas públicos mediante metodologías verificables.",
    for: "Gobierno · Congreso · Organismos internacionales",
  },
]

const clients = [
  "Ministerio del Interior",
  "Ministerio de Igualdad",
  "Comisión Legal para la Equidad de la Mujer",
  "Gobernación de Boyacá",
]

export default function BrochurePage() {
  return (
    <>
      <style jsx global>{`
        @media print {
          nav, footer, .no-print { display: none !important; }
          body { background: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          section { break-inside: avoid; }
          @page { margin: 1.5cm 2cm; size: A4; }
        }
      `}</style>

      <div className="bg-white min-h-screen">
        {/* Download button */}
        <div className="no-print fixed top-20 right-6 z-40">
          <button
            onClick={() => window.print()}
            className="bg-accent text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-lg hover:bg-accent/90 transition-colors"
          >
            Descargar PDF
          </button>
        </div>

        <div className="mx-auto max-w-3xl px-8 py-16 print:py-0 print:px-0 print:max-w-none">

          {/* ── HEADER ── */}
          <section className="mb-16 print:mb-10 pt-12 print:pt-0">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h1 className="text-3xl font-semibold text-foreground tracking-tight mb-1">
                  Hermes Bonilla
                </h1>
                <p className="text-sm text-accent">
                  Analítica y sistemas para instituciones públicas
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-foreground font-medium">hermesbonilla.com</p>
                <p className="text-sm text-muted-foreground">+57 300 976 9468</p>
              </div>
            </div>

            <div className="border-t-2 border-accent pt-8">
              <h2 className="text-4xl font-semibold text-foreground tracking-tight leading-[1.1] mb-4">
                Datos que <span className="text-accent">deciden.</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                Analítica de datos, inteligencia artificial y desarrollo de sistemas orientados
                a fortalecer la toma de decisiones en entidades públicas, equipos legislativos
                y organizaciones institucionales.
              </p>
            </div>
          </section>

          {/* ── SERVICIOS: Equipos legislativos ── */}
          <section className="mb-14 print:mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-accent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Equipos legislativos
              </p>
            </div>

            <div className="flex flex-col gap-0">
              {servicesA.map((s, i) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.title}
                    className={`grid grid-cols-[auto_1fr] gap-5 py-5 ${i < servicesA.length - 1 ? "border-b border-border print:border-gray-200" : ""}`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 shrink-0 print:bg-gray-100 mt-0.5">
                      <Icon className="w-5 h-5 text-accent print:text-gray-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                        <span className="text-[10px] text-muted-foreground/50 hidden sm:inline">{s.for}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ── SERVICIOS: Entidades públicas ── */}
          <section className="mb-14 print:mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-accent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Entidades públicas
              </p>
            </div>

            <div className="flex flex-col gap-0">
              {servicesB.map((s, i) => {
                const Icon = s.icon
                return (
                  <div
                    key={s.title}
                    className={`grid grid-cols-[auto_1fr] gap-5 py-5 ${i < servicesB.length - 1 ? "border-b border-border print:border-gray-200" : ""}`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 shrink-0 print:bg-gray-100 mt-0.5">
                      <Icon className="w-5 h-5 text-accent print:text-gray-600" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                        <span className="text-[10px] text-muted-foreground/50 hidden sm:inline">{s.for}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ── CLIENTES ── */}
          <section className="mb-14 print:mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-accent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Entidades que han confiado en nosotros
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {clients.map((c) => (
                <p key={c} className="text-sm text-foreground font-medium">{c}</p>
              ))}
            </div>
          </section>

          {/* ── CONTACTO ── */}
          <section className="border-t-2 border-accent pt-8 print:pt-6">
            <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-3">
              Conversemos sobre su proyecto
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Agende una consulta inicial sin costo para evaluar cómo podemos aportar
              a su entidad o equipo legislativo. Consulta confidencial y sin compromiso.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">WhatsApp</p>
                <p className="text-sm font-semibold text-foreground">+57 300 976 9468</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Web</p>
                <p className="text-sm font-semibold text-accent">hermesbonilla.com</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Ubicación</p>
                <p className="text-sm font-semibold text-foreground">Bogotá, Colombia</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}
