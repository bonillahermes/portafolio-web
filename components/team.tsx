"use client"

import { BarChart3, Globe, FileText, Settings, ArrowRight } from "lucide-react"
import { FadeIn } from "./motion"

const disciplines = [
  {
    icon: BarChart3,
    name: "Ciencia de datos",
    description:
      "Modelado predictivo, machine learning aplicado, integración de datos a gran escala y análisis cuantitativo para entornos de alta complejidad.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Globe,
    name: "Ciencia política",
    description:
      "Lectura del contexto político-institucional, análisis de actores y traducción de hallazgos cuantitativos en narrativas estratégicas.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: FileText,
    name: "Periodismo y comunicación",
    description:
      "Construcción de reportes ejecutivos, visualización de datos y comunicación de hallazgos complejos para audiencias no técnicas.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Settings,
    name: "Gestión y operaciones",
    description:
      "Coordinación de entregas, relación con el cliente y aseguramiento de calidad en cada fase del proyecto.",
    color: "bg-primary/10 text-primary",
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
              <div className="w-12 h-px bg-accent" />
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                Equipo
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground text-balance leading-[1.05]">
              Un equipo equilibrado
              <br className="hidden md:block" />
              para mejores resultados
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-lg text-secondary leading-relaxed max-w-lg">
              Cada proyecto es atendido por un equipo multidisciplinario donde
              distintas perspectivas se integran para garantizar rigor, contexto
              y entrega profesional.
            </p>
          </FadeIn>
        </div>

        {/* Disciplines grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {disciplines.map((discipline, i) => {
            const Icon = discipline.icon
            return (
              <FadeIn key={discipline.name} delay={i * 0.1}>
                <div className="group border border-border p-8 lg:p-10 flex flex-col gap-6 hover:border-accent/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-5">
                    <div className={`w-14 h-14 flex items-center justify-center ${discipline.color}`}>
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {discipline.name}
                    </h3>
                  </div>
                  <p className="text-base text-secondary leading-relaxed">
                    {discipline.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Value proposition */}
        <FadeIn delay={0.4}>
          <div className="bg-primary p-10 lg:p-16 flex flex-col lg:flex-row lg:items-center gap-10 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-1/4 h-full bg-accent/5" />

            <div className="flex-1 relative">
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-6">
                Nuestra propuesta
              </p>
              <p className="text-2xl md:text-3xl font-semibold text-primary-foreground leading-snug mb-4">
                Operamos como una unidad integrada,
                <br className="hidden lg:block" />
                no como perfiles aislados.
              </p>
              <p className="text-base text-primary-foreground/50 leading-relaxed max-w-xl">
                Desde el diagnóstico hasta la entrega de resultados, combinamos
                ciencia de datos, análisis político, comunicación estratégica y
                gestión profesional en un solo equipo comprometido con su éxito.
              </p>
            </div>
            <div className="relative shrink-0">
              <a
                href="https://calendly.com/bonillahermes/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all"
              >
                Conocer al equipo
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
