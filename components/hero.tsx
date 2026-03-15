"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedNumber } from "./motion"
import Image from "next/image"

const stats = [
  { value: "2", label: "Segmentos atendidos" },
  { value: "5", label: "Plataformas desarrolladas" },
  { value: "End-to-end", label: "Acompañamiento" },
  { value: "LATAM", label: "Cobertura regional" },
]

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-end min-h-screen bg-primary overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Visualización de datos sobre panorámica de Bogotá"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-primary/85" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large decorative number */}
      <div className="absolute top-24 right-6 lg:right-16 select-none pointer-events-none">
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 0.04, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="font-mono text-[20rem] lg:text-[28rem] font-bold text-white leading-none block"
        >
          HB
        </motion.span>
      </div>

      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-accent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-16 pt-36 lg:pb-20 lg:pt-48 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 mb-10"
        >
          <motion.div
            className="h-px bg-accent"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          />
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
            Analítica y sistemas para instituciones públicas
          </p>
        </motion.div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-white leading-[0.95] tracking-tight text-balance mb-8">
          {["Datos", "que"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="inline-block text-accent"
          >
            deciden.
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-white/60 leading-relaxed max-w-2xl mb-14"
        >
          Analítica de datos, inteligencia artificial y desarrollo de sistemas
          orientados a fortalecer la toma de decisiones en entidades públicas,
          equipos legislativos y organizaciones institucionales.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-start gap-5 mb-20"
        >
          <a
            href="https://wa.me/573009769468?text=Hola%2C%20me%20interesa%20una%20consulta%20estrat%C3%A9gica"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all rounded-lg"
          >
            Solicitar conversación estratégica
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors px-4 py-4 border border-white/15 hover:border-white/30 rounded-lg"
          >
            Ver capacidades
          </a>
          <a
            href="/brochure"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors px-4 py-4"
          >
            Descargar brochure
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {stats.map((stat, i) => {
            const numericValue = Number(stat.value)
            const isNumeric = !isNaN(numericValue)
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
              >
                <p className="font-mono text-3xl md:text-4xl font-semibold mb-2 text-accent">
                  {isNumeric ? (
                    <AnimatedNumber value={numericValue} delay={0.9 + i * 0.1} />
                  ) : (
                    stat.value
                  )}
                </p>
                <p className="text-xs text-white/40 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
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
          <ChevronDown className="w-5 h-5 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
