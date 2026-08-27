"use client"

import * as React from "react"
import { ContentBlock } from "@/lib/resources"
import { Info, AlertTriangle, Lightbulb } from "lucide-react"

interface RendererProps {
  blocks?: ContentBlock[]
  resourceId: string
  onProgressChange?: (progress: number) => void
}

export function ResourceContentRenderer({ blocks, resourceId, onProgressChange }: RendererProps) {
  // Local storage state for checklist items
  const storageKey = `the-center-checklist-${resourceId}`
  
  const [checkedItems, setCheckedItems] = React.useState<Record<string, boolean>>({})
  const [isMounted, setIsMounted] = React.useState(false)

  // Load from local storage on mount
  React.useEffect(() => {
    setIsMounted(true)
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        setCheckedItems(JSON.parse(saved))
      }
    } catch (e) {
      console.warn("Failed to load checklist state", e)
    }
  }, [storageKey])

  // Save to local storage on change and report progress
  React.useEffect(() => {
    if (!isMounted) return

    try {
      localStorage.setItem(storageKey, JSON.stringify(checkedItems))
    } catch (e) {
      console.warn("Failed to save checklist state", e)
    }

    // Calculate progress if there are checklist blocks
    if (blocks && onProgressChange) {
      let totalItems = 0
      let completedItems = 0

      blocks.forEach(block => {
        if (block.type === "checklist" && block.items) {
          block.items.forEach(item => {
            totalItems++
            if (checkedItems[item.id]) {
              completedItems++
            }
          })
        }
      })

      if (totalItems > 0) {
        onProgressChange(Math.round((completedItems / totalItems) * 100))
      } else {
        onProgressChange(0)
      }
    }
  }, [checkedItems, storageKey, blocks, onProgressChange, isMounted])

  const toggleCheck = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  if (!blocks || blocks.length === 0) {
    return (
      <div className="py-10 text-center border-2 border-dashed border-[var(--color-border-strong)] rounded-xl bg-[var(--color-bg-secondary)]">
        <p className="text-[var(--color-slate)]">Detailed resource content is currently being prepared.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 resource-content-area">
      {blocks.map((block) => {
        switch (block.type) {
          case "heading":
            // Generate an ID for the TOC
            const headingId = block.content?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || block.id
            return (
              <h2 key={block.id} id={headingId} className="text-2xl md:text-3xl font-semibold text-[var(--color-charcoal)] mt-8 mb-2 scroll-mt-24">
                {block.content}
              </h2>
            )
            
          case "paragraph":
            return (
              <p key={block.id} className="text-[17px] md:text-[18px] text-[var(--color-charcoal)] leading-[1.8] mb-4">
                {block.content}
              </p>
            )
            
          case "info":
            return (
              <div key={block.id} className="bg-[var(--color-primary-50)] border-l-4 border-[var(--color-primary-600)] p-5 md:p-6 rounded-r-xl my-6 flex gap-4">
                <Info className="w-6 h-6 text-[var(--color-primary-700)] shrink-0 mt-1" />
                <p className="text-[16px] text-[var(--color-charcoal)] leading-relaxed m-0">{block.content}</p>
              </div>
            )

          case "warning":
            return (
              <div key={block.id} className="bg-[var(--color-accent-50)] border border-[var(--color-accent-200)] p-5 md:p-6 rounded-xl my-6 flex gap-4">
                <AlertTriangle className="w-6 h-6 text-[var(--color-accent-600)] shrink-0 mt-1" />
                <p className="text-[16px] text-[var(--color-charcoal)] leading-relaxed m-0 font-medium">{block.content}</p>
              </div>
            )

          case "tip":
            return (
              <div key={block.id} className="bg-[#F8F7F4] border border-[var(--color-border-strong)] p-5 md:p-6 rounded-xl my-6 flex gap-4 shadow-sm">
                <Lightbulb className="w-6 h-6 text-[var(--color-slate)] shrink-0 mt-1" />
                <div>
                  <h4 className="text-[14px] font-bold text-[var(--color-slate)] uppercase tracking-wider mb-1">Helpful Tip</h4>
                  <p className="text-[16px] text-[var(--color-charcoal)] leading-relaxed m-0">{block.content}</p>
                </div>
              </div>
            )

          case "checklist":
            if (!block.items || block.items.length === 0) return null
            return (
              <div key={block.id} className="flex flex-col gap-3 my-6 bg-white border border-[var(--color-border)] p-2 rounded-xl shadow-sm">
                {block.items.map((item) => {
                  const isChecked = !!checkedItems[item.id]
                  return (
                    <label 
                      key={item.id} 
                      className={`flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-colors duration-[220ms] border border-transparent ${isChecked ? 'bg-[#F8F7F4] opacity-70' : 'hover:bg-[var(--color-offwhite)] hover:border-[var(--color-border)]'}`}
                    >
                      <div className="relative flex items-center justify-center shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          className="peer appearance-none w-6 h-6 border-2 border-[var(--color-border-strong)] rounded focus:ring-2 focus:ring-[var(--color-accent-500)] checked:border-[var(--color-primary-600)] checked:bg-[var(--color-primary-600)] transition-all cursor-pointer"
                          checked={isChecked}
                          onChange={() => toggleCheck(item.id)}
                        />
                        <svg className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className={`text-[17px] leading-relaxed transition-colors duration-[220ms] ${isChecked ? 'text-[var(--color-slate)] line-through' : 'text-[var(--color-charcoal)]'}`}>
                        {item.text}
                      </span>
                    </label>
                  )
                })}
              </div>
            )

          default:
            return null
        }
      })}
    </div>
  )
}
