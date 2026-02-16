import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="flex items-center justify-center min-h-[90vh] bg-background pt-16">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-6">
          Analista de Datos para Politica y Gobierno
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
          Datos que deciden.
        </h1>

        <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl mx-auto mb-12">
          Convierto datos en ventaja estrategica para campanas, gobiernos e
          instituciones publicas.
        </p>

        <a
          href="https://calendly.com/bonillahermes/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-primary/90 transition-colors"
        >
          Agendar consulta
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
