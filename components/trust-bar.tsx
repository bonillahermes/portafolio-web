"use client"

import { FadeIn } from "./motion"

const sectors = [
  "Campañas electorales",
  "Senado de la República",
  "Sector Salud",
  "Entidades territoriales",
  "Organismos de control",
]

export default function TrustBar() {
  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-secondary/50 shrink-0">
              Sectores atendidos
            </p>
            <div className="w-px h-6 bg-border hidden lg:block" />
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-4">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="text-sm text-secondary/70 font-medium"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
