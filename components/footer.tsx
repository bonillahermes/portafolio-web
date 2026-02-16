import { Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-secondary">
            <span className="font-medium text-foreground">Hermes Bonilla</span>
            <span className="text-border">|</span>
            <span>{"© 2025"}</span>
            <span className="text-border">|</span>
            <span>Bogota, Colombia</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/bonillahermes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/bonillahermes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors"
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
