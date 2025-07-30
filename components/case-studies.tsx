"use client"

import { useState } from "react"
import { Heart, Users, Shield, ArrowRight, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState("health")
  const { t } = useLanguage()

  const cases = [
    {
      id: "health",
      icon: Heart,
      company: "Hospital San Vicente",
      title: "Optimización Geográfica de Medicamentos",
      description:
        "Modelo de análisis geográfico y socioeconómico que identifica factores como acceso al agua, proximidad a hospitales y condiciones socioeconómicas para optimizar la distribución de medicamentos oncológicos en zonas vulnerables.",
      metrics: [
        { label: "Reducción en tiempo de entrega", value: "60%" },
        { label: "Zonas vulnerables cubiertas", value: "85%" },
        { label: "Factores analizados", value: "12+" },
      ],
      result: "60% más rápido en distribución de medicamentos",
    },
    {
      id: "politics",
      icon: Users,
      company: "Campaña Alcaldía",
      title: "Segmentación Electoral",
      description:
        "Sistema de análisis de datos demográficos, socioeconómicos y de comportamiento electoral para identificar votantes indecisos y optimizar estrategias de campaña.",
      metrics: [
        { label: "Precisión en segmentación", value: "92%" },
        { label: "Optimización de recursos", value: "60%" },
        { label: "Margen de victoria", value: "12%" },
      ],
      result: "Victoria electoral con 12% de diferencia",
    },
    {
      id: "security",
      icon: Shield,
      company: "Senado de la República",
      title: "Predicción de Violencia Política",
      description:
        "Integración de múltiples bases de datos institucionales para crear un modelo predictivo de violencia política con enfoque de género, permitiendo medidas preventivas.",
      metrics: [
        { label: "Fuentes de datos integradas", value: "15" },
        { label: "Precisión predictiva", value: "87%" },
        { label: "Alertas tempranas", value: "95%" },
      ],
      result: "Sistema de alerta temprana implementado",
    },
  ]

  const currentCase = cases.find((c) => c.id === activeCase) || cases[0]

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
              Casos de <span className="text-slate-400">impacto real</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
              Proyectos que han generado cambios significativos en sectores críticos
            </p>
          </div>

          {/* Case Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex gap-2 bg-slate-100 p-2 rounded-full">
              {cases.map((case_) => (
                <button
                  key={case_.id}
                  onClick={() => setActiveCase(case_.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCase === case_.id
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {case_.company}
                </button>
              ))}
            </div>
          </div>

          {/* Active Case */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-8">
              {currentCase.icon && <currentCase.icon className="w-8 h-8 text-slate-600" />}
            </div>

            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">{currentCase.title}</h3>
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
              {currentCase.description}
            </p>

            {/* Metrics */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {currentCase.metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-slate-900 mb-2">{metric.value}</div>
                  <div className="text-sm text-slate-500">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Result */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-6 py-3 mb-12">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="text-green-800 font-medium">{currentCase.result}</span>
            </div>
          </div>

          {/* All Cases Summary */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {cases.map((case_) => (
              <div
                key={case_.id}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeCase === case_.id ? "border-slate-300 bg-slate-50" : "border-slate-200 hover:border-slate-300"
                }`}
                onClick={() => setActiveCase(case_.id)}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 border border-slate-200">
                  {case_.icon && <case_.icon className="w-6 h-6 text-slate-600" />}
                </div>
                <h4 className="text-lg font-medium text-slate-900 mb-2">{case_.company}</h4>
                <p className="text-sm text-slate-600 mb-4">{case_.title}</p>
                <div className="text-2xl font-light text-slate-900 mb-1">{case_.metrics[0].value}</div>
                <div className="text-xs text-slate-500">{case_.metrics[0].label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-4">
              ¿Tu proyecto podría ser el <span className="text-blue-600">próximo caso de éxito?</span>
            </h3>
            <p className="text-lg text-slate-600 font-light mb-8 max-w-2xl mx-auto">
              Cada transformación comienza con una conversación sobre tus desafíos específicos
            </p>
            <a
              href="#contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Comenzar conversación
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
