import { type ComponentType } from "react"

export interface LabProject {
  slug: string
  title: string
  description: string
  source: string
  sourceUrl: string
  tags: string[]
  date: string
  component: () => Promise<{ default: ComponentType }>
}

export const labProjects: LabProject[] = [
  {
    slug: "secop-ii",
    title: "Observatorio de Contratación Pública — SECOP II",
    description:
      "Dashboard interactivo que consume datos en tiempo real de la API pública del SECOP II y los visualiza para el control ciudadano. Mapa de calor por departamento, gráficas de modalidad y estado, indicadores de transparencia y ranking de contratistas.",
    source: "datos.gov.co",
    sourceUrl:
      "https://www.datos.gov.co/Gastos-Gubernamentales/SECOP-II-Contratos/jbjy-vk9h",
    tags: ["SECOP II", "contratación pública", "datos abiertos", "control ciudadano"],
    date: "2026-03-21",
    component: () => import("@/components/SeccopDashboard"),
  },
  {
    slug: "ecp-2023",
    title: "Cultura Politica Colombia 2023",
    description:
      "Analisis de microdatos de la Encuesta de Cultura Politica del DANE. Confianza institucional, percepcion de corrupcion, perfiles ciudadanos y capital social sobre 46.392 encuestados.",
    source: "DANE — Microdatos ECP 2023",
    sourceUrl: "https://microdatos.dane.gov.co/catalog/883/get-microdata",
    tags: ["DANE", "cultura politica", "datos publicos", "clustering"],
    date: "2026-03-22",
    component: () => import("@/components/EcpDashboard"),
  },
]

export function getAllProjects(): Omit<LabProject, "component">[] {
  return labProjects
    .map(({ component: _, ...rest }) => rest)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getProjectBySlug(slug: string): LabProject | undefined {
  return labProjects.find((p) => p.slug === slug)
}
