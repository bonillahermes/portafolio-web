import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react"
import { getAllPosts } from "@/lib/mdx"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog — Hermes Bonilla",
  description:
    "Artículos sobre analítica de datos, inteligencia artificial y ciencia de datos aplicada a política y gobierno.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="pt-32 pb-20 bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-accent" />
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
              Blog
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
            Artículos y análisis
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            Reflexiones sobre datos, inteligencia artificial y su aplicación
            estratégica en política y gobierno.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-border p-8 hover:border-accent/50 hover:bg-card transition-all duration-300"
            >
              <div className="flex items-center gap-4 text-xs text-secondary mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-sm text-secondary leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[11px] font-mono">
                  {post.category}
                </Badge>
                <span className="inline-flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Leer artículo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
