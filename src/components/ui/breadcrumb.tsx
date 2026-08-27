import * as React from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm text-[var(--color-text-muted)]", className)}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link 
                  href={item.href} 
                  className="hover:text-[var(--color-primary-900)] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus rounded-sm transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span 
                  className="font-medium text-[var(--color-charcoal)]"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              
              {!isLast && (
                <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0 text-[var(--color-border-strong)]" />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
