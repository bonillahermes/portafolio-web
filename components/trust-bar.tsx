import Image from "next/image"
import { FadeIn } from "./motion"

const clients = [
  { name: "Ministerio del Interior", logo: "/images/min-interior-logo.png" },
  { name: "Policía Nacional", logo: "/images/policia-nacional.jpg" },
  { name: "Ministerio de Igualdad", logo: "/images/min-igualdad-logo.jpeg" },
  {
    name: "Comisión Legal para la Equidad de la Mujer",
    logo: "/images/com-legal-mujer.jpeg",
  },
  { name: "Gobernación de Boyacá", logo: "/images/gob-boyaca-logo.png" },
  { name: "Alcaldía de Cali", logo: "/images/alcaldia-cali.webp" },
  { name: "Gobernación del Magdalena", logo: "/images/gobernacion-magdalena.png" },
]

// A color en reposo (sin gris). Al hover, la entidad se "activa": el logo crece
// levemente. mix-blend-multiply funde el fondo blanco de los logos sobre el claro.
const logoTreatment =
  "object-contain mix-blend-multiply transition duration-300 group-hover:scale-105"

export default function TrustBar() {
  return (
    <section className="section-shell border-b border-border bg-background">
      <div className="container-editorial">
        <FadeIn>
          <div className="mb-12 lg:mb-16">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow">Clientes</span>
            </div>
            <h2 className="heading-section max-w-2xl text-balance">
              Entidades que han confiado en nosotros
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="flex flex-wrap items-start justify-center gap-x-10 gap-y-12 border-t border-border pt-12 lg:gap-x-16">
            {clients.map((client) => (
              <li
                key={client.name}
                className="group flex w-32 flex-col items-center gap-4 text-center sm:w-36 lg:w-44"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={client.logo}
                    alt={`Logo de ${client.name}`}
                    fill
                    sizes="176px"
                    className={logoTreatment}
                  />
                </div>
                <span className="font-mono text-[10px] uppercase leading-snug tracking-[0.15em] text-muted-foreground transition-colors group-hover:text-foreground">
                  {client.name}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  )
}
