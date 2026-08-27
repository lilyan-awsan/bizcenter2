"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Can you complete forms for me?",
    answer: "We can help you organize the necessary information and guide you through the required fields, but the final accuracy and submission must be verified and authorized by you or a designated legal representative."
  },
  {
    question: "What documents should I bring to my consultation?",
    answer: "Please bring any official identification, relevant business registration paperwork, and the specific forms or correspondence you need assistance with."
  },
  {
    question: "Can you review my paperwork before I submit it?",
    answer: "We can review your paperwork for completeness, basic administrative accuracy, and organization. However, we cannot review it for legal or tax compliance."
  },
  {
    question: "How long does preparation take?",
    answer: "Preparation time depends entirely on the complexity of the application and how quickly you can provide the required supporting documents."
  },
  {
    question: "What happens after submission?",
    answer: "After submission, we can help you organize and track any correspondence you receive back from the relevant agency, though we do not act as your legal representative in communications."
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
