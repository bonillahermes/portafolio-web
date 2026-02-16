"use client"

import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"
import { FadeIn } from "./motion"

export default function CTA() {
  return (
    <section className="py-28 lg:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large accent block */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-accent/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24">
          {/* Left - Main message */}
          <FadeIn>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                Contacto
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground text-balance leading-[1.05] mb-8">
              Hablemos de
              <br />
              su proyecto
            </h2>
            <p className="text-lg text-primary-foreground/50 leading-relaxed max-w-lg mb-12">
              Cada proyecto comienza con una conversación sobre sus datos,
              sus objetivos y el contexto de su organización. Agende una
              consulta inicial sin costo para evaluar cómo podemos aportar.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="https://calendly.com/bonillahermes/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all"
              >
                Agendar consulta gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:consulta@hermesbonilla.com"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors px-3 py-4 border border-primary-foreground/10 hover:border-primary-foreground/30"
              >
                Enviar correo
              </a>
            </div>

            {/* Trust note */}
            <div className="border-t border-primary-foreground/10 pt-8">
              <p className="text-xs text-primary-foreground/30 uppercase tracking-widest mb-3">
                Compromiso
              </p>
              <p className="text-sm text-primary-foreground/50 leading-relaxed max-w-md">
                Consulta confidencial y sin compromiso. Evaluamos su caso y le
                indicamos con honestidad si podemos aportar valor antes de
                cualquier acuerdo comercial.
              </p>
            </div>
          </FadeIn>

          {/* Right - Contact details */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-0 border border-primary-foreground/10">
              {/* Email */}
              <div className="p-8 lg:p-10 border-b border-primary-foreground/10">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-4 h-4 text-accent" />
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/30">
                    Email
                  </p>
                </div>
                <a
                  href="mailto:consulta@hermesbonilla.com"
                  className="text-lg text-primary-foreground hover:text-accent transition-colors"
                >
                  consulta@hermesbonilla.com
                </a>
              </div>

              {/* WhatsApp */}
              <div className="p-8 lg:p-10 border-b border-primary-foreground/10">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-4 h-4 text-accent" />
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/30">
                    WhatsApp
                  </p>
                </div>
                <a
                  href="https://wa.me/573009769468"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-primary-foreground hover:text-accent transition-colors"
                >
                  +57 300 976 9468
                </a>
              </div>

              {/* Location */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-4 h-4 text-accent" />
                  <p className="text-xs uppercase tracking-widest text-primary-foreground/30">
                    Ubicación
                  </p>
                </div>
                <p className="text-lg text-primary-foreground">
                  Bogotá, Colombia
                </p>
                <p className="text-sm text-primary-foreground/40 mt-2">
                  Disponible en toda Colombia y LATAM
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
