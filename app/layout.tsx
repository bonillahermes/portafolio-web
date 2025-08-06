import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hermes Bonilla | Data Scientist Senior - Transformación Digital con IA",
  description:
    "Especialista en Data Science e Inteligencia Artificial en Colombia. Transformo datos en decisiones inteligentes para empresas. Modelos predictivos, automatización y análisis avanzado con resultados verificables. Atención virtual y presencial en todo el país.",
  keywords:
    "data science, inteligencia artificial, machine learning, análisis de datos, automatización, modelos predictivos, consultor IA, Colombia, transformación digital, consultoría virtual, data scientist colombia",
  authors: [{ name: "Hermes Bonilla" }],
  creator: "Hermes Bonilla",
  publisher: "Hermes Bonilla",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://bonillahermes.com",
    title: "Hermes Bonilla | Data Scientist Senior - Transformación Digital con IA",
    description:
      "Especialista en Data Science e Inteligencia Artificial. Transformo datos en decisiones inteligentes para empresas con resultados verificables. Atención virtual y presencial en todo el país.",
    siteName: "Hermes Bonilla - Data Scientist",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hermes Bonilla - Data Scientist Senior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermes Bonilla | Data Scientist Senior",
    description: "Transformo datos en decisiones inteligentes para empresas. Especialista en IA y Machine Learning.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://bonillahermes.com",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e293b" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily}, ${inter.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen w-full">
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </div>
      </body>
    </html>
  )
}
