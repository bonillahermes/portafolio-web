import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Problems from "../components/problems"
import Services from "../components/services"
import CaseStudies from "../components/case-studies"
import WhyMe from "../components/why-me"
import Process from "../components/process"
import About from "../components/about"
import FAQ from "../components/faq"
import CTA from "../components/cta"
import Footer from "../components/footer"
import WhatsAppFloat from "../components/whatsapp-float"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <Problems />
      <section id="servicios">
        <Services />
      </section>
      <section id="casos">
        <CaseStudies />
      </section>
      <section id="sobre-mi">
        <WhyMe />
      </section>
      <section id="proceso">
        <Process />
      </section>
      <About />
      <FAQ />
      <section id="contacto">
        <CTA />
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
