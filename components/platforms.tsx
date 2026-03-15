"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronDown } from "lucide-react"
import { FadeIn } from "./motion"

const platforms = [
  {
    name: "PMU Electoral",
    client: "Ministerio del Interior",
    description: "Sistema de monitoreo del Puesto de Mando Unificado para seguimiento operativo de jornadas electorales en tiempo real.",
    tech: "Next.js · Vercel · Tiempo real",
    status: "En operación",
    url: "https://v0-electoral-monitoring-system.vercel.app/",
  },
  {
    name: "SIVIGEM",
    client: "Ministerio del Interior",
    description: "Sistema de Vigilancia, Seguimiento y Gestión de Casos de Violencia contra la Mujer en Política. Ley 2453 de 2025.",
    tech: "Next.js · Autenticación · Gestión de casos",
    status: "Sistema activo",
    url: null,
  },
  {
    name: "Dashboard Congreso",
    client: "Ministerio del Interior",
    description: "Plataforma de seguimiento de datos electorales y actividad legislativa para UTL y equipos de campaña.",
    tech: "Next.js · Analítica · Visualización",
    status: "En desarrollo",
    url: "https://v0-next-js-congreso-dashboard.vercel.app/",
  },
  {
    name: "Sistema PNG",
    client: "Ministerio del Interior",
    description: "Plataforma de gestión para el Plan Nacional de Garantías. Digitalización de procesos institucionales.",
    tech: "Next.js · Gestión documental",
    status: "En desarrollo",
    url: null,
  },
]

function AccordionItem({ platform, isOpen, onToggle }: {
  platform: typeof platforms[number]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 lg:py-8 text-left group"
      >
        <div className="flex items-center gap-4 lg:gap-6 flex-1 min-w-0">
          <span className="font-mono text-sm font-semibold text-accent shrink-0">
            {platform.status === "En operación" ? "●" : platform.status === "Sistema activo" ? "●" : "○"}
          </span>
          <h3 className="text-lg lg:text-xl font-semibold text-foreground tracking-tight group-hover:text-accent transition-colors">
            {platform.name}
          </h3>
          <span className="hidden sm:inline-block font-mono text-[10px] tracking-wide uppercase px-3 py-1 border border-accent/20 text-accent rounded-full shrink-0">
            {platform.status}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-10 lg:pl-12 grid lg:grid-cols-[2fr_1fr] gap-6 items-end">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent/70 mb-3">
                  {platform.client}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mb-4">
                  {platform.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {platform.tech.split(" · ").map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono text-accent/80 bg-accent/[0.06] px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {platform.url && (
                <div className="lg:text-right">
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
                  >
                    Ver plataforma
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Platforms() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-16">
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
                Sistemas desarrollados
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
              Plataformas
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
              Sistemas de información desarrollados para entidades del gobierno nacional colombiano y proyectos institucionales.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="border-t border-border">
            {platforms.map((platform, i) => (
              <AccordionItem
                key={platform.name}
                platform={platform}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
