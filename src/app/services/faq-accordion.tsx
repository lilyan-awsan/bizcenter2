"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How do I know which service is right for me?",
    answer: "If you're unsure, we recommend booking a free consultation. Our team will listen to your current situation and goals, then suggest the most practical path forward without any pressure."
  },
  {
    question: "Do you provide legal or tax advice?",
    answer: "No. THE CENTER provides business and administrative support. While we guide you through required forms and processes, we do not act as licensed attorneys or CPAs. We can, however, help organize your information so you are prepared when speaking to one."
  },
  {
    question: "How long do typical processes take?",
    answer: "Timelines vary heavily depending on the specific service and external government processing times. We will give you a clear, honest estimate of expected timelines during your initial consultation."
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
