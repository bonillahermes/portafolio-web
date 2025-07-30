import { ExternalLink, GraduationCap, BarChart3, MapPin } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hermes-profile.jpg"
                  width={400}
                  height={400}
                  alt="Hermes Bonilla - Data Scientist Senior"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Más allá del código</h2>

              <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                <p>
                  Creo que la mejor tecnología es invisible. Mi trabajo no es solo construir modelos, sino{" "}
                  <strong>traducir complejidad en claridad</strong> y convertir datos en historias que tu equipo pueda
                  entender y actuar.
                </p>

                <p>
                  Me especializo en <strong>gestión ágil de proyectos</strong>, comunicación efectiva con stakeholders y{" "}
                  <strong>liderazgo técnico</strong> que une equipos multidisciplinarios hacia objetivos comunes.
                </p>
              </div>

              {/* Soft Skills */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Lo que realmente me diferencia</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Comunicación Clara</h4>
                      <p className="text-sm text-slate-600">
                        Explico IA compleja en términos de negocio que cualquier CEO entiende
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Gestión de Expectativas</h4>
                      <p className="text-sm text-slate-600">
                        Prometo solo lo que puedo entregar, y entrego más de lo prometido
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Metodología Ágil</h4>
                      <p className="text-sm text-slate-600">
                        Sprints cortos, feedback constante, adaptación rápida a cambios
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-slate-900 mb-1">Pensamiento Estratégico</h4>
                      <p className="text-sm text-slate-600">
                        Veo el panorama completo, no solo la solución técnica inmediata
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Credentials - Simplified */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                  <GraduationCap className="w-4 h-4 text-slate-600" />
                  <span className="text-sm text-slate-700">Estadístico</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                  <BarChart3 className="w-4 h-4 text-slate-600" />
                  <span className="text-sm text-slate-700">Scrum Master Certificado</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-100 rounded-full px-4 py-2">
                  <MapPin className="w-4 h-4 text-slate-600" />
                  <span className="text-sm text-slate-700">Colombia</span>
                </div>
              </div>

              {/* Philosophy */}
              <div className="pt-6 border-t border-slate-200">
                <blockquote className="text-lg text-slate-600 italic leading-relaxed">
                  "Mi objetivo no es impresionarte con tecnología compleja, sino{" "}
                  <span className="text-slate-900 font-medium not-italic">
                    simplificar tu mundo con soluciones que realmente funcionen.
                  </span>
                  "
                </blockquote>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/bonillahermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  LinkedIn
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/bonillahermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  GitHub
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
