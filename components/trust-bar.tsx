"use client"

import Image from "next/image"
import { FadeIn } from "./motion"

const featured = {
  name: "Ministerio del Interior",
  logo: "/images/min-interior-logo.png",
  description: "Plataformas de monitoreo electoral, sistemas de vigilancia institucional y herramientas de gestión desarrolladas para la operación del Ministerio.",
  projects: ["PMU Electoral", "SIVIGEM", "Sistema PNG"],
}

const others = [
  {
    name: "Ministerio de Igualdad",
    logo: "/images/min-igualdad-logo.jpeg",
    description: "Sistemas de gestión e información para política pública con enfoque de género",
  },
  {
    name: "Comisión Legal para la Equidad de la Mujer",
    logo: "/images/com-legal-mujer.jpeg",
    description: "Herramientas analíticas para el seguimiento legislativo con enfoque diferencial",
  },
  {
    name: "Gobernación de Boyacá",
    logo: "/images/gob-boyaca-logo.png",
    description: "Análisis territorial y soporte técnico para toma de decisiones departamentales",
  },
]

// Tratamiento monocromo uniforme para una barra de logos digna pese a la
// mezcla de formatos/fondos: escala de grises y opacidad reducida en reposo,
// color y opacidad plena al hover. mix-blend-multiply funde el fondo blanco
// de los JPEG sobre el contenedor claro.
const logoTreatment =
  "object-contain object-left grayscale opacity-70 mix-blend-multiply transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"

export default function TrustBar() {
  return (
    <section className="section-shell border-b border-border bg-background">
      <div className="container-editorial">
        <FadeIn>
          <div className="mb-14 lg:mb-20">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow">Clientes</span>
            </div>
            <h2 className="heading-section max-w-2xl text-balance">
              Entidades que han confiado en nosotros
            </h2>
          </div>
        </FadeIn>

        {/* Cliente principal — bloque dominante */}
        <FadeIn delay={0.1}>
          <article className="group rounded-lg border border-border bg-background p-8 shadow-subtle transition-shadow duration-300 hover:shadow-card lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[16rem_1fr] lg:items-start lg:gap-12">
              <div className="flex h-20 items-center">
                <div className="relative h-16 w-44">
                  <Image
                    src={featured.logo}
                    alt={`Logo del ${featured.name}`}
                    fill
                    className={logoTreatment}
                  />
                </div>
              </div>

              <div>
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Cliente principal
                </p>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {featured.name}
                </h3>
                <p className="measure mt-4 text-sm leading-relaxed text-muted-foreground">
                  {featured.description}
                </p>

                <div className="hairline mt-8 pt-6">
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                    Proyectos desarrollados
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {featured.projects.map((p) => (
                      <li
                        key={p}
                        className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] text-muted-foreground"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Clientes secundarios — grilla homogenea con separadores hairline */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3">
          {others.map((client, i) => (
            <FadeIn
              key={client.name}
              delay={0.2 + i * 0.08}
              className="group flex h-full flex-col gap-5 border-t border-border py-8 sm:border-l sm:border-t-0 sm:px-8 sm:first:border-l-0 sm:first:pl-0"
            >
              <div className="flex h-12 items-center">
                <div className="relative h-10 w-28">
                  <Image
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    fill
                    className={logoTreatment}
                  />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-snug text-foreground">
                  {client.name}
                </h3>
                <p className="measure mt-2 text-xs leading-relaxed text-muted-foreground">
                  {client.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
