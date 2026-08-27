"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { privacyNoticeConfig } from "@/lib/config"

export function CookieNotice() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    // Check if the user has already dismissed the notice
    if (privacyNoticeConfig.enabled) {
      const consent = localStorage.getItem("cookie_consent")
      if (!consent) {
        // Small delay to prevent sudden pop-in
        const timer = setTimeout(() => setIsVisible(true), 1500)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined")
    setIsVisible(false)
  }

  if (!privacyNoticeConfig.enabled) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="bg-[var(--color-primary-900)] text-white rounded-2xl p-6 md:p-8 max-w-[1000px] mx-auto shadow-2xl border border-[var(--color-border-dark)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pointer-events-auto">
            
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-2 text-[16px]">Privacy & Cookie Notice</h3>
              <p className="text-[14px] text-[var(--color-primary-100)] leading-relaxed mb-3">
                {privacyNoticeConfig.message}
              </p>
              <Link 
                href={privacyNoticeConfig.privacyUrl}
                className="text-[13px] font-medium text-[var(--color-accent-400)] hover:text-[var(--color-accent-300)] underline underline-offset-4"
              >
                Read our Privacy Policy
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Button 
                variant="outline" 
                onClick={handleDecline}
                className="bg-transparent border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-[14px]"
              >
                {privacyNoticeConfig.declineButton}
              </Button>
              <Button 
                onClick={handleAccept}
                className="bg-[var(--color-accent-600)] hover:bg-[var(--color-accent-500)] text-white w-full sm:w-auto text-[14px]"
              >
                {privacyNoticeConfig.acceptButton}
              </Button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
