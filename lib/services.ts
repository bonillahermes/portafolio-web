import {
  Radar,
  Sparkles,
  Scale,
  ScanSearch,
  Microscope,
  Workflow,
  BadgeDollarSign,
  Target,
  type LucideIcon,
} from "lucide-react"

export type ServiceGroupKey = "legislativo" | "gobierno"

export interface ServiceGroup {
  key: ServiceGroupKey
  label: string
  description: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
  clientType: string
  group: ServiceGroupKey
  highlightInFooter?: boolean
}

export const serviceGroups: ServiceGroup[] = [
  {
    key: "legislativo",
    label: "Equipos legislativos",
    description:
      "Herramientas de inteligencia y análisis para el trabajo de congresistas y UTL",
  },
  {
    key: "gobierno",
    label: "Entidades públicas",
    description:
      "Diagnóstico, desarrollo de sistemas y evaluación para entidades del gobierno",
  },
]

export const services: Service[] = [
  {
    icon: Radar,
    title: "Inteligencia Territorial",
    description:
      "Análisis cuantitativo del territorio representado por el congresista: estructura demográfica, vulnerabilidad socioeconómica y patrones electorales a nivel municipal.",
    tags: ["Análisis geoespacial", "Segmentación cuantitativa", "Entrega ágil"],
    clientType: "UTL · Congresistas · Senado · Cámara",
    group: "legislativo",
    highlightInFooter: true,
  },
  {
    icon: Sparkles,
    title: "Copiloto de Control Político",
    description:
      "Sistema de inteligencia basado en IA para analizar informes institucionales, datos oficiales y series estadísticas como insumo para la preparación de debates de control político.",
    tags: ["RAG", "LLM", "Informes ejecutivos"],
    clientType: "UTL · Debates · Citaciones",
    group: "legislativo",
  },
  {
    icon: Scale,
    title: "Análisis Legislativo con IA",
    description:
      "Procesamiento automatizado de proyectos de ley: generación de resúmenes técnicos, comparación entre versiones y construcción de fichas legislativas estructuradas.",
    tags: ["NLP", "Gaceta del Congreso", "Ficha técnica"],
    clientType: "UTL · Producción legislativa",
    group: "legislativo",
    highlightInFooter: true,
  },
  {
    icon: ScanSearch,
    title: "Observatorio Legislativo",
    description:
      "Monitoreo continuo de agenda legislativa, votaciones y proyectos por temática mediante dashboards y alertas periódicas para equipos legislativos.",
    tags: ["Dashboard", "Alertas", "Seguimiento"],
    clientType: "UTL · Multi-cliente",
    group: "legislativo",
  },
  {
    icon: Microscope,
    title: "Diagnóstico de Madurez de Datos",
    description:
      "Evaluación del estado de procesos, infraestructura analítica y digitalización institucional con hoja de ruta priorizada de mejora.",
    tags: ["Diagnóstico", "Hoja de ruta", "Procesos"],
    clientType: "Ministerios · Entidades públicas",
    group: "gobierno",
  },
  {
    icon: Workflow,
    title: "Arquitectura de Sistemas Institucionales",
    description:
      "Diseño y desarrollo de sistemas orientados a digitalizar procesos críticos y mejorar la trazabilidad operativa dentro de la entidad.",
    tags: ["Next.js", "Desarrollo", "Automatización"],
    clientType: "Ministerios · Organismos · ONG",
    group: "gobierno",
    highlightInFooter: true,
  },
  {
    icon: BadgeDollarSign,
    title: "Gestión Inteligente de Cuentas de Cobro",
    description:
      "Plataforma digital para registro, seguimiento y trazabilidad de cuentas de cobro en entidades públicas con parametrización institucional.",
    tags: ["SaaS", "Gestión financiera", "Trazabilidad"],
    clientType: "Entidades públicas · UTL · Ministerios",
    group: "gobierno",
  },
  {
    icon: Target,
    title: "Evaluación de Impacto de Política Pública",
    description:
      "Análisis cuantitativo del impacto territorial y socioeconómico de programas públicos mediante metodologías verificables.",
    tags: ["Evaluación de impacto", "Evidencia", "Territorio"],
    clientType: "Gobierno · Congreso · Organismos internacionales",
    group: "gobierno",
  },
]

export const servicesByGroup = (key: ServiceGroupKey): Service[] =>
  services.filter((service) => service.group === key)

export const footerServices: Service[] = services.filter(
  (service) => service.highlightInFooter
)

export const serviceTitles: string[] = services.map((service) => service.title)
