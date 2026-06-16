"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, ChevronDown } from "lucide-react"
import { FadeIn, EDITORIAL_EASE } from "./motion"

const platforms = [
  {
    name: "PMU Electoral",
    client: "Ministerio del Interior",
    description: "Sistema de monitoreo del Puesto de Mando Unificado para seguimiento operativo de jornadas electorales en tiempo real.",
    tech: "Next.js · Vercel · Tiempo real",
    status: "En operación",
    // URL correcta es el dominio apex; el subdominio www no está configurado.
    url: "https://pmuelectoral.com",
    image: "/images/platforms/pmu-electoral.jpg",
  },
  {
    name: "SIVIGEM",
    client: "Ministerio del Interior",
    description: "Sistema de Vigilancia, Seguimiento y Gestión de Casos de Violencia contra la Mujer en Política. Ley 2453 de 2025.",
    tech: "Next.js · Autenticación · Gestión de casos",
    status: "Sistema activo",
    url: "https://www.sivigem.com",
    image: "/images/platforms/sivigem.jpg",
  },
  {
    name: "Dashboard Analítico de Votaciones",
    client: "Ministerio del Interior",
    description: "Dashboard analítico de resultados electorales: preconteo informativo, tendencias por boletín y comparativos para UTL y equipos de campaña.",
    tech: "Next.js · Analítica · Visualización",
    status: "En desarrollo",
    url: "https://v0-next-js-congreso-dashboard.vercel.app/",
    image: "/images/platforms/dashboard-votaciones.jpg",
  },
  {
    name: "Sistema PNG",
    client: "Ministerio del Interior",
    description: "Plataforma de gestión para el Plan Nacional de Garantías. Digitalización de procesos institucionales.",
    tech: "Next.js · Gestión documental",
    status: "En desarrollo",
    url: null,
    image: null,
  },
]

function AccordionItem({
  platform,
  isOpen,
  onToggle,
}: {
  platform: (typeof platforms)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  const isLive =
    platform.status === "En operación" || platform.status === "Sistema activo"

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-center justify-between gap-4 py-6 text-left lg:py-8"
      >
        <div className="flex min-w-0 flex-1 items-center gap-4 lg:gap-6">
          <span
            aria-hidden="true"
            className={`shrink-0 font-mono text-sm ${isLive ? "text-accent" : "text-muted-foreground"}`}
          >
            {isLive ? "●" : "○"}
          </span>
          <h3 className="truncate text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent lg:text-xl">
            {platform.name}
          </h3>
          <span className="hidden shrink-0 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:inline-block">
            {platform.status}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
            className="overflow-hidden"
          >
            <div className="pb-8 pl-9 lg:pl-12">
              <div className="grid items-end gap-6 lg:grid-cols-[2fr_1fr]">
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {platform.client}
                  </p>
                  <p className="measure mb-4 text-sm leading-relaxed text-muted-foreground">
                    {platform.description}
                  </p>
                  <p className="font-mono text-[11px] text-muted-foreground">
                    {platform.tech}
                  </p>
                </div>
                {platform.url && (
                  <div className="lg:text-right">
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent/80"
                    >
                      Ver plataforma
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {platform.image && (
                <div className="mt-6 overflow-hidden rounded-lg border border-border">
                  <Image
                    src={platform.image}
                    alt={`Vista de la plataforma ${platform.name}`}
                    width={1440}
                    height={900}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="h-auto w-full"
                  />
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="section-shell bg-background">
      <div className="container-editorial">
        <div className="mb-16 grid gap-8 lg:mb-20 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow">Sistemas desarrollados</span>
            </div>
            <h2 className="heading-section text-balance">Plataformas</h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="measure text-base leading-relaxed text-muted-foreground">
              Sistemas de información desarrollados para entidades del gobierno
              nacional colombiano y proyectos institucionales.
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
