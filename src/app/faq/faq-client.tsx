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
  return (
    <div className="bg-white border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm hover:border-[var(--color-accent-400)] transition-colors duration-[220ms] group">
      <button
        onClick={onClick}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:bg-[#F8F7F4] transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className={`text-[17px] md:text-lg font-semibold pr-8 leading-snug transition-colors duration-[220ms] ${isOpen ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)]'}`}>
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-6 pt-2">
              <div className="w-full h-px bg-[var(--color-border)] mb-4" />
              <p className="text-[16px] text-[var(--color-slate)] leading-relaxed">
                {item.answer}
              </p>
              
              {/* Optional Links */}
              {(item.relatedService || item.relatedResources) && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {item.relatedService && (
                    <Link href={`/services/${item.relatedService}`} className="inline-flex items-center text-[13px] font-semibold text-[var(--color-primary-900)] hover:text-[var(--color-accent-600)] transition-colors">
                      View Service <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  )}
                  {item.relatedResources && item.relatedResources.length > 0 && (
                    <Link href="/resources" className="inline-flex items-center text-[13px] font-semibold text-[var(--color-accent-600)] hover:text-[var(--color-primary-900)] transition-colors">
                      Explore Resources <ArrowRight className="w-3.5 h-3.5 ml-1" />
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

  const [searchQuery, setSearchQuery] = React.useState(searchParams.get("search") || "")
  const [selectedCategory, setSelectedCategory] = React.useState<"All" | FaqCategory>(
    (searchParams.get("category") as "All" | FaqCategory) || "All"
  )
  const [openItemId, setOpenItemId] = React.useState<string | null>(null)

  // URL Sync
  React.useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("search", searchQuery)
    if (selectedCategory !== "All") params.set("category", selectedCategory)

    const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ""}`
    window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl)
  }, [searchQuery, selectedCategory, pathname])

  // Filtering Logic
  const filteredData = React.useMemo(() => {
    let result = FAQ_DATA

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase()
      result = result.filter(item => 
        item.question.toLowerCase().includes(q) || 
        item.answer.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q))
      )
    }

    if (selectedCategory !== "All") {
      result = result.filter(item => item.category === selectedCategory)
    }

    // Sort by order
    return result.sort((a, b) => a.order - b.order)
  }, [searchQuery, selectedCategory])

  const popularQuestions = React.useMemo(() => {
    return FAQ_DATA.filter(q => q.popular).slice(0, 5)
  }, [])

  const handleClearSearch = () => {
    setSearchQuery("")
  }

  const toggleItem = (id: string) => {
    setOpenItemId(prev => prev === id ? null : id)
  }

  return (
    <main className="flex flex-col w-full min-h-screen relative bg-[#FCFBF8]">
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="bg-[#F8F7F4] pt-[120px] pb-[80px] lg:pb-[100px] border-b border-[var(--color-border)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/30 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          
          <nav className="flex items-center text-[13px] font-medium text-[var(--color-slate)] mb-10">
            <Link href="/" className="hover:text-[var(--color-primary-900)] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2" />
            <span className="text-[var(--color-charcoal)]">FAQ</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <StaggerContainer className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10" delayChildren={0.1}>
              <StaggerItem distance={8}>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                  FAQ CENTER
                </span>
              </StaggerItem>

              <StaggerItem distance={16} className="mb-6 max-w-[650px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                  Questions?<br/>Let's Make Things Clear.
                </h1>
              </StaggerItem>

              <StaggerItem distance={12} className="mb-10 max-w-[600px]">
                <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                  Find answers to common questions about THE CENTER's services, administrative support, resources, consultations, and processes.
                </p>
              </StaggerItem>

              <StaggerItem distance={12} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                  <Link href="/contact">
                    Book a Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
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

      {/* =========================================
          SECTION 2: SEARCH & CATEGORY
      ========================================= */}
      <section className="bg-white border-b border-[var(--color-border)] sticky top-[72px] lg:top-[80px] z-40 shadow-sm py-6">
        <div className="container mx-auto px-6 max-w-[900px] flex flex-col gap-6">
          
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl mb-4 text-[var(--color-charcoal)] font-semibold hidden md:block">How Can We Help?</h2>
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-[var(--color-slate)] group-focus-within:text-[var(--color-accent-600)] transition-colors" />
              </div>
              <input
                type="text"
                className="w-full bg-[#F8F7F4] border border-[var(--color-border-strong)] rounded-full py-4 pl-14 pr-12 text-[16px] text-[var(--color-charcoal)] placeholder:text-[var(--color-slate)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent focus:bg-white shadow-sm transition-all duration-300"
                placeholder="Search frequently asked questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search FAQs"
              />
              {searchQuery && (
                <button 
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-0 pr-5 flex items-center text-[var(--color-slate)] hover:text-[var(--color-charcoal)]"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Horizontal Category Navigation */}
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
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-[900px] py-[60px] lg:py-[80px] flex flex-col gap-12">
        
        {/* =========================================
            SECTION 3: POPULAR QUESTIONS
        ========================================= */}
        {searchQuery === "" && selectedCategory === "All" && (
          <StaggerContainer className="flex flex-col gap-4">
            <StaggerItem distance={12}>
              <h2 className="text-xl font-semibold mb-2">Popular Questions</h2>
            </StaggerItem>
            <div className="flex flex-wrap gap-3">
              {popularQuestions.map((item, i) => (
                <StaggerItem key={item.id} distance={8} delay={i * 0.05}>
                  <button 
                    onClick={() => {
                      setSearchQuery(item.question)
                      setOpenItemId(item.id)
                    }}
                    className="flex items-center gap-2 bg-white border border-[var(--color-border-strong)] px-4 py-2.5 rounded-full text-[14px] text-[var(--color-charcoal)] font-medium hover:bg-[#F8F7F4] hover:border-[var(--color-accent-400)] transition-colors shadow-sm"
                  >
                    {item.question} <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-slate)]" />
                  </button>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        )}

        {/* =========================================
            SECTION 4: FAQ LIST
        ========================================= */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-semibold">
              {searchQuery ? "Search Results" : selectedCategory === "All" ? "All Questions" : selectedCategory}
            </h2>
            <span className="text-[14px] font-medium text-[var(--color-slate)] bg-[#F8F7F4] px-3 py-1 rounded-full">
              {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}
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
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 px-6 bg-white rounded-2xl border border-[var(--color-border)] shadow-sm text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--color-bg-secondary)] flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-[var(--color-slate)] opacity-50" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">We Couldn't Find an Answer</h3>
              <p className="text-[15px] text-[var(--color-slate)] mb-6 max-w-[400px]">
                {searchQuery ? "Try another question or browse our categories." : "No questions are currently available in this category."}
              </p>
              <div className="flex gap-4">
                <Button onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} variant="outline" className="bg-white">
                  Browse All Questions
                </Button>
                <Button asChild>
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </div>

        {/* =========================================
            SECTION 5: IMPORTANT INFORMATION
        ========================================= */}
        <StaggerContainer>
          <StaggerItem distance={12}>
            <div className="bg-[var(--color-accent-50)] rounded-2xl p-8 border border-[var(--color-accent-200)] flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                <Info className="w-6 h-6 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <h4 className="text-[17px] font-semibold text-[var(--color-charcoal)] mb-2">Important Information</h4>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  FAQ information is provided for general informational and administrative guidance. Specific requirements may vary depending on your situation. For legal, tax, financial, immigration, or other regulated matters, consult an appropriately qualified professional or official authority.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

      </div>

      {/* =========================================
          SECTION 6: RELATED SERVICES & RESOURCES
      ========================================= */}
      <section className="bg-white py-[100px] border-t border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Services Grid */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
              <h2 className="text-3xl">Looking for a Service?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Business Startup", url: "/services/business-startup" },
                  { title: "Bookkeeping", url: "/services/bookkeeping" },
                  { title: "Business Support", url: "/services/business-support" },
                  { title: "Applications & Admin", url: "/services/applications-administrative-support" },
                  { title: "New to the United States", url: "/services/new-to-the-united-states" }
                ].map((service, i) => (
                  <Link 
                    key={i} 
                    href={service.url}
                    className="group bg-[#F8F7F4] border border-[var(--color-border)] rounded-xl p-6 hover:bg-white hover:border-[var(--color-accent-500)] hover:shadow-md transition-all duration-[220ms] flex items-center justify-between"
                  >
                    <span className="font-semibold text-[var(--color-charcoal)]">{service.title}</span>
                    <ArrowRight className="w-4 h-4 text-[var(--color-slate)] group-hover:text-[var(--color-primary-900)] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources CTA */}
            <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:border-l border-[var(--color-border)] lg:pl-16">
              <h2 className="text-3xl">Need More Information?</h2>
              <p className="text-[16px] text-[var(--color-slate)] leading-relaxed mb-4">
                Explore our checklists and guides for additional practical resources and organizational tools.
              </p>
              <div className="flex flex-col gap-4">
                <Button size="lg" className="w-full justify-between group" asChild>
                  <Link href="/resources">Explore Resources <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full justify-between group bg-white" asChild>
                  <Link href="/resources?type=CHECKLIST">View Checklists <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          FINAL FOOTER CTA
      ========================================= */}
      <section className="bg-[var(--color-primary-900)] py-[100px] text-center">
        <StaggerContainer className="container mx-auto px-6 max-w-[700px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-3xl md:text-4xl">Still Have Questions?</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-[16px] md:text-lg text-[var(--color-primary-100)] mb-8 text-balance">
              Every situation is different. If you cannot find the information you need here, contact THE CENTER and we'll help you identify the appropriate next step.
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)] group" asChild>
                <Link href="/contact">Book a Free Consultation <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white/30 text-white hover:bg-white/10 shadow-none" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}

export default function FaqClientPageWrapper() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#F8F7F4]" />}>
      <FaqContent />
    </React.Suspense>
  )
}
