"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Servicios", href: "#servicios" },
  { name: "Resultados", href: "#resultados" },
  { name: "Sobre mi", href: "#sobre-mi" },
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
    if (href.startsWith("/")) {
      window.location.href = href
    } else {
      if (pathname !== "/") {
        window.location.href = `/${href}`
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="text-sm font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
          >
            Hermes Bonilla
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-secondary hover:text-foreground transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://calendly.com/bonillahermes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-foreground bg-primary px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors"
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
            aria-label={isMobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
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
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-secondary hover:text-foreground transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://calendly.com/bonillahermes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-foreground bg-primary px-4 py-2 rounded-sm hover:bg-primary/90 transition-colors text-center"
            >
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
