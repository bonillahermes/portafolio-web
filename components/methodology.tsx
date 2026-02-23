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
    <section className="py-28 lg:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-6">
            <AnimatedLine />
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent">
              Metodología
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground text-balance leading-[1.05] max-w-3xl mb-6">
            Un proceso riguroso,
            <br className="hidden md:block" />
            de principio a fin
          </h2>
          <p className="text-lg text-primary-foreground/50 max-w-2xl mb-20 leading-relaxed">
            Cada fase tiene entregables claros. Usted sabe en todo momento qué
            se está haciendo, por qué y cuál es el siguiente paso.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="grid lg:grid-cols-4 gap-0">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.12}>
              <div className="relative p-8 lg:p-8 border-l border-primary-foreground/10 lg:border-l lg:border-t-0 lg:first:border-l-0 h-full">
                {/* Step number */}
                <span className="font-mono text-6xl font-bold text-accent/20 block mb-6 leading-none">
                  {step.number}
                </span>

                {/* Label */}
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
                  {step.detail}
                </p>

                <h3 className="text-xl font-semibold text-primary-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-primary-foreground/50 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector dot */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-[5px] top-12 w-2.5 h-2.5 rounded-full bg-accent/40" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
