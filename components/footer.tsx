import { Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-primary-foreground/50">
            <span className="font-medium text-primary-foreground/80">
              Hermes Bonilla
            </span>
            <span className="hidden md:inline text-primary-foreground/20">
              |
            </span>
            <span>Consultoría en analítica de datos</span>
            <span className="hidden md:inline text-primary-foreground/20">
              |
            </span>
            <span>{"© 2025"}</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/bonillahermes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/bonillahermes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/40 hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
