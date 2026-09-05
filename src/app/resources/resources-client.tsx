"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, ArrowRight, Download, ExternalLink, FileText, 
  BookOpen, ClipboardList, Info, MessageCircleQuestion,
  Filter, X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { ResourcesHeroVisual } from "@/components/ui/resources-hero-visual"
import { RESOURCES, ResourceItem, ResourceCategory, ResourceType } from "@/lib/resources"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

export function ResourcesHubContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAR = language === "AR"

  const CATEGORY_LABELS: Record<string, { EN: string; ES: string; AR: string }> = {
    "All": { EN: "All", ES: "Todos", AR: "الكل" },
    "Business Startup": { EN: "Business Startup", ES: "Inicio de Negocios", AR: "تأسيس الأعمال" },
    "Bookkeeping": { EN: "Bookkeeping", ES: "Contabilidad", AR: "مسك الدفاتر المحاسبية" },
    "Business Support": { EN: "Business Support", ES: "Soporte Empresarial", AR: "دعم الأعمال التجارية" },
    "Applications & Administrative Support": { EN: "Applications & Admin Support", ES: "Solicitudes y Soporte Admin", AR: "الطلبات والمعاملات الإدارية" },
    "New to the United States": { EN: "New to the U.S.", ES: "Nuevo en EE. UU.", AR: "القادمون الجدد لأمريكا" },
    "Forms & Documents": { EN: "Forms & Documents", ES: "Formularios y Documentos", AR: "النماذج والمستندات" },
    "FAQs": { EN: "FAQs", ES: "Preguntas Frecuentes", AR: "الأسئلة الشائعة" },
    "Official Resources": { EN: "Official Resources", ES: "Recursos Oficiales", AR: "المصادر الرسمية" }
  }

  const CATEGORIES: ResourceCategory[] = [
    "All",
    "Business Startup",
    "Bookkeeping",
    "Business Support",
    "Applications & Administrative Support",
    "New to the United States",
    "Forms & Documents",
    "FAQs",
    "Official Resources"
  ]

  const TYPE_LABELS: Record<string, { EN: string; ES: string; AR: string }> = {
    "All": { EN: "All Types", ES: "Todos los Tipos", AR: "جميع الأنواع" },
    "CHECKLIST": { EN: "Checklist", ES: "Lista de Verificación", AR: "قائمة مراجعة" },
    "GUIDE": { EN: "Guide", ES: "Guía", AR: "دليل إرشادي" },
    "FAQ": { EN: "FAQ", ES: "Preguntas Frecuentes", AR: "أسئلة شائعة" },
    "FORM": { EN: "Form", ES: "Formulario", AR: "نموذج رسمي" },
    "OFFICIAL RESOURCE": { EN: "Official Link", ES: "Enlace Oficial", AR: "رابط رسمي" },
    "ARTICLE": { EN: "Article", ES: "Artículo", AR: "مقالة" },
    "WORKSHEET": { EN: "Worksheet", ES: "Hoja de Trabajo", AR: "ورقة عمل" }
  }

  const TYPES: (ResourceType | "All")[] = [
    "All", "CHECKLIST", "GUIDE", "FAQ", "FORM", "OFFICIAL RESOURCE", "ARTICLE", "WORKSHEET"
  ]

  // State initialized from URL params if present
  const [searchQuery, setSearchQuery] = React.useState(searchParams.get("search") || "")
  const [selectedCategory, setSelectedCategory] = React.useState<ResourceCategory>(
    (searchParams.get("category") as ResourceCategory) || "All"
  )
  const [selectedType, setSelectedType] = React.useState<ResourceType | "All">(
    (searchParams.get("type") as ResourceType | "All") || "All"
  )
  const [downloadableOnly, setDownloadableOnly] = React.useState(searchParams.get("downloadable") === "true")
  const [sortOption, setSortOption] = React.useState<"Recommended" | "Newest" | "A-Z">(
    (searchParams.get("sort") as "Recommended" | "Newest" | "A-Z") || "Recommended"
  )

  const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false)

  // Filtering Logic
  const filteredResources = React.useMemo(() => {
    let result = RESOURCES

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase()
      result = result.filter(r => 
        r.title.toLowerCase().includes(q) || 
        r.description.toLowerCase().includes(q) ||
        r.tags.some(t => t.toLowerCase().includes(q))
      )
    }

    if (selectedCategory !== "All") {
      result = result.filter(r => r.category === selectedCategory)
    }

    if (selectedType !== "All") {
      result = result.filter(r => r.type === selectedType)
    }

    if (downloadableOnly) {
      result = result.filter(r => r.downloadable)
    }

    result = [...result].sort((a, b) => {
      if (sortOption === "A-Z") {
        return a.title.localeCompare(b.title)
      }
      if (sortOption === "Newest") {
        return new Date(b.dateUpdated).getTime() - new Date(a.dateUpdated).getTime()
      }
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return new Date(b.dateUpdated).getTime() - new Date(a.dateUpdated).getTime()
    })

    return result
  }, [searchQuery, selectedCategory, selectedType, downloadableOnly, sortOption])

  const featuredResources = React.useMemo(() => {
    return RESOURCES.filter(r => r.featured).slice(0, 3)
  }, [])

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("All")
    setSelectedType("All")
    setDownloadableOnly(false)
    setSortOption("Recommended")
  }

  const activeFilterCount = (selectedCategory !== "All" ? 1 : 0) + 
                            (selectedType !== "All" ? 1 : 0) + 
                            (downloadableOnly ? 1 : 0)

  return (
    <main className="flex flex-col w-full min-h-screen relative bg-[#FCFBF8]">
      
      {/* SECTION 1: HERO */}
      <section className="bg-[#F8F7F4] pt-[120px] pb-[90px] border-b border-[var(--color-border)] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <StaggerContainer className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left rtl:items-start rtl:text-right z-10" delayChildren={0.1}>
              <StaggerItem distance={8}>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                  {tDict.nav.resources}
                </span>
              </StaggerItem>

              <StaggerItem distance={16} className="mb-6 max-w-[650px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                  {isAR ? "مصادر مفيدة. معلومات واضحة. خطوات واثقة." : (language === "ES" ? "Recursos Útiles. Información Clara. Pasos Seguros." : "Helpful Resources. Clear Information. Confident Next Steps.")}
                </h1>
              </StaggerItem>

              <StaggerItem distance={12} className="mb-10 max-w-[600px]">
                <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                  {isAR ? "قوائم مراجعة وأدلة وإرشادات ومصادر رسمية منظمة لمساعدتك في تعاملاتك وإجراءاتك التجارية والإدارية." : (language === "ES" ? "Guías, listas de verificación y recursos oficiales para ayudarle a prepararse." : "Provide visitors with organized checklists, guides, frequently asked questions, and official resources to help them prepare for important business and administrative processes.")}
                </p>
              </StaggerItem>

              <StaggerItem distance={12} className="w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                  <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                    <Link href="/contact">
                      {tDict.nav.bookConsultation}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)] text-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)] shadow-none" asChild>
                    <a href="#search-resources">{isAR ? "تصفح الموارد" : (language === "ES" ? "Explorar Recursos" : "Browse Resources")}</a>
                  </Button>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
              <ResourcesHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SEARCH & CATEGORY TABS */}
      <section id="search-resources" className="bg-white border-b border-[var(--color-border)] sticky top-[72px] lg:top-[80px] z-40 shadow-sm">
        <div className="container mx-auto px-6 max-w-[1200px] py-6 flex flex-col gap-6">
          
          <div className="relative w-full max-w-[800px] mx-auto group">
            <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-5 rtl:pl-0 rtl:pr-5 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-[var(--color-slate)] group-focus-within:text-[var(--color-accent-600)] transition-colors" />
            </div>
            <input
              type="text"
              className="w-full bg-[#F8F7F4] border border-[var(--color-border-strong)] rounded-full py-4 pl-14 pr-12 rtl:pl-12 rtl:pr-14 text-[16px] text-[var(--color-charcoal)] placeholder:text-[var(--color-slate)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent focus:bg-white shadow-sm transition-all duration-300 rtl:text-right"
              placeholder={isAR ? "عن ماذا تبحث؟ (مثال: 'تأسيس الأعمال' أو 'قائمة المستندات')" : (language === "ES" ? "¿Qué está buscando? (ej. 'inicio de negocios' o 'lista')" : "What are you looking for? (e.g. 'business startup' or 'checklist')")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search Resources"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 pr-5 rtl:pr-0 rtl:pl-5 flex items-center text-[var(--color-slate)] hover:text-[var(--color-charcoal)]"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="w-full overflow-x-auto pb-2 -mb-2 no-scrollbar">
            <div className="flex gap-2 min-w-max mx-auto justify-center md:justify-start lg:justify-center">
              {CATEGORIES.map((cat) => {
                const label = CATEGORY_LABELS[cat]?.[language] || cat
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-full text-[14px] font-medium whitespace-nowrap transition-all duration-[220ms] ${
                      selectedCategory === cat 
                        ? 'bg-[var(--color-primary-900)] text-white shadow-md ring-1 ring-[var(--color-accent-500)] font-extrabold' 
                        : 'bg-[#F8F7F4] text-[var(--color-slate)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-charcoal)]'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-[1200px] py-[60px] lg:py-[80px] flex flex-col gap-[80px]">
        
        {/* FEATURED RESOURCES */}
        {searchQuery === "" && selectedCategory === "All" && activeFilterCount === 0 && (
          <StaggerContainer>
            <StaggerItem distance={12}>
              <div className="mb-8 rtl:text-right">
                <h2 className="text-3xl mb-3">{isAR ? "الموارد المميزة" : (language === "ES" ? "Recursos Destacados" : "Featured Resources")}</h2>
                <p className="text-[16px] text-[var(--color-slate)]">{isAR ? "ابدأ بأكثر الموارد والمستندات استخداماً من قِبَل عملائنا." : (language === "ES" ? "Comience con los recursos más utilizados." : "Start with some of the resources visitors use most often.")}</p>
              </div>
            </StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((resource, i) => (
                <StaggerItem key={resource.id} distance={12} delay={i * 0.1} className="h-full">
                  <ResourceCard resource={resource} featured language={language} />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        )}

        {/* EXPLORE ALL RESOURCES */}
        <div className="flex flex-col gap-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--color-border)] rtl:text-right">
            <div>
              <h2 className="text-3xl mb-2">{isAR ? "استكشف جميع الموارد" : (language === "ES" ? "Explorar Todos los Recursos" : "Explore All Resources")}</h2>
              <p className="text-[15px] text-[var(--color-slate)]">
                {isAR ? `عرض ${filteredResources.length} من الموارد` : (language === "ES" ? `Mostrando ${filteredResources.length} recurso(s)` : `Showing ${filteredResources.length} resource(s)`)}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              
              {/* Type Filter */}
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <label className="text-[12px] font-semibold text-[var(--color-slate)] uppercase tracking-wider">{isAR ? "نوع المورد" : (language === "ES" ? "Tipo de Recurso" : "Resource Type")}</label>
                <select 
                  className="bg-white border border-[var(--color-border-strong)] rounded-md py-2 px-3 text-[14px] text-[var(--color-charcoal)] focus:ring-2 focus:ring-[var(--color-accent-500)] outline-none min-w-[160px] rtl:text-right"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as ResourceType | "All")}
                >
                  {TYPES.map(type => (
                    <option key={type} value={type}>{TYPE_LABELS[type]?.[language] || type}</option>
                  ))}
                </select>
              </div>

              {/* Downloadable Toggle */}
              <div className="flex flex-col gap-1.5 w-full sm:w-auto self-end sm:mb-[5px]">
                <label className="flex items-center gap-2 cursor-pointer bg-white border border-[var(--color-border-strong)] rounded-md py-2 px-3 select-none">
                  <input 
                    type="checkbox"
                    className="rounded border-[var(--color-border-strong)] text-[var(--color-primary-900)] focus:ring-[var(--color-accent-500)]"
                    checked={downloadableOnly}
                    onChange={(e) => setDownloadableOnly(e.target.checked)}
                  />
                  <span className="text-[14px] text-[var(--color-charcoal)] font-medium">{isAR ? "قابل للتحميل PDF" : (language === "ES" ? "Descargable PDF" : "Downloadable PDF")}</span>
                </label>
              </div>

              {/* Clear Filters */}
              {activeFilterCount > 0 && (
                <button 
                  onClick={handleClearFilters}
                  className="text-[13px] text-[var(--color-slate)] hover:text-[var(--color-accent-600)] underline self-end sm:mb-[12px] ml-2"
                >
                  {isAR ? "إعادة ضبط التصفية" : (language === "ES" ? "Limpiar Filtros" : "Clear Filters")}
                </button>
              )}
            </div>
          </div>

          {/* Resource Grid */}
          {filteredResources.length > 0 ? (
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ResourceCard resource={resource} language={language} />
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
              <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">{isAR ? "لم نتمكن من العثور على هذا المورد" : (language === "ES" ? "No pudimos encontrar ese recurso" : "We Couldn't Find That Resource")}</h3>
              <p className="text-[15px] text-[var(--color-slate)] mb-6 max-w-[400px]">
                {isAR ? "حاول تعديل كلمات البحث أو إلغاء التصفية لعرض المزيد من النتائج." : (language === "ES" ? "Intente ajustar sus términos de búsqueda o limpiar sus filtros." : "Try adjusting your search terms or clearing your filters to see more results.")}
              </p>
              <Button onClick={handleClearFilters} variant="outline" className="bg-white">
                {isAR ? "عرض جميع الموارد" : (language === "ES" ? "Ver Todos los Recursos" : "Browse All Resources")}
              </Button>
            </motion.div>
          )}

        </div>

        {/* TRUST NOTICE */}
        <StaggerContainer>
          <StaggerItem distance={12}>
            <div className="bg-[#FCFBF8] rounded-2xl p-8 border border-[var(--color-accent-200)] flex flex-col md:flex-row gap-6 items-start md:items-center rtl:text-right">
              <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                <Info className="w-6 h-6 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <h4 className="text-[17px] font-semibold text-[var(--color-charcoal)] mb-2">{isAR ? "ملاحظة هامة بشأن مواردنا" : (language === "ES" ? "Una Nota sobre Nuestros Recursos" : "A Note About Our Resources")}</h4>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  {tDict.trust.scopeDesc}
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* RESOURCE REQUEST CTA */}
        <StaggerContainer>
          <StaggerItem distance={12}>
            <div className="bg-white rounded-[24px] p-10 md:p-14 border border-[var(--color-border)] shadow-sm text-center flex flex-col items-center">
              <h2 className="text-3xl mb-4">{isAR ? "لم تجد ما تبحث عنه؟" : (language === "ES" ? "¿No encuentra lo que necesita?" : "Can't Find What You Need?")}</h2>
              <p className="text-[16px] text-[var(--color-slate)] max-w-[600px] mb-8">
                {tDict.common.notSureWhereToStartDesc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">{tDict.nav.bookConsultation}</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white" asChild>
                  <Link href="/contact">{tDict.nav.contact}</Link>
                </Button>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </main>
  )
}

function ResourceCard({ resource, featured = false, language }: { resource: ResourceItem, featured?: boolean, language: string }) {
  const isAR = language === "AR"
  const isExternal = resource.external
  const href = isExternal ? (resource.url || "#") : `/resources/${resource.slug}`

  return (
    <Link 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group flex flex-col bg-white rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-[var(--shadow-lg)] hover:-translate-y-[4px] hover:border-[var(--color-accent-500)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] h-full overflow-hidden rtl:text-right ${featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`rounded-xl bg-[var(--color-bg-secondary)] flex items-center justify-center group-hover:bg-[var(--color-primary-50)] transition-colors duration-[220ms] ${featured ? 'w-14 h-14' : 'w-12 h-12'}`}>
          <FileText className={`${featured ? 'w-7 h-7' : 'w-6 h-6'} text-[var(--color-primary-900)]`} />
        </div>
        <div className="flex gap-2">
          {resource.downloadable && (
            <span className="px-2.5 py-1 bg-[#F8F7F4] border border-[var(--color-border)] text-[11px] font-bold text-[var(--color-charcoal)] rounded-full tracking-wide">
              PDF
            </span>
          )}
          <span className="px-2.5 py-1 bg-[var(--color-primary-50)] border border-[var(--color-primary-100)] text-[11px] font-bold text-[var(--color-primary-900)] rounded-full tracking-wide">
            {resource.type}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 flex-grow">
        <span className="text-[12px] font-semibold text-[var(--color-slate)] tracking-wider uppercase">
          {resource.category}
        </span>
        <h3 className={`${featured ? 'text-xl' : 'text-[18px]'} font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors duration-[220ms] leading-tight`}>
          {resource.title}
        </h3>
        <p className={`text-[14px] text-[var(--color-slate)] leading-relaxed mt-1 ${featured ? 'mb-4' : 'mb-2'}`}>
          {resource.description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--color-border)] text-[13px] font-medium text-[var(--color-charcoal)]">
        <span className="text-[var(--color-slate)]">
          {resource.readingTime || (isAR ? "عرض المورد" : "View Resource")}
        </span>
        <span className="flex items-center text-[var(--color-accent-600)] group-hover:text-[var(--color-primary-900)] transition-colors">
          {resource.downloadable ? (
            <>{isAR ? "تحميل" : "Download"} <Download className="w-3.5 h-3.5 ml-1.5" /></>
          ) : isExternal ? (
            <>{isAR ? "رابط رسمي" : "Official Link"} <ExternalLink className="w-3.5 h-3.5 ml-1.5" /></>
          ) : (
            <>{isAR ? "عرض" : "View"} <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-[220ms] group-hover:translate-x-1" /></>
          )}
        </span>
      </div>
    </Link>
  )
}
