import { BarChart3, FileText, Database, MapPin } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    number: "01",
    title: "Inteligencia Electoral",
    description:
      "Microsegmentacion de votantes, modelos predictivos de comportamiento electoral y optimizacion de recursos de campana basada en datos.",
    capabilities: [
      "Segmentacion cuantitativa",
      "Modelos predictivos",
      "Optimizacion de inversion",
    ],
  },
  {
    icon: FileText,
    number: "02",
    title: "Analisis de Politicas Publicas",
    description:
      "Evaluacion cuantitativa de impacto, diseno basado en evidencia, analisis territorial y socioeconomico para toma de decisiones gubernamentales.",
    capabilities: [
      "Evaluacion de impacto",
      "Diseno basado en evidencia",
      "Analisis territorial",
    ],
  },
  {
    icon: Database,
    number: "03",
    title: "Integracion de Datos Institucionales",
    description:
      "Consolidacion de bases de datos dispersas, limpieza y estandarizacion, construccion de pipelines para entidades publicas y organizaciones.",
    capabilities: [
      "Consolidacion de datos",
      "Pipelines automatizados",
      "Estandarizacion",
    ],
  },
  {
    icon: MapPin,
    number: "04",
    title: "Analisis Geoespacial y de Riesgo",
    description:
      "Modelos de prediccion territorial, analisis de violencia politica, mapeo de vulnerabilidad con enfoque diferencial (genero, etnia, region).",
    capabilities: [
      "Prediccion territorial",
      "Mapeo de vulnerabilidad",
      "Enfoque diferencial",
    ],
  },
]

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Servicios
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance leading-tight">
              Acompanamiento integral
              <br className="hidden md:block" />
              basado en datos
            </h2>
          </div>
          <p className="text-base text-secondary leading-relaxed max-w-md">
            Cada proyecto recibe un equipo dedicado con las disciplinas
            necesarias para entregar resultados medibles.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 lg:p-10 flex flex-col gap-6 group hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <service.icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                <span className="font-mono text-xs text-secondary/60">{service.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {service.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-[11px] font-mono text-secondary/70 border border-border px-2.5 py-1 rounded-sm"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
