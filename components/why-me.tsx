"use client"
import { useState } from "react"
import ArrowRight from "@/components/icons/arrow-right" // Import ArrowRight icon
import MapPin from "@/components/icons/map-pin"

const credentials = [
  {
    title: "Experiencia real.",
    subtitle: "No solo teoría.",
    description:
      "6 años resolviendo problemas reales en empresas que conoces. HDI Seguros, Senado de la República, Ipsos. Cada proyecto me enseñó algo que no está en los libros.",
    detail: "Porque una cosa es saber hacer modelos, otra es hacerlos funcionar en el mundo real.",
    visual: "🏢",
  },
  {
    title: "Modelos que funcionan.",
    subtitle: "24 horas, 7 días.",
    description:
      "No hago presentaciones bonitas. Construyo sistemas que trabajan mientras duermes. Modelos en producción generando valor real, no prototipos que se quedan en el escritorio.",
    detail: "La diferencia entre un experimento y una solución es que una funciona sin ti.",
    visual: "⚡",
  },
  {
    title: "Hablo tu idioma.",
    subtitle: "Y también Python.",
    description:
      "Traduzco entre el mundo de los datos y el mundo de los negocios. ROI claro, métricas que importan, resultados que puedes explicar a tu junta directiva.",
    detail: "Porque de nada sirve la mejor IA del mundo si no puedes explicar por qué vale la pena.",
    visual: "💬",
  },
  {
    title: "Estoy disponible.",
    subtitle: "En toda Colombia.",
    description:
      "Reuniones virtuales para seguimiento diario. Visitas presenciales cuando las necesitas en cualquier ciudad del país. Contexto colombiano que entiendo. Facturación sin complicaciones. Soporte en tu zona horaria.",
    detail: "Porque la mejor tecnología combina lo digital con el toque humano cuando es necesario.",
    visual: "🇨🇴",
  },
]

const technologies = [
  { name: "Python", category: "Modelado", level: 95 },
  { name: "AWS", category: "Cloud", level: 90 },
  { name: "SQL", category: "Datos", level: 92 },
  { name: "Tableau", category: "Visualización", level: 95 },
  { name: "R", category: "Estadística", level: 88 },
  { name: "Docker", category: "Producción", level: 85 },
]

export default function WhyMe() {
  const [activeCredential, setActiveCredential] = useState(0)

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
              Por qué puedes
              <br />
              <span className="text-blue-600">confiar en mí.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">
              No se trata de ser el mejor.
              <br />
              Se trata de ser el indicado para tu proyecto.
            </p>
          </div>

          {/* Credentials Showcase */}
          <div className="mb-20">
            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {credentials.map((credential, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCredential(index)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCredential === index
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {credential.title.replace(".", "")}
                </button>
              ))}
            </div>

            {/* Active Credential */}
            <div className="bg-slate-50 rounded-3xl p-8 md:p-16 min-h-[400px] flex items-center justify-center relative overflow-hidden">
              {/* Background Visual */}
              <div className="absolute top-8 right-8 text-8xl opacity-10 select-none">
                {credentials[activeCredential].visual}
              </div>

              <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="space-y-8">
                  <h3 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
                    {credentials[activeCredential].title}
                    <br />
                    <span className="text-slate-500 text-2xl md:text-3xl">
                      {credentials[activeCredential].subtitle}
                    </span>
                  </h3>

                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                    {credentials[activeCredential].description}
                  </p>

                  <div className="pt-6 border-t border-slate-200">
                    <p className="text-base md:text-lg text-slate-600 italic font-light">
                      {credentials[activeCredential].detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-light text-slate-900 mb-4">Las herramientas correctas.</h3>
              <p className="text-lg text-slate-600 font-light">Tecnología probada para resultados confiables.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-slate-900">{tech.name}</h4>
                      <p className="text-sm text-slate-500">{tech.category}</p>
                    </div>
                    <div className="text-2xl font-light text-slate-400">{tech.level}%</div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-600 font-medium">Disponible para nuevos proyectos</span>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { number: "6+", label: "Años de experiencia" },
                { number: "50+", label: "Proyectos completados" },
                { number: "98%", label: "Clientes satisfechos" },
                { number: "24/7", label: "Modelos funcionando" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-light text-slate-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-slate-100">
              <p className="text-lg text-slate-600 font-light italic max-w-2xl mx-auto">
                "No busco ser tu proveedor de tecnología.
                <br />
                Busco ser tu socio en la transformación de tu negocio."
              </p>
              <div className="mt-4">
                <p className="text-sm text-slate-500">— Hermes Bonilla</p>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-8">
              <a
                href="#proceso"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                Conoce mi proceso
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2 mt-4">
              <MapPin className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-700">Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
