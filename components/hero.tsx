"use client"

import { ArrowRight } from "lucide-react"
import { FadeIn, AnimatedNumber, AnimatedLine } from "./motion"
import ColombiaSignature from "./colombia-signature"

const stats = [
  {
    value: "6",
    prefix: "+",
    label: "Años de experiencia",
    context: "Analítica, IA y desarrollo de sistemas",
  },
  {
    value: "30",
    prefix: "+",
    label: "Proyectos entregados",
    context: "Gobierno, congreso y entidades públicas",
  },
  {
    value: "12",
    prefix: "",
    label: "Sistemas desarrollados",
    context: "Gobierno nacional · operación y desarrollo",
  },
]

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container-editorial relative pt-40 lg:pt-52 pb-12 lg:pb-16">
        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Columna editorial */}
          <div>
            <FadeIn delay={0}>
              <div className="mb-8 flex items-center gap-4">
                <AnimatedLine />
                <span className="eyebrow">
                  Analítica y sistemas para instituciones públicas
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="heading-display mb-8">
                <span className="block">Datos que</span>
                <span className="block text-accent">deciden.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="measure mb-12 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Analítica de datos, inteligencia artificial y desarrollo de
                sistemas orientados a fortalecer la toma de decisiones en
                entidades públicas, equipos legislativos y organizaciones
                institucionales.
              </p>
            </FadeIn>

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
          </div>

          {/* Firma: huella territorial real (mapa interactivo + telemetría) */}
          <FadeIn delay={0.2} direction="none">
            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <ColombiaSignature />
            </div>
          </FadeIn>
        </div>

        {/* Evidencia: trayectoria real */}
        <FadeIn delay={0.32}>
          <div className="mt-20 lg:mt-28">
            <dl className="grid grid-cols-1 sm:grid-cols-3 sm:border-t sm:border-border">
              {stats.map((stat) => {
                const numericValue = Number(stat.value)
                const isNumeric = !Number.isNaN(numericValue)
                return (
                  <div
                    key={stat.label}
                    className="border-t border-border py-8 sm:border-l sm:border-t-0 sm:px-8 sm:py-10 sm:first:border-l-0 sm:first:pl-0"
                  >
                    <dd className="font-mono text-3xl font-semibold tabular-nums text-foreground lg:text-4xl">
                      {isNumeric ? (
                        <AnimatedNumber value={numericValue} prefix={stat.prefix} />
                      ) : (
                        `${stat.prefix}${stat.value}`
                      )}
                    </dd>
                    <dt className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                      {stat.label}
                    </dt>
                    <p className="mt-1.5 text-xs leading-snug text-muted-foreground">
                      {stat.context}
                    </p>
                  </div>
                )
              })}
            </dl>
            <a
              href="/laboratorio"
              className={`group mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent ${focusRing}`}
            >
              Explorar el laboratorio de datos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
