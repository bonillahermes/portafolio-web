"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSelector from "./language-selector"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("nav.services"), href: "#servicios" },
    { name: t("nav.cases"), href: "#casos" },
    { name: t("nav.about"), href: "#sobre-mi" },
    { name: t("nav.process"), href: "#proceso" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("#home")}
                className="text-xl md:text-2xl font-light text-slate-900 hover:text-blue-600 transition-colors duration-300"
              >
                Hermes Bonilla
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-slate-600 hover:text-slate-900 font-light transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector />
              <Button
                onClick={() => scrollToSection("#contacto")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
              >
                {t("nav.start")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-600" />
              ) : (
                <Menu className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>

        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-[90vw] h-full bg-white/95 backdrop-blur-xl border-l border-slate-200/50 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-24">
            {/* Language Selector */}
            <div className="mb-8">
              <LanguageSelector />
            </div>

            {/* Mobile Navigation Items */}
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-2xl font-light text-slate-900 hover:text-blue-600 transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <Button
                onClick={() => scrollToSection("#contacto")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-medium transition-all duration-300"
              >
                {t("nav.startProject")}
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-slate-200 space-y-3">
              <p className="text-sm text-slate-500 font-light">{t("nav.location")}</p>
              <p className="text-sm text-slate-600">{t("nav.phone")}</p>
              <p className="text-sm text-slate-600">{t("nav.email")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  )
}
