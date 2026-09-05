"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, X, ArrowRight, ChevronDown, Info, 
  ChevronRight, ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { FaqHeroVisual } from "@/components/ui/faq-hero-visual"
import { FAQ_DATA, FaqCategory, FaqItem } from "@/lib/faq"
import { FAQ_TRANSLATIONS, CATEGORY_TRANSLATIONS } from "@/lib/faqTranslations"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

const CATEGORIES: ("All" | FaqCategory)[] = [
  "All",
  "General",
  "Business Startup",
  "Bookkeeping",
  "Business Support",
  "Applications & Administrative Support",
  "New to the United States",
  "Consultations",
  "Resources"
]

function FaqAccordionItem({ item, isOpen, onClick }: { item: FaqItem, isOpen: boolean, onClick: () => void }) {
  const { language } = useLanguage()
  const isAr = language === "AR"
  const isEs = language === "ES"
  const translation = FAQ_TRANSLATIONS[item.id]

  const qText = isAr && translation?.ar ? translation.ar.q : isEs && translation?.es ? translation.es.q : item.question
  const aText = isAr && translation?.ar ? translation.ar.a : isEs && translation?.es ? translation.es.a : item.answer

  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm hover:border-[var(--color-accent-400)] transition-colors duration-[220ms] group rtl:text-right">
      <button
        onClick={onClick}
        className="w-full text-left rtl:text-right px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:bg-[#F8F7F4] transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className={`text-[17px] md:text-lg font-semibold pr-8 rtl:pr-0 rtl:pl-8 leading-snug transition-colors duration-[220ms] rtl:text-right ${isOpen ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)]'}`}>
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 pt-2 rtl:text-right">
              <div className="w-full h-px bg-[var(--color-border)] mb-4" />
              <p className="text-[16px] text-[var(--color-slate)] leading-relaxed rtl:text-right">
                {aText}
              </p>
              
              {(item.relatedService || item.relatedResources) && (
                <div className="mt-4 flex flex-wrap gap-3 rtl:justify-end">
                  {item.relatedService && (
                    <Link href={`/services/${item.relatedService}`} className="inline-flex items-center text-[13px] font-semibold text-[var(--color-primary-900)] hover:text-[var(--color-accent-600)] transition-colors">
                      <span>{isAr ? "عرض الخدمة" : isEs ? "Ver Servicio" : "View Service"}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180" />
                    </Link>
                  )}
                  {item.relatedResources && item.relatedResources.length > 0 && (
                    <Link href="/resources" className="inline-flex items-center text-[13px] font-semibold text-[var(--color-accent-600)] hover:text-[var(--color-primary-900)] transition-colors">
                      <span>{isAr ? "استكشف الموارد" : isEs ? "Explorar Recursos" : "Explore Resources"}</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 rtl:ml-0 rtl:mr-1 rtl:rotate-180" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FaqContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAr = language === "AR"
  const isEs = language === "ES"

  const [searchQuery, setSearchQuery] = React.useState(searchParams.get("search") || "")
  const [selectedCategory, setSelectedCategory] = React.useState<"All" | FaqCategory>(
    (searchParams.get("category") as "All" | FaqCategory) || "All"
  )
  const [openItemId, setOpenItemId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("search", searchQuery)
    if (selectedCategory !== "All") params.set("category", selectedCategory)

    const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ""}`
    window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl)
  }, [searchQuery, selectedCategory, pathname])

  const filteredData = React.useMemo(() => {
    let result = FAQ_DATA

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase()
      result = result.filter(item => {
        const translation = FAQ_TRANSLATIONS[item.id]
        const qText = (isAr && translation?.ar ? translation.ar.q : isEs && translation?.es ? translation.es.q : item.question).toLowerCase()
        const aText = (isAr && translation?.ar ? translation.ar.a : isEs && translation?.es ? translation.es.a : item.answer).toLowerCase()
        return qText.includes(q) || aText.includes(q) || item.question.toLowerCase().includes(q)
      })
    }

    if (selectedCategory !== "All") {
      result = result.filter(item => item.category === selectedCategory)
    }

    return result.sort((a, b) => a.order - b.order)
  }, [searchQuery, selectedCategory, isAr, isEs])

  const popularQuestions = React.useMemo(() => {
    return FAQ_DATA.filter(q => q.popular).slice(0, 5)
  }, [])

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  const toggleItem = (id: string) => {
    setOpenItemId(prev => prev === id ? null : id)
  }

  const getCategoryLabel = (cat: "All" | FaqCategory) => {
    if (cat === "All") {
      return isAr ? "الكل" : isEs ? "Todos" : "All"
    }
    return isAr && CATEGORY_TRANSLATIONS[cat]?.ar 
      ? CATEGORY_TRANSLATIONS[cat].ar 
      : isEs && CATEGORY_TRANSLATIONS[cat]?.es 
      ? CATEGORY_TRANSLATIONS[cat].es 
      : cat
  }

  return (
    <main className="flex flex-col w-full min-h-screen relative bg-[#FCFBF8] rtl:text-right">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#F8F7F4] pt-[120px] pb-[80px] lg:pb-[100px] border-b border-[var(--color-border)] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          
          <nav className="flex items-center text-[13px] font-medium text-[var(--color-slate)] mb-10 rtl:flex-row-reverse rtl:justify-end">
            <Link href="/" className="hover:text-[var(--color-primary-900)] transition-colors">{tDict.nav.home}</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 rtl:rotate-180" />
            <span className="text-[var(--color-charcoal)]">{isAr ? "الأسئلة الشائعة" : isEs ? "Preguntas Frecuentes" : "FAQ"}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <StaggerContainer className="w-full lg:w-[55%] flex flex-col items-center lg:items-start rtl:lg:items-end text-center lg:text-left rtl:lg:text-right z-10" delayChildren={0.1}>
              <StaggerItem distance={8}>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block rtl:text-right">
                  {isAr ? "مركز الأسئلة الشائعة" : isEs ? "CENTRO DE PREGUNTAS FRECUENTES" : "FAQ CENTER"}
                </span>
              </StaggerItem>

              <StaggerItem distance={16} className="mb-6 max-w-[650px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] rtl:text-right">
                  {isAr ? "لديك أسئلة؟\nدعنا نوضح لك كافة التفاصيل." : isEs ? "¿Tiene Preguntas?\nAclare sus DUDAS con Nosotros." : "Questions?\nLet's Make Things Clear."}
                </h1>
              </StaggerItem>

              <StaggerItem distance={12} className="mb-10 max-w-[600px]">
                <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed rtl:text-right">
                  {isAr 
                    ? "إجابات شاملة على كافة الأسئلة الشائعة حول خدمات 'ذا سنتر'، الدعم الإداري، الموارد المتاحة، وكيفية حجز الاستشارات." 
                    : isEs 
                    ? "Encuentre respuestas a las preguntas frecuentes sobre los servicios de THE CENTER, apoyo administrativo, recursos y consultas." 
                    : "Find answers to common questions about THE CENTER's services, administrative support, resources, consultations, and processes."}
                </p>
              </StaggerItem>

              <StaggerItem distance={12} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                  <Link href="/contact">
                    <span>{tDict.nav.bookConsultation}</span>
                    <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </StaggerItem>
            </StaggerContainer>

            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
              <FaqHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SEARCH & CATEGORY */}
      <section className="bg-white border-b border-[var(--color-border)] sticky top-[72px] lg:top-[80px] z-40 shadow-sm py-6">
        <div className="container mx-auto px-6 max-w-[900px] flex flex-col gap-6">
          
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl mb-4 text-[var(--color-charcoal)] font-semibold hidden md:block">
              {isAr ? "كيف يمكننا مساعدتك اليوم؟" : isEs ? "¿Cómo Podemos Ayudarle?" : "How Can We Help?"}
            </h2>
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-5 rtl:pl-0 rtl:pr-5 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[var(--color-slate)] group-focus-within:text-[var(--color-accent-600)] transition-colors" />
              </div>
              <input
                type="text"
                className="w-full bg-[#F8F7F4] border border-[var(--color-border-strong)] rounded-full py-4 pl-14 pr-12 rtl:pl-12 rtl:pr-14 text-[16px] text-[var(--color-charcoal)] placeholder:text-[var(--color-slate)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent focus:bg-white shadow-sm transition-all duration-300 rtl:text-right"
                placeholder={isAr ? "ابحث في الأسئلة الشائعة..." : isEs ? "Buscar en preguntas frecuentes..." : "Search frequently asked questions..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 pr-5 rtl:pr-0 rtl:pl-5 flex items-center text-[var(--color-slate)] hover:text-[var(--color-charcoal)]"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          <div className="w-full overflow-x-auto pb-2 -mb-2 no-scrollbar">
            <div className="flex gap-2 min-w-max mx-auto justify-center md:justify-start lg:justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat)
                    setOpenItemId(null)
                  }}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition-all duration-[220ms] ${
                    selectedCategory === cat 
                      ? 'bg-[var(--color-primary-900)] text-white shadow-md ring-1 ring-[var(--color-accent-500)]' 
                      : 'bg-[#F8F7F4] text-[var(--color-slate)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-charcoal)]'
                  }`}
                >
                  {getCategoryLabel(cat)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-[900px] py-[60px] lg:py-[80px] flex flex-col gap-12">
        
        {/* SECTION 3: POPULAR QUESTIONS */}
        {searchQuery === "" && selectedCategory === "All" && (
          <StaggerContainer className="flex flex-col gap-4">
            <StaggerItem distance={12}>
              <h2 className="text-xl font-semibold mb-2 rtl:text-right">
                {isAr ? "الأسئلة الأكثر تكراراً" : isEs ? "Preguntas Populares" : "Popular Questions"}
              </h2>
            </StaggerItem>
            <div className="flex flex-wrap gap-3 rtl:justify-end">
              {popularQuestions.map((item, i) => {
                const translation = FAQ_TRANSLATIONS[item.id]
                const qText = isAr && translation?.ar ? translation.ar.q : isEs && translation?.es ? translation.es.q : item.question

                return (
                  <StaggerItem key={item.id} distance={8} delay={i * 0.05}>
                    <button 
                      onClick={() => {
                        setSearchQuery(qText)
                        setOpenItemId(item.id)
                      }}
                      className="flex items-center gap-2 bg-white border border-[var(--color-border-strong)] px-4 py-2.5 rounded-full text-[14px] text-[var(--color-charcoal)] font-medium hover:bg-[#F8F7F4] hover:border-[var(--color-accent-400)] transition-colors shadow-sm rtl:flex-row-reverse"
                    >
                      <span>{qText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-slate)] rtl:rotate-180" />
                    </button>
                  </StaggerItem>
                )
              })}
            </div>
          </StaggerContainer>
        )}

        {/* SECTION 4: FAQ LIST */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between mb-2 rtl:flex-row-reverse">
            <h2 className="text-2xl font-semibold rtl:text-right">
              {searchQuery 
                ? (isAr ? "نتائج البحث" : isEs ? "Resultados de Búsqueda" : "Search Results")
                : getCategoryLabel(selectedCategory)}
            </h2>
            <span className="text-[14px] font-medium text-[var(--color-slate)] bg-[#F8F7F4] px-3 py-1 rounded-full">
              {filteredData.length} {isAr ? "نتيجة" : isEs ? "resultados" : "results"}
            </span>
          </div>

          {filteredData.length > 0 ? (
            <motion.div layout className="flex flex-col gap-4">
              <AnimatePresence>
                {filteredData.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaqAccordionItem 
                      item={item} 
                      isOpen={openItemId === item.id}
                      onClick={() => toggleItem(item.id)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white border border-[var(--color-border)] rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">
                {isAr ? "لم نتمكن من العثور على نتائج مطابقة" : isEs ? "No se encontraron resultados" : "No questions found"}
              </h3>
              <p className="text-[14px] text-[var(--color-slate)] mb-6">
                {isAr ? "جرب البحث عن كلمات أخرى أو تواصل معنا مباشرة." : isEs ? "Intente buscar con otros términos o contáctenos directamente." : "Try adjusting your search query or browse categories above."}
              </p>
              <Button onClick={handleClearSearch} variant="outline">
                {isAr ? "إعادة ضبط البحث" : isEs ? "Limpiar Búsqueda" : "Clear Search"}
              </Button>
            </div>
          )}
        </div>

      </div>

    </main>
  )
}

export default function FaqClientPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#FCFBF8] pt-[120px] text-center">Loading FAQ...</div>}>
      <FaqContent />
    </React.Suspense>
  )
}
