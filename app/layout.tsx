import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Hermes Bonilla — Analista de Datos para Politica y Gobierno",
  description:
    "Convierto datos en ventaja estrategica para campanas, gobiernos e instituciones publicas. Modelado predictivo, microsegmentacion electoral y analisis geoespacial.",
  keywords:
    "analista de datos, politica, gobierno, inteligencia electoral, microsegmentacion, analisis geoespacial, Colombia",
  authors: [{ name: "Hermes Bonilla" }],
  creator: "Hermes Bonilla",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://hermesbonilla.com",
    title: "Hermes Bonilla — Analista de Datos para Politica y Gobierno",
    description:
      "Convierto datos en ventaja estrategica para campanas, gobiernos e instituciones publicas.",
    siteName: "Hermes Bonilla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermes Bonilla — Analista de Datos para Politica y Gobierno",
    description:
      "Convierto datos en ventaja estrategica para campanas, gobiernos e instituciones publicas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Hermes Bonilla",
              description:
                "Analista de Datos para Politica y Gobierno. Modelado predictivo, microsegmentacion electoral y analisis geoespacial.",
              url: "https://hermesbonilla.com",
              telephone: "+573009769468",
              email: "consulta@hermesbonilla.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogota",
                addressCountry: "CO",
              },
              areaServed: ["Colombia", "LATAM"],
              serviceType: [
                "Inteligencia Electoral",
                "Analisis de Politicas Publicas",
                "Integracion de Datos Institucionales",
                "Analisis Geoespacial y de Riesgo",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
