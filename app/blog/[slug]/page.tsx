import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react'
import BlogCard from "@/components/blog/blog-card"

// Mock data - en producción esto vendría de tu CMS o API
const blogPosts = {
  "ia-transformando-empresas-colombianas": {
    title: "Cómo la IA está transformando las empresas colombianas",
    excerpt: "Descubre cómo las empresas líderes en Colombia están usando inteligencia artificial para revolucionar sus operaciones y generar ventajas competitivas.",
    date: "2024-12-15",
    author: "Hermes Bonilla",
    category: "Inteligencia Artificial",
    tags: ["IA", "Colombia", "Transformación Digital", "Casos de Éxito"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "8 min",
    content: `
# Cómo la IA está transformando las empresas colombianas

La inteligencia artificial ya no es una tecnología del futuro en Colombia. **Es una realidad presente** que está transformando sectores completos y generando ventajas competitivas decisivas para las empresas que la adoptan.

## El panorama actual en Colombia

En los últimos dos años, he trabajado directamente con empresas colombianas implementando soluciones de IA que han generado resultados medibles:

- **HDI Seguros**: Reducción del 35% en pérdidas por siniestralidad
- **Senado de la República**: Automatización que pasó de 3 semanas a 3 minutos
- **Consultoría Electoral**: Precisión superior a encuestas tradicionales

## Sectores que lideran la transformación

### 1. Sector Financiero y Seguros
Las aseguradoras colombianas están usando machine learning para:
- Evaluación de riesgos en tiempo real
- Detección de fraudes automática
- Personalización de productos

### 2. Sector Público
El gobierno colombiano está implementando:
- Automatización de procesos legislativos
- Análisis predictivo para políticas públicas
- Optimización de recursos estatales

### 3. Retail y E-commerce
Las empresas de retail están adoptando:
- Sistemas de recomendación personalizados
- Optimización de inventarios
- Análisis de comportamiento del consumidor

## Los desafíos únicos del mercado colombiano

### Disponibilidad de datos
Muchas empresas colombianas tienen datos fragmentados en diferentes sistemas. La clave está en:
- Centralizar la información
- Limpiar y estructurar los datos
- Crear pipelines automatizados

### Talento especializado
La escasez de profesionales en IA es real, pero hay soluciones:
- Colaboración con expertos externos
- Capacitación del equipo interno
- Implementación gradual y sostenible

## Casos de éxito verificables

### HDI Seguros: Optimización de primas
**El problema**: Pérdidas significativas por evaluación manual de riesgos.

**La solución**: Modelo predictivo que analiza 47 variables en tiempo real.

**El resultado**: 35% de reducción en pérdidas, modelo funcionando 24/7 desde agosto 2023.

### Senado de la República: Automatización legislativa
**El problema**: Clasificación manual de proyectos de ley tomaba semanas.

**La solución**: Sistema NLP que clasifica automáticamente con 99% de precisión.

**El resultado**: De 3 semanas a 3 minutos por ciclo legislativo.

## El futuro de la IA en Colombia

Las empresas que no adopten IA en los próximos 2 años enfrentarán desventajas competitivas significativas. La pregunta no es "si" implementar IA, sino "cuándo" y "cómo".

### Tendencias emergentes:
- **IA Generativa**: Automatización de contenido y comunicaciones
- **Computer Vision**: Optimización de procesos industriales
- **NLP Avanzado**: Análisis de sentimientos y atención al cliente

## Primeros pasos para tu empresa

1. **Auditoría de datos**: Identifica qué información tienes disponible
2. **Casos de uso prioritarios**: Define problemas específicos a resolver
3. **Piloto controlado**: Implementa una solución pequeña y medible
4. **Escalamiento gradual**: Expande basándote en resultados comprobados

## Conclusión

La transformación con IA no es solo tecnológica, es estratégica. Las empresas colombianas que la adopten correctamente no solo optimizarán sus operaciones, sino que crearán nuevas fuentes de valor y ventajas competitivas sostenibles.

**¿Tu empresa está lista para la transformación?** La conversación comienza con una evaluación gratuita de tu potencial con IA.
    `
  },
  "5-senales-empresa-necesita-data-science": {
    title: "5 señales de que tu empresa necesita Data Science",
    excerpt: "Identifica las señales claras que indican que tu empresa está perdiendo oportunidades por no usar Data Science y cómo solucionarlo.",
    date: "2024-12-10",
    author: "Hermes Bonilla",
    category: "Data Science Fundamentals",
    tags: ["Data Science", "Empresas", "Diagnóstico", "ROI"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "6 min",
    content: `
# 5 señales de que tu empresa necesita Data Science

Después de trabajar con decenas de empresas, he identificado patrones claros que indican cuándo una organización está perdiendo oportunidades significativas por no aprovechar sus datos.

## Señal #1: Tomas decisiones basándote en "intuición"

### El síntoma
- Las reuniones estratégicas se basan en opiniones, no en datos
- Frases como "creo que...", "me parece que..." dominan las decisiones importantes
- Los reportes llegan después de que los problemas ya ocurrieron

### El costo oculto
Una sola decisión equivocada puede costar millones en oportunidades perdidas. Sin datos, cada estrategia es una apuesta.

### La solución
Implementar dashboards en tiempo real que conviertan datos en insights accionables.

## Señal #2: Tu equipo pasa horas en reportes manuales

### El síntoma
- Empleados dedicando días completos a consolidar información
- Reportes que llegan obsoletos por el tiempo que toman en crearse
- Errores humanos frecuentes en cálculos y análisis

### El costo oculto
Tu talento más valioso se desperdicia en tareas que la IA puede automatizar. Cada hora manual es una hora menos de estrategia e innovación.

### La solución
Automatización inteligente que genere reportes en minutos, no días.

## Señal #3: No puedes predecir problemas antes de que ocurran

### El síntoma
- Siempre reaccionando, nunca anticipando
- Los problemas se descubren cuando ya es demasiado tarde
- Falta de visibilidad sobre tendencias futuras

### El costo oculto
Perder clientes, oportunidades de mercado y eficiencia operativa por no ver lo que viene.

### La solución
Modelos predictivos que identifiquen patrones y anticipen problemas.

## Señal #4: Tienes datos pero no sabes qué hacer con ellos

### El síntoma
- Bases de datos llenas de información sin procesar
- Múltiples sistemas que no se comunican entre sí
- Sensación de que "hay algo valioso ahí, pero no sabemos qué"

### El costo oculto
Oportunidades de optimización, nuevos productos y ventajas competitivas enterradas en datos sin explotar.

### La solución
Análisis exploratorio que revele patrones ocultos y oportunidades.

## Señal #5: Tus competidores están ganando terreno inexplicablemente

### El síntoma
- Competidores con decisiones más rápidas y precisas
- Productos o servicios que parecen "adivinar" lo que el mercado quiere
- Eficiencias operativas que no puedes explicar

### El costo oculto
Pérdida de participación de mercado ante competidores que sí usan sus datos estratégicamente.

### La solución
Inteligencia competitiva basada en datos y optimización continua.

## Caso real: La transformación de HDI Seguros

HDI Seguros presentaba 4 de estas 5 señales:
- ✅ Decisiones basadas en experiencia, no datos
- ✅ Reportes manuales que tomaban semanas
- ✅ Imposibilidad de predecir siniestralidad
- ✅ Datos fragmentados en múltiples sistemas

**El resultado después de implementar Data Science:**
- 35% de reducción en pérdidas
- Reportes automáticos en tiempo real
- Predicción de riesgos con 94% de precisión
- ROI del 340% en el primer año

## ¿Cuántas señales identificas en tu empresa?

### 1-2 señales: Riesgo bajo
Tu empresa funciona bien, pero hay oportunidades de optimización que podrían generar ventajas competitivas.

### 3-4 señales: Riesgo medio
Estás perdiendo oportunidades significativas. Es momento de actuar antes de que la brecha con la competencia se amplíe.

### 5 señales: Riesgo alto
Tu empresa está en desventaja competitiva. Cada día sin Data Science es una oportunidad perdida.

## El primer paso es siempre gratuito

No necesitas una transformación completa de inmediato. Comienza con:

1. **Diagnóstico gratuito**: Evaluación de tu situación actual
2. **Identificación de oportunidades**: Los 3 casos de uso con mayor ROI
3. **Plan de implementación**: Estrategia gradual y medible

## Conclusión

El Data Science no es un lujo tecnológico, es una necesidad competitiva. Las empresas que no lo adopten pronto se encontrarán en desventaja permanente.

**¿Reconoces estas señales en tu empresa?** Hablemos sobre cómo convertir tus datos en tu mayor ventaja competitiva.
    `
  },
  "machine-learning-vs-inteligencia-artificial": {
    title: "Machine Learning vs Inteligencia Artificial: ¿Cuál necesita tu negocio?",
    excerpt: "Entiende las diferencias prácticas entre ML e IA, y descubre cuál es la mejor opción para resolver los problemas específicos de tu empresa.",
    date: "2024-12-05",
    author: "Hermes Bonilla",
    category: "Herramientas y Tecnologías",
    tags: ["Machine Learning", "IA", "Tecnología", "Decisiones de Negocio"],
    image: "/placeholder.svg?height=600&width=1200",
    readTime: "7 min",
    content: `
# Machine Learning vs Inteligencia Artificial: ¿Cuál necesita tu negocio?

Una de las preguntas más frecuentes que recibo de empresarios es: **"¿Necesito Machine Learning o Inteligencia Artificial?"**. La respuesta no es técnica, es estratégica.

## La confusión común

Muchos empresarios usan estos términos indistintamente, pero representan enfoques diferentes para resolver problemas de negocio:

- **Inteligencia Artificial**: Sistemas que simulan inteligencia humana
- **Machine Learning**: Algoritmos que aprenden de datos para hacer predicciones

## Machine Learning: Cuando tienes patrones que descubrir

### ¿Cuándo es la opción correcta?
- Tienes grandes volúmenes de datos históricos
- Necesitas predicciones basadas en patrones
- Quieres automatizar decisiones repetitivas
- Buscas optimizar procesos existentes

### Casos de uso ideales:
- **Predicción de ventas**: Basada en históricos y tendencias
- **Detección de fraudes**: Identificando patrones anómalos
- **Optimización de precios**: Ajustes dinámicos según demanda
- **Mantenimiento predictivo**: Anticipando fallas de equipos

### Ejemplo real: HDI Seguros
**El problema**: Evaluación manual de riesgos en seguros.
**La solución ML**: Algoritmo que analiza 47 variables históricas.
**El resultado**: 35% reducción en pérdidas por siniestralidad.

## Inteligencia Artificial: Cuando necesitas "pensar" como humano

### ¿Cuándo es la opción correcta?
- Necesitas procesar lenguaje natural
- Quieres automatizar tareas cognitivas complejas
- Requieres interacción inteligente con usuarios
- Buscas generar contenido o respuestas

### Casos de uso ideales:
- **Chatbots inteligentes**: Atención al cliente 24/7
- **Análisis de documentos**: Extracción automática de información
- **Generación de contenido**: Reportes, emails, propuestas
- **Asistentes virtuales**: Automatización de tareas administrativas

### Ejemplo real: Senado de la República
**El problema**: Clasificación manual de proyectos de ley.
**La solución IA**: Sistema NLP que entiende y clasifica texto legal.
**El resultado**: De 3 semanas a 3 minutos por clasificación.

## La matriz de decisión práctica

### Usa Machine Learning si:
- ✅ Tienes datos históricos abundantes
- ✅ El problema tiene patrones identificables
- ✅ Necesitas predicciones numéricas
- ✅ Quieres optimizar procesos existentes

### Usa Inteligencia Artificial si:
- ✅ Necesitas procesar texto o imágenes
- ✅ Requieres interacción natural con usuarios
- ✅ Quieres automatizar tareas cognitivas
- ✅ Necesitas generar contenido nuevo

## Casos híbridos: Lo mejor de ambos mundos

Muchas soluciones empresariales combinan ambas tecnologías:

### Sistema de atención al cliente inteligente:
- **IA**: Entiende las consultas en lenguaje natural
- **ML**: Predice la mejor respuesta basada en casos históricos

### Plataforma de análisis de mercado:
- **ML**: Identifica tendencias en datos de ventas
- **IA**: Genera reportes automáticos con insights accionables

## Factores de decisión para tu empresa

### 1. Madurez de datos
- **Datos estructurados y abundantes** → Machine Learning
- **Datos no estructurados (texto, imágenes)** → Inteligencia Artificial

### 2. Tipo de problema
- **Predicción y optimización** → Machine Learning
- **Comprensión y generación** → Inteligencia Artificial

### 3. Recursos disponibles
- **Equipo técnico fuerte** → Cualquiera de las dos
- **Recursos limitados** → Comienza con la que resuelva el problema más crítico

### 4. ROI esperado
- **Optimización de procesos existentes** → Machine Learning (ROI más rápido)
- **Nuevas capacidades de negocio** → Inteligencia Artificial (ROI a largo plazo)

## La realidad: No es una decisión binaria

En mi experiencia, las empresas más exitosas no eligen entre ML e IA, sino que:

1. **Identifican el problema específico** que quieren resolver
2. **Evalúan qué tecnología** es más apropiada para ese problema
3. **Implementan gradualmente**, comenzando con el caso de uso más claro
4. **Escalan progresivamente** hacia soluciones más complejas

## Recomendaciones prácticas

### Para empresas que comienzan:
1. **Identifica tu problema más costoso** que involucre datos
2. **Evalúa si es de predicción** (ML) o **comprensión** (IA)
3. **Comienza con un piloto pequeño** y medible
4. **Escala basándote en resultados** comprobados

### Para empresas con experiencia:
1. **Combina ambas tecnologías** para soluciones integrales
2. **Desarrolla capacidades internas** para ambas áreas
3. **Crea ecosistemas de datos** que alimenten ambos enfoques

## Conclusión

La pregunta no es "¿ML o IA?" sino "¿Qué problema necesito resolver y cuál es la mejor herramienta para hacerlo?".

Ambas tecnologías son poderosas cuando se aplican correctamente al problema adecuado. La clave está en:
- Entender tu problema específico
- Evaluar tus datos disponibles
- Elegir la tecnología apropiada
- Implementar gradualmente
- Medir resultados constantemente

**¿Tienes un problema específico que resolver?** Hablemos sobre cuál es la mejor tecnología para tu caso particular y cómo implementarla exitosamente.
    `
  }
}

const relatedPosts = [
  {
    slug: "5-senales-empresa-necesita-data-science",
    title: "5 señales de que tu empresa necesita Data Science",
    excerpt: "Identifica las señales claras que indican que tu empresa está perdiendo oportunidades por no usar Data Science.",
    date: "2024-12-10",
    author: "Hermes Bonilla",
    category: "Data Science Fundamentals",
    tags: ["Data Science", "Empresas", "Diagnóstico"],
    image: "/placeholder.svg?height=300&width=400",
    readTime: "6 min"
  },
  {
    slug: "machine-learning-vs-inteligencia-artificial",
    title: "Machine Learning vs IA: ¿Cuál necesita tu negocio?",
    excerpt: "Entiende las diferencias prácticas entre ML e IA para tomar la mejor decisión.",
    date: "2024-12-05",
    author: "Hermes Bonilla",
    category: "Herramientas y Tecnologías",
    tags: ["Machine Learning", "IA", "Tecnología"],
    image: "/placeholder.svg?height=300&width=400",
    readTime: "7 min"
  }
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: "Artículo no encontrado - Hermes Bonilla",
      description: "El artículo que buscas no existe."
    }
  }

  return {
    title: `${post.title} - Hermes Bonilla`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author]
    }
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver al blog</span>
              </Link>
            </div>

            {/* Post Meta */}
            <div className="mb-6">
              <Badge className="bg-blue-600 text-white mb-4">{post.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-white/30">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Article Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <div 
                    className="prose-headings:text-slate-900 prose-p:text-slate-700 prose-strong:text-slate-900 prose-ul:text-slate-700 prose-ol:text-slate-700"
                    dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>').replace(/## /g, '<h2>').replace(/<h2>/g, '<h2 class="text-2xl font-semibold mt-8 mb-4">').replace(/### /g, '<h3>').replace(/<h3>/g, '<h3 class="text-xl font-semibold mt-6 mb-3">').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/- /g, '<li>').replace(/<li>/g, '<li class="mb-2">') }}
                  />
                </article>

                {/* Share Buttons */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">Compartir artículo</h3>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-8 bg-slate-50 rounded-2xl">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold flex-shrink-0">
                      HB
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">Hermes Bonilla</h3>
                      <p className="text-slate-600 mb-4">
                        Data Scientist Senior especializado en transformar datos en ventajas competitivas 
                        para empresas colombianas. Con más de 8 años de experiencia, he ayudado a empresas 
                        como HDI Seguros y el Senado de la República a implementar soluciones de IA exitosas.
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-lg font-bold text-slate-900">8+</div>
                          <div className="text-sm text-slate-600">Años exp.</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-slate-900">50+</div>
                          <div className="text-sm text-slate-600">Proyectos</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-slate-900">95%</div>
                          <div className="text-sm text-slate-600">Éxito</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Contenido</h3>
                    <div className="space-y-2 text-sm">
                      <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                        El panorama actual
                      </a>
                      <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                        Sectores que lideran
                      </a>
                      <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                        Desafíos únicos
                      </a>
                      <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                        Casos de éxito
                      </a>
                      <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                        El futuro de la IA
                      </a>
                      <a href="#" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                        Primeros pasos
                      </a>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                    <h3 className="text-lg font-semibold mb-3">¿Listo para transformar tu empresa?</h3>
                    <p className="text-blue-100 mb-4 text-sm">
                      Agenda una consulta gratuita y descubre cómo la IA puede revolucionar tu negocio.
                    </p>
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                      Consulta Gratuita
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
                Artículos relacionados
              </h2>
              <p className="text-slate-600">
                Continúa aprendiendo con estos artículos relacionados
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/blog">
                <Button variant="outline" className="gap-2">
                  <span>Ver todos los artículos</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
