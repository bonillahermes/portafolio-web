"use client"
import { useState, useEffect } from "react"
import { ArrowRight, Play, Sparkles, CheckCircle, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const { t, language } = useLanguage()

  const words = [t("hero.data"), t("hero.insights"), t("hero.opportunities"), t("hero.decisions")]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-full animate-spin-slow"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-slate-700 font-medium text-sm">Calificación 5.0 • 50+ proyectos exitosos</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-none tracking-tight">
                  {t("hero.transform")}
                  <br />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient transition-all duration-500">
                      {words[currentWord]}
                    </span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-xl opacity-50 animate-pulse"></div>
                  </span>
                  <br />
                  {t("hero.intoPower")}
                </h1>

                <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl leading-relaxed">
                  {t("hero.subtitle")}
                  <br />
                  <span className="text-slate-900 font-semibold">{t("hero.subtitle2")}</span>
                </p>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 py-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-sm font-semibold"
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">+50 empresas transformadas</p>
                  <p className="text-xs text-slate-500">HDI, Senado, Ipsos y más</p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href="https://calendly.com/bonillahermes/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 inline-flex items-center gap-3"
                  >
                    <div className="relative">
                      <Sparkles className="w-5 h-5" />
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                    </div>
                    <span>Consulta Gratuita Ahora</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href="#casos"
                    className="text-slate-600 hover:text-slate-900 px-8 py-4 text-lg font-medium rounded-2xl transition-all duration-300 hover:bg-slate-100 group inline-flex items-center gap-3"
                  >
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {t("hero.viewCases")}
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Consulta 100% gratuita</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Sin compromisos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Respuesta en 24h</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl p-8 border border-slate-200/50 shadow-2xl backdrop-blur-sm">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl animate-pulse"></div>

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-slate-600">Sistema Activo</span>
                      </div>
                      <div className="text-xs text-slate-400">24/7</div>
                    </div>

                    {/* Metrics Dashboard */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-900 mb-1">98%</div>
                        <div className="text-xs text-blue-600">Precisión</div>
                        <div className="w-full bg-blue-200 rounded-full h-1 mt-2">
                          <div className="bg-blue-600 h-1 rounded-full w-[98%] animate-pulse"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-900 mb-1">$2.3M</div>
                        <div className="text-xs text-green-600">Ahorrado</div>
                        <div className="w-full bg-green-200 rounded-full h-1 mt-2">
                          <div className="bg-green-600 h-1 rounded-full w-[85%] animate-pulse"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-900 mb-1">35%</div>
                        <div className="text-xs text-purple-600">Reducción</div>
                        <div className="w-full bg-purple-200 rounded-full h-1 mt-2">
                          <div className="bg-purple-600 h-1 rounded-full w-[75%] animate-pulse"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
                        <div className="text-2xl font-bold text-orange-900 mb-1">6+</div>
                        <div className="text-xs text-orange-600">Años</div>
                        <div className="w-full bg-orange-200 rounded-full h-1 mt-2">
                          <div className="bg-orange-600 h-1 rounded-full w-[90%] animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Live Activity */}
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-slate-700">Actividad Reciente</span>
                      </div>
                      <div className="space-y-2 text-xs text-slate-500">
                        <div>• Modelo HDI procesando 1,247 pólizas</div>
                        <div>• Sistema Senado clasificó 23 proyectos</div>
                        <div>• Análisis electoral actualizado</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}
