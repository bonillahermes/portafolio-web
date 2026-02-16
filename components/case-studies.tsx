const cases = [
  {
    sector: "Campana electoral",
    description:
      "Segmentacion cuantitativa de votantes y optimizacion de recursos.",
    result: "Victoria con 12% de diferencia sobre proyecciones.",
  },
  {
    sector: "Senado de la Republica",
    description:
      "Integracion de bases de datos y modelo predictivo de violencia politica con enfoque de genero.",
    result: "Sistema de alertas tempranas operativo.",
  },
  {
    sector: "Sector Salud",
    description:
      "Optimizacion geografica de distribucion de medicamentos oncologicos en zonas rurales.",
    result: "60% de reduccion en tiempos de entrega.",
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            Casos
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Resultados
          </h2>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-px bg-border">
          {cases.map((item) => (
            <div
              key={item.sector}
              className="bg-background p-8 md:p-10 grid md:grid-cols-[200px_1fr_1fr] gap-6 items-start"
            >
              <p className="text-sm font-semibold text-foreground uppercase tracking-wide">
                {item.sector}
              </p>
              <p className="text-sm text-secondary leading-relaxed">
                {item.description}
              </p>
              <p className="text-sm font-mono font-medium text-accent">
                {item.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
