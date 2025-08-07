import { ExternalLink, GraduationCap, BarChart3, MapPin, Lightbulb, Users, Target } from 'lucide-react'
import Image from "next/image"

export default function About() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50/50 parallax-bg" data-speed="0.1">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header con fade-in */}
          <div className="text-center mb-20 fade-in-scroll">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Conoce al experto
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Más allá del{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                código
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Creo que la mejor tecnología es invisible. Mi trabajo no es solo construir modelos, sino 
              traducir complejidad en claridad.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image con slide-right */}
            <div className="relative order-2 lg:order-1 slide-right">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl"></div>
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/hermes-profile.jpg"
                    width={400}
                    height={400}
                    alt="Hermes Bonilla - Data Scientist Senior"
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Disponible</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content con slide-left */}
            <div className="space-y-8 order-1 lg:order-2 slide-left">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Me especializo en <strong className="text-gray-900">gestión ágil de proyectos</strong>, 
                  comunicación efectiva con stakeholders y <strong className="text-gray-900">liderazgo técnico</strong> 
                  que une equipos multidisciplinarios hacia objetivos comunes.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Mi objetivo no es impresionarte con tecnología compleja, sino 
                  <strong className="text-gray-900"> simplificar tu mundo con soluciones que realmente funcionen.</strong>
                </p>
              </div>

              {/* Credentials */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Estadístico</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Scrum Master</span>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Colombia</span>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://linkedin.com/in/bonillahermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                >
                  LinkedIn
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="https://github.com/bonillahermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
                >
                  GitHub
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Key Differentiators */}
          <div className="space-y-12">
            <div className="text-center fade-in-scroll">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Lo que realmente me{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  diferencia
                </span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Más allá de las habilidades técnicas, estas son las cualidades que aporto a cada proyecto
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in-scroll stagger-1">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Comunicación Clara</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Explico IA compleja en términos de negocio que cualquier CEO entiende
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in-scroll stagger-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Gestión de Expectativas</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Prometo solo lo que puedo entregar, y entrego más de lo prometido
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in-scroll stagger-3">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Metodología Ágil</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Sprints cortos, feedback constante, adaptación rápida a cambios
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 fade-in-scroll stagger-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pensamiento Estratégico</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Veo el panorama completo, no solo la solución técnica inmediata
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Quote con scale animation */}
          <div className="mt-20 text-center scale-on-scroll">
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-100">
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                "Mi objetivo no es impresionarte con tecnología compleja, sino{" "}
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  simplificar tu mundo con soluciones que realmente funcionen.
                </span>
                "
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
