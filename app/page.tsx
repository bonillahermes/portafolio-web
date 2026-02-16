import Hero from "@/components/hero"
import Services from "@/components/services"
import CaseStudies from "@/components/case-studies"
import About from "@/components/about"
import CTA from "@/components/cta"

export default function Page() {
  return (
    <>
      <section id="inicio">
        <Hero />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="resultados">
        <CaseStudies />
      </section>
      <section id="sobre-mi">
        <About />
      </section>
      <section id="contacto">
        <CTA />
      </section>
    </>
  )
}
