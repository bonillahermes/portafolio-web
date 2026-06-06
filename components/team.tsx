"use client"

import { BarChart3, Globe, FileText, Settings, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "./motion"

const disciplines = [
  { icon: BarChart3, name: "Ciencia de datos", detail: "Modelado predictivo y machine learning aplicado" },
  { icon: Globe, name: "Análisis político", detail: "Contexto institucional y análisis de actores" },
  { icon: FileText, name: "Comunicación estratégica", detail: "Reportes ejecutivos y visualización de datos" },
  { icon: Settings, name: "Gestión de proyectos", detail: "Entregas puntuales y aseguramiento de calidad" },
]

const stack = [
  { logo: "/images/logos/nextjs.svg", name: "Next.js", category: "Aplicaciones web y plataformas" },
  { logo: "/images/logos/python.svg", name: "Python / R", category: "Análisis y modelado estadístico" },
  { logo: "/images/logos/postgresql.svg", name: "PostgreSQL", category: "Bases de datos relacionales" },
  { logo: "/images/logos/aws.svg", name: "AWS", category: "Infraestructura en la nube" },
  { logo: "/images/logos/claude.svg", name: "Claude / OpenAI", category: "IA generativa y modelos de lenguaje" },
  { logo: "/images/logos/powerbi.svg", name: "Power BI", category: "Visualización y dashboards" },
  { logo: "/images/logos/qgis.svg", name: "GIS / QGIS", category: "Análisis geoespacial" },
  { logo: "/images/logos/github.svg", name: "Git / GitHub", category: "Control de versiones y colaboración" },
  { logo: "/images/logos/authjs.svg", name: "Auth.js", category: "Autenticación y seguridad" },
  { logo: "/images/logos/vercel.svg", name: "Vercel", category: "Despliegue y CI/CD" },
  { logo: "/images/logos/langchain.svg", name: "LangChain", category: "Orquestación de agentes de IA" },
  { logo: "/images/logos/supabase.svg", name: "Supabase", category: "Backend y bases de datos en la nube" },
]

export default function Team() {
  return (
    <section className="py-32 lg:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* ── EQUIPO — Editorial layout ── */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent" />
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
              Equipo
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-[320px_1fr] gap-12 lg:gap-20 mb-20">
          {/* Left — Photo */}
          <FadeIn delay={0.1}>
            <div className="w-full aspect-[3/4] max-w-xs lg:max-w-none overflow-hidden rounded-2xl relative shadow-xl">
              <Image
                src="/images/profile.jpeg"
                alt="Hermes Bonilla"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Right — Info */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-center gap-6 lg:py-8">
              <div>
                <h2 className="text-3xl lg:text-5xl font-semibold text-foreground tracking-tight mb-3">
                  Hermes Bonilla
                </h2>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Consultor principal · Bogotá, Colombia
                </p>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                Especialista en analítica de datos para el sector público y
                político. Lidera proyectos de inteligencia electoral,
                evaluación de políticas públicas e integración de datos
                institucionales en Colombia y Latinoamérica.
              </p>

              {/* Disciplines — inline, no cards */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-4 border-t border-border">
                {disciplines.map((d) => {
                  const Icon = d.icon
                  return (
                    <div key={d.name} className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-accent shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-medium text-foreground">{d.name}</p>
                        <p className="text-[11px] text-muted-foreground">{d.detail}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <a
                href="https://wa.me/573009769468?text=Hola%2C%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all self-start rounded-lg mt-2"
              >
                Conversemos sobre su proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* ── STACK TECNOLÓGICO — Marquee ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-12">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
                Infraestructura
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.05]">
              Stack tecnológico
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Herramientas y tecnologías que utilizamos para construir
              soluciones robustas, escalables y seguras para el sector público.
            </p>
          </FadeIn>
        </div>

        {/* Marquee */}
        <FadeIn delay={0.2}>
          <div className="group/marquee relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-4 w-max group-hover/marquee:[animation-play-state:paused]"
              style={{ animation: "marquee 40s linear infinite" }}
            >
              {stack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-3 bg-white border border-border rounded-xl px-5 py-3.5 shrink-0 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted shrink-0">
                    <div className="relative w-5 h-5">
                      <Image src={tech.logo} alt={tech.name} fill className="object-contain" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground whitespace-nowrap">{tech.name}</p>
                    <p className="text-[10px] text-muted-foreground whitespace-nowrap">{tech.category}</p>
                  </div>
                </div>
              ))}
              {stack.map((tech) => (
                <div
                  key={`dup-${tech.name}`}
                  aria-hidden="true"
                  className="flex items-center gap-3 bg-white border border-border rounded-xl px-5 py-3.5 shrink-0 hover:border-accent/30 hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-muted shrink-0">
                    <div className="relative w-5 h-5">
                      <Image src={tech.logo} alt="" fill className="object-contain" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground whitespace-nowrap">{tech.name}</p>
                    <p className="text-[10px] text-muted-foreground whitespace-nowrap">{tech.category}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
