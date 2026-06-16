"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
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
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Resalta la sección visible en la navegación (scroll-spy).
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("")
      return
    }
    const ids = navItems
      .filter((i) => i.href.startsWith("#"))
      .map((i) => i.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  const scrollToSection = (href: string) => {
    if (pathname !== "/") {
      window.location.href = `/${href}`
    } else {
      const element = document.querySelector(href)
      if (element) element.scrollIntoView({ behavior: "smooth" })
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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-border bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-editorial">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            aria-label="Inicio"
            className="group flex items-center gap-2.5 text-left"
          >
            <Image
              src="/images/logo-hb.png"
              alt=""
              width={32}
              height={32}
              className="h-7 w-7 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="flex flex-col">
              <span className="text-base font-semibold leading-tight tracking-tight text-foreground">
                Hermes Bonilla
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                Datos e inteligencia
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => {
              const isActive =
                item.href.startsWith("#") && item.href.slice(1) === activeSection
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault()
                      scrollToSection(item.href)
                    }
                  }}
                  className={`relative text-sm transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="https://wa.me/573009769468?text=Hola%2C%20me%20interesa%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Contacto
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-foreground lg:hidden"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="border-b border-border bg-white shadow-lg lg:hidden">
          <div className="container-editorial flex flex-col gap-4 py-6">
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
                className="py-1 text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://wa.me/573009769468?text=Hola%2C%20me%20interesa%20una%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-accent px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
