"use client"

import React from "react"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Code, Rocket, ArrowRight, CheckCircle, Zap, Brain, Target, Sparkles } from "lucide-react"

const processSteps = [
  {
    id: "discovery",
    number: "01",
    icon: Search,
    title: "Descubrimiento",
    subtitle: "Análisis Profundo",
    description: "Conversación estratégica para entender tu problema, objetivos y el potencial real de tus datos.",
    details: [
      "Evaluación de datos existentes",
      "Identificación de oportunidades",
      "Definición de objetivos claros",
      "Análisis de viabilidad técnica",
    ],
    color: "blue",
    status: "Gratuito",
  },
  {
    id: "proposal",
    number: "02",
    icon: FileText,
    title: "Propuesta",
    subtitle: "Estrategia Personalizada",
    description: "Diseño de solución específica con arquitectura técnica, metodología y ROI proyectado.",
    details: [
      "Arquitectura de solución detallada",
      "Metodología de implementación",
      "ROI y métricas esperadas",
      "Timeline y entregables claros",
    ],
    color: "green",
    status: "Incluido",
  },
  {
    id: "execution",
    number: "03",
    icon: Code,
    title: "Ejecución",
    subtitle: "Desarrollo Ágil",
    description: "Implementación iterativa con reportes constantes, pruebas continuas y ajustes en tiempo real.",
    details: [
      "Desarrollo iterativo y ágil",
      "Reportes de progreso semanales",
      "Pruebas y validación continua",
      "Ajustes basados en feedback",
    ],
    color: "purple",
    status: "En Progreso",
  },
  {
    id: "delivery",
    number: "04",
    icon: Rocket,
    title: "Entrega",
    subtitle: "Valor Perpetuo",
    description: "Modelo funcionando en producción, equipo capacitado y documentación completa para autonomía.",
    details: [
      "Modelo en producción 24/7",
      "Capacitación completa del equipo",
      "Documentación técnica y de usuario",
      "Soporte post-implementación",
    ],
    color: "orange",
    status: "Garantizado",
  },
]

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "bg-blue-100 text-blue-600",
      accent: "text-blue-600",
      gradient: "from-blue-500 to-blue-600",
      glow: "shadow-blue-500/20",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "bg-green-100 text-green-600",
      accent: "text-green-600",
      gradient: "from-green-500 to-green-600",
      glow: "shadow-green-500/20",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      icon: "bg-purple-100 text-purple-600",
      accent: "text-purple-600",
      gradient: "from-purple-500 to-purple-600",
      glow: "shadow-purple-500/20",
    },
    orange: {
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "bg-orange-100 text-orange-600",
      accent: "text-orange-600",
      gradient: "from-orange-500 to-orange-600",
      glow: "shadow-orange-500/20",
    },
  }
  return colors[color as keyof typeof colors]
}

export default function Process() {
  const [activeStep, setActiveStep] = useState("discovery")
  const currentStep = processSteps.find((step) => step.id === activeStep) || processSteps[0]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 to-blue-50/20"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-15"></div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-slate-200 mb-4">
            <Target className="w-4 h-4 mr-2" />
            Metodología Probada
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Mi Proceso de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transformación
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Metodología estructurada y transparente que garantiza resultados excepcionales
          </p>
        </div>

        {/* Process Visualization */}
        <div className="max-w-6xl mx-auto">
          {/* Timeline Navigation */}
          <div className="relative mb-16">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-4 gap-4">
              {processSteps.map((step, index) => {
                const colorClasses = getColorClasses(step.color)
                const isActive = activeStep === step.id

                return (
                  <div key={step.id} className="relative">
                    <button
                      onClick={() => setActiveStep(step.id)}
                      className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                        isActive
                          ? `${colorClasses.bg} ${colorClasses.border} shadow-xl ${colorClasses.glow}`
                          : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
                      }`}
                    >
                      {/* Step Number */}
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all ${
                          isActive ? colorClasses.icon : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        <span className="text-lg font-bold">{step.number}</span>
                      </div>

                      {/* Step Info */}
                      <h3 className={`text-lg font-semibold mb-2 ${isActive ? colorClasses.accent : "text-slate-900"}`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-600">{step.subtitle}</p>

                      {/* Status Badge */}
                      <Badge
                        className={`mt-3 ${
                          isActive
                            ? `${colorClasses.accent} bg-transparent border-current`
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        {step.status}
                      </Badge>

                      {/* Active Indicator */}
                      {isActive && (
                        <div className="absolute -top-2 -right-2">
                          <div
                            className={`w-4 h-4 rounded-full bg-gradient-to-r ${colorClasses.gradient} animate-pulse`}
                          ></div>
                        </div>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${getColorClasses(currentStep.color).icon} shadow-lg`}>
                    {React.createElement(currentStep.icon, { className: "w-8 h-8" })}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{currentStep.title}</h3>
                    <p className={`text-lg ${getColorClasses(currentStep.color).accent} font-medium`}>
                      {currentStep.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 mb-8 leading-relaxed">{currentStep.description}</p>

                {/* Details List */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                    Qué incluye esta fase
                  </h4>
                  {currentStep.details.map((detail, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Visual */}
              <div className="relative">
                <div
                  className={`aspect-square rounded-3xl bg-gradient-to-br ${getColorClasses(currentStep.color).gradient} p-1 shadow-2xl ${getColorClasses(currentStep.color).glow}`}
                >
                  <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                    {React.createElement(currentStep.icon, {
                      className: `w-32 h-32 ${getColorClasses(currentStep.color).accent}`,
                    })}
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-slate-200">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-slate-200">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 pt-16 border-t border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              ¿Listo para comenzar tu{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                transformación?
              </span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              El primer paso es siempre gratuito. Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.
            </p>
            <a
              href="#contacto"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2 rounded-full"
            >
              <Target className="w-5 h-5" />
              Iniciar Proceso
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
