"use client"

import { useState } from "react"
import { MessageCircle, Clock } from 'lucide-react'

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 left-0 bg-white rounded-lg shadow-xl border border-slate-200 p-3 w-64 animate-in slide-in-from-bottom-2 duration-200">
            <div className="text-sm font-medium text-slate-900 mb-1">
              ¡Hola! 👋
            </div>
            <div className="text-sm text-slate-600 mb-2">
              ¿Tienes alguna pregunta sobre mis servicios de Data Science e IA?
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="w-3 h-3" />
              <span>Te respondo en menos de 12 horas</span>
            </div>
            {/* Arrow */}
            <div className="absolute -bottom-1 left-6 w-2 h-2 bg-white border-r border-b border-slate-200 rotate-45"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/573001234567?text=Hola%20Hermes,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios%20de%20Data%20Science%20e%20IA"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 inline-flex items-center justify-center group"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </a>
      </div>
    </div>
  )
}
