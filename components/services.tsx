"use client"

import { BarChart3, FileText, Database, MapPin, ArrowRight } from "lucide-react"
import { FadeIn } from "./motion"

const services = [
  {
    icon: BarChart3,
    number: "01",
    title: "Inteligencia Electoral",
    description:
      "Microsegmentación de votantes, modelos predictivos de comportamiento electoral y optimización de recursos de campaña basada en datos.",
    capabilities: [
      "Segmentación cuantitativa",
      "Modelos predictivos",
      "Optimización de inversión",
    ],
  },
  {
    icon: FileText,
    number: "02",
    title: "Análisis de Políticas Públicas",
    description:
      "Evaluación cuantitativa de impacto, diseño basado en evidencia, análisis territorial y socioeconómico para toma de decisiones gubernamentales.",
    capabilities: [
      "Evaluación de impacto",
      "Diseño basado en evidencia",
      "Análisis territorial",
    ],
  },
  {
    icon: Database,
    number: "03",
    title: "Integración de Datos Institucionales",
    description:
      "Consolidación de bases de datos dispersas, limpieza y estandarización, construcción de pipelines para entidades públicas y organizaciones.",
    capabilities: [
      "Consolidación de datos",
      "Pipelines automatizados",
      "Estandarización",
    ],
  },
  {
    icon: MapPin,
    number: "04",
    title: "Análisis Geoespacial y de Riesgo",
    description:
      "Modelos de predicción territorial, análisis de violencia política, mapeo de vulnerabilidad con enfoque diferencial (género, etnia, región).",
    capabilities: [
      "Predicción territorial",
      "Mapeo de vulnerabilidad",
      "Enfoque diferencial",
    ],
  },
]

export default function Services() {
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-20">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
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
              Cada proyecto recibe un equipo dedicado con las disciplinas
              necesarias para entregar resultados medibles. No ofrecemos
              reportes genéricos: construimos soluciones a la medida de su
              contexto institucional.
            </p>
          </FadeIn>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-0">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="group relative border border-border p-8 lg:p-12 flex flex-col gap-6 hover:bg-primary hover:border-primary transition-all duration-500 h-full -mt-px -ml-px first:mt-0 first:ml-0">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary-foreground/20 transition-colors">
                    <service.icon
                      className="w-5 h-5 text-foreground group-hover:text-accent transition-colors"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="font-mono text-4xl font-bold text-border group-hover:text-primary-foreground/10 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-secondary group-hover:text-primary-foreground/60 leading-relaxed transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Capability tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {service.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-[11px] font-mono text-secondary/70 group-hover:text-primary-foreground/50 border border-border group-hover:border-primary-foreground/15 px-3 py-1.5 transition-colors"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
