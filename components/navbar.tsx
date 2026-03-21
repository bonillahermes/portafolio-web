"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Servicios", href: "#servicios" },
  { name: "Metodología", href: "#metodologia" },
  { name: "Plataformas", href: "#plataformas" },
  { name: "Equipo", href: "#equipo" },
  { name: "Laboratorio", href: "/laboratorio" },
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
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
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
            <span className={`text-base font-semibold tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              Hermes Bonilla
            </span>
            <span className={`text-[10px] font-mono uppercase tracking-[0.15em] transition-colors ${isScrolled ? "text-muted-foreground" : "text-white/50"}`}>
              Datos e inteligencia
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
                className={`text-sm transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/60 hover:text-white"
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
              className="text-sm font-semibold px-5 py-2.5 bg-accent text-white hover:bg-accent/90 transition-colors rounded-lg"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
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
        <div className="lg:hidden bg-white border-b border-border shadow-lg">
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
                className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left py-1"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/573009769468?text=Hola%2C%20me%20interesa%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-3 bg-accent text-white hover:bg-accent/90 transition-colors text-center mt-2 rounded-lg"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
