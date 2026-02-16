import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/60 mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground text-balance">
            Hablemos
          </h2>
        </div>

        <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mb-10">
          Cada proyecto comienza con una conversacion sobre tus datos y tus
          objetivos.
        </p>

        {/* Primary CTA */}
        <a
          href="https://calendly.com/bonillahermes/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-8 py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-primary-foreground/90 transition-colors mb-10"
        >
          Agendar consulta
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Secondary contact info */}
        <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
          <p>
            <a
              href="mailto:consulta@hermesbonilla.com"
              className="hover:text-primary-foreground transition-colors"
            >
              consulta@hermesbonilla.com
            </a>
          </p>
          <p>
            <a
              href="https://wa.me/573009769468"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground transition-colors"
            >
              +57 300 976 9468
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
