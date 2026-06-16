# Portafolio Web

Portafolio profesional de consultoría en datos e inteligencia artificial para el sector
público colombiano (gobierno nacional, congresistas y Unidades de Trabajo Legislativo).
Sitio en producción: [hermesbonilla.com](https://www.hermesbonilla.com).

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

Este repositorio sigue una jerarquía de archivos de contexto para asistentes de IA y
colaboradores. Los versionados sirven de punto de entrada público; los detallados se
mantienen locales.

Versionados (en el repositorio):

- `AGENTS.md` — punto de entrada para agentes de IA (estándar abierto); remite al
  contexto técnico.
- `CHANGELOG.md` — historial de versiones (formato Keep a Changelog).
- `.claude/skills/README.md` — doctrina de gobierno de skills.

Locales (no versionados, ver `.gitignore`):

- `CLAUDE.md` — contexto técnico y operativo (stack, estructura, convenciones,
  restricciones).
- `DESIGN_SYSTEM.md` — sistema de diseño detallado (tokens, escala, anti-referencias).
- `CONTRIBUTING.md` — convenciones de contribución para humanos e IA.
- `PERFIL.md` — perfil privado del consultor; no se publica.

## Licencia

Proyecto privado. Todos los derechos reservados.
