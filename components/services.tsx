"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Radar, Sparkles, Scale, ScanSearch, Microscope, Workflow, BadgeDollarSign, Target, ArrowRight } from "lucide-react"
import { FadeIn } from "./motion"

type Service = {
  icon: typeof Radar
  title: string
  description: string
  tags: string[]
  clientType: string
}

const groups: Record<string, { label: string; description: string; services: Service[] }> = {
  legislativo: {
    label: "Equipos legislativos",
    description: "Herramientas de inteligencia y análisis para el trabajo de congresistas y UTL",
    services: [
      {
        icon: Radar,
        title: "Inteligencia Territorial",
        description:
          "Análisis cuantitativo del territorio representado por el congresista: estructura demográfica, vulnerabilidad socioeconómica y patrones electorales a nivel municipal.",
        tags: ["Análisis geoespacial", "Segmentación cuantitativa", "Entrega ágil"],
        clientType: "UTL · Congresistas · Senado · Cámara",
      },
      {
        icon: Sparkles,
        title: "Copiloto de Control Político",
        description:
          "Sistema de inteligencia basado en IA para analizar informes institucionales, datos oficiales y series estadísticas como insumo para la preparación de debates de control político.",
        tags: ["RAG", "LLM", "Informes ejecutivos"],
        clientType: "UTL · Debates · Citaciones",
      },
      {
        icon: Scale,
        title: "Análisis Legislativo con IA",
        description:
          "Procesamiento automatizado de proyectos de ley: generación de resúmenes técnicos, comparación entre versiones y construcción de fichas legislativas estructuradas.",
        tags: ["NLP", "Gaceta del Congreso", "Ficha técnica"],
        clientType: "UTL · Producción legislativa",
      },
      {
        icon: ScanSearch,
        title: "Observatorio Legislativo",
        description:
          "Monitoreo continuo de agenda legislativa, votaciones y proyectos por temática mediante dashboards y alertas periódicas para equipos legislativos.",
        tags: ["Dashboard", "Alertas", "Seguimiento"],
        clientType: "UTL · Multi-cliente",
      },
    ],
  },
  gobierno: {
    label: "Entidades públicas",
    description: "Diagnóstico, desarrollo de sistemas y evaluación para entidades del gobierno",
    services: [
      {
        icon: Microscope,
        title: "Diagnóstico de Madurez de Datos",
        description:
          "Evaluación del estado de procesos, infraestructura analítica y digitalización institucional con hoja de ruta priorizada de mejora.",
        tags: ["Diagnóstico", "Hoja de ruta", "Procesos"],
        clientType: "Ministerios · Entidades públicas",
      },
      {
        icon: Workflow,
        title: "Arquitectura de Sistemas Institucionales",
        description:
          "Diseño y desarrollo de sistemas orientados a digitalizar procesos críticos y mejorar la trazabilidad operativa dentro de la entidad.",
        tags: ["Next.js", "Desarrollo", "Automatización"],
        clientType: "Ministerios · Organismos · ONG",
      },
      {
        icon: BadgeDollarSign,
        title: "Gestión Inteligente de Cuentas de Cobro",
        description:
          "Plataforma digital para registro, seguimiento y trazabilidad de cuentas de cobro en entidades públicas con parametrización institucional.",
        tags: ["SaaS", "Gestión financiera", "Trazabilidad"],
        clientType: "Entidades públicas · UTL · Ministerios",
      },
      {
        icon: Target,
        title: "Evaluación de Impacto de Política Pública",
        description:
          "Análisis cuantitativo del impacto territorial y socioeconómico de programas públicos mediante metodologías verificables.",
        tags: ["Evaluación de impacto", "Evidencia", "Territorio"],
        clientType: "Gobierno · Congreso · Organismos internacionales",
      },
    ],
  },
}

const tabKeys = Object.keys(groups) as (keyof typeof groups)[]

function FeaturedCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:shadow-accent/8 border border-border hover:border-accent/30"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-2xl" />

      {/* Ambient glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-accent/[0.03] blur-3xl pointer-events-none group-hover:bg-accent/[0.07] transition-colors duration-700" />

      <div className="relative p-8 lg:p-12 pl-10 lg:pl-14">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-14 items-start">
          <div className="flex flex-col gap-6">
            {/* Icon with gradient bg */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 group-hover:from-accent/25 group-hover:to-accent/10 transition-all duration-500 shadow-sm">
              <Icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300 mb-3">
                {service.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono text-accent bg-accent/[0.08] px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 lg:pt-4">
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              {service.description}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-border/60">
              <p className="text-xs text-muted-foreground/50">
                {service.clientType}
              </p>
              <div className="flex items-center gap-2 text-accent text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Más información
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-7 flex flex-col gap-5 transition-all hover:shadow-xl hover:shadow-accent/8 border border-border hover:border-accent/30 h-full overflow-hidden"
    >
      {/* Hover shimmer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-accent/[0.03] via-transparent to-transparent rounded-2xl" />

      <div className="relative flex flex-col gap-5 flex-1">
        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-accent/5 group-hover:from-accent/25 group-hover:to-accent/10 transition-all duration-500 shadow-sm">
          <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-accent/80 bg-accent/[0.06] px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/60 mt-auto">
          <p className="text-xs text-muted-foreground/40">
            {service.clientType}
          </p>
          <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>(tabKeys[0])
  const group = groups[activeTab]
  const featured = group.services[0]
  const others = group.services.slice(1)

  return (
    <section className="py-32 lg:py-40 bg-muted">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-16">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
                Servicios
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Capacidades
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Soluciones analíticas y sistemas desarrollados para el trabajo legislativo
              y la operación institucional.
            </p>
          </FadeIn>
        </div>

        {/* Tabs */}
        <FadeIn delay={0.2}>
          <div className="inline-flex items-center bg-white rounded-2xl p-1.5 border border-border shadow-sm mb-12">
            {tabKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className="relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300"
              >
                {activeTab === key && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-accent rounded-xl shadow-md"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors duration-200 ${
                  activeTab === key ? "text-white" : "text-muted-foreground hover:text-foreground"
                }`}>
                  {groups[key].label}
                </span>
              </button>
            ))}
          </div>

          {/* Tab description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${activeTab}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="text-sm text-muted-foreground mb-8 -mt-4"
            >
              {group.description}
            </motion.p>
          </AnimatePresence>
        </FadeIn>

        {/* Services */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Featured */}
            <FeaturedCard service={featured} />

            {/* Grid */}
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              {others.map((service, i) => (
                <ServiceCard key={service.title} service={service} index={i} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
