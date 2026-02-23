import { BarChart3, FileText, Database, MapPin, ArrowRight } from "lucide-react"
import { FadeIn, AnimatedLine } from "./motion"

const services = [
  {
    icon: BarChart3,
    number: "01",
    category: "Inteligencia electoral",
    title: "Decisiones que ganan elecciones",
    description:
      "Microsegmentación de votantes, modelos predictivos de comportamiento electoral y optimización de recursos de campaña basada en datos.",
    capabilities: [
      "Segmentación cuantitativa",
      "Modelos predictivos",
      "Optimización de inversión",
    ],
    clientType: "Campañas · Partidos · Candidatos",
  },
  {
    icon: FileText,
    number: "02",
    category: "Políticas públicas",
    title: "Evidencia para gobernar mejor",
    description:
      "Evaluación cuantitativa de impacto, diseño basado en evidencia, análisis territorial y socioeconómico para toma de decisiones gubernamentales.",
    capabilities: [
      "Evaluación de impacto",
      "Diseño basado en evidencia",
      "Análisis territorial",
    ],
    clientType: "Gobierno · Congreso · Entidades públicas",
  },
  {
    icon: Database,
    number: "03",
    category: "Integración de datos",
    title: "De datos dispersos a decisiones claras",
    description:
      "Consolidación de bases de datos dispersas, limpieza y estandarización, construcción de pipelines para entidades públicas y organizaciones.",
    capabilities: [
      "Consolidación de datos",
      "Pipelines automatizados",
      "Estandarización",
    ],
    clientType: "Organizaciones · Instituciones · ONG",
  },
  {
    icon: MapPin,
    number: "04",
    category: "Análisis geoespacial",
    title: "Territorios mapeados, riesgos anticipados",
    description:
      "Modelos de predicción territorial, análisis de violencia política, mapeo de vulnerabilidad con enfoque diferencial (género, etnia, región).",
    capabilities: [
      "Predicción territorial",
      "Mapeo de vulnerabilidad",
      "Enfoque diferencial",
    ],
    clientType: "Gobierno · Organismos internacionales",
  },
]

export default function Services() {
  const featured = services[0]
  const others = services.slice(1)
  const FeaturedIcon = featured.icon

  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <AnimatedLine />
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                Servicios
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance leading-[1.05]">
              Acompañamiento
              <br className="hidden md:block" />
              integral basado
              <br className="hidden md:block" />
              en datos
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-lg text-secondary leading-relaxed max-w-lg">
              Sus datos no deberían quedarse en reportes que nadie lee.
              Convertimos la información que ya tiene en ventaja estratégica
              para decisiones que no pueden esperar.
            </p>
          </FadeIn>
        </div>

        {/* Featured service - full width */}
        <FadeIn>
          <div className="group relative border border-border border-l-2 border-l-accent p-8 lg:p-12 hover:bg-primary hover:border-primary hover:border-l-accent transition-all duration-500 mb-px">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center">
              <div className="flex flex-col gap-5">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <FeaturedIcon
                      className="w-6 h-6 text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-mono text-5xl font-bold text-border group-hover:text-primary-foreground/10 transition-colors">
                    {featured.number}
                  </span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {featured.category}
                </p>
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary-foreground transition-colors leading-tight">
                  {featured.title}
                </h3>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-base text-secondary group-hover:text-primary-foreground/60 leading-relaxed transition-colors">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featured.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-[11px] font-mono text-secondary/70 group-hover:text-primary-foreground/50 border border-border group-hover:border-primary-foreground/15 px-3 py-1.5 transition-colors"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-secondary/60 group-hover:text-primary-foreground/30 transition-colors">
                  Para: {featured.clientType}
                </p>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="w-5 h-5 text-accent" />
            </div>
          </div>
        </FadeIn>

        {/* Other services - 3 columns */}
        <div className="grid md:grid-cols-3 gap-0">
          {others.map((service, i) => {
            const Icon = service.icon
            return (
              <FadeIn key={service.title} delay={(i + 1) * 0.1}>
                <div className="group relative border border-border p-8 lg:p-10 flex flex-col gap-5 hover:bg-primary hover:border-primary transition-all duration-500 h-full -ml-px first:ml-0 -mt-px">
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary-foreground/20 transition-colors">
                      <Icon
                        className="w-5 h-5 text-foreground group-hover:text-accent transition-colors"
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="font-mono text-4xl font-bold text-border group-hover:text-primary-foreground/10 transition-colors">
                      {service.number}
                    </span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {service.category}
                  </p>
                  <div className="flex-1 flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-secondary group-hover:text-primary-foreground/60 leading-relaxed transition-colors">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-[11px] font-mono text-secondary/70 group-hover:text-primary-foreground/50 border border-border group-hover:border-primary-foreground/15 px-3 py-1.5 transition-colors"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-secondary/60 group-hover:text-primary-foreground/30 transition-colors">
                    Para: {service.clientType}
                  </p>
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
