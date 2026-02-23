"use client"

import { FadeIn } from "./motion"

const cases = [
  {
    sector: "Campaña electoral",
    tag: "Inteligencia electoral",
    description:
      "Segmentación cuantitativa de votantes y optimización de la inversión en territorio. Modelo predictivo de comportamiento electoral por zona.",
    metric: "+12%",
    metricLabel: "sobre proyecciones iniciales",
    result: "Victoria electoral",
  },
  {
    sector: "Senado de la República",
    tag: "Políticas públicas",
    description:
      "Integración de bases de datos institucionales y desarrollo de un modelo predictivo de violencia política con enfoque de género.",
    metric: "100%",
    metricLabel: "operativo en alertas tempranas",
    result: "Sistema activo",
  },
  {
    sector: "Sector Salud",
    tag: "Análisis geoespacial",
    description:
      "Optimización geográfica de la cadena de distribución de medicamentos oncológicos en zonas rurales de difícil acceso.",
    metric: "-60%",
    metricLabel: "tiempos de entrega rural",
    result: "Impacto directo",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-28 lg:py-36 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                Resultados
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance leading-[1.05]">
              Impacto medible
              <br className="hidden md:block" />
              en cada proyecto
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-lg text-secondary leading-relaxed max-w-lg">
              Proyectos seleccionados donde los datos generaron impacto directo
              en la toma de decisiones de nuestros clientes.
            </p>
          </FadeIn>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-6">
          {cases.map((item, i) => (
            <FadeIn key={item.sector} delay={i * 0.1}>
              <div className="bg-background border border-border hover:border-accent/30 transition-colors p-8 lg:p-12 grid lg:grid-cols-[1fr_2fr_1fr] gap-8 lg:gap-12 items-center">
                {/* Left - Metric */}
                <div className="flex flex-col">
                  <span className="font-mono text-5xl lg:text-6xl font-bold text-foreground leading-none mb-2">
                    {item.metric}
                  </span>
                  <span className="text-xs text-secondary uppercase tracking-wider">
                    {item.metricLabel}
                  </span>
                </div>

                {/* Center - Description */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-accent bg-accent/10 px-3 py-1.5">
                      {item.tag}
                    </span>
                    <span className="text-xs text-secondary">{"/"}</span>
                    <span className="text-sm font-medium text-foreground">
                      {item.sector}
                    </span>
                  </div>
                  <p className="text-base text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Right - Result badge */}
                <div className="lg:text-right">
                  <span className="inline-block font-mono text-sm font-semibold text-accent border border-accent/30 px-5 py-2.5">
                    {item.result}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
