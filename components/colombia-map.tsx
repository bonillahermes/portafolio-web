"use client"

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"
import { useReducedMotion } from "framer-motion"
import { GEO_URL, SITES, HIGHLIGHTED, LIT_ORDER } from "@/lib/colombia-sites"

// Mapa de Colombia con la huella territorial. El estado de hover lo gobierna el
// wrapper (colombia-signature) para sincronizar mapa y lista. Este componente se
// carga diferido (sin SSR) por el peso de react-simple-maps + el geojson.
export default function ColombiaMap({
  hovered,
  onHover,
}: {
  hovered: string | null
  onHover: (id: string | null) => void
}) {
  const reduceMotion = useReducedMotion()

  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 1850, center: [-73.5, 4.4] }}
      width={520}
      height={560}
      style={{ width: "100%", height: "auto" }}
      role="img"
      aria-label="Mapa de Colombia con los departamentos donde hay proyectos resaltados: Antioquia, Atlantico, Boyaca, Cundinamarca, Bogota, Valle del Cauca, Meta y La Guajira."
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const name =
              (geo.properties as Record<string, string>)?.NOMBRE_DPT ?? ""
            const active = HIGHLIGHTED.has(name)
            const order = active ? LIT_ORDER.indexOf(name) : 0
            const isHovered = hovered === name
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  active
                    ? isHovered
                      ? "hsl(var(--accent-bright))"
                      : "hsl(var(--accent))"
                    : "hsl(var(--muted))"
                }
                stroke={active ? "hsl(var(--background))" : "hsl(var(--border))"}
                strokeWidth={active ? (isHovered ? 1 : 0.75) : 0.5}
                tabIndex={-1}
                onMouseEnter={active ? () => onHover(name) : undefined}
                onMouseLeave={active ? () => onHover(null) : undefined}
                style={{
                  default: {
                    outline: "none",
                    cursor: active ? "pointer" : "default",
                    ...(active && !reduceMotion
                      ? {
                          animation: `dept-fill 700ms ease ${order * 110}ms backwards`,
                        }
                      : {}),
                  },
                  hover: {
                    outline: "none",
                    cursor: active ? "pointer" : "default",
                  },
                  pressed: { outline: "none" },
                }}
              />
            )
          })
        }
      </Geographies>

      {SITES.map((site) => {
        const isHovered = hovered === site.id
        return (
          <Marker
            key={site.id}
            coordinates={site.coordinates}
            style={{ default: { pointerEvents: "none" } }}
          >
            {!reduceMotion && (
              <circle r={2.8} fill="hsl(var(--accent-bright))" opacity={0.5}>
                <animate
                  attributeName="r"
                  values="2.8;10"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
            <circle
              r={isHovered ? 3.4 : 2.6}
              fill="hsl(var(--accent-bright))"
              stroke="hsl(var(--background))"
              strokeWidth={0.6}
            />
            {isHovered && (
              <text
                textAnchor="middle"
                y={-9}
                fill="hsl(var(--foreground))"
                stroke="hsl(var(--background))"
                strokeWidth={2.5}
                paintOrder="stroke"
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  fontFamily: "var(--font-mono)",
                }}
              >
                {site.name}
              </text>
            )}
          </Marker>
        )
      })}
    </ComposableMap>
  )
}
