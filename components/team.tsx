import { BarChart3, Globe, FileText, Settings } from "lucide-react"

const disciplines = [
  {
    icon: BarChart3,
    name: "Ciencia de datos",
    description:
      "Modelado predictivo, machine learning aplicado, integración de datos a gran escala y análisis cuantitativo para entornos de alta complejidad.",
  },
  {
    icon: Globe,
    name: "Ciencia política",
    description:
      "Lectura del contexto político-institucional, análisis de actores y traducción de hallazgos cuantitativos en narrativas estratégicas.",
  },
  {
    icon: FileText,
    name: "Periodismo y comunicación",
    description:
      "Construcción de reportes ejecutivos, visualización de datos y comunicación de hallazgos complejos para audiencias no técnicas.",
  },
  {
    icon: Settings,
    name: "Gestión y operaciones",
    description:
      "Coordinación de entregas, relación con el cliente y aseguramiento de calidad en cada fase del proyecto.",
  },
]

export default function Team() {
  return (
    <section id="equipo" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Equipo
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance leading-tight">
              Un equipo equilibrado
              <br className="hidden md:block" />
              para mejores resultados
            </h2>
          </div>
          <p className="text-base text-secondary leading-relaxed max-w-md">
            Cada proyecto es atendido por un equipo multidisciplinario donde se
            integran distintas perspectivas para garantizar rigor, contexto y
            entrega profesional.
          </p>
        </div>

        {/* Disciplines grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border mb-px">
          {disciplines.map((discipline) => {
            const Icon = discipline.icon
            return (
              <div
                key={discipline.name}
                className="bg-background p-8 lg:p-10 flex flex-col gap-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">
                    {discipline.name}
                  </h3>
                </div>
                <p className="text-sm text-secondary leading-relaxed">
                  {discipline.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Value proposition card */}
        <div className="border border-border bg-primary p-8 lg:p-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex-1">
            <p className="text-lg md:text-xl font-semibold text-primary-foreground leading-relaxed mb-3">
              No contratamos perfiles aislados. Operamos como una unidad
              integrada donde cada disciplina complementa a las demás.
            </p>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Desde el diagnóstico inicial hasta la entrega de resultados,
              combinamos ciencia de datos, análisis político, comunicación
              estratégica y gestión profesional en un solo equipo.
            </p>
          </div>
          <a
            href="https://calendly.com/bonillahermes/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-primary-foreground/90 transition-colors"
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </section>
  )
}
