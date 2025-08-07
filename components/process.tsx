"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Search, FileText, Cog, Rocket, CheckCircle, ArrowRight, Clock, Users, Target, Zap } from 'lucide-react'

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Descubrimiento",
      subtitle: "Análisis Profundo",
      description: "Entendemos tu negocio, objetivos y desafíos específicos para diseñar la solución perfecta.",
      duration: "1-2 semanas",
      status: "Gratuito",
      color: "blue",
      details: [
        "Análisis profundo de tu modelo de negocio",
        "Identificación de oportunidades de IA",
        "Evaluación de datos disponibles",
        "Definición de objetivos y KPIs"
      ],
      deliverables: [
        "Diagnóstico completo",
        "Roadmap personalizado",
        "Estimación de ROI"
      ]
    },
    {
      id: 2,
      icon: FileText,
      title: "Propuesta",
      subtitle: "Estrategia Personalizada",
      description: "Diseñamos una estrategia detallada con cronograma, recursos y resultados esperados.",
      duration: "3-5 días",
      status: "Incluido",
      color: "green",
      details: [
        "Propuesta técnica detallada",
        "Cronograma de implementación",
        "Definición de métricas de éxito",
        "Análisis de riesgo y mitigación"
      ],
      deliverables: [
        "Propuesta ejecutiva",
        "Plan de trabajo",
        "Acuerdo de nivel de servicio"
      ]
    },
    {
      id: 3,
      icon: Cog,
      title: "Ejecución",
      subtitle: "Desarrollo Ágil",
      description: "Desarrollamos e implementamos la solución con metodología ágil y reportes constantes.",
      duration: "4-8 semanas",
      status: "En Progreso",
      color: "purple",
      details: [
        "Desarrollo iterativo con sprints",
        "Reportes semanales de progreso",
        "Pruebas y validación continua",
        "Integración con sistemas existentes"
      ],
      deliverables: [
        "Modelo funcionando",
        "Dashboard ejecutivo",
        "Documentación técnica"
      ]
    },
    {
      id: 4,
      icon: Rocket,
      title: "Entrega",
      subtitle: "Valor Perpetuo",
      description: "Desplegamos la solución final con capacitación completa y soporte continuo.",
      duration: "1-2 semanas",
      status: "Garantizado",
      color: "orange",
      details: [
        "Despliegue en producción",
        "Capacitación del equipo",
        "Transferencia de conocimiento",
        "Monitoreo y optimización"
      ],
      deliverables: [
        "Sistema en producción",
        "Equipo capacitado",
        "Soporte continuo"
      ]
    }
  ]

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, steps.length])

  const currentStep = steps[activeStep]

  const getStepColor = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive 
        ? "bg-blue-500/20 border-blue-500 text-blue-400" 
        : "border-slate-700 text-slate-400 hover:border-blue-500/50",
      green: isActive 
        ? "bg-green-500/20 border-green-500 text-green-400" 
        : "border-slate-700 text-slate-400 hover:border-green-500/50",
      purple: isActive 
        ? "bg-purple-500/20 border-purple-500 text-purple-400" 
        : "border-slate-700 text-slate-400 hover:border-purple-500/50",
      orange: isActive 
        ? "bg-orange-500/20 border-orange-500 text-orange-400" 
        : "border-slate-700 text-slate-400 hover:border-orange-500/50",
    }
    return colors[color as keyof typeof colors]
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Gratuito":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Incluido":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "En Progreso":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "Garantizado":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30"
    }
  }

  return (
    <section id="proceso" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-purple-950/20"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>

      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-slate-900/50 text-slate-300 border border-slate-700/50 rounded-full px-6 py-3 mb-6 backdrop-blur-sm">
              <Target className="w-4 h-4" />
              <span>Metodología Probada</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Mi Proceso de{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transformación
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Metodología estructurada y transparente que garantiza resultados excepcionales
            </p>
          </div>

          {/* Process Dashboard */}
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left Panel - Steps Navigation */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-white">Fases del Proyecto</h3>
                  <div className="ml-auto text-xs text-slate-400">4 ETAPAS</div>
                </div>

                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      onClick={() => {
                        setActiveStep(index)
                        setIsAutoPlaying(false)
                      }}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${getStepColor(step.color, activeStep === index)}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${activeStep === index ? "bg-current/20" : "bg-slate-800"}`}>
                          {React.createElement(step.icon, {
                            className: `w-5 h-5 ${activeStep === index ? "text-current" : "text-slate-400"}`,
                          })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-white text-sm">{step.title}</h4>
                            {activeStep === index && (
                              <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mb-2">{step.subtitle}</p>
                          <div className="flex items-center justify-between">
                            <span className={`text-xs px-2 py-1 rounded-full border ${getStatusColor(step.status)}`}>
                              {step.status}
                            </span>
                            <span className="text-xs text-slate-500">{step.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Active Step Details */}
            <div className="lg:col-span-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full">
                
                {/* Step Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-slate-600">
                      {React.createElement(currentStep.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentStep.title}</h3>
                      <p className="text-slate-400">{currentStep.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(currentStep.status)} mb-2`}>
                      {currentStep.status}
                    </div>
                    <div className="text-sm text-slate-400">{currentStep.duration}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">{currentStep.description}</p>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  
                  {/* What's Included */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Cog className="w-4 h-4 text-blue-400" />
                      <h4 className="text-sm font-semibold text-white">QUÉ INCLUYE</h4>
                    </div>
                    <div className="space-y-3">
                      {currentStep.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Rocket className="w-4 h-4 text-purple-400" />
                      <h4 className="text-sm font-semibold text-white">ENTREGABLES</h4>
                    </div>
                    <div className="space-y-3">
                      {currentStep.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-sm text-slate-300 font-medium">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Progreso del Proceso</span>
                    <span className="text-sm text-white font-medium">{activeStep + 1} de {steps.length}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Auto-play Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {isAutoPlaying ? (
                        <>
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span>Auto-avance activo</span>
                        </>
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                          <span>Auto-avance pausado</span>
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-400">Duración total: 8-15 semanas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Listo para comenzar tu{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                transformación?
              </span>
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              El primer paso es siempre gratuito. Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
            </p>
            
            <a
              href="https://calendly.com/bonillahermes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg shadow-blue-500/25 transition-all hover:scale-105 inline-flex items-center gap-3"
            >
              <Zap className="w-5 h-5" />
              <span>Iniciar Proceso</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
