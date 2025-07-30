"use client"
import { useState, useEffect } from "react"
import { ArrowRight, Play } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const { t, language } = useLanguage()

  const words = [t("hero.data"), t("hero.insights"), t("hero.opportunities"), t("hero.decisions")]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="space-y-8 mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-slate-900 leading-none tracking-tight">
              {t("hero.transform")}
              <br />
              <span className="relative inline-block">
                <span className="text-blue-600 font-normal transition-all duration-500">{words[currentWord]}</span>
              </span>
              <br />
              {t("hero.intoPower")}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
              <br />
              {t("hero.subtitle2")}
            </p>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#servicios"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {t("hero.startNow")}
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#casos"
                className="text-blue-600 hover:text-blue-700 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:bg-blue-50 group inline-flex items-center gap-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {t("hero.viewCases")}
              </a>
            </div>

            {/* Subtle Stats */}
            <div className="pt-16">
              <p className="text-sm text-slate-400 mb-6 font-medium tracking-wide uppercase">
                {t("hero.verifiableResults")}
              </p>
              <div className="flex items-center justify-center gap-12 md:gap-16">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-slate-900 mb-1">98%</div>
                  <div className="text-sm text-slate-500">{t("hero.precision")}</div>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-slate-900 mb-1">6+</div>
                  <div className="text-sm text-slate-500">{t("hero.years")}</div>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-light text-slate-900 mb-1">50+</div>
                  <div className="text-sm text-slate-500">{t("hero.projects")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              <div className="w-1 h-1 bg-slate-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-200 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-slate-300 rounded-full animate-ping opacity-40"></div>
      <div className="absolute bottom-32 left-16 w-3 h-3 bg-blue-100 rounded-full animate-bounce opacity-50"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
