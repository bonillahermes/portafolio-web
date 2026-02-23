import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { Badge } from "@/components/ui/badge"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: `${post.title} — Hermes Bonilla`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <article className="pt-32 pb-20 bg-background min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>

        <header className="mb-12">
          <Badge variant="outline" className="text-[11px] font-mono mb-6">
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("es-CO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:font-semibold prose-p:text-secondary prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-li:text-secondary prose-h1:hidden">
          {/* @ts-expect-error Async Server Component */}
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono text-secondary/70 border border-border px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </article>
  )
}
