"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef, useState, useEffect, type ReactNode } from "react"

// Patron de entrada por scroll, unico para todas las secciones:
// fade + desplazamiento corto, easing suave, una sola vez, con margin
// negativo para que dispare antes de que el elemento entre del todo.
export const EDITORIAL_EASE = [0.21, 0.47, 0.32, 0.98] as const
export const REVEAL_MARGIN = "-80px"
export const REVEAL_OFFSET = 24
export const REVEAL_DURATION = 0.7

export const revealViewport = { once: true, margin: REVEAL_MARGIN } as const

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, revealViewport)
  const shouldReduce = useReducedMotion()

  const directionMap = {
    up: { y: REVEAL_OFFSET, x: 0 },
    down: { y: -REVEAL_OFFSET, x: 0 },
    left: { y: 0, x: REVEAL_OFFSET },
    right: { y: 0, x: -REVEAL_OFFSET },
    none: { y: 0, x: 0 },
  }

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: directionMap[direction].y,
        x: directionMap[direction].x,
      }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : {
              opacity: 0,
              y: directionMap[direction].y,
              x: directionMap[direction].x,
            }
      }
      transition={{
        duration: REVEAL_DURATION,
        delay,
        ease: EDITORIAL_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, revealViewport)

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {target}{suffix}
    </motion.span>
  )
}

export function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  delay = 0,
}: {
  value: number
  prefix?: string
  suffix?: string
  delay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, revealViewport)
  const shouldReduce = useReducedMotion()
  // El estado arranca en el valor final: si la animacion nunca dispara
  // (la seccion no entra en viewport), el numero correcto queda visible.
  const [display, setDisplay] = useState(value)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || shouldReduce || hasAnimated.current) return
    hasAnimated.current = true
    setDisplay(0)

    const timeout = setTimeout(() => {
      const duration = 1500
      const startTime = performance.now()

      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplay(Math.round(eased * value))
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, value, shouldReduce, delay])

  if (shouldReduce) {
    return (
      <span>
        {prefix}
        {value.toLocaleString("es-CO")}
        {suffix}
      </span>
    )
  }

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("es-CO")}
      {suffix}
    </span>
  )
}

export function AnimatedLine({ className }: { className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, revealViewport)
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={`w-12 h-px bg-accent ${className || ""}`} />
  }

  return (
    <motion.div
      ref={ref}
      className={`h-px bg-accent ${className || ""}`}
      initial={{ width: 0 }}
      animate={isInView ? { width: 48 } : { width: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: EDITORIAL_EASE }}
    />
  )
}

// Eje vertical que se dibuja al entrar en viewport (de arriba hacia abajo).
// El color y la posición los aporta `className`; aquí solo vive la animación.
export function AnimatedAxis({ className }: { className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, revealViewport)
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={`w-px ${className || ""}`} />
  }

  return (
    <motion.div
      ref={ref}
      className={`w-px origin-top ${className || ""}`}
      initial={{ scaleY: 0 }}
      animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
      transition={{ duration: 0.9, delay: 0.1, ease: EDITORIAL_EASE }}
    />
  )
}

// Teclea el texto carácter por carácter al entrar en viewport. El estado inicial
// es el texto completo (SSR / sin-JS lo muestran completo); al entrar se reinicia
// a 0 y se escribe. `aria-label` mantiene el texto accesible durante la animación.
export function Typewriter({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, revealViewport)
  const shouldReduce = useReducedMotion()
  const [shown, setShown] = useState(text.length)
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || shouldReduce || started.current) return
    started.current = true
    setShown(0)
    let i = 0
    const id = setInterval(() => {
      i += 1
      setShown(i)
      if (i >= text.length) clearInterval(id)
    }, 90)
    return () => clearInterval(id)
  }, [isInView, shouldReduce, text.length])

  if (shouldReduce) {
    return <span className={className}>{text}</span>
  }

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, shown)}</span>
    </span>
  )
}
