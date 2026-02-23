"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

const stats = [
  { value: "4", label: "Disciplinas integradas" },
  { value: "3", label: "Sectores de impacto" },
  { value: "End-to-end", label: "Acompañamiento" },
  { value: "LATAM", label: "Cobertura regional" },
]

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-end min-h-screen bg-primary overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large decorative number */}
      <div className="absolute top-24 right-6 lg:right-16 select-none pointer-events-none">
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 0.03, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-mono text-[20rem] lg:text-[28rem] font-bold text-primary-foreground leading-none block"
        >
          HB
        </motion.span>
      </div>

      {/* Gold top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-36 lg:pb-20 lg:pt-48 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-accent" />
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
            Consultoría en analítica de datos
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-primary-foreground leading-[0.95] tracking-tight text-balance mb-8"
        >
          Datos que
          <br />
          <span className="text-accent">deciden.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-primary-foreground/60 leading-relaxed max-w-2xl mb-14"
        >
          Convertimos datos en ventaja estratégica para quienes toman las
          decisiones que transforman lo público.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start gap-5 mb-20"
        >
          <a
            href="https://calendly.com/bonillahermes/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all"
          >
            Agendar consulta estratégica
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors px-3 py-4 border border-primary-foreground/10 hover:border-primary-foreground/30"
          >
            Explorar servicios
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="pt-10 border-t border-primary-foreground/10 grid grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
            >
              <p className="font-mono text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-xs text-primary-foreground/40 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
