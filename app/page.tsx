import Hero from "@/components/hero"
import TrustBar from "@/components/trust-bar"
import Services from "@/components/services"
import Methodology from "@/components/methodology"
import Team from "@/components/team"
import Platforms from "@/components/platforms"
import CTA from "@/components/cta"

export default function Page() {
  return (
    <>
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
