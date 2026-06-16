import { ArrowRight, MapPin, Shield, Clock } from "lucide-react"
import { FadeIn } from "./motion"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const contacts = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "+57 300 976 9468",
    href: "https://wa.me/573009769468",
    external: true,
  },
]

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

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export default function CTA() {
  return (
    <section className="section-shell bg-background">
      <div className="container-editorial">
        <FadeIn>
          <div className="mb-12 lg:mb-16">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow">Contacto</span>
            </div>
            <h2 className="heading-section text-balance">Hablemos de su proyecto</h2>
            <p className="measure mt-6 text-base leading-relaxed text-muted-foreground">
              Cada proyecto comienza con una conversación sobre sus datos, sus
              objetivos y el contexto de su organización.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-12 border-t border-border pt-12 lg:grid-cols-2 lg:gap-20 lg:pt-16">
          {/* Acción primaria */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                Solicitar conversación estratégica
              </h3>
              <p className="measure text-sm leading-relaxed text-muted-foreground">
                Agende una consulta inicial sin costo para evaluar cómo podemos
                aportar a su entidad o equipo legislativo.
              </p>
              <a
                href="https://wa.me/573009769468?text=Hola%2C%20me%20interesa%20una%20consulta%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 self-start rounded-lg bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent/90 ${focusRing}`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Escribir por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <div className="mt-2 flex flex-col gap-5 border-t border-border pt-6">
                {commitments.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <Icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </FadeIn>

          {/* Datos de contacto */}
          <FadeIn delay={0.2}>
            <dl className="divide-y divide-border border-t border-border lg:border-t-0 lg:pt-0">
              {contacts.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.label} className="flex items-start gap-4 py-5 first:pt-0 lg:first:pt-0">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        {c.label}
                      </dt>
                      <dd className="mt-1">
                        <a
                          href={c.href}
                          {...(c.external
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className={`rounded-sm text-sm font-medium text-foreground transition-colors hover:text-accent ${focusRing}`}
                        >
                          {c.value}
                        </a>
                      </dd>
                    </div>
                  </div>
                )
              })}
              <div className="flex items-start gap-4 py-5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Ubicación
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-foreground">
                    Bogotá, Colombia
                    <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                      Disponible en Colombia y LATAM
                    </span>
                  </dd>
                </div>
              </div>
            </dl>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
