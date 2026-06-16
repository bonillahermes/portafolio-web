import { Metadata } from "next"
import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import Services from "@/components/services"
import Methodology from "@/components/methodology"
import Team from "@/components/team"
import Platforms from "@/components/platforms"
import CTA from "@/components/cta"
import HashScroll from "@/components/hash-scroll"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Hermes Bonilla — Datos, IA y Plataformas para el Sector Público",
  description:
    "Especialista en analítica de datos, inteligencia artificial y plataformas de gestión para congresistas, UTL y entidades del gobierno colombiano.",
  alternates: {
    canonical: SITE_URL,
  },
}

export default function Page() {
  return (
    <>
      <HashScroll />
      <section id="inicio">
        <Hero />
      </section>
      <TrustBar />
      <section id="servicios">
        <Services />
      </section>
      <section id="metodologia">
        <Methodology />
      </section>
      <section id="plataformas">
        <Platforms />
      </section>
      <section id="equipo">
        <Team />
      </section>
      <section id="contacto">
        <CTA />
      </section>
    </>
  )
}
