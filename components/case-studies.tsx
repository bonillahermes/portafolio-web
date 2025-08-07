"use client"

import { useState, useEffect, useRef } from "react"
import { Heart, Users, Shield, ArrowRight, CheckCircle2, Play, Pause, TrendingUp, Target, Database, Brain } from 'lucide-react'
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
      sector: "Salud",
      title: "Optimización Geográfica de Medicamentos",
      description: "Sistema de IA que analiza 12+ variables geográficas y socioeconómicas para optimizar la distribución de medicamentos oncológicos en zonas vulnerables.",
      challenge: "Distribución ineficiente de medicamentos oncológicos en zonas rurales",
      solution: "Modelo predictivo con análisis geoespacial y machine learning",
      tech: ["Python", "GeoPandas", "Scikit-learn", "PostgreSQL"],
      metrics: [
        { 
          icon: TrendingUp,
          indicator: "Tiempo de Entrega", 
          before: "5 días", 
          after: "2 días", 
          impact: "-60%"
        },
        { 
          icon: Target,
          indicator: "Cobertura Zonas Vulnerables", 
          before: "45%", 
          after: "85%", 
          impact: "+40%"
        },
        { 
          icon: Database,
          indicator: "Variables Analizadas", 
          before: "3", 
          after: "12+", 
          impact: "+300%"
        },
      ],
      result: "60% más rápido en distribución de medicamentos",
      duration: "3 meses",
      impact: "Miles de pacientes beneficiados"
    },
    {
      id: "politics",
      icon: Users,
      company: "Campaña Alcaldía",
      sector: "Política",
      title: "Segmentación Electoral Inteligente",
      description: "Algoritmo de segmentación avanzada que analiza patrones demográficos y comportamentales para identificar votantes indecisos con precisión del 92%.",
      challenge: "Identificar votantes indecisos en una campaña electoral compleja",
      solution: "IA predictiva con análisis de comportamiento electoral",
      tech: ["R", "TensorFlow", "Apache Spark", "MongoDB"],
      metrics: [
        { 
          icon: Brain,
          indicator: "Precisión Segmentación", 
          before: "75%", 
          after: "92%", 
          impact: "+17%"
        },
        { 
          icon: TrendingUp,
          indicator: "Optimización Recursos", 
          before: "Baseline", 
          after: "60%", 
          impact: "+60%"
        },
        { 
          icon: Target,
          indicator: "Margen Victoria", 
          before: "Empate técnico", 
          after: "12%", 
          impact: "+12%"
        },
      ],
      result: "Victoria electoral con 12% de diferencia",
      duration: "6 meses",
      impact: "Estrategia ganadora implementada"
    },
    {
      id: "security",
      icon: Shield,
      company: "Senado de la República",
      sector: "Seguridad",
      title: "Predicción de Violencia Política",
      description: "Sistema de alerta temprana que integra 15 fuentes de datos institucionales para predecir y prevenir violencia política con enfoque de género.",
      challenge: "Prevenir violencia política con enfoque de género",
      solution: "Modelo predictivo con integración de múltiples fuentes",
      tech: ["Python", "Apache Kafka", "Elasticsearch", "Docker"],
      metrics: [
        { 
          icon: Database,
          indicator: "Fuentes Integradas", 
          before: "3", 
          after: "15", 
          impact: "+400%"
        },
        { 
          icon: Brain,
          indicator: "Precisión Predictiva", 
          before: "65%", 
          after: "87%", 
          impact: "+22%"
        },
        { 
          icon: TrendingUp,
          indicator: "Alertas Tempranas", 
          before: "Manual", 
          after: "95%", 
          impact: "Auto"
        },
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
          return prev + 1
        })
      }, 50) // 5 seconds total
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

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 mb-8">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Casos de Impacto Real
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
              Transformaciones que{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                marcan diferencia
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto">
              Proyectos reales que han generado cambios significativos en sectores críticos
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-16">
            <div className="flex bg-white rounded-2xl p-2 shadow-sm border border-slate-200">
              {cases.map((case_, index) => (
                <button
                  key={case_.id}
                  onClick={() => handleCaseChange(index)}
                  className={`relative flex items-center gap-3 px-6 py-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeCase === index
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <case_.icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">{case_.company}</div>
                    <div className="text-xs opacity-70">{case_.sector}</div>
                  </div>
                  
                  {activeCase === index && (
                    <div className="absolute bottom-1 left-2 right-2 h-0.5 bg-blue-500 rounded-full">
                      <div 
                        className="h-full bg-blue-400 rounded-full transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              ))}
              
              <button
                onClick={togglePlayPause}
                className="ml-2 p-4 text-slate-600 hover:text-slate-900 transition-colors"
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Case Content */}
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left: Case Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-900 rounded-xl">
                  <currentCase.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
                    {currentCase.title}
                  </h3>
                  <div className="text-sm text-slate-500 mt-1">
                    {currentCase.company} • {currentCase.sector}
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-700 mb-12 leading-relaxed">
                {currentCase.description}
              </p>

              {/* Challenge & Solution */}
              <div className="space-y-8 mb-12">
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-red-500" />
                    DESAFÍO
                  </h4>
                  <p className="text-slate-700 pl-6 border-l-2 border-red-200">
                    {currentCase.challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-green-500" />
                    SOLUCIÓN
                  </h4>
                  <p className="text-slate-700 pl-6 border-l-2 border-green-200 mb-4">
                    {currentCase.solution}
                  </p>
                  <div className="flex flex-wrap gap-2 pl-6">
                    {currentCase.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-200 text-xs text-slate-700 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex gap-8 text-sm">
                <div>
                  <span className="text-slate-500">Duración:</span>
                  <span className="font-medium text-slate-900 ml-2">{currentCase.duration}</span>
                </div>
                <div>
                  <span className="text-slate-500">Impacto:</span>
                  <span className="font-medium text-slate-900 ml-2">{currentCase.impact}</span>
                </div>
              </div>
            </div>

            {/* Right: Metrics */}
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-8">Resultados Clave</h4>
              
              <div className="space-y-8">
                {currentCase.metrics.map((metric, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-3 mb-4">
                      <metric.icon className="w-5 h-5 text-slate-600" />
                      <h5 className="text-sm font-semibold text-slate-900">{metric.indicator}</h5>
                    </div>
                    
                    <div className="space-y-3 pl-8">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500">ANTES</span>
                        <span className="text-sm font-medium text-slate-600">{metric.before}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500">DESPUÉS</span>
                        <span className="text-lg font-bold text-slate-900">{metric.after}</span>
                      </div>
                      
                      <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                        <span className="text-xs font-semibold text-slate-700">IMPACTO</span>
                        <span className="text-sm font-bold text-blue-600">{metric.impact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final Result */}
              <div className="mt-12 pt-8 border-t-2 border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">RESULTADO FINAL</span>
                </div>
                <p className="text-slate-900 font-medium">{currentCase.result}</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-20 pt-16 border-t border-slate-200">
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              ¿Tu proyecto podría ser el{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                próximo caso de éxito?
              </span>
            </h3>
            <p className="text-xl text-slate-600 font-light mb-10 max-w-2xl mx-auto">
              Cada transformación comienza con una conversación sobre tus desafíos específicos
            </p>
            <a
              href="https://calendly.com/hermesdata/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 text-lg font-medium rounded-2xl transition-all duration-300 hover:scale-105"
            >
              <span>Comenzar conversación</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
