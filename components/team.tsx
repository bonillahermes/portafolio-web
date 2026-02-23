import { BarChart3, Globe, FileText, Settings, ArrowRight } from "lucide-react"
import Image from "next/image"
import { FadeIn, AnimatedLine } from "./motion"

const disciplines = [
  {
    icon: BarChart3,
    name: "Ciencia de datos",
    detail: "Modelado predictivo y machine learning aplicado",
  },
  {
    icon: Globe,
    name: "Análisis político",
    detail: "Contexto institucional y análisis de actores",
  },
  {
    icon: FileText,
    name: "Comunicación estratégica",
    detail: "Reportes ejecutivos y visualización de datos",
  },
  {
    icon: Settings,
    name: "Gestión de proyectos",
    detail: "Entregas puntuales y aseguramiento de calidad",
  },
]

export default function Team() {
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <AnimatedLine />
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                Equipo
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance leading-[1.05]">
              Quién está detrás
              <br className="hidden md:block" />
              de sus datos
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-lg text-secondary leading-relaxed max-w-lg">
              Su proyecto no lo atiende un algoritmo. Lo lidera un consultor
              con equipo dedicado que entiende su contexto y responde por
              los resultados.
            </p>
          </FadeIn>
        </div>

        {/* Profile block */}
        <FadeIn delay={0.15}>
          <div className="bg-primary p-10 lg:p-16 relative overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5" />

            <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-center">
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-40 h-40 lg:w-48 lg:h-48 overflow-hidden border-2 border-accent/30 relative">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Hermes Bonilla"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-primary-foreground mb-2">
                    Hermes Bonilla
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    Consultor principal · Bogotá, Colombia
                  </p>
                </div>
                <p className="text-base text-primary-foreground/60 leading-relaxed max-w-xl">
                  Especialista en analítica de datos para el sector público y
                  político. Lidera proyectos de inteligencia electoral,
                  evaluación de políticas públicas e integración de datos
                  institucionales en Colombia y Latinoamérica.
                </p>
                <a
                  href="https://wa.me/573009769468?text=Hola%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-cta group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all self-start"
                >
                  Conversemos sobre su proyecto
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Disciplines strip */}
        <FadeIn delay={0.3}>
          <div className="border border-border p-8 lg:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-8">
              Cada proyecto integra las disciplinas necesarias
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {disciplines.map((d) => {
                const Icon = d.icon
                return (
                  <div key={d.name} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-accent/10 shrink-0">
                      <Icon className="w-4 h-4 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {d.name}
                      </p>
                      <p className="text-xs text-secondary mt-1 leading-relaxed">
                        {d.detail}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </FadeIn>

        {/* Closing value prop */}
        <FadeIn delay={0.4}>
          <p className="text-center text-secondary mt-10 max-w-2xl mx-auto leading-relaxed">
            No trabajamos como perfiles aislados. Cada proyecto recibe un equipo
            integrado que combina rigor cuantitativo, contexto político y
            comunicación estratégica de principio a fin.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
