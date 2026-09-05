"use client"

import * as React from "react"
import { Phone, PhoneOff, Mic, Loader2, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface VoiceAgentWidgetProps {
  vapiPublicKey?: string
  assistantId?: string
}

export function VoiceAgentWidget({
  vapiPublicKey = "YOUR_VAPI_PUBLIC_KEY",
  assistantId = "YOUR_VAPI_ASSISTANT_ID"
}: VoiceAgentWidgetProps) {
  const [callStatus, setCallStatus] = React.useState<"idle" | "connecting" | "active">("idle")
  const [language, setLanguage] = React.useState<"en" | "es" | "ar">("en")
  const [isMuted, setIsMuted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)
  const vapiRef = React.useRef<any>(null)

  // Dynamically load Vapi Web SDK script
  React.useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/vapi.js"
    script.async = true
    script.onload = () => {
      if ((window as any).vapiSDK) {
        vapiRef.current = (window as any).vapiSDK.run({
          apiKey: vapiPublicKey,
          assistant: assistantId
        })
      }
    }
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [vapiPublicKey, assistantId])

  const toggleCall = () => {
    if (callStatus === "idle") {
      setCallStatus("connecting")
      if (vapiRef.current) {
        vapiRef.current.start(assistantId)
          .then(() => setCallStatus("active"))
          .catch((err: any) => {
            console.error("Vapi call error:", err)
            setCallStatus("idle")
          })
      } else {
        // Fallback simulation for demo/preview
        setTimeout(() => setCallStatus("active"), 1200)
      }
    } else {
      if (vapiRef.current) {
        vapiRef.current.stop()
      }
      setCallStatus("idle")
    }
  }

  const getGreeting = () => {
    switch (language) {
      case "es":
        return "¡Hola! Habla con nuestro asistente de IA en español."
      case "ar":
        return "أهلاً بك! تواصل مع المساعد الذكي باللغة العربية."
      default:
        return "Talk live with our 24/7 AI Voice Receptionist."
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="w-[320px] bg-white/90 backdrop-blur-md border border-[var(--color-border)] shadow-2xl rounded-2xl p-5 text-slate-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[var(--color-primary-900)] text-white flex items-center justify-center font-bold text-xs">
                  AI
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">BizAI Voice Receptionist</h4>
                  <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Online • EN / ES / AR
                  </p>
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-xl border border-slate-200/60 mb-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium pl-1">
                <Globe className="w-3.5 h-3.5" /> Language:
              </div>
              <div className="flex gap-1">
                {(["en", "es", "ar"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold uppercase transition-all ${
                      language === lang
                        ? "bg-[var(--color-primary-900)] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-200/60"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-5 leading-relaxed text-center">
              {getGreeting()}
            </p>

            {/* Call Action Button */}
            <button
              onClick={toggleCall}
              className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 shadow-lg transition-all duration-300 ${
                callStatus === "active"
                  ? "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/25"
                  : callStatus === "connecting"
                  ? "bg-amber-500 text-white cursor-wait"
                  : "bg-[var(--color-accent-600)] hover:bg-[var(--color-accent-700)] text-white shadow-amber-500/25"
              }`}
            >
              {callStatus === "connecting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Connecting AI Voice...
                </>
              ) : callStatus === "active" ? (
                <>
                  <PhoneOff className="w-4 h-4" /> End AI Voice Call
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4" /> Start Web Voice Call
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[var(--color-primary-900)] hover:bg-[var(--color-primary-800)] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 group hover:scale-105 active:scale-95"
        aria-label="Toggle Voice AI Assistant"
      >
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  )
}
