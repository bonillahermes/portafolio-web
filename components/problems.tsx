"use client"
import { useState, useEffect } from "react"
import { ArrowRight, TrendingDown, Clock, AlertTriangle, Target, CheckCircle } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function Problems() {
  const [currentProblem, setCurrentProblem] = useState(0)
  const [showSolution, setShowSolution] = useState(false)
  const { t } = useLanguage()

  const problems = [
    {
      icon: TrendingDown,
      title: "Decisiones lentas",
      subtitle: "Mientras analizas, la competencia actúa",
      description: "Tus competidores toman decisiones basadas en datos en tiempo real. Tú sigues esperando reportes manuales que llegan tarde.",
      stat: "73%",
      statLabel: "de las empresas pierden oportunidades por análisis tardío"
    },
    {
      icon: Clock,
      title: "Procesos manuales",
      subtitle: "Tu equipo hace trabajo de máquinas",
      description: "Horas perdidas en tareas repetitivas que la IA puede hacer en segundos. Tu talento humano debería estar creando valor, no copiando datos.",
      stat: "8hrs",
      statLabel: "promedio diario perdido en tareas automatizables"
    },
    {
      icon: AlertTriangle,
      title: "Datos dormidos",
      subtitle: "Información valiosa sin explotar",
      description: "Tienes terabytes de datos que podrían predecir tendencias, identificar oportunidades y optimizar procesos. Pero están ahí, sin usar.",
      stat: "90%",
      statLabel: "de los datos empresariales nunca se analizan"
    },
    {
      icon: Target,
      title: "Ventaja perdida",
      subtitle: "Cada día cuenta en la era digital",
      description: "Mientras dudas, tus competidores implementan IA y se alejan. La brecha tecnológica se amplía cada día que pasa.",
      stat: "2.5x",
      statLabel: "más rápido crecen las empresas con IA"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentProblem < problems.length - 1) {
        setCurrentProblem(prev => prev + 1)
      } else if (!showSolution) {
        setTimeout(() => setShowSolution(true), 1000)
      }
    }, 4000)

    return () => clearInterval(timer)
  }, [currentProblem, showSolution, problems.length])

  if (showSolution) {
    return (
      <section className="py-32 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 leading-tight">
              La solución
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-normal">
                ya existe
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
              No necesitas esperar años ni invertir millones. La IA empresarial está lista para transformar tu negocio hoy.
            </p>

            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-slate-900 mb-3">35%</div>
                <div className="text-slate-600">Reducción de costos operativos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-slate-900 mb-3">10x</div>
                <div className="text-slate-600">Velocidad en procesamiento</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-light text-slate-900 mb-3">24/7</div>
                <div className="text-slate-600">Operación continua</div>
              </div>
            </div>

            <a
              href="#servicios"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 group"
            >
              Descubre cómo implementarla
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    )
  }

  const currentProblemData = problems[currentProblem]
  const IconComponent = currentProblemData.icon

  return (
    <section className="py-32 bg-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
            ¿Te suena
            <br />
            <span className="text-slate-400">familiar?</span>
          </h2>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-3">
            {problems.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index <= currentProblem ? 'bg-slate-900 w-12' : 'bg-slate-200 w-8'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Current Problem - Fixed height container */}
        <div className="max-w-4xl mx-auto min-h-[600px] flex items-center justify-center">
          <div 
            key={currentProblem}
            className="text-center w-full animate-fade-in-up"
          >
            {/* Icon */}
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <IconComponent className="w-12 h-12 text-slate-600" />
            </div>

            {/* Title */}
            <h3 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
              {currentProblemData.title}
            </h3>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-500 font-light mb-8">
              {currentProblemData.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              {currentProblemData.description}
            </p>

            {/* Stat */}
            <div className="bg-slate-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="text-3xl md:text-4xl font-light text-slate-900 mb-2">
                {currentProblemData.stat}
              </div>
              <div className="text-slate-600">
                {currentProblemData.statLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
            Problema {currentProblem + 1} de {problems.length}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
