import { ArrowRight, MapPin, Shield, Clock } from "lucide-react"
import { FadeIn } from "./motion"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const commitments = [
  {
    icon: Shield,
    title: "Confidencial",
    description: "Su información y contexto institucional se manejan con absoluta reserva.",
  },
  {
    icon: Clock,
    title: "Sin compromiso",
    description: "Evaluamos su caso y le indicamos con honestidad si podemos aportar valor.",
  },
]

export default function CTA() {
  return (
    <section className="py-32 lg:py-40 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-accent/[0.05]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
                Contacto
              </p>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.05] mb-6">
              Hablemos de su proyecto
            </h2>
            <p className="text-base text-white/50 leading-relaxed">
              Cada proyecto comienza con una conversación sobre sus datos,
              sus objetivos y el contexto de su organización.
            </p>
          </div>
        </FadeIn>

        {/* Main card */}
        <FadeIn delay={0.15}>
          <div className="bg-white/[0.08] border border-white/10 rounded-xl overflow-hidden max-w-4xl mx-auto backdrop-blur-sm">
            <div className="grid md:grid-cols-2">
              {/* Left — CTA */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="w-14 h-14 flex items-center justify-center bg-accent/20 rounded-xl mb-6">
                  <WhatsAppIcon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Solicitar conversación estratégica
                </h3>
                <p className="text-sm text-white/45 leading-relaxed mb-8">
                  Agende una consulta inicial sin costo para evaluar
                  cómo podemos aportar a su entidad o equipo legislativo.
                </p>
                <a
                  href="https://wa.me/573009769468?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-sm font-semibold tracking-wide hover:bg-accent/90 transition-all self-start rounded-lg"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  Escribir por WhatsApp
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right — Info */}
              <div className="bg-white/[0.04] border-t md:border-t-0 md:border-l border-white/10 p-10 lg:p-14 flex flex-col justify-center gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-lg shrink-0">
                    <WhatsAppIcon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/35 uppercase tracking-wider mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/573009769468"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-accent transition-colors font-medium"
                    >
                      +57 300 976 9468
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-lg shrink-0">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-white/35 uppercase tracking-wider mb-1">Ubicación</p>
                    <p className="text-white font-medium">Bogotá, Colombia</p>
                    <p className="text-sm text-white/35 mt-1">Disponible en toda Colombia y LATAM</p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                {commitments.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded-lg shrink-0">
                        <Icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                        <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
