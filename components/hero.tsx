"use client"
import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Star, Send, Calendar, Rocket } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const { t, language } = useLanguage()

  const suggestions = [
    "Automatizar procesos con IA",
    "Análisis predictivo de datos", 
    "Machine Learning personalizado",
    "Optimización de decisiones",
    "Consultoría en Data Science"
  ]

  const placeholderTexts = [
    "¿Cómo puede la IA transformar mi empresa?",
    "Necesito automatizar mis procesos...",
    "Quiero predecir tendencias de mercado...",
    "¿Cómo optimizar mis decisiones de negocio?"
  ]

  const [currentPlaceholder, setCurrentPlaceholder] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholder((prev) => (prev + 1) % placeholderTexts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion)
    setIsTyping(true)
    setTimeout(() => {
      window.open('https://calendly.com/bonillahermes/30min', '_blank')
    }, 1000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pb-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      
      <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto">
        <div className="text-center space-y-12">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>Calificación 5.0 • 50+ proyectos exitosos</span>
          </div>

          {/* Main Question */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 leading-tight">
              ¿Cómo puedo transformar tu empresa con{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Inteligencia Artificial?
              </span>
            </h1>
          </div>

          {/* Interactive Input */}
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="relative">
              <div className="relative bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 focus-within:shadow-lg focus-within:border-blue-300">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={placeholderTexts[currentPlaceholder]}
                  className="w-full px-6 py-4 text-lg bg-transparent border-none outline-none rounded-2xl placeholder:text-slate-400 transition-all duration-300"
                />
                <button
                  onClick={() => window.open('https://calendly.com/bonillahermes/30min', '_blank')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-900 hover:bg-slate-800 text-white p-2 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Suggestion Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-700 px-4 py-2 rounded-full text-sm transition-all duration-200 hover:scale-105"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="https://calendly.com/bonillahermes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 inline-flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              <span>Consulta Gratuita</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://calendly.com/bonillahermes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-3"
            >
              <Rocket className="w-5 h-5" />
              <span>Comenzar Proyecto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Consulta 100% gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Sin compromisos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Respuesta en 24h</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
