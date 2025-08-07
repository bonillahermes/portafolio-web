import Hero from "../components/hero"
import Services from "../components/services"
import CaseStudies from "../components/case-studies"
import BlogSection from "../components/blog/blog-section"
import Testimonials from "../components/testimonials"
import About from "../components/about"
import Process from "../components/process"
import FAQ from "../components/faq"
import CTA from "../components/cta"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
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
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="sobre-mi">
        <About />
      </section>
      <section id="proceso">
        <Process />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contacto">
        <CTA />
      </section>
    </div>
  )
}
