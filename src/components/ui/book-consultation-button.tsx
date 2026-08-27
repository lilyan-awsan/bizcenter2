"use client"

"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { Button, ButtonProps } from "@/components/ui/button"
import { useConsultation } from "@/components/providers/consultation-provider"

interface BookConsultationButtonProps extends ButtonProps {
  showArrow?: boolean
  label?: string
}

export function BookConsultationButton({ showArrow = false, label, className, children, ...props }: BookConsultationButtonProps) {
  const { openModal } = useConsultation()

  return (
    <Button onClick={openModal} className={`group ${className || ""}`} {...props}>
      {label || children || "Book a Free Consultation"}
      {showArrow && <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />}
    </Button>
  )
}
