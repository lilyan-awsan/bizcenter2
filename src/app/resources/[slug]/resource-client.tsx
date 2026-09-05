"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, Download, Printer, Share2, Info, 
  ChevronRight, ClipboardCheck, ArrowLeft,
  FileText, BookOpen, CheckSquare, MessageCircleQuestion,
  ExternalLink, Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { ResourceItem, ContentBlock } from "@/lib/resources"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"
import { ResourceContentRenderer } from "./content-renderer"

// Basic visual mapped to resource type
function ResourceVisual({ type }: { type: string }) {
  const isChecklist = type === "CHECKLIST"
  const isFAQ = type === "FAQ"
  const isGuide = type === "GUIDE"

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto select-none pointer-events-none">
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-radial-[at_50%_50%] from-[var(--color-primary-900)]/10 to-transparent to-70% rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-radial-[at_50%_50%] from-[var(--color-accent-400)]/15 to-transparent to-70% rounded-full blur-3xl opacity-50" />
      
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div 
          className="w-48 h-56 bg-white rounded-2xl shadow-[var(--shadow-xl)] border border-[var(--color-border-strong)] p-6 flex flex-col gap-4 relative"
          initial={{ opacity: 0, y: 20, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {isChecklist && (
            <>
              <div className="flex items-center gap-3"><div className="w-5 h-5 border-2 border-[var(--color-accent-500)] rounded bg-[var(--color-accent-500)] flex items-center justify-center"><CheckSquare className="w-3 h-3 text-white" /></div><div className="h-2 flex-1 bg-[var(--color-text-secondary)] rounded-full" /></div>
              <div className="flex items-center gap-3"><div className="w-5 h-5 border-2 border-[var(--color-border-strong)] rounded" /><div className="h-2 w-2/3 bg-[var(--color-text-secondary)] rounded-full" /></div>
              <div className="flex items-center gap-3"><div className="w-5 h-5 border-2 border-[var(--color-border-strong)] rounded" /><div className="h-2 w-4/5 bg-[var(--color-text-secondary)] rounded-full" /></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[var(--color-primary-900)] rounded-full flex items-center justify-center shadow-lg"><ClipboardCheck className="w-6 h-6 text-white" /></div>
            </>
          )}
          {isGuide && (
            <>
              <div className="h-3 w-full bg-[var(--color-primary-600)] rounded-full mb-2" />
              <div className="h-2 w-full bg-[var(--color-border-strong)] rounded-full" />
              <div className="h-2 w-5/6 bg-[var(--color-border-strong)] rounded-full" />
              <div className="h-2 w-full bg-[var(--color-border-strong)] rounded-full" />
              <div className="h-2 w-2/3 bg-[var(--color-border-strong)] rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[var(--color-accent-500)] rounded-full flex items-center justify-center shadow-lg"><BookOpen className="w-6 h-6 text-white" /></div>
            </>
          )}
          {isFAQ && (
            <>
              <div className="bg-[var(--color-primary-50)] border border-[var(--color-primary-200)] p-3 rounded-xl rounded-tl-sm w-full"><div className="h-2 w-full bg-[var(--color-primary-900)] rounded-full" /></div>
              <div className="bg-[#F8F7F4] border border-[var(--color-border-strong)] p-3 rounded-xl rounded-tr-sm w-5/6 self-end"><div className="h-2 w-full bg-[var(--color-slate)] rounded-full" /></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[var(--color-primary-900)] rounded-full flex items-center justify-center shadow-lg"><MessageCircleQuestion className="w-6 h-6 text-white" /></div>
            </>
          )}
          {!isChecklist && !isGuide && !isFAQ && (
            <>
              <div className="h-3 w-full bg-[var(--color-slate)] rounded-full mb-2" />
              <div className="h-2 w-full bg-[var(--color-border-strong)] rounded-full" />
              <div className="h-2 w-5/6 bg-[var(--color-border-strong)] rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[var(--color-primary-900)] rounded-full flex items-center justify-center shadow-lg"><FileText className="w-6 h-6 text-white" /></div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}

interface PageProps {
  resource: ResourceItem
  related: ResourceItem[]
}

export default function ResourceClientPage({ resource, related }: PageProps) {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAR = language === "AR"
  const [toastMessage, setToastMessage] = React.useState<string | null>(null)
  const [checklistProgress, setChecklistProgress] = React.useState<number | null>(
    resource.type === "CHECKLIST" ? 0 : null
  )

  // Extract headings for TOC
  const toc = React.useMemo(() => {
    if (!resource.content) return []
    return resource.content
      .filter(b => b.type === "heading" && b.content)
      .map(b => ({
        id: b.content!.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || b.id,
        text: b.content!
      }))
  }, [resource.content])

  const handlePrint = () => {
    window.print()
  }

  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${resource.title} | THE CENTER`,
          url: url
        })
      } catch (err) {
        console.warn("Share failed", err)
      }
    } else {
      // Fallback
      try {
        await navigator.clipboard.writeText(url)
        setToastMessage("Link copied to clipboard!")
        setTimeout(() => setToastMessage(null), 3000)
      } catch (err) {
        console.warn("Clipboard failed", err)
      }
    }
  }

  return (
    <main className="flex flex-col w-full min-h-screen relative bg-white pb-[120px] print-safe-area">
      
      {/* Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 bg-[var(--color-charcoal)] text-white px-6 py-3 rounded-full shadow-xl text-[14px] font-medium no-print"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          HERO SECTION
      ========================================= */}
      <section className="bg-[#F8F7F4] pt-[120px] pb-[80px] lg:pb-[100px] border-b border-[var(--color-border)] relative overflow-hidden no-print">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center text-[13px] font-medium text-[var(--color-slate)] mb-10 rtl:text-right">
            <Link href="/" className="hover:text-[var(--color-primary-900)] transition-colors">{tDict.nav.home}</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 rtl:rotate-180" />
            <Link href="/resources" className="hover:text-[var(--color-primary-900)] transition-colors">{tDict.nav.resources}</Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 rtl:rotate-180" />
            <span className="text-[var(--color-charcoal)] truncate max-w-[200px] sm:max-w-none">{resource.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-3/5 flex flex-col rtl:items-start rtl:text-right">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1.5 bg-white border border-[var(--color-border)] text-[12px] font-bold text-[var(--color-slate)] uppercase tracking-wider rounded-md shadow-sm">
                  {resource.category}
                </span>
                <span className="px-3 py-1.5 bg-[var(--color-primary-50)] border border-[var(--color-primary-100)] text-[12px] font-bold text-[var(--color-primary-900)] rounded-md">
                  {resource.type}
                </span>
                {resource.readingTime && (
                  <span className="text-[14px] font-medium text-[var(--color-slate)] ml-2">
                    {resource.readingTime}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 max-w-[700px] leading-[1.2]">
                {resource.title}
              </h1>

              <p className="text-lg text-[var(--color-slate)] leading-relaxed mb-10 max-w-[650px]">
                {resource.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {resource.downloadable ? (
                  resource.downloadUrl && resource.downloadUrl !== "#pdf-coming-soon" ? (
                    <Button size="lg" className="bg-[var(--color-primary-900)] text-white group" asChild>
                      <a href={resource.downloadUrl} download>
                        <Download className="w-4 h-4 mr-2" /> {isAR ? "تحميل PDF" : (language === "ES" ? "Descargar PDF" : "Download PDF")}
                      </a>
                    </Button>
                  ) : (
                    <Button size="lg" className="bg-[var(--color-slate)] text-white hover:bg-[var(--color-slate)] opacity-80 cursor-default">
                      {isAR ? "التحميل قريباً" : (language === "ES" ? "Descarga Próximamente" : "Download Coming Soon")}
                    </Button>
                  )
                ) : resource.external && resource.url ? (
                  <Button size="lg" className="bg-[var(--color-primary-900)] text-white group" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      {isAR ? "زيارة المصدر الرسمي" : (language === "ES" ? "Visitar Recurso Oficial" : "Visit Official Resource")} <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                ) : null}

                <Button variant="outline" size="lg" onClick={handlePrint} className="bg-white hover:bg-[#F8F7F4]">
                  <Printer className="w-4 h-4 mr-2" /> {isAR ? "طباعة المورد" : (language === "ES" ? "Imprimir" : "Print Resource")}
                </Button>

                <Button variant="outline" size="lg" onClick={handleShare} className="bg-white hover:bg-[#F8F7F4]">
                  <Share2 className="w-4 h-4 mr-2" /> {isAR ? "مشاركة" : (language === "ES" ? "Compartir" : "Share")}
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <ResourceVisual type={resource.type} />
            </div>
          </div>
        </div>
      </section>

      {/* Print-only Header */}
      <div className="hidden print:block mb-8 pb-8 border-b-2 border-black">
        <div className="text-[24px] font-bold mb-2">THE CENTER</div>
        <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
        <div className="text-[14px] text-gray-600 uppercase tracking-wider">{resource.category} • {resource.type}</div>
      </div>

      {/* =========================================
          MAIN LAYOUT: CONTENT + SIDEBAR
      ========================================= */}
      <div className="container mx-auto px-6 max-w-[1200px] py-[60px] lg:py-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          
          {/* LEFT: READING COLUMN */}
          <div className="w-full max-w-[800px] flex flex-col mx-auto lg:mx-0">
            
            {/* Mobile TOC */}
            {toc.length > 0 && (
              <div className="lg:hidden mb-10 bg-[#F8F7F4] border border-[var(--color-border-strong)] rounded-xl p-6 no-print">
                <h3 className="text-[14px] font-bold uppercase tracking-wider text-[var(--color-slate)] mb-4">On This Page</h3>
                <ul className="flex flex-col gap-3">
                  {toc.map(item => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-[15px] font-medium text-[var(--color-charcoal)] hover:text-[var(--color-accent-600)] transition-colors">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content Renderer */}
            <ResourceContentRenderer 
              blocks={resource.content} 
              resourceId={resource.id} 
              onProgressChange={setChecklistProgress} 
            />

            {/* Information Notice */}
            <div className="mt-16 bg-[#FCFBF8] rounded-2xl p-8 border border-[var(--color-accent-200)] flex flex-col sm:flex-row gap-6 items-start">
              <div className="shrink-0 p-3 bg-white rounded-full shadow-sm mt-1 print:hidden">
                <Info className="w-6 h-6 text-[var(--color-accent-600)]" />
              </div>
              <div>
                <h4 className="text-[17px] font-semibold text-[var(--color-charcoal)] mb-2">Important Information</h4>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  This resource is provided for general informational and administrative guidance. Requirements may vary depending on individual circumstances. For legal, tax, financial, immigration, or other regulated matters, consult an appropriately qualified professional or official authority. THE CENTER does not guarantee approvals, decisions, or outcomes made by third parties.
                </p>
              </div>
            </div>

            {/* Resource CTA */}
            <div className="mt-16 border-t border-[var(--color-border)] pt-12 no-print">
              <h3 className="text-2xl mb-4">Need Help With Your Next Step?</h3>
              <p className="text-[16px] text-[var(--color-slate)] mb-8 max-w-[600px] leading-relaxed">
                If you are unsure which process or resource applies to your situation, THE CENTER can help you identify the appropriate next step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Book a Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>

            <div className="mt-12 no-print">
              <Link href="/resources" className="inline-flex items-center text-[15px] font-medium text-[var(--color-slate)] hover:text-[var(--color-primary-900)] transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
              </Link>
            </div>

          </div>

          {/* RIGHT: STICKY SIDEBAR (Desktop) */}
          <aside className="hidden lg:flex flex-col gap-6 sticky top-[120px] w-full no-print">
            
            {/* Checklist Progress */}
            {checklistProgress !== null && (
              <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-bold text-[var(--color-slate)] uppercase tracking-wider">Your Progress</span>
                  <span className="text-[16px] font-bold text-[var(--color-accent-600)]">{checklistProgress}%</span>
                </div>
                <div className="w-full h-2.5 bg-[var(--color-bg-secondary)] rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[var(--color-accent-500)] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${checklistProgress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            )}

            {/* Table of Contents */}
            {toc.length > 0 && (
              <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-[var(--color-border-strong)] flex flex-col">
                <h3 className="text-[14px] font-bold uppercase tracking-wider text-[var(--color-slate)] mb-4">On This Page</h3>
                <ul className="flex flex-col gap-3">
                  {toc.map(item => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-[14px] font-medium text-[var(--color-charcoal)] hover:text-[var(--color-accent-600)] transition-colors line-clamp-2">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-4">
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-[var(--color-slate)] mb-2">Actions</h3>
              
              {resource.downloadable && (
                 resource.downloadUrl && resource.downloadUrl !== "#pdf-coming-soon" ? (
                  <Button variant="outline" className="w-full justify-between group" asChild>
                    <a href={resource.downloadUrl} download>
                      Download PDF <Download className="w-4 h-4 text-[var(--color-slate)] group-hover:text-[var(--color-charcoal)]" />
                    </a>
                  </Button>
                 ) : (
                  <Button variant="outline" className="w-full justify-between opacity-50 cursor-default" disabled>
                    Coming Soon <Download className="w-4 h-4" />
                  </Button>
                 )
              )}
              
              <Button variant="outline" className="w-full justify-between group" onClick={handlePrint}>
                Print Document <Printer className="w-4 h-4 text-[var(--color-slate)] group-hover:text-[var(--color-charcoal)]" />
              </Button>
            </div>

            {/* Consultation */}
            <div className="bg-[var(--color-primary-900)] rounded-2xl p-6 border border-[var(--color-border-dark)] flex flex-col gap-5 text-white">
              <h3 className="font-semibold text-lg">Discuss Your Plan</h3>
              <p className="text-[14px] text-[var(--color-primary-100)] leading-relaxed">
                Resources are helpful, but organizing them properly is essential. Schedule a meeting with THE CENTER.
              </p>
              <Button className="w-full bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)]" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>

          </aside>

        </div>
      </div>

      {/* =========================================
          RELATED RESOURCES
      ========================================= */}
      {related && related.length > 0 && (
        <section className="bg-[#F8F7F4] py-[100px] border-t border-[var(--color-border)] no-print">
          <div className="container mx-auto px-6 max-w-[1200px]">
            <h2 className="text-3xl mb-8">You May Also Find These Helpful</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((relResource) => (
                <Link 
                  key={relResource.id}
                  href={`/resources/${relResource.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-[var(--color-border)] shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-[var(--color-accent-500)] transition-all duration-[220ms] p-6 h-full"
                >
                  <div className="flex gap-2 mb-4">
                    <span className="px-2.5 py-1 bg-[#F8F7F4] border border-[var(--color-border)] text-[11px] font-bold text-[var(--color-slate)] rounded-full uppercase tracking-wide">
                      {relResource.category}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] mb-3 leading-tight">
                    {relResource.title}
                  </h3>
                  <p className="text-[14px] text-[var(--color-slate)] leading-relaxed mb-6 flex-grow">
                    {relResource.description}
                  </p>
                  <div className="flex items-center text-[13px] font-medium text-[var(--color-accent-600)] group-hover:text-[var(--color-primary-900)] transition-colors">
                    View Resource <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-[220ms] group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================
          FINAL FOOTER CTA
      ========================================= */}
      <section className="bg-[var(--color-primary-900)] py-[100px] text-center no-print">
        <StaggerContainer className="container mx-auto px-6 max-w-[700px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-3xl md:text-4xl">Have Questions About Your Situation?</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-[16px] md:text-lg text-[var(--color-primary-100)] mb-8 text-balance">
              Resources are a helpful starting point, but every situation is different. Connect with THE CENTER for personalized administrative support.
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)]" asChild>
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white/30 text-white hover:bg-white/10 shadow-none" asChild>
                <Link href="/contact">Contact THE CENTER</Link>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* Print Footer Attribution */}
      <div className="hidden print:block fixed bottom-0 left-0 right-0 py-4 text-center text-[12px] text-gray-500 border-t border-gray-300">
        Provided by THE CENTER | www.thecenter.example.com
      </div>

    </main>
  )
}
