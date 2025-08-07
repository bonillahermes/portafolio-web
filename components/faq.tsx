"use client"

import React from "react"

import { useState } from "react"
import { ChevronDown, Search, Clock, DollarSign, Settings, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const faqCategories = [
  {
    id: "general",
    name: "General",
    icon: Users,
    color: "blue",
    faqs: [
      {
        question: "¿Qué es exactamente lo que haces?",
        answer:
          "Soy un Data Scientist que transforma datos en decisiones inteligentes. Creo modelos de inteligencia artificial que automatizan procesos, predicen resultados y optimizan operaciones para empresas como la tuya.",
        popular: true,
      },
      {
        question: "¿Trabajas remoto o presencial?",
        answer:
          "Ambos, con flexibilidad total. Trabajo virtualmente para seguimiento diario y desarrollo, pero viajo a cualquier ciudad de Colombia para reuniones clave cuando el proyecto lo requiere. La modalidad se adapta a las necesidades específicas de cada cliente.",
      },
      {
        question: "¿Atiendes clientes en toda Colombia?",
        answer:
          "Sí, trabajo con empresas en todo el territorio colombiano. La mayoría del desarrollo se hace virtualmente con reuniones regulares online, pero viajo presencialmente para reuniones estratégicas, presentaciones ejecutivas o capacitaciones cuando es necesario.",
        popular: true,
      },
      {
        question: "¿Con qué tipo de empresas trabajas?",
        answer:
          "Trabajo tanto con startups como con corporativos. He colaborado con HDI Seguros, Senado de la República, Ipsos y más de 50 proyectos diversos. Lo importante no es el tamaño, sino el compromiso con los datos.",
      },
    ],
  },
  {
    id: "proceso",
    name: "Proceso",
    icon: Clock,
    color: "green",
    faqs: [
      {
        question: "¿Qué tan rápido puedo ver resultados?",
        answer:
          "Primeros insights en 1 semana. Modelo completo funcionando entre 2-4 semanas según la complejidad. Te mantengo informado con reportes semanales de progreso.",
        popular: true,
      },
      {
        question: "¿Necesito tener mi data organizada?",
        answer:
          "No. Parte de mi trabajo es estructurar y limpiar tu caos de datos. Solo necesitas tenerlos disponibles. He trabajado con datos desde Excel básico hasta sistemas complejos de múltiples fuentes.",
      },
      {
        question: "¿Cómo funciona el proceso de trabajo?",
        answer:
          "1) Consulta gratuita para entender tu problema, 2) Propuesta detallada con ROI proyectado, 3) Desarrollo iterativo con reportes constantes, 4) Entrega con modelo funcionando y equipo capacitado.",
      },
    ],
  },
  {
    id: "resultados",
    name: "Resultados",
    icon: Settings,
    color: "purple",
    faqs: [
      {
        question: "¿Cómo sé que funcionará en mi empresa?",
        answer:
          "Por eso ofrezco la primera consulta gratis. Evaluamos juntos si hay potencial real antes de cualquier compromiso. Además, todos mis modelos incluyen métricas de rendimiento verificables.",
        popular: true,
      },
      {
        question: "¿Qué incluye el soporte post-entrega?",
        answer:
          "Documentación completa, capacitación a tu equipo, monitoreo del modelo por 30 días y soporte para ajustes según el paquete elegido. Tu éxito es mi éxito.",
      },
      {
        question: "¿Los modelos siguen funcionando sin ti?",
        answer:
          "Absolutamente. Construyo sistemas autónomos que funcionan 24/7. Incluyo documentación técnica completa y capacito a tu equipo para que puedan mantener y evolucionar la solución.",
      },
    ],
  },
  {
    id: "inversion",
    name: "Inversión",
    icon: DollarSign,
    color: "orange",
    faqs: [
      {
        question: "¿Cuánto cuesta un proyecto?",
        answer:
          "Depende del alcance y complejidad. Diagnóstico Express desde $2M COP, Modelo Predictivo desde $8M COP, Transformación IA desde $15M COP. Siempre con ROI proyectado claro antes de comenzar.",
      },
      {
        question: "¿Ofrecen planes de pago?",
        answer:
          "Sí. Acepto pagos por fases del proyecto o mensualidades según el caso. Para proyectos grandes, podemos estructurar el pago basado en resultados alcanzados.",
      },
      {
        question: "¿La consulta inicial tiene costo?",
        answer:
          "No. La primera consulta de 30 minutos es completamente gratuita. Es mi forma de asegurarme de que puedo agregar valor real a tu negocio antes de cualquier compromiso económico.",
        popular: true,
      },
    ],
  },
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory) || faqCategories[0]

  const filteredFAQs = currentCategory.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleFAQ = (index: number) => {
    const faqId = `${activeCategory}-${index}`
    setOpenFAQ(openFAQ === faqId ? null : faqId)
  }

  const getCategoryColor = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      green: "bg-green-50 text-green-700 border-green-200",
      purple: "bg-purple-50 text-purple-700 border-purple-200",
      orange: "bg-orange-50 text-orange-700 border-orange-200",
    }
    return colors[color as keyof typeof colors]
  }

  const getActiveColor = (color: string) => {
    const colors = {
      blue: "bg-blue-600 text-white border-blue-600",
      green: "bg-green-600 text-white border-green-600",
      purple: "bg-purple-600 text-white border-purple-600",
      orange: "bg-orange-600 text-white border-orange-600",
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-24 bg-slate-50 parallax-bg" data-speed="0.1">
      <div className="container px-4 md:px-6">
        {/* Header con fade-in */}
        <div className="text-center mb-16 fade-in-scroll">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Preguntas <span className="text-blue-600">Frecuentes</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Todo lo que necesitas saber para tomar la mejor decisión
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Search con slide-up */}
          <div className="mb-8 fade-in-scroll stagger-1">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Buscar pregunta..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 bg-white border-slate-200 rounded-xl focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Category Tabs con stagger */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {faqCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id)
                  setOpenFAQ(null)
                  setSearchTerm("")
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300 hover:scale-105 fade-in-scroll stagger-${index + 1} ${
                  activeCategory === category.id
                    ? getActiveColor(category.color)
                    : `${getCategoryColor(category.color)} hover:border-current`
                }`}
              >
                {React.createElement(category.icon, { className: "w-5 h-5" })}
                <span>{category.name}</span>
                <Badge variant="secondary" className="bg-white/20 text-current text-xs">
                  {category.faqs.length}
                </Badge>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12 fade-in-scroll">
                <p className="text-slate-500 text-lg">No se encontraron preguntas que coincidan con tu búsqueda.</p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-blue-600 hover:text-blue-700 font-medium mt-2"
                >
                  Limpiar búsqueda
                </button>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => {
                const faqId = `${activeCategory}-${index}`
                const isOpen = openFAQ === faqId

                return (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 fade-in-scroll stagger-${index + 1}`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-slate-50 transition-colors group"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        {faq.popular && (
                          <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">Popular</Badge>
                        )}
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2">
                        {isOpen && <CheckCircle className="w-5 h-5 text-green-500" />}
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6">
                        <div className="pl-4 border-l-4 border-blue-200">
                          <p className="text-slate-700 leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })
            )}
          </div>

          {/* Contact CTA con scale animation */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 border border-slate-200 scale-on-scroll">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">¿No encuentras tu pregunta?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Cada proyecto es único. Hablemos directamente sobre tu situación específica.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contacto"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                Consulta Gratuita
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/573009769468?text=Hola%20Hermes,%20tengo%20una%20pregunta%20sobre%20tus%20servicios%20de%20Data%20Science"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-2"
              >
                WhatsApp: +57 300 976 9468
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
