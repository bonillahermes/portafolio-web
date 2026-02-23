import { Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground">
      {/* Top bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-base font-semibold text-primary-foreground tracking-tight">
                Hermes Bonilla
              </p>
              <p className="text-sm text-primary-foreground/40 mt-1">
                Consultoría en analítica de datos para política y gobierno
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/bonillahermes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/30 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/bonillahermes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/30 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/25">
            {"© 2025 Hermes Bonilla. Todos los derechos reservados."}
          </p>
          <p className="text-xs text-primary-foreground/25">
            {"Bogotá, Colombia — Disponible en LATAM"}
          </p>
        </div>
      </div>
    </footer>
  )
}
