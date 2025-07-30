"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ArrowLeft, ArrowRight, Heart, Users, Shield } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dr. María Elena Vargas",
    position: "Directora de Oncología",
    company: "Hospital San Vicente",
    icon: Heart,
    content:
      "El modelo geográfico que desarrolló Hermes revolucionó nuestra distribución de medicamentos oncológicos. Ahora identificamos factores socioeconómicos, geográficos y de acceso que nos permiten entregar tratamientos un 60% más rápido a pacientes en zonas vulnerables.",
    rating: 5,
    result: "60% más rápido en distribución de medicamentos",
    color: "red",
  },
  {
    id: 2,
    name: "Carlos Andrés Mejía",
    position: "Director de Campaña",
    company: "Campaña Alcaldía Local Bogotá",
    icon: Users,
    content:
      "La segmentación de votantes que hizo Hermes fue clave para nuestra victoria. Su análisis nos permitió identificar con precisión los sectores indecisos y optimizar nuestros recursos. Ganamos con una diferencia del 12%, superando todas las proyecciones iniciales.",
    rating: 5,
    result: "Victoria electoral con 12% de diferencia",
    color: "blue",
  },
  {
    id: 3,
    name: "Dra. Patricia Londoño",
    position: "Asesora en Políticas Públicas",
    company: "Senado de la República",
    icon: Shield,
    content:
      "Hermes logró integrar múltiples bases de datos institucionales que parecían incompatibles. Su modelo de predicción de violencia política con enfoque de género nos ha permitido anticipar situaciones de riesgo y tomar medidas preventivas efectivas.",
    rating: 5,
    result: "Integración exitosa de 15 fuentes de datos",
    color: "purple",
  },
]

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  const getColorClasses = (color: string) => {
    const colors = {
      red: {
        bg: "from-red-50 to-red-100",
        border: "border-red-200",
        text: "text-red-600",
        icon: "bg-red-100 text-red-600",
      },
      blue: {
        bg: "from-blue-50 to-blue-100",
        border: "border-blue-200",
        text: "text-blue-600",
        icon: "bg-blue-100 text-blue-600",
      },
      purple: {
        bg: "from-purple-50 to-purple-100",
        border: "border-purple-200",
        text: "text-purple-600",
        icon: "bg-purple-100 text-purple-600",
      },
    }
    return colors[color as keyof typeof colors]
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-slate-700 font-medium text-sm">Testimonios Verificados</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Lo que dicen mis{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                clientes
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Resultados reales en sectores críticos como salud y política
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="relative">
            <div
              className={`bg-gradient-to-br ${getColorClasses(currentTestimonial.color).bg} rounded-3xl p-8 md:p-12 border ${getColorClasses(currentTestimonial.color).border} shadow-xl transition-all duration-500`}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote className="w-16 h-16 text-slate-600" />
              </div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  {/* Company Info */}
                  <div className="text-center lg:text-left">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 ${getColorClasses(currentTestimonial.color).icon} rounded-2xl mb-4`}
                    >
                      <currentTestimonial.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{currentTestimonial.company}</h3>
                    <div
                      className={`inline-flex items-center gap-2 ${getColorClasses(currentTestimonial.color).text} bg-white/50 rounded-full px-4 py-2 text-sm font-semibold`}
                    >
                      <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                      {currentTestimonial.result}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 italic">
                      "{currentTestimonial.content}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {currentTestimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">{currentTestimonial.name}</div>
                        <div className="text-sm text-slate-600">{currentTestimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
              >
                <ArrowLeft className="w-5 h-5 text-slate-600" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTestimonial(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeTestimonial ? "bg-blue-600 w-8" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
              >
                <ArrowRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>

          {/* All Testimonials Preview */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => {
                  setActiveTestimonial(index)
                  setIsAutoPlaying(false)
                }}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  index === activeTestimonial
                    ? `${getColorClasses(testimonial.color).bg} ${getColorClasses(testimonial.color).border} scale-105`
                    : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-2 rounded-lg ${index === activeTestimonial ? getColorClasses(testimonial.color).icon : "bg-slate-100"}`}
                  >
                    <testimonial.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{testimonial.company}</div>
                    <div className="text-xs text-slate-500">{testimonial.name}</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 line-clamp-3">"{testimonial.content}"</p>
              </button>
            ))}
          </div>

          {/* Sectors Highlight */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Sectores de Impacto</h3>
              <p className="text-slate-600">Experiencia comprobada en áreas críticas para la sociedad</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Salud</h4>
                <p className="text-sm text-slate-600">Optimización geográfica para distribución de medicamentos</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Política</h4>
                <p className="text-sm text-slate-600">Análisis electoral y segmentación de votantes</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="font-semibold text-slate-900 mb-2">Seguridad</h4>
                <p className="text-sm text-slate-600">Predicción de violencia y análisis de riesgo social</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
