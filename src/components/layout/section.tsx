import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva(
  "w-full py-[var(--spacing-14)] md:py-[var(--spacing-20)] transition-colors",
  {
    variants: {
      theme: {
        light: "bg-[var(--color-bg-primary)] text-[var(--color-foreground)]",
        soft: "bg-[var(--color-bg-secondary)] text-[var(--color-foreground)]",
        dark: "bg-[var(--color-primary-950)] text-white",
        "premium-dark": "bg-[var(--color-primary-900)] text-white shadow-inner",
        accent: "bg-[var(--color-accent-50)] text-[var(--color-charcoal)]",
      },
      container: {
        default: "",
        fluid: "px-0",
      },
    },
    defaultVariants: {
      theme: "light",
      container: "default",
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  innerClassName?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, innerClassName, theme, container, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ theme, container, className }))}
        {...props}
      >
        <div 
          className={cn(
            container === "fluid" 
              ? "w-full" 
              : "container mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-6)] max-w-[var(--container-xl)]",
            innerClassName
          )}
        >
          {children}
        </div>
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section, sectionVariants }
