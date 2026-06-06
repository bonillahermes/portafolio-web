"use client"

import { useEffect } from "react"

export default function HashScroll() {
  useEffect(() => {
    const hash = window.location.hash
    if (!hash || hash.length < 2) return

    const id = decodeURIComponent(hash.slice(1))
    const scroll = () => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    const timeout = setTimeout(scroll, 100)
    return () => clearTimeout(timeout)
  }, [])

  return null
}
