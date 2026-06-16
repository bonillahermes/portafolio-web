"use client"

import { useRef, useCallback } from "react"
import { useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FadeIn, AnimatedAxis, AnimatedNumber, Typewriter } from "./motion"
import {
  serviceGroups,
  services,
  servicesByGroup,
  type Service,
} from "@/lib/services"

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bright"

function ServiceRow({ service, code }: { service: Service; code: string }) {
  const whatsapp = `https://wa.me/573009769468?text=${encodeURIComponent(
    `Hola, me interesa la capacidad: ${service.title}`
  )}`

  return (
    <article className="group grid gap-x-8 gap-y-3 py-7 transition-colors duration-300 hover:bg-white/[0.035] md:grid-cols-[5rem_1fr] lg:gap-x-12 lg:py-8">
      <div className="md:pt-1">
        <span className="font-mono text-xs tracking-[0.15em] text-white/40 transition-colors duration-300 group-hover:text-accent-bright">
          {code}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-accent-bright lg:text-xl">
          {service.title}
        </h3>
        {/* Hairline de acento que se dibuja al hover */}
        <span
          aria-hidden="true"
          className="mt-2 block h-px w-0 bg-accent-bright transition-[width] duration-300 ease-out group-hover:w-10"
        />

        <p className="measure mt-3 text-sm leading-relaxed text-white/60">
          {service.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] text-white/55">
          {service.tags.map((tag, i) => (
            <span key={tag} className="inline-flex items-center gap-x-2.5">
              {i > 0 && (
                <span aria-hidden="true" className="text-white/25">
                  ·
                </span>
              )}
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/45">
          {service.clientType}
        </p>

        {/* Afordancia accionable: visible siempre en móvil, al hover/foco en desktop */}
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Conversemos sobre ${service.title}`}
          className={`mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent-bright transition-all duration-300 lg:-translate-x-1 lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100 lg:focus-visible:translate-x-0 lg:focus-visible:opacity-100 ${focusRing}`}
        >
          Conversemos
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  )
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  // Glow que sigue el cursor: se actualiza por CSS var, sin re-render de React.
  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduceMotion) return
      const el = sectionRef.current
      const glow = glowRef.current
      if (!el || !glow) return
      const rect = el.getBoundingClientRect()
      glow.style.setProperty("--glow-x", `${e.clientX - rect.left}px`)
      glow.style.setProperty("--glow-y", `${e.clientY - rect.top}px`)
    },
    [reduceMotion]
  )

  const handleEnter = useCallback(() => {
    if (reduceMotion || !glowRef.current) return
    glowRef.current.style.opacity = "1"
  }, [reduceMotion])

  const handleLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "0"
  }, [])

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="section-shell relative overflow-hidden bg-foreground text-white"
    >
      {/* Capa de ambiente: luz de acento que sigue el cursor */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(440px circle at var(--glow-x, 50%) var(--glow-y, 50%), hsl(var(--accent-bright) / 0.12), transparent 72%)",
        }}
      />

      <div className="container-editorial relative z-10">
        <FadeIn>
          <div className="mb-16 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-12 bg-accent-bright" />
                <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-accent-bright">
                  Servicios
                </span>
              </div>
              <h2 className="text-heading font-semibold text-white">
                Capacidades
              </h2>
              <p className="measure mt-6 text-base leading-relaxed text-white/60">
                Soluciones de datos, inteligencia artificial y sistemas para tres
                frentes del sector público: el Congreso, las entidades del Estado y
                los observatorios ciudadanos.
              </p>
            </div>

            {/* Telemetría: estado vivo del panel */}
            <div className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 lg:pt-2 lg:text-right">
              <p className="flex items-center gap-2 lg:justify-end">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
                </span>
                Sistema activo
              </p>
              <p className="mt-2 text-white/30">
                {services.length} capacidades · {serviceGroups.length} frentes
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-14 lg:gap-20">
          {serviceGroups.map((group) => {
            const items = servicesByGroup(group.key)
            return (
              <div key={group.key} className="relative pl-6 lg:pl-8">
                {/* Eje de acento que se dibuja al entrar */}
                <AnimatedAxis className="absolute bottom-1 left-0 top-1 bg-accent-bright/50" />
                <FadeIn>
                  <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-t border-white/15 pt-6">
                    <div className="max-w-2xl">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-white">
                        <Typewriter text={group.code} className="text-accent-bright" />
                        <span className="mx-2 text-white/30">/</span>
                        {group.label}
                      </p>
                      <p className="measure mt-2 text-sm leading-relaxed text-white/55">
                        {group.description}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                      <AnimatedNumber value={items.length} prefix="0" /> capacidades
                    </p>
                  </div>
                </FadeIn>

                <div className="divide-y divide-white/10 border-t border-white/10">
                  {items.map((service, i) => (
                    <FadeIn key={service.title} delay={Math.min(i * 0.06, 0.24)}>
                      <ServiceRow
                        service={service}
                        code={`${group.code}·${String(i + 1).padStart(2, "0")}`}
                      />
                    </FadeIn>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
