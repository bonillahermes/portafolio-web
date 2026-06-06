"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef, useState, useEffect, type ReactNode } from "react"

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
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const shouldReduce = useReducedMotion()

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
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
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
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
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  const shouldReduce = useReducedMotion()
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
        {value}
        {suffix}
      </span>
    )
  }

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export function AnimatedLine({ className }: { className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
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
      transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
    />
  )
}
