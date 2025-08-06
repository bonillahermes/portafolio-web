"use client"

import { MessageCircle, Zap } from 'lucide-react'
import { useLanguage } from "@/contexts/language-context"
import { useState } from "react"

export default function WhatsAppFloat() {
  const { t } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulso de fondo animado */}
      <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20 scale-110"></div>
      <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse opacity-30 scale-105"></div>
      
      {/* Tooltip que aparece al hover */}
      <div className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
        isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
      }`}>
        <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg border whitespace-nowrap relative">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" />
            <span className="font-medium">¡Consulta Gratuita!</span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            Respuesta en menos de 5 min
          </div>
          {/* Flecha del tooltip */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-2 w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </div>

      {/* Botón principal */}
      <a
        href={`https://wa.me/573009769468?text=${encodeURIComponent(t("whatsapp.interested"))}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 group"
        aria-label="Chat por WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Efecto de resplandor */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
        
        {/* Badge de "Gratis" */}
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-bounce">
          GRATIS
        </div>

        {/* Ícono de WhatsApp */}
        <MessageCircle className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Efecto de ondas al hacer hover */}
        <div className="absolute inset-0 rounded-full border-2 border-green-300 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
      </a>

      {/* Partículas flotantes decorativas */}
      <div className="absolute -top-1 -left-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
      <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-2 -right-2 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
    </div>
  )
}
