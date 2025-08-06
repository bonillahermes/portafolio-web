"use client"

import { useState, useEffect, useRef } from "react"
import { Heart, Users, Shield, ArrowRight, CheckCircle2, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const { t } = useLanguage()

  const cases = [
    {
      id: "health",
      icon: Heart,
      company: "Hospital San Vicente",
      title: "Optimización Geográfica de Medicamentos",
      description:
        "Modelo de análisis geográfico y socioeconómico que identifica factores como acceso al agua, proximidad a hospitales y condiciones socioeconómicas para optimizar la distribución de medicamentos oncológicos en zonas vulnerables.",
      challenge: "Distribución ineficiente de medicamentos oncológicos en zonas rurales",
      solution: "Sistema predictivo con 12+ variables geográficas y socioeconómicas",
      metrics: [
        { label: "Reducción en tiempo de entrega", value: "60%" },
        { label: "Zonas vulnerables cubiertas", value: "85%" },
        { label: "Factores analizados", value: "12+" },
      ],
      result: "60% más rápido en distribución de medicamentos",
      duration: "3 meses",
      impact: "Miles de pacientes beneficiados"
    },
    {
      id: "politics",
      icon: Users,
      company: "Campaña Alcaldía",
      title: "Segmentación Electoral",
      description:
        "Sistema de análisis de datos demográficos, socioeconómicos y de comportamiento electoral para identificar votantes indecisos y optimizar estrategias de campaña.",
      challenge: "Identificar votantes indecisos en una campaña electoral compleja",
      solution: "Algoritmo de segmentación con datos demográficos y comportamentales",
      metrics: [
        { label: "Precisión en segmentación", value: "92%" },
        { label: "Optimización de recursos", value: "60%" },
        { label: "Margen de victoria", value: "12%" },
      ],
      result: "Victoria electoral con 12% de diferencia",
      duration: "6 meses",
      impact: "Estrategia ganadora implementada"
    },
    {
      id: "security",
      icon: Shield,
      company: "Senado de la República",
      title: "Predicción de Violencia Política",
      description:
        "Integración de múltiples bases de datos institucionales para crear un modelo predictivo de violencia política con enfoque de género, permitiendo medidas preventivas.",
      challenge: "Prevenir violencia política con enfoque de género",
      solution: "Modelo predictivo integrando 15 fuentes de datos institucionales",
      metrics: [
        { label: "Fuentes de datos integradas", value: "15" },
        { label: "Precisión predictiva", value: "87%" },
        { label: "Alertas tempranas", value: "95%" },
      ],
      result: "Sistema de alerta temprana implementado",
      duration: "8 meses",
      impact: "Prevención efectiva de incidentes"
    },
  ]

  const currentCase = cases[activeCase]

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveCase((current) => (current + 1) % cases.length)
            return 0
          }
          return prev + 2
        })
      }, 80) // 4 seconds total (100 / 2 * 80ms = 4000ms)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, cases.length])

  const handleCaseChange = (index: number) => {
    setActiveCase(index)
    setProgress(0)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const nextCase = () => {
    handleCaseChange((activeCase + 1) % cases.length)
  }

  const prevCase = () => {
    handleCaseChange(activeCase === 0 ? cases.length - 1 : activeCase - 1)
  }

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-200/20 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-600 mb-8">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              Casos Verificados
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
              Casos de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">impacto real</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
              Proyectos que han generado cambios significativos en sectores críticos
            </p>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mb-16">
            <button
              onClick={prevCase}
              className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            
            <div className="flex gap-2 bg-slate-100 p-2 rounded-full">
              {cases.map((case_, index) => (
                <button
                  key={case_.id}
                  onClick={() => handleCaseChange(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    activeCase === index
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {activeCase === index && (
                    <div 
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-75"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {case_.company}
                </button>
              ))}
            </div>

            <button
              onClick={togglePlayPause}
              className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-slate-600" />
              ) : (
                <Play className="w-5 h-5 text-slate-600" />
              )}
            </button>
            
            <button
              onClick={nextCase}
              className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          {/* Active Case */}
          <div 
            key={activeCase}
            className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 mb-16"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl mb-8 border border-blue-500/20">
                    {currentCase.icon && <currentCase.icon className="w-8 h-8 text-blue-600" />}
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-medium text-slate-500 mb-2">{currentCase.company}</div>
                    <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">{currentCase.title}</h3>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">DESAFÍO</h4>
                      <p className="text-slate-600">{currentCase.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">SOLUCIÓN</h4>
                      <p className="text-slate-600">{currentCase.solution}</p>
                    </div>

                    <div className="flex gap-4 text-sm">
                      <div className="bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                        <span className="text-slate-500">Duración:</span>
                        <span className="font-medium text-slate-700 ml-1">{currentCase.duration}</span>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                        <span className="text-slate-500">Impacto:</span>
                        <span className="font-medium text-slate-700 ml-1">{currentCase.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Content - Metrics */}
                <div>
                  <div className="grid gap-6 mb-8">
                    {currentCase.metrics.map((metric, index) => (
                      <div 
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-3xl md:text-4xl font-light text-blue-600 mb-2">
                          {metric.value}
                        </div>
                        <div className="text-sm text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="bg-white/90 backdrop-blur-sm border border-green-200/50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold text-slate-700">RESULTADO</span>
                    </div>
                    <p className="text-green-800 font-medium">{currentCase.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-4">
              ¿Tu proyecto podría ser el <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">próximo caso de éxito?</span>
            </h3>
            <p className="text-lg text-slate-600 font-light mb-8 max-w-2xl mx-auto">
              Cada transformación comienza con una conversación sobre tus desafíos específicos
            </p>
            <a
              href="https://calendly.com/hermesdata/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Comenzar conversación
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
