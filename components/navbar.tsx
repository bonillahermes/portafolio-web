"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Servicios", href: "#servicios" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Resultados", href: "#resultados" },
  { name: "Equipo", href: "#equipo" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "#contacto" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (pathname !== "/") {
      window.location.href = `/${href}`
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.location.href = "/"
    }
  }

  return (
    <nav
      aria-label="Navegación principal"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex flex-col"
          >
            <span className={`text-base font-semibold tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              Hermes Bonilla
            </span>
            <span className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors ${isScrolled ? "text-secondary" : "text-primary-foreground/60"}`}>
              Consultoría en datos
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }
                }}
                className={`text-sm tracking-wide transition-colors ${
                  isScrolled
                    ? "text-secondary hover:text-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/573009769468?text=Hola%2C%20me%20interesa%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-semibold px-5 py-2.5 transition-colors ${
                isScrolled
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-accent text-accent-foreground hover:bg-accent/90"
              }`}
            >
              Agendar consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border shadow-lg">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("#")) {
                    e.preventDefault()
                    scrollToSection(item.href)
                  } else {
                    setIsMobileMenuOpen(false)
                  }
                }}
                className="text-sm text-secondary hover:text-foreground transition-colors text-left py-1"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/573009769468?text=Hola%2C%20me%20interesa%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent-foreground bg-accent px-5 py-3 hover:bg-accent/90 transition-colors text-center mt-2"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
