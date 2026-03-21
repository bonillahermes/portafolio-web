import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Database } from "lucide-react"
import { getAllProjects } from "@/lib/lab"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Laboratorio de Datos Públicos — Hermes Bonilla",
  description:
    "Dashboards interactivos y herramientas de visualización que consumen APIs públicas de datos abiertos para el control ciudadano en Colombia.",
  keywords: "datos abiertos, contratación pública, SECOP II, control ciudadano, dashboards, Colombia, visualización de datos",
  openGraph: {
    title: "Laboratorio de Datos Públicos — Hermes Bonilla",
    description:
      "Dashboards interactivos sobre contratación pública, encuestas y datos abiertos de Colombia.",
    type: "website",
    siteName: "Hermes Bonilla",
    locale: "es_CO",
    url: "https://hermesbonilla.com/laboratorio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratorio de Datos Públicos — Hermes Bonilla",
    description:
      "Dashboards interactivos sobre contratación pública, encuestas y datos abiertos de Colombia.",
  },
  alternates: {
    canonical: "https://hermesbonilla.com/laboratorio",
  },
}

export default function LaboratorioPage() {
  const projects = getAllProjects()

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
              Laboratorio
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4">
            Laboratorio de Datos Públicos
          </h1>
          <p className="text-lg text-secondary max-w-2xl">
            Dashboards interactivos que consumen APIs públicas de datos abiertos.
            Sin intermediarios, sin backend propio — solo datos crudos organizados
            para el control ciudadano.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/laboratorio/${project.slug}`}
              className="group block border border-border p-8 hover:border-accent/50 hover:bg-card transition-all duration-300"
            >
              <div className="flex items-center gap-4 text-xs text-secondary mb-4">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  Fuente: {project.source}
                </span>
                <span className="text-border">|</span>
                <span>
                  {new Date(project.date).toLocaleDateString("es-CO", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors mb-3">
                {project.title}
              </h2>
              <p className="text-sm text-secondary leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-[11px] font-mono">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver dashboard
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
