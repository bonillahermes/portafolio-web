// Datos compartidos de la firma territorial del hero. Módulo ligero (sin
// react-simple-maps) para que pueda importarse tanto en el wrapper SSR como en
// el mapa diferido sin arrastrar la librería pesada fuera de su code-split.

export const GEO_URL = "/maps/colombia-departments.geo.json"

export interface Site {
  id: string // NOMBRE_DPT del geojson
  name: string // etiqueta de presentación
  coordinates: [number, number] // centroide aproximado [lng, lat]
}

export const SITES: Site[] = [
  { id: "ANTIOQUIA", name: "Antioquia", coordinates: [-75.6, 6.9] },
  { id: "ATLANTICO", name: "Atlántico", coordinates: [-74.9, 10.7] },
  { id: "BOYACA", name: "Boyacá", coordinates: [-72.9, 5.6] },
  { id: "CUNDINAMARCA", name: "Cundinamarca", coordinates: [-74.45, 5.05] },
  { id: "SANTAFE DE BOGOTA D.C", name: "Bogotá", coordinates: [-74.08, 4.62] },
  { id: "VALLE DEL CAUCA", name: "Valle del Cauca", coordinates: [-76.5, 3.8] },
  { id: "META", name: "Meta", coordinates: [-72.9, 3.4] },
  { id: "LA GUAJIRA", name: "La Guajira", coordinates: [-72.5, 11.3] },
]

export const HIGHLIGHTED = new Set(SITES.map((s) => s.id))

// Orden de encendido (Capa 2): radial desde Bogotá hacia afuera.
export const LIT_ORDER = [
  "SANTAFE DE BOGOTA D.C",
  "CUNDINAMARCA",
  "BOYACA",
  "ANTIOQUIA",
  "VALLE DEL CAUCA",
  "META",
  "ATLANTICO",
  "LA GUAJIRA",
]

export const sortedSites = [...SITES].sort((a, b) =>
  a.name.localeCompare(b.name, "es")
)
