"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, FileSignature, 
  FolderSearch, ClipboardCheck, MessageSquare, Files,
  FolderTree, PenLine, FileText, Send, Building2,
  Clock, Download, MapPin, Info, Users, Mail,
  ListTodo, Briefcase, FileArchive, FileCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { AdminSupportHeroVisual } from "@/components/ui/admin-support-hero-visual"
import { AdminSupportProcessVisual } from "@/components/ui/admin-support-process-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

export default function ApplicationsClientPage() {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAr = language === 'AR'
  const isEs = language === 'ES'

  return (
    <main className="flex flex-col w-full relative">
      
      {/* HERO */}
      <div className="relative bg-[#F8F7F4] overflow-hidden flex flex-col pt-[120px] pb-[100px]">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform -translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
          
          <StaggerContainer 
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left rtl:items-start rtl:text-right rtl:lg:items-start rtl:lg:text-right z-10"
            delayChildren={0.1}
          >
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                {tDict.services.applicationsAdmin.title}
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>{isAr ? "إرشاد واضح عبر النماذج والمعاملات الإدارية" : isEs ? "Orientación Clara para Formularios y Trámites" : "Clear Guidance Through Business Forms & Administrative Processes"}</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                {tDict.services.applicationsAdmin.desc}
              </p>
            </StaggerItem>

            <StaggerItem distance={12} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                <Button size="lg" className="w-full sm:w-auto px-8 group" asChild>
                  <Link href="/contact">
                    {tDict.nav.bookConsultation}
                    <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 transition-transform duration-[220ms] group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)] text-[var(--color-charcoal)] hover:bg-[var(--color-offwhite)] shadow-none" asChild>
                  <Link href="#downloads">
                    {isAr ? "تحميل قائمة التحضير" : isEs ? "Descargar Lista de Preparación" : "Download Preparation Checklist"}
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <AdminSupportHeroVisual />
          </div>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 max-w-[var(--container-xl)] py-[80px] lg:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          
          <div className="flex flex-col gap-24">
            
            {/* Quick Benefits Bar */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(isAr ? [
                  { title: "تنظيم المستندات", desc: "فرز وتجميع الأوراق بأسلوب احترافي." },
                  { title: "تجهيز الطلبات", desc: "إعداد النماذج والمعاملات بشكل كامل." },
                  { title: "إرشاد تنظيمي", desc: "فهم واستيعاب الخطوات والإجراءات القادمة." },
                  { title: "خطوات محددة", desc: "إزالة الحيرة والغموض وتسهيل التنفيذ." }
                ] : isEs ? [
                  { title: "Organización de Documentos", desc: "Clasificación cuidadosa de sus papeles." },
                  { title: "Preparación de Solicitudes", desc: "Listos sus formularios adecuadamente." },
                  { title: "Guía Administrativa", desc: "Comprensión clara de los siguientes pasos." },
                  { title: "Pasos Transparentes", desc: "Eliminando la confusión del proceso." }
                ] : [
                  { title: "Document Organization", desc: "Sorting through paperwork." },
                  { title: "Application Preparation", desc: "Getting forms ready properly." },
                  { title: "Administrative Guidance", desc: "Understanding the next steps." },
                  { title: "Clear Next Steps", desc: "Removing the confusion." }
                ]).map((item, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.1}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-2 transition-shadow duration-[220ms] hover:shadow-md">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-accent-500)] mb-1" />
                      <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)]">{item.title}</h3>
                      <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Disclaimer Banner */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <div className="bg-[var(--color-accent-50)] rounded-2xl p-8 border border-[var(--color-accent-200)] flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="shrink-0 p-3 bg-white rounded-full shadow-sm">
                    <Info className="w-8 h-8 text-[var(--color-accent-600)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--color-charcoal)] mb-2">{tDict.common.regulatoryNoticeTitle}</h4>
                    <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">
                      {tDict.footer.disclaimer}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* FAQ */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">{tDict.common.faqTitle}</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <SharedFaqAccordion category="Applications & Administrative Support" />
              </StaggerItem>
            </StaggerContainer>

          </div>

          {/* SIDEBAR */}
          <aside className="hidden lg:flex flex-col gap-6 sticky top-[120px]">
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-charcoal)] mb-2">{isAr ? "هل تحتاج إلى توجيه إداري؟" : isEs ? "¿Necesita Orientación?" : "Need Guidance?"}</h3>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  {isAr ? "احجز استشارة لتنظيم إعداد طلبك وأوراقك." : isEs ? "Programe una consulta para organizar sus documentos." : "Schedule a consultation to organize your application process."}
                </p>
              </div>
              <Button size="lg" className="w-full group" asChild>
                <Link href="/contact">
                  {tDict.nav.bookConsultation}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 transition-transform duration-[220ms] group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </Button>
            </div>
          </aside>

        </div>
      </div>

      {/* FINAL CTA */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center mt-auto">
        <StaggerContainer className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-4xl md:text-5xl">{isAr ? "هل تحتاج لمساعدة في تنظيم أوراق المعاملات؟" : isEs ? "¿Necesita Ayuda para Organizar sus Solicitudes?" : "Need Help Organizing Your Application?"}</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              {isAr ? "احجز استشارتك اليوم مع 'ذا سنتر' لتلقي توجيه منظم واحترافي خالي من التردد." : isEs ? "Programe una consulta para recibir orientación administrativa clara y organizada." : "Schedule a consultation to receive organized, professional administrative guidance without the confusion."}
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)] group" asChild>
                <Link href="/contact">
                  {tDict.nav.bookConsultation}
                  <ArrowRight className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 transition-transform duration-[220ms] group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                </Link>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}
