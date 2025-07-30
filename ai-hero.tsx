import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Brain, Cpu } from "lucide-react"
import Image from "next/image"

export default function Component() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-pulse">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
      </div>
      <div className="absolute top-40 right-32 animate-pulse delay-1000">
        <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-32 left-16 animate-pulse delay-500">
        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-100 border-blue-500/30 px-4 py-2"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Potenciado por IA Avanzada
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Transforma tu negocio con{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Inteligencia Artificial
                </span>
              </h1>
              <p className="max-w-[600px] text-slate-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                Automatiza procesos, optimiza decisiones y acelera el crecimiento de tu empresa con nuestras soluciones
                de IA personalizadas y de vanguardia.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
                <Brain className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-slate-200">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
                <Zap className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-slate-200">Automatización</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-700">
                <Cpu className="w-4 h-4 text-pink-400" />
                <span className="text-sm text-slate-200">Análisis Predictivo</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 group"
              >
                Comenzar Ahora
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white bg-transparent"
              >
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-400">Proyectos Completados</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-slate-400">Satisfacción Cliente</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-slate-400">Soporte Técnico</div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative lg:order-last">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>

              {/* Main Image */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  width="400"
                  height="400"
                  alt="AI Services Visualization"
                  className="w-full h-auto rounded-lg"
                />

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 shadow-lg animate-bounce">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-3 shadow-lg animate-bounce delay-1000">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </section>
  )
}
