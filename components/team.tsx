import { BarChart3, Globe, FileText, Settings, ArrowRight } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "./motion"

const disciplines = [
  { icon: BarChart3, name: "Ciencia de datos", detail: "Modelado predictivo y machine learning aplicado" },
  { icon: Globe, name: "Análisis político", detail: "Contexto institucional y análisis de actores" },
  { icon: FileText, name: "Comunicación estratégica", detail: "Reportes ejecutivos y visualización de datos" },
  { icon: Settings, name: "Gestión de proyectos", detail: "Entregas puntuales y aseguramiento de calidad" },
]

const stack = [
  { logo: "/images/logos/nextjs.svg", name: "Next.js", category: "Aplicaciones web y plataformas" },
  { logo: "/images/logos/python.svg", name: "Python", category: "Análisis y modelado estadístico" },
  { logo: "/images/logos/r.svg", name: "R", category: "Análisis y visualización estadística" },
  { logo: "/images/logos/postgresql.svg", name: "PostgreSQL", category: "Bases de datos relacionales" },
  { logo: "/images/logos/neon.svg", name: "Neon", category: "Postgres serverless" },
  { logo: "/images/logos/aws.svg", name: "AWS", category: "Infraestructura en la nube" },
  { logo: "/images/logos/gcp.svg", name: "Google Cloud", category: "Infraestructura en la nube" },
  { logo: "/images/logos/cloudflare.svg", name: "Cloudflare", category: "Red, DNS y seguridad" },
  { logo: "/images/logos/docker.svg", name: "Docker", category: "Contenedores y despliegue" },
  { logo: "/images/logos/claude.svg", name: "Claude / OpenAI", category: "IA generativa y LLM" },
  { logo: "/images/logos/langchain.svg", name: "LangChain", category: "Orquestación de agentes" },
  { logo: "/images/logos/databricks.svg", name: "Databricks", category: "Plataforma de datos y ML" },
  { logo: "/images/logos/powerbi.svg", name: "Power BI", category: "Visualización y dashboards" },
  { logo: "/images/logos/qgis.svg", name: "GIS / QGIS", category: "Análisis geoespacial" },
  { logo: "/images/logos/github.svg", name: "Git / GitHub", category: "Control de versiones" },
  { logo: "/images/logos/cursor.svg", name: "Cursor", category: "Desarrollo asistido por IA" },
  { logo: "/images/logos/authjs.svg", name: "Auth.js", category: "Autenticación y seguridad" },
  { logo: "/images/logos/vercel.svg", name: "Vercel", category: "Despliegue y CI/CD" },
  { logo: "/images/logos/supabase.svg", name: "Supabase", category: "Backend en la nube" },
]

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export default function Team() {
  return (
    <section className="section-shell bg-muted">
      <div className="container-editorial">
        {/* ── Consultor ── */}
        <FadeIn>
          <div className="mb-10 flex items-center gap-4 lg:mb-12">
            <span className="h-px w-12 bg-accent" />
            <span className="eyebrow">Equipo</span>
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:gap-20">
          {/* Foto */}
          <FadeIn delay={0.1}>
            <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden rounded-lg border border-border lg:max-w-none">
              <Image
                src="/images/profile.jpeg"
                alt="Hermes Bonilla"
                fill
                sizes="(max-width: 1024px) 320px, 300px"
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-center gap-6">
              <div>
                <h2 className="heading-section">Hermes Bonilla</h2>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Consultor principal · Bogotá, Colombia
                </p>
              </div>

              <p className="measure text-base leading-relaxed text-muted-foreground">
                Especialista en analítica de datos para el sector público y
                político. Lidera proyectos de inteligencia electoral, evaluación de
                políticas públicas e integración de datos institucionales en
                Colombia y Latinoamérica.
              </p>

              <div className="grid grid-cols-1 gap-x-10 gap-y-5 border-t border-border pt-6 sm:grid-cols-2">
                {disciplines.map((d) => {
                  const Icon = d.icon
                  return (
                    <div key={d.name} className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">{d.name}</p>
                        <p className="text-[11px] leading-snug text-muted-foreground">
                          {d.detail}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <a
                href="https://wa.me/573009769468?text=Hola%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className={`group mt-2 inline-flex items-center gap-3 self-start rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90 ${focusRing}`}
              >
                Conversemos sobre su proyecto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* ── Stack tecnológico ── */}
        <div className="mt-24 lg:mt-32">
          <FadeIn>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow">Infraestructura</span>
            </div>
            <h2 className="heading-section">Stack tecnológico</h2>
            <p className="measure mt-6 text-base leading-relaxed text-muted-foreground">
              Herramientas con las que construimos soluciones robustas, escalables y
              seguras para el sector público.
            </p>
          </FadeIn>

          {/* Tabla de instrumentos: grilla con hairlines, sin cards ni sombras */}
          <FadeIn delay={0.15}>
            <div className="mt-12 grid grid-cols-2 border-t border-border sm:grid-cols-3 lg:grid-cols-4">
              {stack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 border-b border-border p-5 transition-colors hover:bg-background"
                >
                  <div className="relative h-6 w-6 shrink-0">
                    <Image
                      src={tech.logo}
                      alt=""
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">
                      {tech.name}
                    </p>
                    <p className="truncate text-[11px] text-muted-foreground">
                      {tech.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
