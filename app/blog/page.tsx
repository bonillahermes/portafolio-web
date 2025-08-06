import { Metadata } from "next"
import BlogCard from "@/components/blog/blog-card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, BookOpen, TrendingUp, Clock } from 'lucide-react'

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
  "Inteligencia Artificial",
  "Data Science Fundamentals", 
  "Herramientas y Tecnologías",
  "Casos de Estudio",
  "Machine Learning"
]

const popularTags = [
  "IA", "Data Science", "Machine Learning", "Colombia", "ROI", "Transformación Digital"
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Search and Filters */}
                <div className="mb-12">
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <Input 
                        placeholder="Buscar artículos..." 
                        className="pl-10 py-3 rounded-full border-slate-200 focus:border-blue-500"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Filter className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 text-sm">Filtrar por:</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="cursor-pointer hover:bg-blue-100">
                      Todos
                    </Badge>
                    {categories.map((category) => (
                      <Badge 
                        key={category} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-blue-50 hover:border-blue-300"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Blog Posts */}
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* About */}
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Sobre el autor</h3>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        HB
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Hermes Bonilla</div>
                        <div className="text-sm text-slate-600">Data Scientist Senior</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">
                      Especialista en transformar datos en ventajas competitivas para empresas colombianas.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-slate-900">8+</div>
                        <div className="text-xs text-slate-600">Años exp.</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-slate-900">50+</div>
                        <div className="text-xs text-slate-600">Proyectos</div>
                      </div>
                    </div>
                  </div>

                  {/* Popular Posts */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                      Más populares
                    </h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post, index) => (
                        <div key={post.slug} className="flex gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm flex-shrink-0">
                            {index + 1}
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-slate-900 hover:text-blue-600 cursor-pointer line-clamp-2">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Categorías</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                          <span className="text-sm text-slate-700">{category}</span>
                          <Badge variant="secondary" className="text-xs">
                            {Math.floor(Math.random() * 10) + 1}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Tags populares</h3>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-blue-50 hover:border-blue-300 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
