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

const TYPES: (ResourceType | "All")[] = [
  "All",
  "CHECKLIST",
  "GUIDE",
  "FAQ",
  "FORM",
  "OFFICIAL RESOURCE",
  "ARTICLE",
  "WORKSHEET"
]

const SORT_OPTIONS = ["Recommended", "Newest", "A-Z"] as const
type SortOption = typeof SORT_OPTIONS[number]

function getIconForType(type: ResourceType) {
  switch(type) {
    case "CHECKLIST": return ClipboardList
    case "GUIDE": return BookOpen
    case "FAQ": return MessageCircleQuestion
    case "OFFICIAL RESOURCE": return ExternalLink
    default: return FileText
  }
}

// Separate component to handle search params safely
function ResourcesHubContent() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // State initialized from URL params if present
  const [searchQuery, setSearchQuery] = React.useState(searchParams.get("search") || "")
  const [selectedCategory, setSelectedCategory] = React.useState<ResourceCategory>(
    (searchParams.get("category") as ResourceCategory) || "All"
  )
  const [selectedType, setSelectedType] = React.useState<ResourceType | "All">(
    (searchParams.get("type") as ResourceType | "All") || "All"
  )
  const [downloadableOnly, setDownloadableOnly] = React.useState(searchParams.get("downloadable") === "true")
  const [sortOption, setSortOption] = React.useState<SortOption>(
    (searchParams.get("sort") as SortOption) || "Recommended"
  )

  const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false)

  // Update URL silently when filters change
  React.useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("search", searchQuery)
    if (selectedCategory !== "All") params.set("category", selectedCategory)
    if (selectedType !== "All") params.set("type", selectedType)
    if (downloadableOnly) params.set("downloadable", "true")
    if (sortOption !== "Recommended") params.set("sort", sortOption)

    const newUrl = `${pathname}${params.toString() ? `?${params.toString()}` : ""}`
    window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl)
  }, [searchQuery, selectedCategory, selectedType, downloadableOnly, sortOption, pathname])

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

    // Sorting
    result = [...result].sort((a, b) => {
      if (sortOption === "A-Z") {
        return a.title.localeCompare(b.title)
      }
      if (sortOption === "Newest") {
        return new Date(b.dateUpdated).getTime() - new Date(a.dateUpdated).getTime()
      }
      // Recommended: Featured first, then by date
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
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="bg-[#F8F7F4] pt-[120px] pb-[90px] border-b border-[var(--color-border)] relative overflow-hidden">
        {/* Soft Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/30 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <StaggerContainer className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10" delayChildren={0.1}>
              <StaggerItem distance={8}>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                  RESOURCES CENTER
                </span>
              </StaggerItem>

              <StaggerItem distance={16} className="mb-6 max-w-[650px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                  Helpful Resources.<br/>Clear Information.<br/>Confident Next Steps.
                </h1>
              </StaggerItem>

              <StaggerItem distance={12} className="mb-10 max-w-[600px]">
                <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                  Provide visitors with organized checklists, guides, frequently asked questions, and official resources to help them prepare for important business and administrative processes.
                </p>
              </StaggerItem>

              <StaggerItem distance={12} className="w-full sm:w-auto">
                <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                  <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                    <Link href="/contact">
                      Book a Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)] text-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)] shadow-none" asChild>
                    <a href="#search-resources">Browse Resources</a>
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

      {/* =========================================
          SECTION 2: SEARCH & CATEGORY TABS
      ========================================= */}
      <section id="search-resources" className="bg-white border-b border-[var(--color-border)] sticky top-[72px] lg:top-[80px] z-40 shadow-sm">
        <div className="container mx-auto px-6 max-w-[1200px] py-6 flex flex-col gap-6">
          
          {/* Large Premium Search */}
          <div className="relative w-full max-w-[800px] mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-[var(--color-slate)] group-focus-within:text-[var(--color-accent-600)] transition-colors" />
            </div>
            <input
              type="text"
              className="w-full bg-[#F8F7F4] border border-[var(--color-border-strong)] rounded-full py-4 pl-14 pr-12 text-[16px] text-[var(--color-charcoal)] placeholder:text-[var(--color-slate)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] focus:border-transparent focus:bg-white shadow-sm transition-all duration-300"
              placeholder="What are you looking for? (e.g. 'business startup' or 'checklist')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search Resources"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-5 flex items-center text-[var(--color-slate)] hover:text-[var(--color-charcoal)]"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Horizontal Category Navigation */}
          <div className="w-full overflow-x-auto pb-2 -mb-2 no-scrollbar">
            <div className="flex gap-2 min-w-max mx-auto justify-center md:justify-start lg:justify-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
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

      <div className="container mx-auto px-6 max-w-[1200px] py-[60px] lg:py-[80px] flex flex-col gap-[80px]">
        
        {/* =========================================
            SECTION 3: FEATURED RESOURCES (Only show if no search/filters active)
        ========================================= */}
        {searchQuery === "" && selectedCategory === "All" && activeFilterCount === 0 && (
          <StaggerContainer>
            <StaggerItem distance={12}>
              <div className="mb-8">
                <h2 className="text-3xl mb-3">Featured Resources</h2>
                <p className="text-[16px] text-[var(--color-slate)]">Start with some of the resources visitors use most often.</p>
              </div>
            </StaggerItem>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map((resource, i) => (
                <StaggerItem key={resource.id} distance={12} delay={i * 0.1} className="h-full">
                  <ResourceCard resource={resource} featured />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        )}

        {/* =========================================
            SECTION 4: EXPLORE ALL RESOURCES
        ========================================= */}
        <div className="flex flex-col gap-8">
          
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--color-border)]">
            <div>
              <h2 className="text-3xl mb-2">Explore All Resources</h2>
              <p className="text-[15px] text-[var(--color-slate)]">
                Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden">
              <Button 
                variant="outline" 
                className="w-full bg-white flex items-center justify-center gap-2"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              >
                <Filter className="w-4 h-4" />
                Filter Resources {activeFilterCount > 0 && `(${activeFilterCount})`}
              </Button>
            </div>

            {/* Desktop Filters */}
            <div className={`flex flex-col sm:flex-row gap-4 items-start sm:items-center ${mobileFilterOpen ? 'block' : 'hidden md:flex'}`}>
              
              {/* Type Filter */}
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <label className="text-[12px] font-semibold text-[var(--color-slate)] uppercase tracking-wider">Resource Type</label>
                <select 
                  className="bg-white border border-[var(--color-border-strong)] rounded-md py-2 px-3 text-[14px] text-[var(--color-charcoal)] focus:ring-2 focus:ring-[var(--color-accent-500)] outline-none min-w-[160px]"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as ResourceType | "All")}
                >
                  {TYPES.map(type => (
                    <option key={type} value={type}>{type === "All" ? "All Types" : type}</option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div className="flex flex-col gap-1.5 w-full sm:w-auto">
                <label className="text-[12px] font-semibold text-[var(--color-slate)] uppercase tracking-wider">Sort By</label>
                <select 
                  className="bg-white border border-[var(--color-border-strong)] rounded-md py-2 px-3 text-[14px] text-[var(--color-charcoal)] focus:ring-2 focus:ring-[var(--color-accent-500)] outline-none min-w-[140px]"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                >
                  {SORT_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
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
                  <span className="text-[14px] text-[var(--color-charcoal)] font-medium">Downloadable</span>
                </label>
              </div>

              {/* Clear Filters */}
              {activeFilterCount > 0 && (
                <button 
                  onClick={handleClearFilters}
                  className="text-[13px] text-[var(--color-slate)] hover:text-[var(--color-accent-600)] underline self-end sm:mb-[12px] ml-2"
                >
                  Clear Filters
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
                    <ResourceCard resource={resource} />
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
              <h3 className="text-xl font-semibold text-[var(--color-charcoal)] mb-2">We Couldn't Find That Resource</h3>
              <p className="text-[15px] text-[var(--color-slate)] mb-6 max-w-[400px]">
                Try adjusting your search terms or clearing your filters to see more results.
              </p>
              <Button onClick={handleClearFilters} variant="outline" className="bg-white">
                Browse All Resources
              </Button>
            </motion.div>
          )}

        </div>

        {/* =========================================
            SECTION 5: TRUST NOTICE
        ========================================= */}
        <StaggerContainer>
          <StaggerItem distance={12}>
            <div className="bg-[#FCFBF8] rounded-2xl p-8 border border-[var(--color-accent-200)] flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                <Info className="w-6 h-6 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <h4 className="text-[17px] font-semibold text-[var(--color-charcoal)] mb-2">A Note About Our Resources</h4>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  Resources provided by THE CENTER are intended for general informational and administrative guidance. Requirements can vary depending on individual circumstances. Official agencies and qualified professionals should be consulted when specific legal, tax, financial, immigration, or regulatory advice is required. THE CENTER does not guarantee outcomes or decisions made by third parties.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* =========================================
            SECTION 6: RESOURCE REQUEST CTA
        ========================================= */}
        <StaggerContainer>
          <StaggerItem distance={12}>
            <div className="bg-white rounded-[24px] p-10 md:p-14 border border-[var(--color-border)] shadow-sm text-center flex flex-col items-center">
              <h2 className="text-3xl mb-4">Can't Find What You Need?</h2>
              <p className="text-[16px] text-[var(--color-slate)] max-w-[600px] mb-8">
                If you're not sure which resource applies to your situation, we're happy to help you identify the right next step during a quick conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white" asChild>
                  <Link href="/contact">Contact THE CENTER</Link>
                </Button>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

      </div>

      {/* =========================================
          SECTION 7: FINAL CTA
      ========================================= */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center mt-auto">
        <div className="absolute inset-0 bg-radial-[at_50%_50%] from-[var(--color-primary-600)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <StaggerContainer className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-4xl md:text-5xl">Find the Right Information.<br/>Take the Next Step.</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              Organized records and clear workflows reduce stress. Let us help you organize your business processes.
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)] group" asChild>
                <Link href="/contact">
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-[220ms] group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white/30 text-white hover:bg-white/10 shadow-none" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}

function ResourceCard({ resource, featured = false }: { resource: ResourceItem, featured?: boolean }) {
  const Icon = getIconForType(resource.type)
  const isExternal = resource.external
  const href = isExternal ? (resource.url || "#") : `/resources/${resource.slug}`

  return (
    <Link 
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group flex flex-col bg-white rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-[var(--shadow-lg)] hover:-translate-y-[4px] hover:border-[var(--color-accent-500)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] h-full overflow-hidden ${featured ? 'p-6 sm:p-8' : 'p-5 sm:p-6'}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`rounded-xl bg-[var(--color-bg-secondary)] flex items-center justify-center group-hover:bg-[var(--color-primary-50)] transition-colors duration-[220ms] ${featured ? 'w-14 h-14' : 'w-12 h-12'}`}>
          <Icon className={`${featured ? 'w-7 h-7' : 'w-6 h-6'} text-[var(--color-primary-900)]`} />
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
          {resource.readingTime || "View Resource"}
        </span>
        <span className="flex items-center text-[var(--color-accent-600)] group-hover:text-[var(--color-primary-900)] transition-colors">
          {resource.downloadable ? (
            <>Download <Download className="w-3.5 h-3.5 ml-1.5" /></>
          ) : isExternal ? (
            <>Official Link <ExternalLink className="w-3.5 h-3.5 ml-1.5" /></>
          ) : (
            <>View <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-[220ms] group-hover:translate-x-1" /></>
          )}
        </span>
      </div>
    </Link>
  )
}

// Wrap the main content in Suspense since it uses useSearchParams
export default function ResourcesPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-[#F8F7F4]" />}>
      <ResourcesHubContent />
    </React.Suspense>
  )
}
