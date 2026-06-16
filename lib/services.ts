export type ServiceGroupKey = "congreso" | "gobierno" | "observatorios"

export interface ServiceGroup {
  key: ServiceGroupKey
  code: string
  label: string
  description: string
}

export interface Service {
  title: string
  description: string
  tags: string[]
  clientType: string
  group: ServiceGroupKey
  highlightInFooter?: boolean
}

export const serviceGroups: ServiceGroup[] = [
  {
    key: "congreso",
    code: "CON",
    label: "Congreso y control político",
    description:
      "Inteligencia y análisis para congresistas, UTL, comisiones y bancadas.",
  },
  {
    key: "gobierno",
    code: "GOB",
    label: "Gobierno y entidades públicas",
    description:
      "Diagnóstico, desarrollo de sistemas y evaluación para entidades del Estado.",
  },
  {
    key: "observatorios",
    code: "OBS",
    label: "Observatorios y organizaciones",
    description:
      "Datos abiertos, veeduría y evidencia para observatorios, ONG y organismos.",
  },
]

export const services: Service[] = [
  // ── Congreso y control político ──
  {
    title: "Inteligencia Territorial",
    description:
      "Radiografía cuantitativa del territorio: demografía, vulnerabilidad socioeconómica y patrones electorales a nivel municipal.",
    tags: ["Análisis geoespacial", "Segmentación", "Entrega ágil"],
    clientType: "UTL · Congresistas · Comisiones · Bancadas",
    group: "congreso",
    highlightInFooter: true,
  },
  {
    title: "Copiloto de Control Político",
    description:
      "IA que analiza informes oficiales y series estadísticas para preparar debates y citaciones de control político.",
    tags: ["RAG", "LLM", "Informes ejecutivos"],
    clientType: "UTL · Comisiones · Debates de control",
    group: "congreso",
  },
  {
    title: "Análisis Legislativo con IA",
    description:
      "Resúmenes técnicos, comparación de versiones y fichas estructuradas de proyectos de ley, automatizados.",
    tags: ["NLP", "Gaceta del Congreso", "Ficha técnica"],
    clientType: "UTL · Comisiones · Producción legislativa",
    group: "congreso",
    highlightInFooter: true,
  },
  {
    title: "Observatorio Legislativo",
    description:
      "Monitoreo continuo de agenda, votaciones y proyectos por temática, con dashboards y alertas periódicas.",
    tags: ["Dashboard", "Alertas", "Seguimiento"],
    clientType: "UTL · Bancadas · Multi-cliente",
    group: "congreso",
  },
  // ── Gobierno y entidades públicas ──
  {
    title: "Diagnóstico de Madurez de Datos",
    description:
      "Evaluación de procesos, infraestructura analítica y digitalización, con hoja de ruta priorizada de mejora.",
    tags: ["Diagnóstico", "Hoja de ruta", "Procesos"],
    clientType: "Ministerios · Gobernaciones · Alcaldías",
    group: "gobierno",
  },
  {
    title: "Arquitectura de Sistemas Institucionales",
    description:
      "Diseño y desarrollo de sistemas que digitalizan procesos críticos y dan trazabilidad operativa a la entidad.",
    tags: ["Next.js", "Desarrollo", "Automatización"],
    clientType: "Ministerios · Organismos · Entidades públicas",
    group: "gobierno",
    highlightInFooter: true,
  },
  {
    title: "Gestión Inteligente de Cuentas de Cobro",
    description:
      "Plataforma para registro, seguimiento y trazabilidad de cuentas de cobro, parametrizable por institución.",
    tags: ["SaaS", "Gestión financiera", "Trazabilidad"],
    clientType: "Entidades públicas · Ministerios · UTL",
    group: "gobierno",
  },
  // ── Observatorios y organizaciones ──
  {
    title: "Observatorios de Datos Públicos",
    description:
      "Dashboards interactivos sobre datos abiertos —contratación, cultura política, gasto público— para control ciudadano y veeduría.",
    tags: ["Datos abiertos", "Control ciudadano", "Visualización"],
    clientType: "Observatorios · Veedurías · Academia · ONG",
    group: "observatorios",
    highlightInFooter: true,
  },
  {
    title: "Evaluación de Impacto de Política Pública",
    description:
      "Medición cuantitativa del impacto territorial y socioeconómico de programas públicos, con metodologías verificables.",
    tags: ["Evaluación de impacto", "Evidencia", "Territorio"],
    clientType: "Organismos internacionales · ONG · Gobierno",
    group: "observatorios",
  },
]

export const servicesByGroup = (key: ServiceGroupKey): Service[] =>
  services.filter((service) => service.group === key)

export const footerServices: Service[] = services.filter(
  (service) => service.highlightInFooter
)

export const serviceTitles: string[] = services.map((service) => service.title)
