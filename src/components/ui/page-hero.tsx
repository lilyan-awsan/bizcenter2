import * as React from "react"
import { cn } from "@/lib/utils"
import { Section } from "@/components/layout/section"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"

export interface PageHeroProps {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
  className?: string
  theme?: "light" | "soft" | "dark" | "premium-dark"
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  theme = "soft",
}: PageHeroProps) {
  return (
    <Section theme={theme} className={cn("pt-[calc(var(--spacing-20)+88px)]", className)}>
      <StaggerContainer className="max-w-[800px] flex flex-col items-start" delayChildren={0.1} staggerChildren={0.1}>
        {eyebrow && (
          <StaggerItem distance={8}>
            <span className="mb-4 block text-sm font-bold tracking-widest uppercase text-[var(--color-accent-500)]">
              {eyebrow}
            </span>
          </StaggerItem>
        )}
        <StaggerItem distance={12}>
          <h1 className="mb-6">{title}</h1>
        </StaggerItem>
        {description && (
          <StaggerItem distance={10}>
            <p className="mb-8 text-lg text-[var(--color-text-secondary)]">
              {description}
            </p>
          </StaggerItem>
        )}
        {(primaryAction || secondaryAction) && (
          <StaggerItem distance={8}>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              {primaryAction && <div className="w-full sm:w-auto">{primaryAction}</div>}
              {secondaryAction && <div className="w-full sm:w-auto">{secondaryAction}</div>}
            </div>
          </StaggerItem>
        )}
      </StaggerContainer>
    </Section>
  )
}
