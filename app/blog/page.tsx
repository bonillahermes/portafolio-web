import { Metadata } from "next"
import BlogCard from "@/components/blog/blog-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, BookOpen, TrendingUp, Clock, User, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: "Blog - Hermes Bonilla | Data Science e Inteligencia Artificial",
  description: "Aprende sobre Data Science, Machine Learning e Inteligencia Artificial con casos reales y estrategias aplicables para tu empresa.",
  keywords: ["blog", "data science", "machine learning", "inteligencia artificial", "colombia", "casos de estudio"],
}

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

const categories = [
  "Todos",
  "Inteligencia Artificial",
  "Data Science", 
  "Machine Learning",
  "Casos de Estudio"
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section - Mantener igual */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>Blog de Data Science</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-slate-900 mb-6">
              Insights que{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                transforman
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 font-light mb-8 leading-relaxed">
              Conocimiento práctico sobre Data Science, casos reales de empresas colombianas 
              y estrategias que puedes implementar hoy mismo.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                <div className="text-slate-600 text-sm">Artículos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">15k+</div>
                <div className="text-slate-600 text-sm">Lectores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">95%</div>
                <div className="text-slate-600 text-sm">Aplicable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Estilo OpenAI */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Search Bar - Estilo OpenAI */}
          <div className="mb-16">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input 
                placeholder="Buscar artículos sobre Data Science, IA, Machine Learning..." 
                className="w-full pl-12 pr-4 py-4 text-lg border-slate-200 rounded-xl focus:border-slate-300 focus:ring-0 shadow-sm"
              />
            </div>
          </div>

          {/* Categories - Estilo OpenAI */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full border border-slate-200 hover:border-slate-300 transition-all duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts - Estilo OpenAI */}
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <article 
                key={post.slug} 
                className="group cursor-pointer"
              >
                <div className="border-b border-slate-100 pb-12 hover:border-slate-200 transition-colors duration-200">
                  
                  {/* Post Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <span className="text-sm text-blue-600 font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Post Content */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-semibold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Post Image */}
                    <div className="md:col-span-1">
                      <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden group-hover:shadow-md transition-shadow duration-200">
                        <img 
                          src={post.image || "/placeholder.svg"} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-50">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      HB
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 text-sm">{post.author}</div>
                      <div className="text-slate-500 text-xs">Data Scientist Senior</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More - Estilo OpenAI */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300 rounded-full font-medium transition-all duration-200 hover:shadow-sm">
              Cargar más artículos
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
