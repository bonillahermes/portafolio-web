import { FadeIn } from "./motion"
import { serviceGroups, servicesByGroup, type Service } from "@/lib/services"

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <article className="group flex h-full flex-col gap-5 rounded-lg border border-border bg-background p-8 shadow-subtle transition-shadow duration-300 hover:shadow-card">
      <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden="true" />

      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="measure text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {service.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {tag}
          </li>
        ))}
      </ul>

      <p className="mt-auto border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
        {service.clientType}
      </p>
    </article>
  )
}

export default function Services() {
  return (
    <section className="section-shell bg-muted">
      <div className="container-editorial">
        <FadeIn>
          <div className="mb-16 lg:mb-20">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <span className="eyebrow">Servicios</span>
            </div>
            <h2 className="heading-section mb-6">Capacidades</h2>
            <p className="measure text-base leading-relaxed text-muted-foreground">
              Soluciones analíticas y sistemas desarrollados para el trabajo
              legislativo y la operación institucional.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-16 lg:gap-20">
          {serviceGroups.map((group) => (
            <div key={group.key}>
              <FadeIn>
                <div className="mb-8 max-w-2xl border-t border-border pt-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">
                    {group.label}
                  </p>
                  <p className="measure mt-2 text-sm leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
                </div>
              </FadeIn>

              <div className="grid gap-5 md:grid-cols-2">
                {servicesByGroup(group.key).map((service, i) => (
                  <FadeIn
                    key={service.title}
                    delay={i * 0.06}
                    className="h-full"
                  >
                    <ServiceCard service={service} />
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
