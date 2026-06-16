import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/next"
import { serviceTitles } from "@/lib/services"
import { SITE_URL } from "@/lib/site"

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Hermes Bonilla",
  description:
    "Analítica de datos, inteligencia artificial y plataformas de gestión para congresistas, UTL y entidades del gobierno nacional colombiano.",
  keywords:
    "analítica de datos, inteligencia artificial, sector público, gobierno Colombia, UTL, congresistas, plataformas de gestión, políticas públicas, análisis legislativo, control político, evaluación de impacto",
  authors: [{ name: "Hermes Bonilla" }],
  creator: "Hermes Bonilla",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITE_URL,
    title: "Hermes Bonilla — Datos, IA y Plataformas para el Sector Público",
    description:
      "Analítica de datos, inteligencia artificial y plataformas de gestión para congresistas, UTL y entidades del gobierno nacional colombiano.",
    siteName: "Hermes Bonilla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermes Bonilla — Datos, IA y Plataformas para el Sector Público",
    description:
      "Analítica de datos, inteligencia artificial y plataformas de gestión para congresistas, UTL y entidades del gobierno nacional colombiano.",
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
      className={`${plexSans.variable} ${plexMono.variable} antialiased`}
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
                "Analítica de datos, inteligencia artificial y plataformas de gestión para congresistas, UTL y entidades del gobierno nacional colombiano.",
              url: SITE_URL,
              telephone: "+573009769468",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogotá",
                addressCountry: "CO",
              },
              areaServed: ["Colombia", "LATAM"],
              serviceType: serviceTitles,
            }),
          }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:text-accent-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
