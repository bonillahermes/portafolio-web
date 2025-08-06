"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, TrendingUp } from 'lucide-react'
import BlogCard from "./blog-card"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

// Mock data - en producción esto vendría de tu CMS o API
const blogPosts = [
  {
    slug: "ia-transformando-empresas-colombianas",
    title: "Cómo la IA está transformando las empresas colombianas",
    excerpt: "Descubre cómo las empresas líderes en Colombia están usando inteligencia artificial para revolucionar sus operaciones y generar ventajas competitivas.",
    date: "2024-12-15",
    author: "Hermes Bonilla",
    category: "Inteligencia Artificial",
    tags: ["IA", "Colombia", "Transformación Digital", "Casos de Éxito"],
    image: "/placeholder.svg?height=400&width=800",
    readTime: "8 min",
    featured: true
  },
  {
    slug: "5-senales-empresa-necesita-data-science",
    title: "5 señales de que tu empresa necesita Data Science",
    excerpt: "Identifica las señales claras que indican que tu empresa está perdiendo oportunidades por no usar Data Science y cómo solucionarlo.",
    date: "2024-12-10",
    author: "Hermes Bonilla",
    category: "Data Science Fundamentals",
    tags: ["Data Science", "Empresas", "Diagnóstico", "ROI"],
    image: "/placeholder.svg?height=400&width=800",
    readTime: "6 min",
    featured: true
  },
  {
    slug: "machine-learning-vs-inteligencia-artificial",
    title: "Machine Learning vs Inteligencia Artificial: ¿Cuál necesita tu negocio?",
    excerpt: "Entiende las diferencias prácticas entre ML e IA, y descubre cuál es la mejor opción para resolver los problemas específicos de tu empresa.",
    date: "2024-12-05",
    author: "Hermes Bonilla",
    category: "Herramientas y Tecnologías",
    tags: ["Machine Learning", "IA", "Tecnología", "Decisiones de Negocio"],
    image: "/placeholder.svg?height=400&width=800",
    readTime: "7 min",
    featured: false
  }
]

export default function BlogSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Insights y Conocimiento</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
              Aprende sobre{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Data Science
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
              Comparto conocimiento práctico, casos reales y estrategias que puedes aplicar 
              inmediatamente en tu empresa para transformar datos en resultados.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
              <div className="text-slate-600">Artículos publicados</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">15k+</div>
              <div className="text-slate-600">Lectores mensuales</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">95%</div>
              <div className="text-slate-600">Contenido aplicable</div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <BlogCard 
                key={post.slug} 
                post={post} 
                featured={index === 0}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/blog">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 group"
              >
                <span>Ver todos los artículos</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
