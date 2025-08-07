"use client"
import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Send, Calendar, MessageCircle } from 'lucide-react'
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
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-24 pb-24 parallax-bg" data-speed="0.3">
      {/* Subtle Background Pattern con parallax */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)] parallax-slow"></div>
      
      {/* Floating elements con animación mejorada */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-float"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-pink-400 rounded-full animate-float"></div>
      
      <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto">
        <div className="text-center space-y-12">

          {/* Main Question con fade-in */}
          <div className="space-y-4 fade-in-scroll">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-slate-900 leading-tight">
              ¿Cómo puedo transformar tu empresa con{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Inteligencia Artificial?
              </span>
            </h1>
          </div>

          {/* Interactive Input con slide-up */}
          <div className="max-w-2xl mx-auto space-y-6 fade-in-scroll stagger-1">
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

            {/* Suggestion Pills con stagger */}
            <div className="flex flex-wrap justify-center gap-3">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 fade-in-scroll stagger-${index + 2}`}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons con scale animation */}
          <div className="flex justify-center pt-8 scale-on-scroll">
            <a
              href="https://calendly.com/bonillahermes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3 text-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Agenda una Consulta Estratégica</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators con slide desde los lados */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-slate-500 pt-4">
            <div className="flex items-center gap-2 slide-left">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Consulta 100% gratuita</span>
            </div>
            <div className="flex items-center gap-2 fade-in-scroll stagger-1">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Sin compromisos</span>
            </div>
            <div className="flex items-center gap-2 slide-right">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Te respondo en menos de 12 horas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
