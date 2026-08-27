"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { FAQ_DATA, FaqCategory } from "@/lib/faq"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"

interface SharedFaqAccordionProps {
  category: FaqCategory
  limit?: number
}

export function SharedFaqAccordion({ category, limit = 4 }: SharedFaqAccordionProps) {
  const [openItemId, setOpenItemId] = React.useState<string | null>(null)

  // Fetch questions from centralized data
  const questions = React.useMemo(() => {
    return FAQ_DATA.filter(q => q.category === category).slice(0, limit)
  }, [category, limit])

  if (questions.length === 0) return null

  return (
    <div className="flex flex-col gap-8">
      <StaggerContainer className="flex flex-col gap-4">
        {questions.map((item, i) => {
          const isOpen = openItemId === item.id

          return (
            <StaggerItem key={item.id} distance={8} delay={i * 0.1}>
              <div className="bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm hover:border-[var(--color-accent-400)] transition-colors duration-[220ms] group">
                <button
                  onClick={() => setOpenItemId(isOpen ? null : item.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:bg-[#F8F7F4] transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-[17px] font-semibold pr-4 leading-snug transition-colors duration-[220ms] ${isOpen ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)]'}`}>
                    {item.question}
                  </h3>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-[220ms] ${isOpen ? 'bg-[var(--color-primary-50)]' : 'bg-[#F8F7F4] group-hover:bg-[var(--color-primary-50)]'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-[300ms] ${isOpen ? 'rotate-180 text-[var(--color-primary-900)]' : 'text-[var(--color-slate)]'}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as any }}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="w-full h-px bg-[var(--color-border)] mb-4" />
                        <p className="text-[16px] text-[var(--color-slate)] leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          )
        })}
      </StaggerContainer>

      <StaggerItem distance={12} delay={0.4} className="flex justify-center mt-2">
        <Button variant="outline" className="bg-white group" asChild>
          <Link href={`/faq?category=${encodeURIComponent(category)}`}>
            View All FAQs <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </StaggerItem>
    </div>
  )
}
