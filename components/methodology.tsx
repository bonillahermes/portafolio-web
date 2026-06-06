import { FadeIn, AnimatedLine } from "./motion"

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos la situación actual: qué datos existen, qué preguntas necesitan respuesta y qué decisiones dependen de los resultados.",
    detail: "Inmersión en su contexto institucional",
  },
  {
    number: "02",
    title: "Arquitectura de datos",
    description:
      "Diseñamos la estructura de recolección, integración y procesamiento. Consolidamos fuentes dispersas en un sistema coherente.",
    detail: "Diseño técnico a la medida",
  },
  {
    number: "03",
    title: "Modelado y análisis",
    description:
      "Aplicamos modelos estadísticos, machine learning o análisis geoespacial según la necesidad. Cada modelo se valida rigurosamente.",
    detail: "Rigor cuantitativo verificable",
  },
  {
    number: "04",
    title: "Entrega estratégica",
    description:
      "Presentamos resultados accionables: reportes ejecutivos, dashboards interactivos y recomendaciones con sustento cuantitativo.",
    detail: "Decisiones informadas, no intuiciones",
  },
]

export default function Methodology() {
  return (
    <section className="section-shell bg-background">
      <div className="container-editorial">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow">Metodología</span>
            </div>
            <h2 className="heading-section text-balance">
              Un proceso riguroso, de principio a fin
            </h2>
          </FadeIn>
          <FadeIn delay={0.15} className="flex flex-col justify-end">
            <p className="measure text-base leading-relaxed text-muted-foreground">
              Cada fase tiene entregables claros. Usted sabe en todo momento qué
              se está haciendo, por qué y cuál es el siguiente paso.
            </p>
          </FadeIn>
        </div>

        {/* Proceso secuencial — eje vertical hairline */}
        <div className="relative">
          {/* Eje conector decorativo */}
          <div
            aria-hidden="true"
            className="absolute left-1 top-2 bottom-2 w-px bg-border"
          />

          <ol>
            {steps.map((step, index) => (
              <li
                key={step.number}
                className="relative pb-16 pl-12 last:pb-0 lg:pb-24 lg:pl-16"
              >
                {/* Tick de acento que conecta el eje con la fase */}
                <span
                  aria-hidden="true"
                  className="absolute left-1 top-5 block lg:top-7"
                >
                  <AnimatedLine />
                </span>

                <FadeIn delay={index * 0.12}>
                  <span className="block font-mono text-5xl font-semibold tabular-nums text-foreground/80 lg:text-6xl">
                    {step.number}
                  </span>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {step.detail}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="measure mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
