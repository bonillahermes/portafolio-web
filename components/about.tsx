import { Linkedin, Github } from "lucide-react"

export default function About() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-secondary mb-3">
            Perfil
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Sobre mi
          </h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-base md:text-lg text-secondary leading-relaxed mb-8">
            Estadistico y cientifico de datos con experiencia en modelado
            predictivo, integracion de datos a gran escala y analisis
            cuantitativo para entornos de alta complejidad. He trabajado con
            entidades gubernamentales, campanas electorales y organizaciones del
            sector salud en Colombia. Mi enfoque es estrictamente cuantitativo:
            datos, modelos y resultados medibles.
          </p>

          {/* Descriptors */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-secondary mb-8">
            <span className="font-medium text-foreground">Estadistico</span>
            <span className="text-border">|</span>
            <span className="font-medium text-foreground">
              Cientifico de Datos
            </span>
            <span className="text-border">|</span>
            <span className="font-medium text-foreground">
              Bogota, Colombia
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/bonillahermes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/bonillahermes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
