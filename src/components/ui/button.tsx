import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-primary-900)] text-white hover:bg-[var(--color-primary-800)] shadow-sm",
        secondary: "bg-[var(--color-accent-500)] text-[var(--color-charcoal)] hover:bg-[var(--color-accent-600)] shadow-sm",
        outline: "border border-[var(--color-border)] bg-transparent hover:bg-[var(--color-surface-hover)] text-[var(--color-charcoal)]",
        ghost: "hover:bg-[var(--color-surface-hover)] text-[var(--color-charcoal)]",
        link: "text-[var(--color-primary-900)] underline-offset-4 hover:underline",
        dark: "bg-[var(--color-primary-950)] text-white hover:bg-[var(--color-primary-800)]",
        destructive: "bg-[var(--color-error)] text-white hover:bg-[#8f3232]",
      },
      size: {
        default: "h-12 px-6 py-3 min-h-[44px] min-w-[44px]",
        sm: "h-11 md:h-9 rounded-md px-4 text-xs min-h-[44px] min-w-[44px]",
        lg: "h-14 rounded-md px-8 text-base min-h-[44px] min-w-[44px]",
        icon: "h-12 w-12 min-h-[44px] min-w-[44px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Wrap with framer-motion for smooth hover if not disabled
    if (!props.disabled && !asChild) {
      return (
        <motion.button
          whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
          whileTap={{ scale: 0.98, y: 0, boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
