# Portafolio Web

Portafolio profesional de consultoría en datos e inteligencia artificial para el sector
público colombiano (gobierno nacional, congresistas y Unidades de Trabajo Legislativo).
Sitio en producción: [hermesbonilla.com](https://hermesbonilla.com).

## Stack

- Next.js 14 (App Router) y React 18
- TypeScript (modo estricto)
- Tailwind CSS 3 con shadcn/ui
- Framer Motion (animaciones)
- Recharts y react-simple-maps (dashboards y mapas)
- next-mdx-remote + gray-matter (blog en MDX)
- Despliegue en Vercel

## Requisitos

- Node.js 18.17 o superior
- pnpm (el proyecto usa `pnpm-lock.yaml`; no usar npm ni yarn)

## Desarrollo

```bash
pnpm install   # instalar dependencias
pnpm dev       # servidor de desarrollo en http://localhost:3000
pnpm build     # build de producción
pnpm start     # servir el build de producción
pnpm lint      # linting
```

Antes de cerrar cualquier cambio, `pnpm lint` y `pnpm build` deben pasar sin errores.

## Estructura

```
app/          Rutas (App Router): home, blog, laboratorio, brochure, legal, sitemap
components/   Secciones de la home, dashboards y primitivas de UI (ui/)
lib/          Utilidades y fuentes de datos: utils, mdx, lab, services
content/      Entradas del blog en MDX (content/blog/*.mdx)
public/       Activos estáticos y datos de los dashboards (public/data/)
```

## Contexto para IA

Este repositorio incluye archivos de contexto para asistentes de IA y colaboradores:

- `CLAUDE.md` — contexto persistente del proyecto (stack, estructura, convenciones,
  sistema de diseño, restricciones).
- `CONTRIBUTING.md` — convenciones de contribución para humanos e IA.

Ambos se mantienen locales (ver `.gitignore`).

## Licencia

Proyecto privado. Todos los derechos reservados.
