"use client"

import { ArrowRight, Mail } from "lucide-react"
import { FadeIn, AnimatedNumber, AnimatedLine } from "./motion"

const stats = [
  {
    value: "2",
    label: "Segmentos atendidos",
    context: "Equipos legislativos y entidades públicas",
  },
  {
    value: "4",
    label: "Plataformas desarrolladas",
    context: "Sistemas en operación y en desarrollo",
  },
  {
    value: "End-to-end",
    label: "Acompañamiento",
    context: "Del diagnóstico al despliegue",
  },
  {
    value: "LATAM",
    label: "Cobertura regional",
    context: "Colombia y la región",
  },
]

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Referencia abstracta a los datos: reticula hairline tenue, monocroma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 100% 0%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 100% 0%, black, transparent 75%)",
        }}
      />

      <div className="container-editorial section-shell relative pt-40 lg:pt-52">
        {/* Eyebrow */}
        <FadeIn delay={0}>
          <div className="mb-8 flex items-center gap-4">
            <AnimatedLine />
            <span className="eyebrow">
              Analítica y sistemas para instituciones públicas
            </span>
          </div>
        </FadeIn>

        {/* Titular display */}
        <FadeIn delay={0.08}>
          <h1 className="heading-display mb-8">
            <span className="block">Datos que</span>
            <span className="block text-accent">deciden.</span>
          </h1>
        </FadeIn>

        {/* Subtitulo */}
        <FadeIn delay={0.16}>
          <p className="measure mb-12 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Analítica de datos, inteligencia artificial y desarrollo de sistemas
            orientados a fortalecer la toma de decisiones en entidades públicas,
            equipos legislativos y organizaciones institucionales.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.24}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/573009769468?text=Hola%2C%20me%20interesa%20una%20consulta%20estrat%C3%A9gica"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center gap-3 self-start rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90 ${focusRing}`}
              >
                Solicitar conversación estratégica
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:consulta@hermesbonilla.com"
                className={`inline-flex items-center gap-2 self-start rounded-lg px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-accent ${focusRing}`}
              >
                <Mail className="h-4 w-4 shrink-0" />
                consulta@hermesbonilla.com
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a
                href="#servicios"
                className={`rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground ${focusRing}`}
              >
                Ver capacidades
              </a>
              <span aria-hidden="true" className="text-border">
                ·
              </span>
              <a
                href="/brochure"
                className={`rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground ${focusRing}`}
              >
                Descargar brochure
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Stat-bar editorial */}
        <FadeIn delay={0.32}>
          <div className="mt-20 lg:mt-28 lg:border-t lg:border-border">
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => {
                const numericValue = Number(stat.value)
                const isNumeric = !Number.isNaN(numericValue)
                return (
                  <div
                    key={stat.label}
                    className="border-t border-border py-8 pr-6 lg:border-l lg:border-t-0 lg:px-8 lg:py-10 lg:first:border-l-0 lg:first:pl-0"
                  >
                    <dd className="font-mono text-3xl font-semibold tabular-nums text-foreground lg:text-4xl">
                      {isNumeric ? (
                        <AnimatedNumber value={numericValue} />
                      ) : (
                        stat.value
                      )}
                    </dd>
                    <dt className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </dt>
                    <p className="mt-1.5 text-xs leading-snug text-muted-foreground/70">
                      {stat.context}
                    </p>
                  </div>
                )
              })}
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
