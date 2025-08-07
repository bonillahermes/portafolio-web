"use client"

import React from "react"
import { Calendar, MessageCircle, Mail, ArrowRight, CheckCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden parallax-bg" data-speed="0.2">
      {/* Background Effects con parallax */}
      <div className="absolute inset-0 parallax-medium">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Header con fade-in */}
          <div className="mb-12 fade-in-scroll">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ¿Listo para{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                transformar
              </span>{" "}
              tu negocio?
            </h2>
            
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Agenda una consulta estratégica gratuita y descubre cómo la IA puede revolucionar tu empresa.
            </p>
          </div>

          {/* Acción Principal con scale animation */}
          <div className="mb-12 scale-on-scroll">
            <a
              href="https://calendly.com/bonillahermes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-slate-900 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/10"
            >
              <Calendar className="w-6 h-6" />
              <span>Agenda tu Consulta Gratuita</span>
              <ArrowRight className="w-6 h-6" />
            </a>
            
            <div className="flex items-center justify-center gap-6 mt-6 text-blue-100 fade-in-scroll stagger-1">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>100% Gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>30 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Sin compromisos</span>
              </div>
            </div>
          </div>

          {/* Separador */}
          <div className="flex items-center gap-4 my-8 fade-in-scroll stagger-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="text-white/70 text-sm bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
              o contáctame directamente
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          {/* Opciones de Contacto Directo con slide animations */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="https://wa.me/573009769468?text=Hola%20Hermes,%20estoy%20interesado%20en%20una%20consulta%20sobre%20Data%20Science%20para%20mi%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 py-4 rounded-xl backdrop-blur-sm transition-all hover:scale-105 inline-flex items-center gap-3 px-6 justify-center slide-left"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              <span className="font-medium">WhatsApp</span>
              <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="mailto:consulta@bonillahermes.com?subject=Consulta%20sobre%20servicios%20de%20Data%20Science"
              className="group bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 py-4 rounded-xl backdrop-blur-sm transition-all hover:scale-105 inline-flex items-center gap-3 px-6 justify-center slide-right"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Email</span>
              <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Información de Contacto con fade-in */}
          <div className="text-center pt-8 border-t border-white/10 mt-12 fade-in-scroll stagger-3">
            <div className="text-blue-100 text-sm">
              <span className="font-medium">+57 300 976 9468</span> • <span className="font-medium">consulta@bonillahermes.com</span>
            </div>
            <p className="text-white/60 text-xs mt-2">Te respondo en menos de 12 horas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
