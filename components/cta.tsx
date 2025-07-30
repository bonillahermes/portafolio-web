"use client"

import React from "react"
import { useState, useEffect } from "react"
import {
  CheckCircle,
  Calendar,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
  ArrowRight,
  Play,
  Users,
  Award,
  Shield,
  Zap,
} from "lucide-react"

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

  const benefits = [
    {
      icon: CheckCircle,
      title: "Evaluación completa de tu potencial",
      description: "Analizamos tus datos y procesos actuales",
    },
    {
      icon: Sparkles,
      title: "3 oportunidades de mejora identificadas",
      description: "Ideas concretas para optimizar tu negocio",
    },
    {
      icon: Award,
      title: "ROI estimado personalizado",
      description: "Proyección real del retorno de inversión",
    },
    {
      icon: Users,
      title: "Estrategia de implementación",
      description: "Plan paso a paso adaptado a tu empresa",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % benefits.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-full animate-spin-slow"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
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
        <div className="max-w-6xl mx-auto">
          {/* Main Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/90 text-sm font-medium">Consulta Estratégica Disponible</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              ¿Listo para{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                transformar
              </span>
              <br />
              tu negocio?
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Descubre cómo la inteligencia artificial puede revolucionar tu empresa.
              <br />
              <span className="text-white font-semibold">Primera consulta completamente gratuita.</span>
            </p>
          </div>

          {/* Benefits Showcase */}
          <div className="relative mb-16">
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Holographic Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  Lo que descubriremos juntos
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                        activeCard === index
                          ? "bg-white/10 border-white/30 scale-105 shadow-xl"
                          : "bg-white/5 border-white/10 hover:bg-white/8"
                      }`}
                      onClick={() => setActiveCard(index)}
                    >
                      {/* Glow Effect */}
                      {activeCard === index && (
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
                      )}

                      <div className="relative z-10">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all ${
                            activeCard === index ? "bg-white/20 text-white scale-110" : "bg-white/10 text-white/70"
                          }`}
                        >
                          {React.createElement(benefit.icon, { className: "w-6 h-6" })}
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                        <p className="text-sm text-blue-100">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl mb-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">100% Gratuita</h4>
                    <p className="text-blue-100 text-sm">Sin compromisos ni costos ocultos</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-3">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">Respuesta Rápida</h4>
                    <p className="text-blue-100 text-sm">Confirmación en menos de 24 horas</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-3">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">Confidencialidad</h4>
                    <p className="text-blue-100 text-sm">Tu información está 100% protegida</p>
                  </div>
                </div>

                {/* Main CTA */}
                <div className="text-center mb-8">
                  <a
                    href="https://calendly.com/bonillahermes/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25 inline-flex items-center gap-3"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                    <div className="relative z-10 flex items-center gap-3">
                      <Calendar className="w-6 h-6" />
                      <span>Agendar Consulta Estratégica</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>

                  <p className="text-blue-100 mt-4 text-lg">
                    <span className="text-green-400 font-semibold">100% Gratuita</span> • Sin compromisos • 30 minutos
                    que pueden cambiar tu negocio
                  </p>
                </div>

                {/* Alternative Contact Methods */}
                <div className="relative">
                  <div className="flex items-center gap-4 my-8">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    <span className="text-white/70 text-sm bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
                      o contacta directamente
                    </span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <a
                      href="https://wa.me/573009769468?text=Hola%20Hermes,%20estoy%20interesado%20en%20una%20consulta%20estratégica%20sobre%20Data%20Science%20para%20mi%20empresa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 py-4 rounded-xl backdrop-blur-sm transition-all hover:scale-105 inline-flex items-center gap-3 px-6"
                    >
                      <MessageCircle className="w-5 h-5 text-green-400" />
                      <span>WhatsApp Directo</span>
                      <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href="mailto:consulta@bonillahermes.com?subject=Consulta%20sobre%20servicios%20de%20Data%20Science&body=Hola%20Hermes,%0A%0AEstoy%20interesado%20en%20conocer%20más%20sobre%20tus%20servicios%20de%20Data%20Science%20para%20mi%20empresa.%0A%0AGracias."
                      className="group bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/30 py-4 rounded-xl backdrop-blur-sm transition-all hover:scale-105 inline-flex items-center gap-3 px-6"
                    >
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span>Email Directo</span>
                      <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="text-center pt-8 border-t border-white/10">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-400" />
                      <span>+57 300 976 9468</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-400" />
                      <span>consulta@bonillahermes.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Action Indicators */}
            <div className="absolute -top-6 -right-6 bg-green-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Play className="w-5 h-5" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
