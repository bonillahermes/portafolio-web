import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, User } from "lucide-react"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"

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
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "Hermes Bonilla",
      locale: "es_CO",
      url: `https://hermesbonilla.com/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://hermesbonilla.com/blog/${params.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://hermesbonilla.com",
    },
    datePublished: post.date,
    publisher: {
      "@type": "Person",
      name: "Hermes Bonilla",
      url: "https://hermesbonilla.com",
    },
    mainEntityOfPage: `https://hermesbonilla.com/blog/${params.slug}`,
    keywords: post.tags.join(", "),
    inLanguage: "es",
  }

  return (
    <article className="pt-32 pb-20 bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-2xl px-6">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al blog
        </Link>

        {/* Header — editorial style */}
        <header className="mb-16 text-center">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-6">
            {post.category}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-foreground leading-[1.15] mb-8">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed italic max-w-xl mx-auto mb-8">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("es-CO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
          <div className="w-16 h-px bg-accent mx-auto mt-10" />
        </header>

        {/* Content — NYT editorial prose */}
        <div className="
          prose prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
          prose-h1:hidden
          prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border prose-h2:pb-4
          prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
          prose-p:text-foreground/75 prose-p:leading-[1.85] prose-p:text-[1.0625rem] prose-p:mb-6
          prose-strong:text-foreground prose-strong:font-semibold
          prose-em:text-foreground/65
          prose-a:text-accent prose-a:underline prose-a:underline-offset-2 prose-a:decoration-accent/30 hover:prose-a:decoration-accent
          prose-li:text-foreground/75 prose-li:leading-[1.85]
          prose-blockquote:border-l-2 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:py-1 prose-blockquote:my-10 prose-blockquote:not-italic
          prose-blockquote:text-xl prose-blockquote:font-serif prose-blockquote:text-foreground prose-blockquote:leading-relaxed prose-blockquote:font-medium
        ">
          {/* @ts-expect-error Async Server Component */}
          <MDXRemote source={post.content} />
        </div>

        {/* Tags */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Temas</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-accent bg-accent/[0.06] px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="mt-12 pt-8 border-t border-border flex justify-center">
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
