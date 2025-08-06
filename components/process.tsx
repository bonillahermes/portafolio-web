"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Code, Rocket, ArrowRight, CheckCircle, Zap, Brain, Target, Sparkles, Play, Clock, Users, TrendingUp } from 'lucide-react'

const processSteps = [
  {
    id: "discovery",
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    subtitle: "Análisis Profundo",
    description: "Conversación estratégica para entender tu problema, objetivos y el potencial real de tus datos.",
    details: [
      "Evaluación de datos existentes",
      "Identificación de oportunidades",
      "Definición de objetivos claros",
      "Análisis de viabilidad técnica",
    ],
    color: "blue",
    status: "Gratuito",
    duration: "1-2 días",
    outcome: "Roadmap claro y viable",
  },
  {
    id: "proposal",
    number: "02",
    icon: FileText,
    title: "Propuesta",
    subtitle: "Estrategia Personalizada",
    description: "Diseño de solución específica con arquitectura técnica, metodología y ROI proyectado.",
    details: [
      "Arquitectura de solución detallada",
      "Metodología de implementación",
      "ROI y métricas esperadas",
      "Timeline y entregables claros",
    ],
    color: "green",
    status: "Incluido",
    duration: "2-3 días",
    outcome: "Propuesta técnica completa",
  },
  {
    id: "execution",
    number: "03",
    icon: Code,
    title: "Ejecución",
    subtitle: "Desarrollo Ágil",
    description: "Implementación iterativa con reportes constantes, pruebas continuas y ajustes en tiempo real.",
    details: [
      "Desarrollo iterativo y ágil",
      "Reportes de progreso semanales",
      "Pruebas y validación continua",
      "Ajustes basados en feedback",
    ],
    color: "purple",
    status: "En Progreso",
    duration: "4-12 semanas",
    outcome: "Solución funcionando",
  },
  {
    id: "delivery",
    number: "04",
    icon: Rocket,
    title: "Entrega",
    subtitle: "Valor Perpetuo",
    description: "Modelo funcionando en producción, equipo capacitado y documentación completa para autonomía.",
    details: [
      "Modelo en producción 24/7",
      "Capacitación completa del equipo",
      "Documentación técnica y de usuario",
      "Soporte post-implementación",
    ],
    color: "orange",
    status: "Garantizado",
    duration: "1-2 semanas",
    outcome: "Autonomía total",
  },
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: "bg-blue-50/80",
      border: "border-blue-200/60",
      icon: "bg-blue-100 text-blue-600",
      accent: "text-blue-600",
      gradient: "from-blue-500 to-blue-600",
      glow: "shadow-blue-500/25",
      particle: "bg-blue-400",
    },
    green: {
      bg: "bg-green-50/80",
      border: "border-green-200/60",
      icon: "bg-green-100 text-green-600",
      accent: "text-green-600",
      gradient: "from-green-500 to-green-600",
      glow: "shadow-green-500/25",
      particle: "bg-green-400",
    },
    purple: {
      bg: "bg-purple-50/80",
      border: "border-purple-200/60",
      icon: "bg-purple-100 text-purple-600",
      accent: "text-purple-600",
      gradient: "from-purple-500 to-purple-600",
      glow: "shadow-purple-500/25",
      particle: "bg-purple-400",
    },
    orange: {
      bg: "bg-orange-50/80",
      border: "border-orange-200/60",
      icon: "bg-orange-100 text-orange-600",
      accent: "text-orange-600",
      gradient: "from-orange-500 to-orange-600",
      glow: "shadow-orange-500/25",
      particle: "bg-orange-400",
    },
  }
  return colors[color as keyof typeof colors]
}

export default function Process() {
  const [activeStep, setActiveStep] = useState("discovery")
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const [visibleSteps, setVisibleSteps] = useState<string[]>([])

  const currentStep = processSteps.find((step) => step.id === activeStep) || processSteps[0]
  const currentIndex = processSteps.findIndex((step) => step.id === activeStep)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveStep((current) => {
        const currentIndex = processSteps.findIndex((step) => step.id === current)
        const nextIndex = (currentIndex + 1) % processSteps.length
        return processSteps[nextIndex].id
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Progress bar animation
  useEffect(() => {
    setProgress(0)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + (isAutoPlaying ? 2.5 : 0)
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [activeStep, isAutoPlaying])

  // Reveal steps on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.getAttribute('data-step-id')
            if (stepId && !visibleSteps.includes(stepId)) {
              setVisibleSteps(prev => [...prev, stepId])
            }
          }
        })
      },
      { threshold: 0.3 }
    )

    const stepElements = document.querySelectorAll('[data-step-id]')
    stepElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [visibleSteps])

  const handleStepClick = (stepId: string) => {
    setActiveStep(stepId)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000) // Resume auto-play after 8 seconds
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 to-blue-50/20"></div>
      
      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-15 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-25 animate-ping"></div>

      {/* Animated Connection Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-10">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="25%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          <path
            d="M 100 300 Q 400 200 800 300 T 1400 300"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header with Play/Pause Control */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200">
              <Target className="w-4 h-4 mr-2" />
              Metodología Probada
            </Badge>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 rounded-full transition-colors"
            >
              {isAutoPlaying ? (
                <>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-sm text-blue-600 font-medium">Auto</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">Manual</span>
                </>
              )}
            </button>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Mi Proceso de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transformación
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Metodología estructurada y transparente que garantiza resultados excepcionales
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Progress Indicator */}
          <div className="relative mb-8">
            <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-100 ease-linear"
                style={{ width: `${(currentIndex + 1) * 25}%` }}
              ></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-1">
              <div 
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-50 transition-all duration-100 ease-linear"
                style={{ width: `${((currentIndex) * 25) + (progress * 0.25)}%` }}
              ></div>
            </div>
          </div>

          {/* Step Navigation with Animations */}
          <div className="relative mb-16">
            <div className="grid md:grid-cols-4 gap-4">
              {processSteps.map((step, index) => {
                const colorClasses = getColorClasses(step.color)
                const isActive = activeStep === step.id
                const isVisible = visibleSteps.includes(step.id)
                const isPast = index < currentIndex
                const isFuture = index > currentIndex

                return (
                  <div 
                    key={step.id} 
                    className="relative"
                    data-step-id={step.id}
                  >
                    <button
                      onClick={() => handleStepClick(step.id)}
                      className={`w-full p-6 rounded-2xl border-2 transition-all duration-500 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                      } ${
                        isActive
                          ? `${colorClasses.bg} ${colorClasses.border} shadow-2xl ${colorClasses.glow} scale-105`
                          : isPast
                          ? "bg-slate-50 border-slate-300 shadow-md hover:shadow-lg"
                          : isFuture
                          ? "bg-white border-slate-200 shadow-sm hover:shadow-md opacity-75"
                          : "bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md"
                      } hover:scale-105`}
                      style={{ 
                        animationDelay: `${index * 200}ms`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Animated Progress Ring */}
                      <div className="relative mb-4">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${
                            isActive ? colorClasses.icon : isPast ? "bg-slate-200 text-slate-600" : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {isPast && !isActive ? (
                            <CheckCircle className="w-8 h-8" />
                          ) : (
                            <span className="text-xl font-bold">{step.number}</span>
                          )}
                        </div>
                        
                        {/* Floating Particles */}
                        {isActive && (
                          <>
                            <div className={`absolute -top-1 -right-1 w-3 h-3 ${colorClasses.particle} rounded-full animate-ping`}></div>
                            <div className={`absolute -bottom-1 -left-1 w-2 h-2 ${colorClasses.particle} rounded-full animate-bounce`}></div>
                          </>
                        )}
                      </div>

                      {/* Step Info */}
                      <h3 className={`text-lg font-semibold mb-2 transition-colors ${
                        isActive ? colorClasses.accent : isPast ? "text-slate-700" : "text-slate-600"
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">{step.subtitle}</p>

                      {/* Status and Duration */}
                      <div className="flex items-center justify-between">
                        <Badge
                          className={`text-xs ${
                            isActive
                              ? `${colorClasses.accent} bg-transparent border-current`
                              : "bg-slate-100 text-slate-600 border-slate-200"
                          }`}
                        >
                          {step.status}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </div>
                      </div>

                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute -top-2 -right-2">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${colorClasses.gradient} animate-pulse flex items-center justify-center`}>
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Active Step Details with Enhanced Animations */}
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
              <div className="absolute top-4 right-4 w-32 h-32 border border-slate-200 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 border border-slate-200 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Left Side - Content */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${getColorClasses(currentStep.color).icon} shadow-lg transform hover:scale-110 transition-transform`}>
                    {React.createElement(currentStep.icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{currentStep.title}</h3>
                    <p className={`text-lg ${getColorClasses(currentStep.color).accent} font-medium`}>
                      {currentStep.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed">{currentStep.description}</p>

                {/* Enhanced Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-medium text-slate-600">Duración</span>
                    </div>
                    <p className="text-lg font-bold text-slate-900">{currentStep.duration}</p>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-slate-600">Resultado</span>
                    </div>
                    <p className="text-lg font-bold text-slate-900">{currentStep.outcome}</p>
                  </div>
                </div>

                {/* Details List with Animations */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    Qué incluye esta fase
                  </h4>
                  {currentStep.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-100 transform hover:scale-105 transition-all duration-200"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Enhanced Visual */}
              <div className="relative">
                <div
                  className={`aspect-square rounded-3xl bg-gradient-to-br ${getColorClasses(currentStep.color).gradient} p-1 shadow-2xl ${getColorClasses(currentStep.color).glow} transform hover:scale-105 transition-all duration-500`}
                >
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center relative overflow-hidden">
                    {React.createElement(currentStep.icon, {
                      className: `w-32 h-32 ${getColorClasses(currentStep.color).accent} transform hover:rotate-12 transition-transform duration-300`,
                    })}
                    
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 opacity-10">
                      <div className={`absolute top-4 right-4 w-16 h-16 ${getColorClasses(currentStep.color).particle} rounded-full animate-pulse`}></div>
                      <div className={`absolute bottom-4 left-4 w-12 h-12 ${getColorClasses(currentStep.color).particle} rounded-full animate-bounce`}></div>
                      <div className={`absolute top-1/2 left-4 w-8 h-8 ${getColorClasses(currentStep.color).particle} rounded-full animate-ping`}></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-slate-200 animate-bounce">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-slate-200 animate-pulse">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div className="absolute top-1/2 -right-6 bg-white rounded-full p-2 shadow-lg border border-slate-200 animate-ping">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-16 pt-16 border-t border-slate-200 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-blue-50/50 rounded-3xl blur-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                ¿Listo para comenzar tu{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  transformación?
                </span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                El primer paso es siempre gratuito. Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contacto"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2 rounded-full group"
                >
                  <Target className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Iniciar Proceso
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Primera consulta gratuita</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
