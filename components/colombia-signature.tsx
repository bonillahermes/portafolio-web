"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { sortedSites } from "@/lib/colombia-sites"

// El mapa se carga diferido (sin SSR): no bloquea el LCP del titular. La
// telemetría y la lista sí se renderizan en SSR (este wrapper no es ssr:false).
const ColombiaMap = dynamic(() => import("./colombia-map"), {
  ssr: false,
  loading: () => <div className="aspect-square w-full" aria-hidden="true" />,
})

export default function ColombiaSignature() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div>
      <ColombiaMap hovered={hovered} onHover={setHovered} />

      {/* Telemetría + lista sincronizada con el hover del mapa (bidireccional) */}
      <div className="mt-5 border-t border-border pt-3">
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Huella de proyectos
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            8 departamentos
          </span>
        </div>
        <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted-foreground">
          {sortedSites.map((s, i) => (
            <span key={s.id}>
              {i > 0 && (
                <span aria-hidden="true" className="text-border">
                  {" · "}
                </span>
              )}
              <span
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                className={`transition-colors duration-200 ${
                  hovered === s.id ? "text-accent" : ""
                }`}
              >
                {s.name}
              </span>
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}
