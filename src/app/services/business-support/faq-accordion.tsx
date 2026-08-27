"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We support a wide variety of growing and established businesses, including service providers, retail shops, professional offices, independent consultants, and family-owned businesses looking to streamline their daily operations."
  },
  {
    question: "Can this support be ongoing?",
    answer: "Yes. Our Business Support services are primarily designed for long-term partnership. We can provide monthly or ongoing administrative assistance to ensure your business remains organized as it scales."
  },
  {
    question: "Can you organize existing records and processes?",
    answer: "Absolutely. We often begin by reviewing and cleaning up your current administrative workflows and records before establishing a cleaner, more efficient ongoing system."
  },
  {
    question: "Do I need recurring appointments?",
    answer: "It depends on your preference and business needs. We can schedule regular check-ins or simply handle tasks as they arise through our established communication channels."
  },
  {
    question: "How do consultations work?",
    answer: "During a free consultation, we will sit down to discuss your current administrative pain points and goals. From there, we will outline a custom support plan that fits your operational needs."
  }
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div 
            key={index} 
            className="bg-white rounded-xl border border-[var(--color-border)] shadow-sm overflow-hidden transition-colors hover:border-[var(--color-border-strong)]"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)]"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-[16px] transition-colors ${isOpen ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)]'}`}>
                {faq.question}
              </span>
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="ml-4 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#F8F7F4]"
              >
                <ChevronDown className="w-4 h-4 text-[var(--color-slate)]" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="p-6 pt-0 text-[15px] text-[var(--color-slate)] leading-relaxed border-t border-[var(--color-border)] mt-2 bg-white">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
