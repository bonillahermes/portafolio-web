import { BarChart3, FileText, Database, MapPin } from "lucide-react"

const services = [
  {
    icon: BarChart3,
    title: "Inteligencia Electoral",
    description:
      "Microsegmentacion de votantes, modelos predictivos de comportamiento electoral, optimizacion de recursos de campana basada en datos.",
  },
  {
    icon: FileText,
    title: "Analisis de Politicas Publicas",
    description:
      "Evaluacion cuantitativa de impacto, diseno basado en evidencia, analisis territorial y socioeconomico para toma de decisiones gubernamentales.",
  },
  {
    icon: Database,
    title: "Integracion de Datos Institucionales",
    description:
      "Consolidacion de bases de datos dispersas, limpieza y estandarizacion, construccion de pipelines para entidades publicas y organizaciones.",
  },
  {
    icon: MapPin,
    title: "Analisis Geoespacial y de Riesgo",
    description:
      "Modelos de prediccion territorial, analisis de violencia politica, mapeo de vulnerabilidad con enfoque diferencial (genero, etnia, region).",
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Que hago
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-background p-8 md:p-10 flex flex-col gap-4"
            >
              <service.icon className="w-5 h-5 text-secondary" />
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
