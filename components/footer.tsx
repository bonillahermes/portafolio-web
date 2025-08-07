"use client"
import { useState } from "react"
import React from "react"
import { useLanguage } from "@/contexts/language-context"

import { ArrowUpRight, Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Calendar } from 'lucide-react'

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/bonillahermes",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      href: "https://github.com/bonillahermes",
      icon: Github,
      color: "hover:text-slate-900",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/573009769468",
      icon: MessageCircle,
      color: "hover:text-green-600",
    },
  ]

  const quickLinks = [
    { name: t("nav.services"), href: "#servicios" },
    { name: t("nav.cases"), href: "#casos" },
    { name: "Blog", href: "/blog" },
    { name: t("nav.about"), href: "#sobre-mi" },
    { name: t("nav.process"), href: "#proceso" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // External link
      window.location.href = href
    } else {
      // Internal anchor
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Brand & CTA */}
              <div className="space-y-8">
                {/* Brand */}
                <div>
                  <h3 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
                    {t("footer.transform")}
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {t("footer.yourBusiness")}
                    </span>
                  </h3>
                  <p className="text-xl text-slate-300 font-light leading-relaxed">
                    {t("footer.dataScience")}
                    <br />
                    {t("footer.availableInColombia")}
                  </p>
                </div>

                {/* CTA - SOLO EL PRINCIPAL */}
                <div className="flex justify-start">
                  <a
                    href="https://calendly.com/bonillahermes/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-slate-50 text-slate-900 hover:text-slate-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Agenda una Consulta Estratégica</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side - Navigation & Contact */}
              <div className="grid md:grid-cols-2 gap-12">
                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-6">{t("footer.navigation")}</h4>
                  <div className="space-y-4">
                    {quickLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => scrollToSection(link.href)}
                        onMouseEnter={() => setHoveredLink(link.name)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="group block text-slate-400 hover:text-white transition-colors duration-300"
                      >
                        <div className="flex items-center gap-2">
                          <span>{link.name}</span>
                          <ArrowUpRight
                            className={`w-4 h-4 transition-all duration-300 ${
                              hoveredLink === link.name ? "translate-x-1 -translate-y-1 opacity-100" : "opacity-0"
                            }`}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h4 className="text-lg font-medium text-white mb-6">{t("footer.contact")}</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-400">
                      <MapPin className="w-5 h-5 flex-shrink-0" />
                      <span>{t("nav.location")}</span>
                    </div>
                    <a
                      href="tel:+573009769468"
                      className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 group"
                    >
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <span>{t("nav.phone")}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                    <a
                      href="mailto:consulta@bonillahermes.com"
                      className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors duration-300 group"
                    >
                      <Mail className="w-5 h-5 flex-shrink-0" />
                      <span>{t("nav.email")}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10">
          <div className="py-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Brand & Copyright */}
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-white font-medium">Hermes Bonilla</p>
                    <p className="text-sm text-slate-400">{t("footer.dataScienceSenior")}</p>
                  </div>
                  <div className="hidden md:block w-px h-8 bg-white/20"></div>
                  <p className="text-sm text-slate-400">&copy; 2025 {t("footer.allRights")}</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-3 rounded-full border border-white/20 text-slate-400 transition-all duration-300 hover:border-white/40 hover:scale-110 ${social.color}`}
                    >
                      {React.createElement(social.icon, { className: "w-5 h-5" })}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div className="text-center pb-8">
          <p className="text-xs text-slate-500 font-light">
            {t("footer.madeWithData")} <span className="inline-block animate-bounce">☕</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}
