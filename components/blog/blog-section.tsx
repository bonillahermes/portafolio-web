"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, TrendingUp, Eye, Clock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
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
    featured: true,
    views: "2.3k",
    trending: true
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
    featured: true,
    views: "1.8k",
    trending: false
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
    featured: false,
    views: "1.2k",
    trending: false
  },
  {
    slug: "automatizacion-procesos-ia",
    title: "Automatización de procesos con IA: Guía práctica",
    excerpt: "Paso a paso para implementar automatización inteligente en tu empresa sin complicaciones técnicas.",
    date: "2024-11-28",
    author: "Hermes Bonilla",
    category: "Automatización",
    tags: ["Automatización", "Procesos", "IA", "Eficiencia"],
    image: "/placeholder.svg?height=400&width=800",
    readTime: "5 min",
    featured: false,
    views: "950",
    trending: true
  }
]

export default function BlogSection() {
  const [activePost, setActivePost] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const { t } = useLanguage()

  // Auto-advance featured posts
  useEffect(() => {
    if (!isAutoPlaying) return

    intervalRef.current = setInterval(() => {
      setActivePost((prev) => (prev + 1) % blogPosts.length)
    }, 5000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const nextPost = () => {
    setActivePost((prev) => (prev + 1) % blogPosts.length)
    setIsAutoPlaying(false)
  }

  const prevPost = () => {
    setActivePost((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)
    setIsAutoPlaying(false)
  }

  const currentPost = blogPosts[activePost]
  const otherPosts = blogPosts.filter((_, index) => index !== activePost)

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden parallax-bg" data-speed="0.1">
      {/* Background Effects con parallax */}
      <div className="absolute inset-0 parallax-medium">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header con fade-in */}
          <div className="text-center mb-16 fade-in-scroll">
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
              Conocimiento práctico, casos reales y estrategias que puedes aplicar 
              inmediatamente en tu empresa.
            </p>
          </div>

          {/* Main Content - Magazine Style Layout */}
          <div className="grid lg:grid-cols-12 gap-8 mb-16">
            
            {/* Featured Article - Large con slide-left */}
            <div className="lg:col-span-8 slide-left">
              <div className="relative group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={currentPost.image || "/placeholder.svg"}
                    alt={currentPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Trending Badge */}
                  {currentPost.trending && (
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <TrendingUp className="w-4 h-4" />
                      <span>Trending</span>
                    </div>
                  )}

                  {/* Navigation Controls */}
                  <div className="absolute top-6 right-6 flex items-center gap-2">
                    <button
                      onClick={prevPost}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 text-white" />
                    </button>
                    <button
                      onClick={nextPost}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentPost.category}
                      </span>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{currentPost.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{currentPost.views}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {currentPost.title}
                    </h3>
                    
                    <p className="text-white/90 text-lg leading-relaxed mb-4 line-clamp-2">
                      {currentPost.excerpt}
                    </p>

                    <Link 
                      href={`/blog/${currentPost.slug}`}
                      className="inline-flex items-center gap-2 text-white hover:text-blue-200 font-medium transition-colors group/link"
                    >
                      <span>Leer artículo completo</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {blogPosts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActivePost(index)
                        setIsAutoPlaying(false)
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activePost ? "bg-white w-8" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Other Articles con slide-right */}
            <div className="lg:col-span-4 space-y-6 slide-right">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-slate-900">Más Artículos</h3>
                <Link 
                  href="/blog"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  <span>Ver todos</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {otherPosts.slice(0, 3).map((post, index) => (
                <div
                  key={post.slug}
                  className={`group cursor-pointer fade-in-scroll stagger-${index + 1}`}
                  onMouseEnter={() => setHoveredPost(index)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        {post.trending && (
                          <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-blue-600 font-medium">
                            {post.category}
                          </span>
                          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                          <span className="text-xs text-slate-500">{post.readTime}</span>
                        </div>
                        
                        <h4 className="font-semibold text-slate-900 text-sm leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{post.views}</span>
                          </div>
                          <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Stats Bar con scale animation */}
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-6 mb-12 scale-on-scroll">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center group cursor-pointer fade-in-scroll stagger-1">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">50+</div>
                <div className="text-sm text-slate-600">Artículos Publicados</div>
              </div>
              
              <div className="text-center group cursor-pointer fade-in-scroll stagger-2">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">15k+</div>
                <div className="text-sm text-slate-600">Lecturas Mensuales</div>
              </div>
              
              <div className="text-center group cursor-pointer fade-in-scroll stagger-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-200 transition-colors">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">95%</div>
                <div className="text-sm text-slate-600">Contenido Aplicable</div>
              </div>
              
              <div className="text-center group cursor-pointer fade-in-scroll stagger-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-orange-200 transition-colors">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">4.8</div>
                <div className="text-sm text-slate-600">Rating Promedio</div>
              </div>
            </div>
          </div>

          {/* CTA con fade-in */}
          <div className="text-center fade-in-scroll">
            <Link href="/blog">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 group shadow-lg hover:shadow-xl"
              >
                <span>Explorar todos los artículos</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
