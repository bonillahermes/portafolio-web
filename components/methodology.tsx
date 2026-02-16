const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos la situación actual: qué datos existen, qué preguntas necesitan respuesta y qué decisiones dependen de los resultados.",
  },
  {
    number: "02",
    title: "Arquitectura de datos",
    description:
      "Diseñamos la estructura de recolección, integración y procesamiento. Consolidamos fuentes dispersas en un sistema coherente.",
  },
  {
    number: "03",
    title: "Modelado y análisis",
    description:
      "Aplicamos modelos estadísticos, machine learning o análisis geoespacial según la necesidad. Cada modelo se valida rigurosamente.",
  },
  {
    number: "04",
    title: "Entrega estratégica",
    description:
      "Presentamos resultados accionables: reportes ejecutivos, dashboards interactivos y recomendaciones con sustento cuantitativo.",
  },
]

export default function Methodology() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-20">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
            Metodología
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground text-balance leading-tight max-w-3xl">
            Un proceso riguroso
            <br className="hidden md:block" />
            de principio a fin
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-8 lg:p-6"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-px h-12 bg-primary-foreground/10" />
              )}
              <span className="font-mono text-3xl font-semibold text-accent/60 mb-6 block">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-primary-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
