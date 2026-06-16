# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/),
y este proyecto se adhiere al [Versionado Semántico](https://semver.org/lang/es/).

## [Unreleased]

Sin cambios pendientes.

## [2.0.1] - 2026-06-15

Correcciones de SEO, canonicalización a www y rendimiento de imágenes (LCP).

### Added

- `app/robots.ts` (Metadata Route API de Next.js): declara el sitemap y el host
  canónico del sitio.
- `lib/site.ts`: constante `SITE_URL` como fuente única de verdad del host canónico.

### Changed

- Canonicalización del sitio a www: host centralizado en `lib/site.ts` como `SITE_URL`
  (fuente única). Migradas todas las URLs absolutas (canonical, `og:url`, JSON-LD,
  sitemap, breadcrumbs) de no-www a www.
- Añadido `metadataBase` en el layout para resolver correctamente las URLs de Open Graph
  y canonical.
- Corregido el enlace de "Sitio en producción" del `README.md` a www.

### Fixed

- LCP de imágenes: añadido el atributo `sizes` a los `<Image fill>` de `trust-bar.tsx` y
  `team.tsx` para evitar servir candidatos de `srcset` sobredimensionados (hasta `w=3840`)
  en slots de 112–320px.

## [2.1.0] - 2026-06-15

Capa de infraestructura de contexto y gobierno del repositorio.

### Added

- `DESIGN_SYSTEM.md`: sistema de diseño editorial sobrio premium extraído a un archivo
  propio y autocontenido (tokens cromáticos, escala tipográfica, espaciado, sombras,
  animación, anti-referencias y estado del rediseño) como restricción de entrada para
  las skills de diseño.
- `AGENTS.md`: puntero del estándar abierto que remite a `CLAUDE.md` como fuente de
  verdad, con un resumen mínimo accionable.
- `PERFIL.md` (archivo local, en `.gitignore`): contexto de identidad del consultor y de
  Civimétrica S.A.S. para coherencia de contenido y producto.
- `VERSION`: fuente única de verdad de la versión actual del proyecto.
- `CHANGELOG.md`: este archivo, con el historial reconstruido en formato Keep a
  Changelog.
- Doctrina de skills en `.claude/skills/README.md`.
- Adopción de versionado SemVer y Keep a Changelog, documentada en `CLAUDE.md`
  (secciones "Archivos de contexto" y "Versionado").

### Changed

- `CLAUDE.md`: la sección "Sistema de diseño" se resume y delega los valores detallados
  en `DESIGN_SYSTEM.md`; el estado del rediseño deja de duplicarse y pasa a vivir solo
  en `DESIGN_SYSTEM.md`.

## [2.0.0] - 2026-06-06

Sistema de diseño editorial sobrio premium (PR #7). Cambio MAJOR: establece un lenguaje
visual nuevo que rompe con el diseño anterior.

### Added

- Sistema de diseño editorial sobrio premium: tokens de tema (HSL), escala tipográfica
  (`text-display`, `text-heading`, `text-eyebrow`), contenedor unificado
  `max-w-editorial` (72rem), separadores hairline, radio de borde reducido y patrón de
  animación de scroll consolidado en `components/motion.tsx`.

### Changed

- Rediseño de hero, navbar y secciones al nuevo sistema editorial.

## [1.4.0] - 2026-06-06

Correcciones de UI/UX, accesibilidad y seguridad (PR #6).

### Changed

- PMU Electoral apunta a su dominio propio.
- README reescrito; se ignoran artefactos de build y archivos de contexto local.

### Fixed

- Contador del hero (`AnimatedNumber`): podía quedarse en cero si la sección no entraba
  en viewport en el primer render.
- Marquee del stack (`team.tsx`): los nodos duplicados se marcan con `aria-hidden`.
- Anclas bajo el navbar fijo: se añade `scroll-margin-top` a las secciones con `id`.
- Taxonomía de servicios: centralizada en `lib/services.ts` para evitar divergencias
  entre `services.tsx`, `footer.tsx` y el JSON-LD de `layout.tsx`.

## [1.3.0] - 2026-03-22

Laboratorio de datos y contenido.

### Added

- Sección Laboratorio de Datos con dashboard interactivo de SECOP II.
- Dashboard ECP 2023 (Encuesta de Cultura Política, DANE).
- Primer artículo del blog: análisis de Colombia 2023 (ECP).

### Fixed

- Mejoras de SEO transversales en todas las páginas.

## [1.2.0] - 2026-03-15

Rediseño completo a tema claro (PR #5).

### Added

- Tema claro, nuevas secciones, blog, página legal y brochure.

### Changed

- Optimización de SEO.

## [1.1.0] - 2026-03-14

Foco en UTL y Gobierno Nacional (PR #4).

### Added

- Sección de plataformas.
- Contenido reorientado a UTL y gobierno.

### Changed

- Optimización de SEO.

## [1.0.0] - 2026-02-23

Primer portafolio institucional (PR #1 y #2). Versión inicial documentada; el historial
del repositorio anterior a este punto corresponde a otro propósito y no se incluye.

### Added

- Branding institucional.
- Sistema de blog.
- Animaciones.
- Stat-bar del hero.
- Sección de equipo.

### Fixed

- Tildes y caracteres especiales en español.
- Colores duplicados en `tailwind.config`.
- Componentes con `useSearchParams` envueltos en `Suspense`.
- Vulnerabilidades de React Server Components (CVE).
- Archivos de ruta de blog huérfanos.

[Unreleased]: https://github.com/bonillahermes/portafolio-web/compare/v2.1.0...HEAD
[2.0.1]: https://github.com/bonillahermes/portafolio-web/compare/v2.0.0...v2.0.1
[2.1.0]: https://github.com/bonillahermes/portafolio-web/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/bonillahermes/portafolio-web/compare/v1.4.0...v2.0.0
[1.4.0]: https://github.com/bonillahermes/portafolio-web/compare/v1.3.0...v1.4.0
[1.3.0]: https://github.com/bonillahermes/portafolio-web/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/bonillahermes/portafolio-web/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/bonillahermes/portafolio-web/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/bonillahermes/portafolio-web/releases/tag/v1.0.0
