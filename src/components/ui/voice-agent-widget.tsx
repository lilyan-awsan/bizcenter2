"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone,
  PhoneCall,
  Mic,
  Sparkles,
  X,
  Globe,
  Calendar,
  ExternalLink,
  Volume2,
  ShieldCheck,
  Headphones
} from "lucide-react"
import { contactConfig } from "@/lib/config"
import { useLanguage, type Language } from "@/context/language-context"
import { useConsultation } from "@/components/providers/consultation-provider"

interface VoiceAgentWidgetProps {
  demoUrl?: string
  directPhone?: string
}

export function VoiceAgentWidget({
  demoUrl = contactConfig.aiVoiceDemoUrl || "https://app.bizai.center/call-flows/demo/e3bfa2ffa55e35b059fa3d3bf8de7a96",
  directPhone = contactConfig.aiVoicePhone || "(901) 676-1151"
}: VoiceAgentWidgetProps) {
  const { language: globalLang, setLanguage: setGlobalLang } = useLanguage()
  const { openModal: openConsultationModal } = useConsultation()

  const [isOpen, setIsOpen] = React.useState(false)
  const [activeLang, setActiveLang] = React.useState<Language>(globalLang || "EN")
  const [hasInteracted, setHasInteracted] = React.useState(false)

  // Sync with global site language when it changes
  React.useEffect(() => {
    if (globalLang) {
      setActiveLang(globalLang)
    }
  }, [globalLang])

  const content = {
    EN: {
      agentName: "THE CENTER Voice Agent",
      role: "Sarah — Virtual Receptionist",
      onlineStatus: "Online • 24/7 Voice Ready",
      headline: "Talk directly with our live AI Voice Receptionist",
      description:
        "Instant answers for business licensing, company registration, bookkeeping, tax filings, and office consultations.",
      startWebCall: "Start Live Voice Call",
      directCallLabel: "Dedicated AI Direct Line",
      directCallSub: "Direct dial into THE CENTER Voice Agent",
      bookConsultation: "Schedule an Office Consultation",
      poweredBy: "Powered by BizAI Center (TheCenter)",
      activeCallNotice: "Clicking opens the interactive real-time voice session.",
      badge: "LIVE AI"
    },
    ES: {
      agentName: "THE CENTER Agente de Voz",
      role: "Sarah — Recepcionista Virtual",
      onlineStatus: "En línea • Voz Activa 24/7",
      headline: "Habla en vivo con nuestra recepcionista con Inteligencia Artificial",
      description:
        "Respuestas inmediatas sobre licencias comerciales, registro de empresas, contabilidad, impuestos y citas presenciales.",
      startWebCall: "Iniciar Llamada de Voz",
      directCallLabel: "Línea Directa de la IA",
      directCallSub: "Llamada directa al agente de voz de THE CENTER",
      bookConsultation: "Agendar Consulta Presencial",
      poweredBy: "Con tecnología de BizAI Center (TheCenter)",
      activeCallNotice: "Inicia la sesión de voz interactiva en tiempo real.",
      badge: "IA EN VIVO"
    },
    AR: {
      agentName: "المركز — الموظفة الصوتية الذكية",
      role: "سارة — مسؤولة الاستقبال الذكية",
      onlineStatus: "متصلة • جاهزة صوتياً 24/7",
      headline: "تحدث مباشرة بصوتك مع موظفة الاستقبال الذكية لـ 'المركز'",
      description:
        "إجابات فورية ومباشرة حول تراخيص الأعمال، تأسيس الشركات، مسك الدفاتر، الضرائب، وحجز الاستشارات المكتبية.",
      startWebCall: "بدء محادثة صوتية مباشرة",
      directCallLabel: "الخط المباشر للذكاء الاصطناعي",
      directCallSub: "اتصال هاتفي مباشر بموظفة صوت المركز",
      bookConsultation: "حجز موعد استشارة بمكتبنا",
      poweredBy: "مدعوم من منصة BizAI Center (مساحة TheCenter)",
      activeCallNotice: "يفتح جلسة التحدث الصوتي التفاعلية المباشرة.",
      badge: "ذكاء اصطناعي"
    }
  }

  const current = content[activeLang] || content.EN
  const isRtl = activeLang === "AR"

  const handleLaunchWebCall = () => {
    setHasInteracted(true)
    const width = 480
    const height = 720
    const left = window.screen.width ? (window.screen.width - width) / 2 : 100
    const top = window.screen.height ? (window.screen.height - height) / 2 : 100
    window.open(
      demoUrl,
      "TheCenterVoiceAgent",
      `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes,status=no,location=no,toolbar=no,menubar=no`
    )
  }

  const handleLanguageChange = (lang: Language) => {
    setActiveLang(lang)
    setGlobalLang(lang)
  }

  return (
    <div
      className={`fixed bottom-6 ${isRtl ? "left-6" : "right-6"} z-[9999] flex flex-col ${
        isRtl ? "items-start" : "items-end"
      } gap-3 font-sans print:hidden`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.94 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-[340px] sm:w-[370px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-2xl rounded-3xl p-5 text-slate-800 dark:text-slate-100 overflow-hidden relative"
          >
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--color-primary-900)] via-[var(--color-accent-500)] to-[var(--color-primary-900)]" />

            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3.5 mb-3.5 mt-1">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[var(--color-primary-900)] to-[#1a365d] text-white flex items-center justify-center font-bold text-sm shadow-md ring-2 ring-amber-400/20">
                    <Headphones className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900" />
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold leading-tight text-slate-900 dark:text-white">
                      {current.agentName}
                    </h4>
                  </div>
                  <p className="text-[12px] text-slate-500 dark:text-slate-400 font-medium">
                    {current.role}
                  </p>
                  <p className="text-[10.5px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {current.onlineStatus}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close Voice Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60 mb-3.5">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <Globe className="w-3.5 h-3.5" />
                <span>Language:</span>
              </div>
              <div className="flex gap-1">
                {(["EN", "ES", "AR"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`px-2.5 py-0.5 rounded-lg text-xs font-bold uppercase transition-all ${
                      activeLang === lang
                        ? "bg-[var(--color-primary-900)] text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-700"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Animated Voice Wave */}
            <div className="bg-slate-50/80 dark:bg-slate-800/40 rounded-2xl p-3.5 border border-slate-100 dark:border-slate-800 mb-4">
              <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                {current.description}
              </p>
              <div className="mt-3 flex items-center justify-between pt-2.5 border-t border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Real-time Voice AI</span>
                </div>
                {/* Audio Equalizer wave bars */}
                <div className="flex items-end gap-1 h-3.5">
                  <span className="w-1 bg-amber-500 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2.5" />
                  <span className="w-1 bg-amber-600 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-3.5" />
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
                  <span className="w-1 bg-amber-500 rounded-full animate-[pulse_1s_ease-in-out_infinite] h-3" />
                </div>
              </div>
            </div>

            {/* Primary Action Button: Launch Live Voice Call */}
            <button
              onClick={handleLaunchWebCall}
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[var(--color-primary-900)] to-[#1b3a60] hover:from-[#0d223f] hover:to-[#224874] shadow-lg shadow-blue-950/20 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <Mic className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>{current.startWebCall}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Secondary Action: Direct Phone Line */}
            <div className="mt-2.5">
              <a
                href={`tel:${contactConfig.aiVoicePhoneRaw || "9016761151"}`}
                className="w-full py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200 group"
              >
                <span className="flex items-center gap-2">
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>{current.directCallLabel}</span>
                </span>
                <span className="font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                  {directPhone}
                </span>
              </a>
            </div>

            {/* Tertiary Action: Schedule Human Consultation */}
            <div className="mt-2">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false)
                  openConsultationModal()
                }}
                className="w-full py-2 px-3 rounded-xl text-xs font-medium text-slate-500 hover:text-[var(--color-primary-900)] dark:text-slate-400 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{current.bookConsultation}</span>
              </button>
            </div>

            {/* Footer Notice */}
            <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 text-center">
              <p className="text-[10px] text-slate-400 dark:text-slate-500">
                {current.poweredBy}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 px-4 rounded-full bg-gradient-to-r from-[var(--color-primary-900)] to-[#152e4d] text-white shadow-2xl hover:shadow-blue-950/40 border border-amber-400/30 flex items-center gap-2.5 transition-all duration-300 group cursor-pointer"
        aria-label="Toggle THE CENTER Voice Agent"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>

        <div className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
          <Mic className="w-4 h-4" />
        </div>

        <div className="flex flex-col items-start pr-1">
          <span className="text-xs font-extrabold tracking-wide uppercase leading-tight text-amber-300">
            {activeLang === "AR" ? "موظفة المركز الذكية" : "THE CENTER AI"}
          </span>
          <span className="text-[10px] text-slate-200 leading-tight flex items-center gap-1 font-medium">
            <Volume2 className="w-2.5 h-2.5 text-emerald-400" />
            {activeLang === "AR" ? "تحدث بالصوت" : "Live Voice Agent"}
          </span>
        </div>
      </motion.button>
    </div>
  )
}
