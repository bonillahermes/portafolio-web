"use client"
import { useState, useEffect } from "react"
import { ArrowRight, MessageCircle, User, Bot } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Problems() {
  const [visibleMessages, setVisibleMessages] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const { t } = useLanguage()

  const chatMessages = [
    {
      type: "user",
      message: t("problems.user1"),
      timestamp: "10:30",
    },
    {
      type: "bot",
      message: t("problems.bot1"),
      timestamp: "10:31",
    },
    {
      type: "user",
      message: t("problems.user2"),
      timestamp: "10:32",
    },
    {
      type: "bot",
      message: t("problems.bot2"),
      timestamp: "10:33",
    },
    {
      type: "user",
      message: t("problems.user3"),
      timestamp: "10:34",
    },
    {
      type: "bot",
      message: t("problems.bot3"),
      timestamp: "10:35",
    },
    {
      type: "user",
      message: t("problems.user4"),
      timestamp: "10:36",
    },
    {
      type: "bot",
      message: t("problems.bot4"),
      timestamp: "10:37",
    },
    {
      type: "bot",
      message: t("problems.bot5"),
      timestamp: "10:38",
      highlight: true,
    },
  ]

  useEffect(() => {
    if (visibleMessages < chatMessages.length) {
      const timer = setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setVisibleMessages((prev) => prev + 1)
          setIsTyping(false)
        }, 1000)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [visibleMessages, chatMessages.length])

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 leading-tight">
              {t("problems.title")}
              <br />
              <span className="text-slate-400">{t("problems.familiar")}</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto">{t("problems.subtitle")}</p>
          </div>

          {/* Chat Interface */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
            {/* Chat Header */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1 text-center">
                  <span className="text-sm text-slate-600 font-medium">Strategic Consultation</span>
                </div>
                <MessageCircle className="w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-6 min-h-[600px] max-h-[800px] overflow-y-auto">
              {chatMessages.slice(0, visibleMessages).map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 animate-fade-in ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {msg.type === "bot" && (
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-blue-600" />
                    </div>
                  )}

                  <div className={`max-w-[80%] ${msg.type === "user" ? "order-1" : ""}`}>
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        msg.type === "user"
                          ? "bg-blue-600 text-white"
                          : msg.highlight
                            ? "bg-green-50 text-green-900 border border-green-200"
                            : "bg-slate-100 text-slate-900"
                      }`}
                    >
                      <p className="text-sm md:text-base leading-relaxed">{msg.message}</p>
                    </div>
                    <div className={`text-xs text-slate-400 mt-1 ${msg.type === "user" ? "text-right" : "text-left"}`}>
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.type === "user" && (
                    <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-slate-600" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex gap-3 justify-start animate-fade-in">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="bg-slate-100 px-4 py-3 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input (Disabled) */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white border border-slate-200 rounded-full px-4 py-2">
                  <span className="text-slate-400 text-sm">{t("problems.continuesInPerson")}</span>
                </div>
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Results Preview */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-700 font-medium">{t("problems.verifiableResults")}</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight mb-8">
              {t("problems.notPromises")}
              <br />
              <span className="text-blue-600">{t("problems.areResults")}</span>
            </h3>

            {/* Simple Stats */}
            <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-slate-900 mb-2">35%</div>
                <div className="text-sm text-slate-500">{t("problems.lossReduction")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-slate-900 mb-2">1000x</div>
                <div className="text-sm text-slate-500">{t("problems.fasterProcessing")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-slate-900 mb-2">24/7</div>
                <div className="text-sm text-slate-500">{t("problems.alwaysWorking")}</div>
              </div>
            </div>

            <a
              href="#servicios"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              {t("problems.discoverHow")}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
