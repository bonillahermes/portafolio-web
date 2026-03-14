import { ArrowUpRight } from "lucide-react"
import { FadeIn, AnimatedLine } from "./motion"

const platforms = [
  {
    name: "PMU Electoral",
    description:
      "Sistema de monitoreo del Puesto de Mando Unificado para seguimiento operativo de jornadas electorales.",
    tech: "Next.js · Vercel · Tiempo real",
    status: "En operación",
    url: "https://v0-electoral-monitoring-system.vercel.app/",
    client: "Ministerio del Interior",
  },
  {
    name: "SIVIGEM",
    description:
      "Sistema de Vigilancia, Seguimiento y Gestión de Casos de Violencia contra la Mujer en Política. Ley 2453 de 2025.",
    tech: "Next.js · Autenticación · Gestión de casos",
    status: "Sistema activo",
    url: null,
    client: "Ministerio del Interior",
  },
  {
    name: "Dashboard Congreso",
    description:
      "Plataforma de seguimiento de datos electorales y actividad legislativa para UTL y equipos de campaña.",
    tech: "Next.js · Analítica · Visualización",
    status: "En desarrollo",
    url: "https://v0-next-js-congreso-dashboard.vercel.app/",
    client: "Iniciativa propia",
  },
  {
    name: "Sistema PNG",
    description:
      "Plataforma de gestión para el Plan Nacional de Garantías. Digitalización de procesos institucionales.",
    tech: "Next.js · Gestión documental",
    status: "En desarrollo",
    url: null,
    client: "Iniciativa propia",
  },
]

export default function Platforms() {
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <AnimatedLine />
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                Plataformas
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance leading-[1.05]">
              Plataformas
              <br className="hidden md:block" />
              desarrolladas
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-lg text-secondary leading-relaxed max-w-lg">
              Sistemas de información construidos para entidades del gobierno
              nacional colombiano.
            </p>
          </FadeIn>
        </div>

        {/* Platform grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {platforms.map((platform, i) => (
            <FadeIn key={platform.name} delay={i * 0.1}>
              <div className="group relative border border-border p-8 lg:p-10 flex flex-col gap-5 hover:bg-primary hover:border-primary transition-all duration-500 h-full">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                      {platform.client}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
                      {platform.name}
                    </h3>
                  </div>
                  <span className="inline-block font-mono text-[11px] font-semibold text-accent border border-accent/30 px-3 py-1.5 whitespace-nowrap">
                    {platform.status}
                  </span>
                </div>

                <p className="text-sm text-secondary group-hover:text-primary-foreground/60 leading-relaxed transition-colors flex-1">
                  {platform.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {platform.tech.split(" · ").map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono text-secondary/70 group-hover:text-primary-foreground/50 border border-border group-hover:border-primary-foreground/15 px-3 py-1.5 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {platform.url && (
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors mt-auto"
                  >
                    Ver plataforma
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
