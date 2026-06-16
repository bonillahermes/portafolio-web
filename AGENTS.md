# AGENTS.md

Archivo de instrucciones para agentes de IA que intervienen este repositorio.
Sigue el estándar abierto `AGENTS.md`, que diversas herramientas de agentes leen
por convención.

## Fuente de verdad

La fuente de verdad del contexto técnico, las convenciones y las restricciones es
**`CLAUDE.md`. Léelo primero.** Este archivo no duplica su contenido: actúa como
puntero canónico hacia él para evitar que dos archivos se desincronicen.

Jerarquía de planos:

- **`CLAUDE.md`** — contexto técnico y operativo (fuente principal).
- **`DESIGN_SYSTEM.md`** — sistema de diseño: tokens, escala tipográfica,
  anti-referencias. Fuente de verdad de todos los valores visuales.
- **`CONTRIBUTING.md`** — convenciones de contribución para humanos e IA.
- **`CHANGELOG.md`** — historial de versiones (Keep a Changelog).

## Resumen mínimo accionable

Por si una herramienta solo lee este archivo. El detalle vive en `CLAUDE.md`.

- **Stack:** Next.js 14 (App Router), TypeScript en modo estricto, Tailwind CSS 3.4,
  gestor de paquetes **pnpm** (no usar npm ni yarn).
- **Loop obligatorio:** tras cualquier cambio, `pnpm lint && pnpm build` deben pasar
  sin errores antes de dar el trabajo por terminado.
- **No hacer commit ni push** salvo petición explícita.
- **Confidencialidad:** no exponer públicamente las URLs de plataformas marcadas con
  `url: null` (p. ej. SIVIGEM, bajo la Ley 2453 de 2025).
- **Sin emojis** en código ni en interfaz.
- **Colores siempre por tokens** de tema (variables HSL de `app/globals.css`), nunca
  valores hardcodeados.
- **Idioma y tono:** español institucional y formal; la sobriedad prima sobre la
  decoración.

## Mantenimiento

Si `CLAUDE.md` cambia, revisar este resumen para mantenerlo coherente. El detalle
nunca se duplica aquí: ante cualquier discrepancia, manda `CLAUDE.md`.
