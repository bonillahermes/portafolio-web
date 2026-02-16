const cases = [
  {
    sector: "Campana electoral",
    tag: "Inteligencia electoral",
    description:
      "Segmentacion cuantitativa de votantes y optimizacion de la inversion en territorio. Modelo predictivo de comportamiento electoral por zona.",
    result: "Victoria con +12%",
    resultDetail: "sobre proyecciones iniciales",
  },
  {
    sector: "Senado de la Republica",
    tag: "Politicas publicas",
    description:
      "Integracion de bases de datos institucionales y desarrollo de un modelo predictivo de violencia politica con enfoque de genero.",
    result: "Sistema operativo",
    resultDetail: "de alertas tempranas activo",
  },
  {
    sector: "Sector Salud",
    tag: "Analisis geoespacial",
    description:
      "Optimizacion geografica de la cadena de distribucion de medicamentos oncologicos en zonas rurales de dificil acceso.",
    result: "-60% tiempos",
    resultDetail: "de entrega a zonas rurales",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 lg:py-32 bg-muted">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Casos
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance leading-tight">
              Resultados medibles
            </h2>
          </div>
          <p className="text-base text-secondary leading-relaxed max-w-md">
            Proyectos seleccionados donde los datos generaron impacto directo
            en la toma de decisiones.
          </p>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-px bg-border">
          {cases.map((item) => (
            <div
              key={item.sector}
              className="bg-background p-8 lg:p-10 grid lg:grid-cols-[240px_1fr_220px] gap-8 items-start"
            >
              {/* Left column */}
              <div>
                <span className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-accent border border-accent/30 px-2.5 py-1 rounded-sm mb-3">
                  {item.tag}
                </span>
                <p className="text-base font-semibold text-foreground">
                  {item.sector}
                </p>
              </div>

              {/* Description */}
              <p className="text-sm text-secondary leading-relaxed">
                {item.description}
              </p>

              {/* Result */}
              <div className="lg:text-right">
                <p className="font-mono text-xl font-semibold text-foreground">
                  {item.result}
                </p>
                <p className="text-xs text-secondary mt-1">
                  {item.resultDetail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
