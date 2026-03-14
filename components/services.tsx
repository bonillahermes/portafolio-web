import { MapPin, Bot, FileText, Eye, ClipboardCheck, Code2, Receipt, BarChart3, ArrowRight } from "lucide-react"
import { FadeIn, AnimatedLine } from "./motion"

const groupA = [
  {
    icon: MapPin,
    number: "01",
    category: "Inteligencia territorial",
    title: "Inteligencia Territorial",
    description:
      "Análisis cuantitativo del territorio representado por el congresista: composición demográfica, vulnerabilidad socioeconómica y comportamiento electoral por municipio.",
    capabilities: [
      "Análisis geoespacial",
      "Segmentación cuantitativa",
      "Entrega ágil",
    ],
    clientType: "UTL · Congresistas · Senado · Cámara",
  },
  {
    icon: Bot,
    number: "02",
    category: "IA para control político",
    title: "Copiloto de Control Político",
    description:
      "Sistema de inteligencia con IA sobre informes ministeriales, datos del DANE y Contraloría para preparar debates con evidencia cuantitativa.",
    capabilities: ["RAG", "LLM", "Informes ejecutivos"],
    clientType: "UTL · Debates · Citaciones",
  },
  {
    icon: FileText,
    number: "03",
    category: "IA legislativa",
    title: "Análisis Legislativo con IA",
    description:
      "Resumen automático de proyectos de ley, comparación entre versiones, identificación de riesgos jurídicos y generación de fichas técnicas legislativas.",
    capabilities: ["NLP", "Gaceta del Congreso", "Ficha técnica"],
    clientType: "UTL · Producción legislativa",
  },
  {
    icon: Eye,
    number: "04",
    category: "Monitoreo legislativo",
    title: "Observatorio Legislativo",
    description:
      "Monitoreo continuo de agenda legislativa, votaciones y proyectos por tema. Dashboard con alertas periódicas para la UTL.",
    capabilities: ["Dashboard", "Alertas", "Seguimiento"],
    clientType: "UTL · Multi-cliente",
  },
]

const groupB = [
  {
    icon: ClipboardCheck,
    number: "05",
    category: "Diagnóstico institucional",
    title: "Diagnóstico de Madurez de Datos",
    description:
      "Evaluación del estado actual de procesos, datos y digitalización de la entidad. Entrega hoja de ruta priorizada con recomendaciones técnicas.",
    capabilities: ["Diagnóstico", "Hoja de ruta", "Procesos"],
    clientType: "Ministerios · Entidades públicas",
  },
  {
    icon: Code2,
    number: "06",
    category: "Desarrollo de plataformas",
    title: "Plataformas de Gestión a Medida",
    description:
      "Desarrollo de sistemas de información específicos para la necesidad institucional. Desde flujos en papel hasta plataformas digitales con trazabilidad completa.",
    capabilities: ["Next.js", "Desarrollo", "Automatización"],
    clientType: "Ministerios · Organismos · ONG",
  },
  {
    icon: Receipt,
    number: "07",
    category: "Gestión financiera",
    title: "Sistema de Cuentas de Cobro",
    description:
      "Plataforma horizontal para gestión, seguimiento y trazabilidad de cuentas de cobro en entidades públicas. Parametrizable por entidad.",
    capabilities: ["SaaS", "Gestión financiera", "Trazabilidad"],
    clientType: "Entidades públicas · UTL · Ministerios",
  },
  {
    icon: BarChart3,
    number: "08",
    category: "Evaluación de impacto",
    title: "Evaluación de Impacto de Política Pública",
    description:
      "Análisis cuantitativo del impacto socioeconómico y territorial de programas o intervenciones gubernamentales con metodología verificable.",
    capabilities: ["Evaluación de impacto", "Evidencia", "Territorio"],
    clientType: "Gobierno · Congreso · Organismos internacionales",
  },
]

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof groupA)[number]
  delay: number
}) {
  const Icon = service.icon
  return (
    <FadeIn delay={delay}>
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
}

function FeaturedCard({ service }: { service: (typeof groupA)[number] }) {
  const Icon = service.icon
  return (
    <FadeIn>
      <div className="group relative border border-border border-l-2 border-l-accent p-8 lg:p-12 hover:bg-primary hover:border-primary hover:border-l-accent transition-all duration-500 mb-px">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center">
          <div className="flex flex-col gap-5">
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 flex items-center justify-center bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Icon
                  className="w-6 h-6 text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <span className="font-mono text-5xl font-bold text-border group-hover:text-primary-foreground/10 transition-colors">
                {service.number}
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              {service.category}
            </p>
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary-foreground transition-colors leading-tight">
              {service.title}
            </h3>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-base text-secondary group-hover:text-primary-foreground/60 leading-relaxed transition-colors">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
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
          </div>
        </div>
        <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="w-5 h-5 text-accent" />
        </div>
      </div>
    </FadeIn>
  )
}

function GroupLabel({ label }: { label: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-4 mt-20 mb-8">
        <div className="h-px w-12 bg-accent" />
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
          {label}
        </p>
        <div className="h-px flex-1 bg-border" />
      </div>
    </FadeIn>
  )
}

export default function Services() {
  const featuredA = groupA[0]
  const othersA = groupA.slice(1)
  const featuredB = groupB[0]
  const othersB = groupB.slice(1)

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

        {/* Group A — UTL */}
        <GroupLabel label="Unidades de Trabajo Legislativo" />

        <FeaturedCard service={featuredA} />

        <div className="grid md:grid-cols-3 gap-0">
          {othersA.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={(i + 1) * 0.1}
            />
          ))}
        </div>

        {/* Group B — Ministerios y Gobierno */}
        <GroupLabel label="Ministerios y Gobierno" />

        <FeaturedCard service={featuredB} />

        <div className="grid md:grid-cols-3 gap-0">
          {othersB.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              delay={(i + 1) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
