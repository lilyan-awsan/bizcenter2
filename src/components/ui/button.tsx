"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-accent-500)] text-white hover:bg-[var(--color-accent-600)] shadow-[0_4px_15px_rgba(226,6,19,0.2)] hover:shadow-[0_0_25px_rgba(226,6,19,0.35)]",
        navy: "bg-[var(--color-primary-900)] text-white hover:bg-[var(--color-primary-800)] shadow-[0_4px_15px_rgba(22,23,92,0.2)] hover:shadow-[0_8px_25px_rgba(22,23,92,0.3)]",
        secondary: "bg-[var(--color-primary-900)] text-white hover:bg-[var(--color-primary-800)] shadow-sm",
        outline: "border border-[var(--future-line)] bg-white/80 backdrop-blur-sm hover:bg-[var(--color-surface-hover)] text-[var(--color-primary-900)] hover:border-[var(--color-primary-900)]",
        ghost: "hover:bg-[var(--color-primary-50)] text-[var(--color-primary-900)]",
        link: "text-[var(--color-accent-500)] underline-offset-4 hover:underline font-bold",
        dark: "bg-[var(--color-primary-950)] text-white border border-white/10 hover:bg-[var(--color-primary-900)] hover:border-white/20",
        destructive: "bg-[var(--color-error)] text-white hover:bg-[#b0030c]",
      },
      size: {
        default: "h-12 px-6 py-3 min-h-[44px] min-w-[44px]",
        sm: "h-10 rounded-md px-4 text-xs min-h-[44px] min-w-[44px]",
        lg: "h-14 rounded-xl px-8 text-base min-h-[44px] min-w-[44px]",
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
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as any }}
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref as any}
          {...(props as any)}
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

