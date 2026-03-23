import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowLeft, Database, ExternalLink } from "lucide-react"
import { labProjects, getProjectBySlug } from "@/lib/lab"
import { Badge } from "@/components/ui/badge"

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return labProjects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}

  return {
    title: `${project.title} — Hermes Bonilla`,
    description: project.description,
    keywords: project.tags.join(", "),
    openGraph: {
      title: project.title,
      description: project.description,
      type: "website",
      siteName: "Hermes Bonilla",
      locale: "es_CO",
      url: `https://hermesbonilla.com/laboratorio/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
    },
    alternates: {
      canonical: `https://hermesbonilla.com/laboratorio/${params.slug}`,
    },
  }
}

export default function LabProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const DashboardComponent = dynamic(project.component, {
    ssr: false,
    loading: () => (
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <div className="space-y-3 text-center">
          <div className="mx-auto h-6 w-72 animate-pulse rounded bg-muted" />
          <div className="mx-auto h-4 w-48 animate-pulse rounded bg-muted" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-xl border border-border p-5">
              <div className="mb-3 h-3 w-24 animate-pulse rounded bg-muted" />
              <div className="mb-2 h-8 w-32 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
        <div className="h-96 w-full animate-pulse rounded-xl bg-muted" />
      </div>
    ),
  })

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: project.title,
      description: project.description,
      author: {
        "@type": "Person",
        name: "Hermes Bonilla",
        url: "https://hermesbonilla.com",
      },
      datePublished: project.date,
      url: `https://hermesbonilla.com/laboratorio/${params.slug}`,
      keywords: project.tags.join(", "),
      inLanguage: "es",
      applicationCategory: "DataVisualization",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://hermesbonilla.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Laboratorio",
          item: "https://hermesbonilla.com/laboratorio",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: `https://hermesbonilla.com/laboratorio/${params.slug}`,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- Seccion 1: Descripcion (fondo claro del sitio) --- */}
      <div className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/laboratorio"
            className="inline-flex items-center gap-2 text-sm text-secondary hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al laboratorio
          </Link>

          <header>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
                Laboratorio de Datos
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-secondary max-w-2xl leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pb-8 border-b border-border">
              <span className="inline-flex items-center gap-1.5 text-xs text-secondary">
                <Database className="w-3.5 h-3.5" />
                Fuente: {project.source}
              </span>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
              >
                Ver datos originales
                <ExternalLink className="w-3 h-3" />
              </a>
              <div className="flex flex-wrap gap-2 ml-auto">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[11px] font-mono">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* --- Seccion 2: Dashboard (fondo oscuro, bloque independiente) --- */}
      <div className="bg-[#0a0a0f]">
        <DashboardComponent />
      </div>

      {/* --- Seccion 3: Footer (fondo claro) --- */}
      <div className="py-12 bg-background">
        <div className="mx-auto max-w-4xl px-6 flex justify-center">
          <Link
            href="/laboratorio"
            className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Ver todos los proyectos
          </Link>
        </div>
      </div>
    </div>
  )
}
