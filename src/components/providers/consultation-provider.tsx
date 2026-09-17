"use client"

import * as React from "react"
import { ConsultationModal } from "@/components/ui/consultation-modal"
import { MobileContactBar } from "@/components/ui/mobile-contact-bar"
import { trackEvent } from "@/lib/analytics"

interface ConsultationContextType {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ConsultationContext = React.createContext<ConsultationContextType | undefined>(undefined)

export function useConsultation() {
  const context = React.useContext(ConsultationContext)
  if (!context) {
    return {
      isOpen: false,
      openModal: () => {
        if (typeof window !== "undefined") {
          window.location.href = "/contact"
        }
      },
      closeModal: () => {}
    }
  }
  return context
}

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false)

  const openModal = React.useCallback(() => {
    setIsOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden"
    trackEvent("consultation_open")
  }, [])

  const closeModal = React.useCallback(() => {
    setIsOpen(false)
    // Restore body scroll
    document.body.style.overflow = "unset"
  }, [])

  // Clean up on unmount
  React.useEffect(() => {
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  return (
    <ConsultationContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeModal} />
      <MobileContactBar />
    </ConsultationContext.Provider>
  )
}
