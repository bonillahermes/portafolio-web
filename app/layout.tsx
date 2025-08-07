import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import StickyCTA from "@/components/sticky-cta"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hermes Bonilla - Especialista en Data Science e IA",
  description: "Transformo datos en decisiones inteligentes. Especialista en Data Science e Inteligencia Artificial para empresas colombianas.",
  keywords: "data science, inteligencia artificial, machine learning, colombia, consultor ia, análisis de datos",
  authors: [{ name: "Hermes Bonilla" }],
  creator: "Hermes Bonilla",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://hermesbonilla.com",
    title: "Hermes Bonilla - Especialista en Data Science e IA",
    description: "Transformo datos en decisiones inteligentes. Especialista en Data Science e Inteligencia Artificial para empresas colombianas.",
    siteName: "Hermes Bonilla",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hermes Bonilla - Especialista en Data Science e IA",
    description: "Transformo datos en decisiones inteligentes. Especialista en Data Science e Inteligencia Artificial para empresas colombianas.",
    creator: "@hermesbonilla",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <main>
              <Navbar />
              {children}
            </main>
            <Footer />
            <WhatsAppFloat />
            <StickyCTA />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
