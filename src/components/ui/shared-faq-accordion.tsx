"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { FAQ_DATA, FaqCategory } from "@/lib/faq"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { useLanguage } from "@/context/language-context"

interface SharedFaqAccordionProps {
  category: FaqCategory
  limit?: number
}

// Translations dictionary for FAQ items
const FAQ_TRANSLATIONS: Record<string, { es: { q: string; a: string }; ar: { q: string; a: string } }> = {
  g1: {
    es: { q: "¿Qué es THE CENTER?", a: "THE CENTER brinda servicios integrales de apoyo empresarial y administrativo. Ayudamos a individuos y organizaciones simplificando la preparación de documentos y organizando registros." },
    ar: { q: "ما هو 'ذا سنتر'؟", a: "يقدم 'ذا سنتر' خدمات الدعم الإداري والتجاري الشاملة. نساعد الأفراد والشركات من خلال تنظيم إعداد الوثائق والسجلات المالية والتوجيه العملي بثقة." }
  },
  g5: {
    es: { q: "¿Ofrecen consultas gratuitas?", a: "Sí, ofrecemos consultas iniciales gratuitas para evaluar sus necesidades y determinar la mejor manera de ayudarle." },
    ar: { q: "هل تقدمون استشارات مجانية؟", a: "نعم، نقدم استشارات أولية مجانية لمناقشة وضعك الخاص وتحديد كيف يمكن لخدماتنا الإدارية مساعدتك." }
  },
  bs1: {
    es: { q: "¿Puede THE CENTER ayudarme a iniciar una empresa?", a: "Sí, brindamos apoyo administrativo y organizacional para la formación de empresas, ayudándole con la preparación de documentos e información inicial." },
    ar: { q: "هل يمكن لـ 'ذا سنتر' مساعدتي في تأسيس مشروع تجاري؟", a: "نعم، نقدم الدعم الإداري والتنظيمي لتأسيس الشركات. نساعدك في إعداد المستندات المطلوبة وتنظيم البيانات المطلوبة للانطلاق بثقة." }
  },
  bk1: {
    es: { q: "¿Qué apoyo de contabilidad brindan?", a: "Ofrecemos clasificación de transacciones, organización mensual de registros y preparación de datos para su contador." },
    ar: { q: "ما هو دعم حفظ الدفاتر الذي تقدمونه؟", a: "نقدم تصنيف المعاملات المالية، وتنظيم السجلات الشهرية، وإعداد التقارير الأساسية لتسليمها لمحاسبك القانوني بسهولة." }
  }
}

export function SharedFaqAccordion({ category, limit = 4 }: SharedFaqAccordionProps) {
  const { language } = useLanguage()
  const [openItemId, setOpenItemId] = React.useState<string | null>(null)
  const isAr = language === 'AR'
  const isEs = language === 'ES'

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
          const translation = FAQ_TRANSLATIONS[item.id]
          const qText = isAr && translation?.ar ? translation.ar.q : isEs && translation?.es ? translation.es.q : item.question
          const aText = isAr && translation?.ar ? translation.ar.a : isEs && translation?.es ? translation.es.a : item.answer

          return (
            <StaggerItem key={item.id} distance={8} delay={i * 0.1}>
              <div className="bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm hover:border-[var(--color-accent-400)] transition-colors duration-[220ms] group">
                <button
                  onClick={() => setOpenItemId(isOpen ? null : item.id)}
                  className="w-full text-left rtl:text-right px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:bg-[#F8F7F4] transition-colors"
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-[17px] font-semibold pr-4 rtl:pr-0 rtl:pl-4 leading-snug transition-colors duration-[220ms] ${isOpen ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)]'}`}>
                    {qText}
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
                      <div className="px-6 pb-6 pt-2 text-left rtl:text-right">
                        <div className="w-full h-px bg-[var(--color-border)] mb-4" />
                        <p className="text-[16px] text-[var(--color-slate)] leading-relaxed">
                          {aText}
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
            {isAr ? "عرض جميع الأسئلة الشائعة" : isEs ? "Ver Todas las Preguntas Frecuentes" : "View All FAQs"} 
            <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
        </Button>
      </StaggerItem>
    </div>
  )
}
