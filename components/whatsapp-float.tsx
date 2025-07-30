"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function WhatsAppFloat() {
  const { t } = useLanguage()

  return (
    <a
      href={`https://wa.me/573009769468?text=${encodeURIComponent(t("whatsapp.interested"))}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50"
      aria-label="Chat por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  )
}
