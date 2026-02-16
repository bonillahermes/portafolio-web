import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex items-end min-h-screen bg-primary overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative gold accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-40 lg:pb-28 lg:pt-48 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mb-8">
            Consultoria en analitica de datos para politica y gobierno
          </p>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-[1.1] text-balance mb-8">
            Datos que
            <br />
            deciden.
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mb-12">
            Un equipo multidisciplinario que convierte datos en ventaja
            estrategica para campanas, gobiernos e instituciones publicas.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="https://calendly.com/bonillahermes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-primary-foreground/90 transition-colors"
            >
              Agendar consulta
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors px-2 py-4"
            >
              Conocer servicios
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 pt-8 border-t border-primary-foreground/10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "4", label: "Disciplinas" },
            { value: "3", label: "Sectores atendidos" },
            { value: "End-to-end", label: "Acompanamiento" },
            { value: "LATAM", label: "Cobertura" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-2xl md:text-3xl font-semibold text-accent mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-primary-foreground/50 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
