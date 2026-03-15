"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { FadeIn } from "./motion"

const featured = {
  name: "Ministerio del Interior",
  logo: "/images/min-interior-logo.png",
  description: "Plataformas de monitoreo electoral, sistemas de vigilancia institucional y herramientas de gestión desarrolladas para la operación del Ministerio.",
  projects: ["PMU Electoral", "SIVIGEM", "Sistema PNG"],
}

const others = [
  {
    name: "Ministerio de Igualdad",
    logo: "/images/min-igualdad-logo.jpeg",
    description: "Sistemas de gestión e información para política pública con enfoque de género",
  },
  {
    name: "Comisión Legal para la Equidad de la Mujer",
    logo: "/images/com-legal-mujer.jpeg",
    description: "Herramientas analíticas para el seguimiento legislativo con enfoque diferencial",
  },
  {
    name: "Gobernación de Boyacá",
    logo: "/images/gob-boyaca-logo.png",
    description: "Análisis territorial y soporte técnico para toma de decisiones departamentales",
  },
]

export default function TrustBar() {
  return (
    <section className="py-24 lg:py-32 bg-background border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-accent" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
                Clientes
              </p>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
              Entidades que han confiado en nosotros
            </h2>
          </div>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5">
          {/* Featured — Ministerio del Interior */}
          <FadeIn delay={0.1}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="group relative bg-white border border-border rounded-2xl p-8 lg:p-10 h-full overflow-hidden transition-all hover:border-accent/30 hover:shadow-xl hover:shadow-accent/8"
            >
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/[0.03] blur-3xl pointer-events-none group-hover:bg-accent/[0.06] transition-colors duration-700" />

              <div className="relative flex flex-col gap-6 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-white ring-1 ring-border group-hover:ring-accent/30 shadow-sm flex items-center justify-center overflow-hidden shrink-0 transition-all">
                    <div className="relative w-14 h-14">
                      <Image src={featured.logo} alt={featured.name} fill className="object-contain" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2">
                      Cliente principal
                    </p>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                      {featured.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {featured.description}
                </p>

                <div className="mt-auto pt-4 border-t border-border/60">
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/50 mb-3">
                    Proyectos desarrollados
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.projects.map((p) => (
                      <span
                        key={p}
                        className="text-[11px] font-mono text-accent bg-accent/[0.08] px-3 py-1.5 rounded-full"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>

          {/* Right column — 3 stacked */}
          <div className="flex flex-col gap-5">
            {others.map((client, i) => (
              <FadeIn key={client.name} delay={0.15 + i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="group relative bg-white border border-border rounded-2xl p-6 overflow-hidden transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-accent/[0.02] via-transparent to-transparent rounded-2xl" />

                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white ring-1 ring-border group-hover:ring-accent/30 shadow-sm flex items-center justify-center overflow-hidden shrink-0 transition-all">
                      <div className="relative w-9 h-9">
                        <Image src={client.logo} alt={client.name} fill className="object-contain" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                        {client.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {client.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
