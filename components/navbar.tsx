"use client"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Calendar, ArrowRight, Zap, Brain, Activity, Cpu, Database, Shield } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"
import LanguageSelector from "./language-selector"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = ['servicios', 'casos', 'sobre-mi', 'proceso']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(currentSection || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { 
      name: t("nav.services"), 
      href: "#servicios",
      icon: Brain
    },
    { 
      name: t("nav.cases"), 
      href: "#casos",
      icon: Activity
    },
    { 
      name: "Blog", 
      href: "/blog",
      icon: Database
    },
    { 
      name: t("nav.about"), 
      href: "#sobre-mi",
      icon: Cpu
    },
    { 
      name: t("nav.process"), 
      href: "#proceso",
      icon: Shield
    },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      window.location.href = href
    } else {
      if (pathname.startsWith('/blog')) {
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
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.location.href = '/'
    }
  }

  const handleConsultaClick = () => {
    window.open('https://calendly.com/bonillahermes/30min', '_blank')
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Minimal Floating Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/20 shadow-lg shadow-slate-900/5" 
          : "bg-transparent"
      }`}>
        
        {/* Neural Network Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-24 h-24 bg-purple-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Minimal Logo */}
            <button
              onClick={handleLogoClick}
              className="group flex items-center gap-3 hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                {/* AI-inspired logo with neural connections */}
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-sm opacity-90"></div>
                </div>
                {/* Neural connection dots */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping"></div>
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Hermes Bonilla
                </div>
                <div className="text-xs text-slate-500 -mt-0.5 font-mono">AI Specialist</div>
              </div>
            </button>

            {/* Minimal Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '') || 
                                 (item.href === '/blog' && pathname.startsWith('/blog'))
                  
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                        isActive
                          ? "text-blue-600 bg-blue-50/50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </div>
                      
                      {/* Subtle active indicator */}
                      {isActive && (
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Minimal Actions */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSelector />
              
              {/* Futuristic CTA */}
              <button
                onClick={handleConsultaClick}
                className="group relative bg-gradient-to-r from-slate-900 to-slate-800 hover:from-blue-600 hover:to-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="relative flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Consulta</span>
                </div>
              </button>
            </div>

            {/* Minimal Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
            >
              <div className="relative w-5 h-5">
                <span className={`absolute block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-2' : 'top-1'
                }`}></span>
                <span className={`absolute block w-5 h-0.5 bg-slate-700 top-2 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-2' : 'top-3'
                }`}></span>
              </div>
            </button>
          </div>

          {/* Subtle Progress Indicator */}
          {isScrolled && (
            <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent transition-all duration-300"
                 style={{ width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` }}>
            </div>
          )}
        </div>
      </nav>

      {/* Elegant Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Minimal Backdrop */}
        <div 
          className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Clean Menu Panel */}
        <div
          className={`absolute top-16 left-4 right-4 bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-xl transition-all duration-500 ${
            isMobileMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          <div className="p-6">
            
            {/* Mobile Navigation */}
            <div className="space-y-1 mb-6">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <item.icon className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
                  </div>
                  <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile CTA */}
            <button
              onClick={handleConsultaClick}
              className="w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Consulta Gratuita</span>
            </button>

            {/* Contact Info */}
            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
              <div className="text-xs text-slate-500 font-mono">
                +57 300 976 9468 • consulta@bonillahermes.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
