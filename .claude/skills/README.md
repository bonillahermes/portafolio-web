# Gobierno de skills

Doctrina de seguridad, stack aprobado y registro de instalación de skills para este
repositorio. Este archivo establece la estructura; **no instala ninguna skill**. La
instalación de cada skill la realiza Hermes manualmente, en branch aislado y tras revisar
la fuente.

## a. Doctrina de procedencia (regla dura)

Las skills **ejecutan código** en el entorno de desarrollo, con acceso a credenciales
(AWS, tokens de GitHub, contenido de `.env`). Una skill maliciosa o negligente puede
exfiltrar secretos, alterar el repositorio o tocar infraestructura. Por tanto:

- **Instalar solo skills de autores identificables y reputados.** Si no se puede atribuir
  el origen a una persona u organización con reputación verificable, no se instala.
- **Revisar el `SKILL.md` fuente antes de instalar.** Leer qué hace, qué comandos ejecuta
  y qué red o credenciales toca. Sin revisión previa, no se instala.
- **Probar en branch, nunca en `main`.** Toda skill nueva se ejerce primero en una rama
  aislada.
- **Entorno separado para datos sensibles.** Cualquier repositorio que toque datos del
  Ministerio (PMU, SIVIGEM) se trabaja en entorno separado, no en la máquina de uso
  general.
- **Procedencia sobre popularidad.** Más skills instaladas = más superficie de ataque, no
  más valor. El número de estrellas o de descargas no sustituye a la atribución y la
  revisión. Ante la duda, no instalar.

## b. Stack mínimo aprobado para este repositorio

Contexto: portafolio público de marca (brand), sin PII. El eje de seguridad es **bajo**
para este repo concreto, pero la doctrina de procedencia aplica igual en todos los casos.

### Permanentes

| Eje | Skill | Autor / procedencia | Rol | Estado |
|---|---|---|---|---|
| Diseño | frontend-design | Anthropic | Base permanente de diseño | Pendiente |
| Diseño | Impeccable | Paul Bakaus | Separar carril brand / product | Pendiente |
| SEO | seo-geo-consultant | AndreasH96 | SEO técnico + GEO para Next.js | Pendiente |

### Situacionales (uso puntual, no permanentes)

| Eje | Skill | Autor / procedencia | Rol | Estado |
|---|---|---|---|---|
| Diseño | taste-skill (variante redesign-existing-projects) | Leonxlnx | Rediseño de secciones existentes | Pendiente |
| Diseño | emil-design-eng | Emil Kowalski | Ingeniería de diseño puntual | Pendiente |

### Seguridad (documentadas; relevantes para PMU/SIVIGEM, no para este repo público)

| Eje | Skill | Autor / procedencia | Rol | Estado |
|---|---|---|---|---|
| Seguridad | static-analysis | Trail of Bits (trailofbits) | Análisis estático | Pendiente |
| Seguridad | owasp-security | agamm | Revisión OWASP | Pendiente |

Para el portafolio el eje de seguridad es bajo (sitio público, sin PII), pero estas dos
quedan documentadas porque la doctrina aplica igual y porque son las indicadas cuando el
trabajo toque PMU o SIVIGEM.

## c. Relación con los planos de contexto

Las skills **respetan** los archivos `.md` de contexto del repositorio; no los anulan.

- Antes de correr cualquier skill de diseño, el agente debe haber leído `DESIGN_SYSTEM.md`,
  en especial sus **anti-referencias**. Una skill de diseño que desconozca esas
  restricciones empujará el proyecto hacia sus propios defaults.
- Las skills **auditan y sugieren; Hermes decide.** Toda sugerencia que toque el sistema
  existente es una **hipótesis a evaluar**, no una corrección a aplicar.

## d. Orden de operación recomendado

1. Los archivos `.md` de contexto ya existen (`CLAUDE.md`, `DESIGN_SYSTEM.md`,
   `CONTRIBUTING.md`).
2. Correr **Impeccable** en modo *critique* sobre una sección ya terminada.
3. Aplicar **selectivamente** lo que coincida con el criterio del proyecto; documentar en
   `DESIGN_SYSTEM.md` lo rechazado como **anti-referencia**.
4. Usar **taste-skill / Emil** en las secciones pendientes (metodología, casos de
   estudio).
5. **Loop de verificación** tras cada cambio (`pnpm lint` y `pnpm build` sin errores).

## e. Registro de skills instaladas

Se rellena a medida que Hermes instale cada skill. Vacío por ahora.

| Skill | Autor | Fecha de instalación | Versión / commit revisado | Branch de prueba | Decisión |
|---|---|---|---|---|---|
| | | | | | |
