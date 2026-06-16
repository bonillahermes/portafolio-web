# Product

Capa estratégica del proyecto (quién / qué / por qué) requerida por la skill
`impeccable`. **No duplica** los otros planos del repo: para el sistema visual
(tokens, tipografía, movimiento) la fuente es `DESIGN_SYSTEM.md`; para el contexto
técnico y operativo, `CLAUDE.md`. Este archivo solo aporta la capa estratégica que
antes vivía implícita.

## Register

brand

> Es un portafolio de consultoría: el diseño **es** el producto (no sirve a una app
> ni a un dashboard de uso intensivo). Por eso el carril es `brand`, no `product`.

## Users

Sector público colombiano de alto nivel: gobierno nacional, congresistas y Unidades
de Trabajo Legislativo (UTL). Llegan al sitio para **evaluar credibilidad** antes de
contratar consultoría en datos e inteligencia artificial. Contexto de uso: lectura
evaluativa, a menudo desde escritorio institucional, con poca tolerancia a lo
informal o lo llamativo. El trabajo que vienen a resolver: decidir si este consultor
es serio, competente y confiable para manejar datos sensibles del Estado.

Emociones que la interfaz debe evocar: **confianza, seriedad institucional, rigor**.
No: entusiasmo de marca SaaS, urgencia comercial, novedad llamativa.

## Product Purpose

Portafolio profesional en producción (hermesbonilla.com) que presenta capacidades de
consultoría en datos e IA para el sector público. Existe para **convertir
credibilidad en contacto**: que un funcionario que no conoce al consultor termine la
visita confiando lo suficiente para escribir por WhatsApp o correo. El éxito no es
tráfico ni vanidad visual; es que el tono institucional y la corrección del sitio
sostengan la decisión de contratar.

## Brand Personality

Tres palabras: **institucional, sobrio, premium**. Voz formal y contenida, sin
emojis ni coloquialismos. La autoridad se comunica por contención, no por volumen.
Referencias de tono (no de estética literal): la sobriedad de Stripe y la contención
de McKinsey/Bain. La credibilidad y la seriedad pesan más que el impacto visual.

## Anti-references

La lista canónica y vinculante vive en `DESIGN_SYSTEM.md` §8 (lectura obligatoria).
En resumen estratégico, este proyecto **rechaza**:

- Gradientes morado-azul y degradados saturados de marca SaaS.
- Tarjetas anidadas con sombras marcadas; íconos en pastilla de color sobre cada
  heading (patrón "feature card" genérico).
- Radios amplios por defecto (`rounded-2xl` / `rounded-xl`); emojis en código o UI.
- Hero oscuro con foto y velo (lenguaje de landing de producto).
- Multiplicar colores secundarios para diferenciar superficies.
- Inter usada como relleno automático en vez de decisión intencional.

Regla general heredada de `DESIGN_SYSTEM.md`: ante la duda, **menos**. Espacio en
blanco, hairline y tipografía antes que color, sombra o relleno.

## Design Principles

Principios estratégicos (el "cómo pensar", no los valores visuales —esos están en
`DESIGN_SYSTEM.md`):

1. **La credibilidad se gana por contención.** Cada elemento que no aporta seriedad
   resta. La sobriedad no es estética: es el argumento de venta.
2. **Editorial sobre marketing.** Componer como una publicación seria (jerarquía
   tipográfica, grilla estricta, hairlines), no como una landing comercial.
3. **El acento se gana por escasez.** El único azul de acento pesa porque casi no
   aparece; repartirlo lo devalúa.
4. **El espacio en blanco es el material principal.** El lujo se comunica con vacío,
   no con relleno.
5. **Coherencia institucional antes que novedad.** Ningún recurso visual de moda
   justifica romper el tono formal que el sector público espera.

## Accessibility & Inclusion

Objetivo WCAG **AA** verificado. Contrastes confirmados: acento `6.43:1` y tinta
`~14.x:1` sobre blanco. Requisitos no negociables: foco por teclado visible, `alt`
en imágenes, `aria-hidden` en nodos decorativos o duplicados, y respeto estricto a
`prefers-reduced-motion` (cada primitiva de movimiento renderiza el estado final sin
animar). Cualquier cambio de color debe recalcular y mantener AA como mínimo.
