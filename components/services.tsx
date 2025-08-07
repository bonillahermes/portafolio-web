"use client"

import React from "react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Search, Brain, Rocket, TrendingUp, Zap, CheckCircle2, ArrowUpRight, Activity, Cpu, Database } from 'lucide-react'

const services = [
  {
    id: "express",
    icon: Search,
    title: "Diagnóstico Express",
    subtitle: "Análisis Rápido",
    description:
      "Descubre el potencial oculto en tus datos con análisis rápido y preciso que revela oportunidades inmediatas.",
    metrics: [
      { 
        indicator: "Oportunidades Identificadas", 
        before: "1-2", 
        after: "3-5", 
        impact: "+150%",
        unit: "insights"
      },
      { 
        indicator: "Tiempo de Análisis", 
        before: "2-3", 
        after: "3", 
        impact: "-50%",
        unit: "días"
      },
      { 
        indicator: "Precisión Diagnóstico", 
        before: "85%", 
        after: "94%", 
        impact: "+9%",
        unit: "%"
      },
      { 
        indicator: "ROI Estimado", 
        before: "180%", 
        after: "250%", 
        impact: "+70%",
        unit: "%"
      },
    ],
    features: [
      "Análisis exploratorio avanzado",
      "Identificación de patrones ocultos",
      "Modelos de prueba de concepto",
      "Reporte ejecutivo detallado",
      "Roadmap de implementación",
    ],
    cta: "Iniciar Diagnóstico",
    color: "blue",
    status: "Disponible",
  },
  {
    id: "complete",
    icon: Brain,
    title: "Modelo Predictivo",
    subtitle: "IA en Producción",
    description:
      "Solución integral de inteligencia artificial lista para producción que transforma completamente tu operación.",
    metrics: [
      { 
        indicator: "Precisión del Modelo", 
        before: "92%", 
        after: "96.2%", 
        impact: "+4.2%",
        unit: "%"
      },
      { 
        indicator: "Reducción de Costos", 
        before: "Baseline", 
        after: "35%", 
        impact: "35%",
        unit: "menos"
      },
      { 
        indicator: "Automatización", 
        before: "20%", 
        after: "80%", 
        impact: "+60%",
        unit: "procesos"
      },
      { 
        indicator: "Uptime del Sistema", 
        before: "95%", 
        after: "99.9%", 
        impact: "+4.9%",
        unit: "disponibilidad"
      },
    ],
    features: [
      "Modelo ML en producción 24/7",
      "Dashboard ejecutivo en tiempo real",
      "Integración con sistemas existentes",
      "API REST para desarrolladores",
      "Monitoreo y alertas automáticas",
    ],
    cta: "Implementar Ahora",
    color: "green",
    status: "Recomendado",
  },
  {
    id: "transformation",
    icon: Rocket,
    title: "Transformación IA",
    subtitle: "Ecosistema Completo",
    description:
      "Revolución completa de tu ecosistema de datos con inteligencia artificial avanzada y arquitectura escalable.",
    metrics: [
      { 
        indicator: "Modelos Implementados", 
        before: "1-2", 
        after: "5-8", 
        impact: "+300%",
        unit: "sistemas"
      },
      { 
        indicator: "Eficiencia Operativa", 
        before: "Baseline", 
        after: "150%", 
        impact: "+150%",
        unit: "mejora"
      },
      { 
        indicator: "ROI Acumulado", 
        before: "100%", 
        after: "500%", 
        impact: "+400%",
        unit: "retorno"
      },
      { 
        indicator: "Tiempo de Decisión", 
        before: "Días", 
        after: "Minutos", 
        impact: "-95%",
        unit: "velocidad"
      },
    ],
    features: [
      "Suite completa de modelos IA",
      "Arquitectura cloud escalable",
      "Capacitación avanzada del equipo",
      "Soporte y mantenimiento 24/7",
      "Actualizaciones continuas incluidas",
    ],
    cta: "Consultar Transformación",
    color: "purple",
    status: "Premium",
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState("complete")
  const currentService = services.find((s) => s.id === activeService) || services[1]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Disponible":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Recomendado":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Premium":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30"
    }
  }

  const getServiceColor = (color: string, isActive: boolean) => {
    const colors = {
      blue: isActive
        ? "bg-blue-500/10 border-blue-500 text-blue-400"
        : "border-slate-700 text-slate-400 hover:border-blue-500/50",
      green: isActive
        ? "bg-green-500/10 border-green-500 text-green-400"
        : "border-slate-700 text-slate-400 hover:border-green-500/50",
      purple: isActive
        ? "bg-purple-500/10 border-purple-500 text-purple-400"
        : "border-slate-700 text-slate-400 hover:border-purple-500/50",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-purple-950/20"></div>
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-5"></div>

      {/* Floating Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-slate-900/50 text-slate-300 border-slate-700/50 backdrop-blur-sm mb-4"
          >
            <Activity className="w-4 h-4 mr-2" />
            Servicios de IA Avanzada
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Soluciones de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Inteligencia Artificial
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Servicios especializados que transforman datos en ventajas competitivas
          </p>
        </div>

        {/* Main Dashboard */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 min-h-[600px]">
            {/* Left Panel - Services List */}
            <div className="lg:col-span-4 space-y-4">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-semibold text-white">Servicios Disponibles</h3>
                  <Badge className="bg-slate-800 text-slate-300 text-xs">3 ACTIVOS</Badge>
                </div>

                <div className="space-y-3">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${getServiceColor(service.color, activeService === service.id)}`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-lg ${activeService === service.id ? "bg-current/20" : "bg-slate-800"}`}
                        >
                          {React.createElement(service.icon, {
                            className: `w-5 h-5 ${activeService === service.id ? "text-current" : "text-slate-400"}`,
                          })}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-white text-sm">{service.title}</h4>
                            {activeService === service.id && (
                              <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                            )}
                          </div>
                          <p className="text-xs text-slate-400 mb-2">{service.subtitle}</p>
                          <Badge className={`text-xs ${getStatusColor(service.status)}`}>{service.status}</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Metrics Dashboard */}
            <div className="lg:col-span-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full">
                {/* Service Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-slate-600">
                      {React.createElement(currentService.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentService.title}</h3>
                      <p className="text-slate-400">{currentService.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-slate-400">SISTEMA ACTIVO</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 mb-8 leading-relaxed">{currentService.description}</p>

                {/* Metrics Grid */}
                <div className="grid gap-6 mb-8">
                  {currentService.metrics.map((metric, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-blue-400" />
                          <span className="text-sm font-semibold text-white">{metric.indicator}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            metric.impact.startsWith('+') ? 'bg-green-500/20 text-green-400' : 
                            metric.impact.startsWith('-') ? 'bg-blue-500/20 text-blue-400' : 
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {metric.impact}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-xs text-slate-500 mb-1">ANTES</div>
                          <div className="text-lg font-semibold text-slate-300">{metric.before}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-slate-500 mb-1">DESPUÉS</div>
                          <div className="text-2xl font-bold text-white">{metric.after}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-slate-500 mb-1">UNIDAD</div>
                          <div className="text-sm text-slate-400">{metric.unit}</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-700/50">
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min(100, Math.abs(parseFloat(metric.impact)) * 2)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Database className="w-4 h-4 text-purple-400" />
                    <h4 className="text-sm font-semibold text-white">CARACTERÍSTICAS DEL SISTEMA</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 inline-flex items-center justify-center gap-2 rounded-lg"
                >
                  <Zap className="w-5 h-5" />
                  {currentService.cta}
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
