import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Services from "../components/services"
import CaseStudies from "../components/case-studies"
import BlogSection from "../components/blog/blog-section"
import Testimonials from "../components/testimonials"
import About from "../components/about"
import Process from "../components/process"
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
      <section id="servicios">
        <Services />
      </section>
      <section id="casos">
        <CaseStudies />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <Testimonials />
      <section id="sobre-mi">
        <About />
      </section>
      <section id="proceso">
        <Process />
      </section>
      <FAQ />
      <section id="contacto">
        <CTA />
      </section>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
