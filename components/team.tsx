import { Linkedin } from "lucide-react"

const team = [
  {
    role: "Ciencia de datos",
    name: "Hermes Bonilla",
    title: "Director & Cientifico de datos",
    description:
      "Estadistico con experiencia en modelado predictivo, integracion de datos a gran escala y analisis cuantitativo para entornos de alta complejidad.",
    linkedin: "https://linkedin.com/in/bonillahermes",
    lead: true,
  },
  {
    role: "Ciencia de datos",
    name: "Cientifico de datos Sr.",
    title: "Modelado & Machine Learning",
    description:
      "Especialista en machine learning aplicado, modelos de clasificacion y series de tiempo para prediccion electoral y analisis de riesgo.",
    linkedin: null,
    lead: false,
  },
  {
    role: "Ciencia politica",
    name: "Politologo",
    title: "Analisis politico & institucional",
    description:
      "Analisis del contexto politico, lectura institucional y traduccion de datos cuantitativos en narrativas estrategicas para tomadores de decision.",
    linkedin: null,
    lead: false,
  },
  {
    role: "Comunicacion",
    name: "Periodista",
    title: "Narrativa de datos & comunicacion",
    description:
      "Construccion de reportes ejecutivos, visualizacion de datos y comunicacion de hallazgos complejos para audiencias no tecnicas.",
    linkedin: null,
    lead: false,
  },
  {
    role: "Gestion",
    name: "Administrador de empresas",
    title: "Operaciones & gestion de proyectos",
    description:
      "Coordinacion operativa, gestion de entregas, relacion con clientes y aseguramiento de calidad en cada fase del proyecto.",
    linkedin: null,
    lead: false,
  },
]

export default function Team() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Equipo
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground text-balance leading-tight">
              Cinco disciplinas,
              <br className="hidden md:block" />
              una sola mision
            </h2>
          </div>
          <p className="text-base text-secondary leading-relaxed max-w-md">
            Cada proyecto es atendido por un equipo multidisciplinario que
            garantiza rigor analitico, contexto politico y entrega profesional.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`bg-background p-8 lg:p-10 flex flex-col gap-4 ${
                member.lead ? "lg:row-span-1 relative" : ""
              }`}
            >
              {/* Role tag */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {member.role}
                </span>
                {member.lead && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary border border-border px-2 py-0.5 rounded-sm">
                    Director
                  </span>
                )}
              </div>

              {/* Avatar placeholder - initials */}
              <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center">
                <span className="text-sm font-semibold text-primary-foreground">
                  {member.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </span>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs text-secondary">{member.title}</p>
              </div>

              <p className="text-sm text-secondary leading-relaxed">
                {member.description}
              </p>

              {/* Social */}
              {member.linkedin && (
                <div className="mt-auto pt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-foreground transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}

          {/* Value proposition card */}
          <div className="bg-primary p-8 lg:p-10 flex flex-col justify-center">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Nuestro enfoque
            </p>
            <p className="text-lg font-semibold text-primary-foreground leading-relaxed mb-4">
              No somos un freelancer. Somos un equipo completo que acompana cada
              fase de tu proyecto.
            </p>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Desde el diagnostico inicial hasta la entrega de resultados,
              combinamos ciencia de datos, analisis politico, comunicacion
              estrategica y gestion profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
