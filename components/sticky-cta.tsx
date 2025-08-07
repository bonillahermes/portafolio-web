"use client"

import { useState, useEffect } from "react"
import { Calendar, X, Clock } from 'lucide-react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 800
      setIsVisible(scrolled && !isHidden)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHidden])

  const handleClose = () => {
    setIsHidden(true)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 max-w-sm">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-slate-100 hover:bg-slate-200 rounded-full p-1 transition-colors"
        >
          <X className="w-4 h-4 text-slate-600" />
        </button>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">¿Necesitas ayuda?</span>
          </div>
          
          <p className="text-sm text-slate-600">
            Agenda una consulta estratégica gratuita y transforma tu negocio con IA.
          </p>

          {/* CTA Button - ESTILO CONSISTENTE */}
          <a
            href="https://calendly.com/bonillahermes/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 w-full justify-center text-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Agenda una Consulta Estratégica</span>
          </a>

          {/* Trust Indicator */}
          <div className="flex items-center justify-center gap-1 text-xs text-slate-500">
            <Clock className="w-3 h-3" />
            <span>Te respondo en menos de 12 horas</span>
          </div>
        </div>
      </div>
    </div>
  )
}
