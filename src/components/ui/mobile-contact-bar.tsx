"use client"

import * as React from "react"
import { Phone, Calendar } from "lucide-react"
import { useConsultation } from "@/components/providers/consultation-provider"
import { contactConfig } from "@/lib/config"

export function MobileContactBar() {
  const { isOpen, openModal } = useConsultation()

  // Hide the sticky bar when modal is open to prevent overlapping
  if (isOpen) return null

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-4 pb-6 bg-white/90 backdrop-blur-md border-t border-[var(--color-border)] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="flex gap-3">
        <a 
          href={`tel:${contactConfig.phoneRaw}`} 
          className="flex-1 bg-white border border-[var(--color-border-strong)] text-[var(--color-charcoal)] rounded-xl py-3.5 flex items-center justify-center gap-2 font-medium shadow-sm active:scale-[0.98] transition-transform"
        >
          <Phone className="w-4 h-4 text-[var(--color-accent-600)]" />
          Call
        </a>
        <button 
          onClick={openModal}
          className="flex-[2] bg-[var(--color-primary-900)] text-white rounded-xl py-3.5 flex items-center justify-center gap-2 font-medium shadow-sm active:scale-[0.98] transition-transform"
        >
          <Calendar className="w-4 h-4 text-[var(--color-primary-200)]" />
          Book Consultation
        </button>
      </div>
    </div>
  )
}
