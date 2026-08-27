"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Where should I begin?",
    answer: "The best place to begin is by scheduling a free consultation. We will listen to your current situation, outline your administrative goals, and help you identify exactly which documents or forms you should prioritize first."
  },
  {
    question: "What documents should I bring?",
    answer: "For your first consultation, bring any official identification (passport, visa, ID card) and any specific letters or forms you need help understanding. If you don't have everything yet, that's completely fine—we will help you create a list."
  },
  {
    question: "Can you help organize my paperwork?",
    answer: "Yes. Organizing paperwork is our specialty. We can help you sort your documents into clear, easy-to-find categories so you are always prepared when someone asks for your information."
  },
  {
    question: "Can you explain the administrative processes?",
    answer: "We provide general guidance on how standard business and administrative processes work. However, if your situation requires specific immigration, tax, or legal advice, we will gladly refer you to a qualified, licensed professional."
  },
  {
    question: "Do I need an appointment?",
    answer: "Yes, we ask that you book an appointment so we can guarantee that we have the dedicated time needed to review your documents and provide our full attention."
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
