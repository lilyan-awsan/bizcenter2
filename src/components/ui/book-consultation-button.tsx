"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { Button, ButtonProps } from "@/components/ui/button"
import { useConsultation } from "@/components/providers/consultation-provider"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

interface BookConsultationButtonProps extends ButtonProps {
  showArrow?: boolean
  label?: string
}

export function BookConsultationButton({ showArrow = false, label, className, children, ...props }: BookConsultationButtonProps) {
  const { openModal } = useConsultation()
  const { language } = useLanguage()
  const tDict = getTranslation(language)

  const defaultText = tDict.nav.bookConsultation

  return (
    <Button onClick={openModal} className={`group ${className || ""}`} {...props}>
      {label || children || defaultText}
      {showArrow && <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />}
    </Button>
  )
}

