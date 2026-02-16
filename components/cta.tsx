import { ArrowRight, Mail, Phone } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Copy */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground text-balance leading-tight mb-6">
              Hablemos de
              <br />
              tu proyecto
            </h2>
            <p className="text-base text-primary-foreground/70 leading-relaxed max-w-lg mb-10">
              Cada proyecto comienza con una conversacion sobre tus datos,
              tus objetivos y el contexto de tu organizacion. Agenda una
              consulta inicial sin costo.
            </p>

            {/* CTA button */}
            <a
              href="https://calendly.com/bonillahermes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-primary-foreground/90 transition-colors"
            >
              Agendar consulta gratuita
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right - Contact details */}
          <div className="flex flex-col gap-8 lg:pl-10 lg:border-l lg:border-primary-foreground/10">
            <div>
              <p className="text-xs uppercase tracking-wider text-primary-foreground/40 mb-3">
                Email
              </p>
              <a
                href="mailto:consulta@hermesbonilla.com"
                className="flex items-center gap-3 text-base text-primary-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-foreground/40" />
                consulta@hermesbonilla.com
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-primary-foreground/40 mb-3">
                WhatsApp
              </p>
              <a
                href="https://wa.me/573009769468"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-base text-primary-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-foreground/40" />
                +57 300 976 9468
              </a>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-primary-foreground/40 mb-3">
                Ubicacion
              </p>
              <p className="text-base text-primary-foreground">
                Bogota, Colombia
              </p>
              <p className="text-sm text-primary-foreground/50 mt-1">
                Disponible en toda Colombia y LATAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
