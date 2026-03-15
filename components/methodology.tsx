"use client"

import { Search, Database, BarChart3, Presentation } from "lucide-react"
import { FadeIn } from "./motion"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos la situación actual: qué datos existen, qué preguntas necesitan respuesta y qué decisiones dependen de los resultados.",
    detail: "Inmersión en su contexto institucional",
  },
  {
    icon: Database,
    number: "02",
    title: "Arquitectura de datos",
    description:
      "Diseñamos la estructura de recolección, integración y procesamiento. Consolidamos fuentes dispersas en un sistema coherente.",
    detail: "Diseño técnico a la medida",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Modelado y análisis",
    description:
      "Aplicamos modelos estadísticos, machine learning o análisis geoespacial según la necesidad. Cada modelo se valida rigurosamente.",
    detail: "Rigor cuantitativo verificable",
  },
  {
    icon: Presentation,
    number: "04",
    title: "Entrega estratégica",
    description:
      "Presentamos resultados accionables: reportes ejecutivos, dashboards interactivos y recomendaciones con sustento cuantitativo.",
    detail: "Decisiones informadas, no intuiciones",
  },
]

export default function Methodology() {
  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
                Metodología
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground text-balance leading-[1.05]">
              Un proceso riguroso,
              <br className="hidden md:block" />
              de principio a fin
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Cada fase tiene entregables claros. Usted sabe en todo momento qué
              se está haciendo, por qué y cuál es el siguiente paso.
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              return (
                <FadeIn key={step.number} delay={index * 0.12}>
                  <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                    {/* Timeline node — desktop */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-accent/10 border-4 border-background items-center justify-center">
                      <span className="font-mono text-xs font-bold text-accent">
                        {step.number}
                      </span>
                    </div>

                    {/* Content — alternating sides */}
                    <div className={`${isEven ? "lg:pr-20" : "lg:order-2 lg:pl-20"}`}>
                      <div className="flex items-start gap-4 mb-4">
                        {/* Mobile number */}
                        <div className="lg:hidden w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                          <span className="font-mono text-xs font-bold text-accent">{step.number}</span>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 shrink-0">
                          <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                        </div>
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                        {step.detail}
                      </p>
                      <h3 className="text-2xl font-semibold text-foreground tracking-tight mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                        {step.description}
                      </p>
                    </div>

                    {/* Empty side for alignment */}
                    <div className={`hidden lg:block ${isEven ? "lg:order-2" : ""}`} />
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
