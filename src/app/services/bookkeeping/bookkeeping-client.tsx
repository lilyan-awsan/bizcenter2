"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, Calculator, 
  BarChart3, FolderOpen, Receipt, FileSearch,
  CalendarDays, Download, Info, SearchCheck,
  ClipboardList, ArrowRightCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { BookkeepingHeroVisual } from "@/components/ui/bookkeeping-hero-visual"
import { BookkeepingWorkflowVisual } from "@/components/ui/bookkeeping-workflow-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

export default function BookkeepingClientPage() {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAr = language === 'AR'
  const isEs = language === 'ES'

  return (
    <main className="flex flex-col w-full">
      
      {/* =========================================
          SECTION 1: PAGE HERO
      ========================================= */}
      <div className="relative bg-white overflow-hidden flex flex-col pt-[120px] pb-[100px] border-b border-[var(--color-border)]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-100)]/40 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
          
          {/* LEFT 55%: Content */}
          <StaggerContainer 
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left rtl:items-start rtl:text-right rtl:lg:items-start rtl:lg:text-right z-10"
            delayChildren={0.1}
          >
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                {tDict.services.bookkeeping.title}
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>{isAr ? "حافظ على تنظيم أعمالك وحساباتك يومياً" : isEs ? "Mantenga su Empresa Organizada Cada Día" : "Keep Your Business Organized Every Day"}</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                {tDict.services.bookkeeping.desc}
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
                    {isAr ? "تحميل قائمة المراجعة" : isEs ? "Descargar Lista de Verificación" : "Download Checklist"}
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT 45%: Visual */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <BookkeepingHeroVisual />
          </div>

        </div>
      </div>

      {/* =========================================
          SECTION 2: QUICK BENEFITS BAR
      ========================================= */}
      <section className="bg-white py-12 border-b border-[var(--color-border)]">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(isAr ? [
              { title: "سجلات دقيقة", icon: SearchCheck },
              { title: "تنظيم شهري مستمر", icon: CalendarDays },
              { title: "رؤية مالية واضحة", icon: BarChart3 },
              { title: "دعم احترافي عملي", icon: Calculator }
            ] : isEs ? [
              { title: "Registros Precisos", icon: SearchCheck },
              { title: "Organización Mensual", icon: CalendarDays },
              { title: "Visibilidad Financiera", icon: BarChart3 },
              { title: "Soporte Profesional", icon: Calculator }
            ] : [
              { title: "Accurate Records", icon: SearchCheck },
              { title: "Monthly Organization", icon: CalendarDays },
              { title: "Financial Visibility", icon: BarChart3 },
              { title: "Professional Support", icon: Calculator }
            ]).map((item, i) => (
              <StaggerItem key={i} distance={8} delay={i * 0.1}>
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 rounded-full bg-[#F8F7F4] text-[var(--color-primary-900)]">
                    <item.icon className="w-6 h-6 stroke-[1.5px]" />
                  </div>
                  <h3 className="font-semibold text-[15px] text-[var(--color-charcoal)]">{item.title}</h3>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 3: WHY BOOKKEEPING MATTERS
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] w-full">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          
          <div className="text-center mb-16 max-w-[700px] mx-auto flex flex-col items-center">
            <StaggerItem distance={12}>
              <h2 className="mb-6">{isAr ? "أهمية حفظ السجلات المنظمة" : isEs ? "Por Qué Importan los Registros Organizados" : "Why Organized Records Matter"}</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-slate)] text-balance">
                {isAr ? "حفظ الدفاتر الدقيق هو أساس نجاح واستقرار مشروعك التجاري. يمكنك من تتبع مداخيلك ومصاريفك وتسليم تقاريرك للمحاسب بسهولة وبدون توتر." : isEs ? "La buena contabilidad es la base de un negocio saludable. Le permite mantenerse organizado, rastrear ingresos y gastos y preparar información para su CPA." : "Good bookkeeping is the foundation of a healthy business. It allows you to stay organized, track your income and expenses accurately, and effortlessly prepare information for tax professionals or business decisions."}
              </p>
            </StaggerItem>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(isAr ? [
              { title: "تتبع الإيرادات", desc: "معرفة المبالغ المالية الواردة بدقة كل شهر.", icon: BarChart3 },
              { title: "تصنيف المصروفات", desc: "تصنيف المشتريات والمصروفات لتسهيل المراجعة.", icon: Calculator },
              { title: "سجلات الفواتير", desc: "متابعة الفواتير المدفوعة والمعلقة بدقة.", icon: Receipt },
              { title: "إدارة الإيصالات", desc: "حفظ وتنظيم الإيصالات الورقية والرقمية لسهولة الوصول.", icon: FolderOpen },
              { title: "مراجعة شهرية", desc: "مراجعة دورية لضمان تحديث بياناتك المالية بانتظام.", icon: CalendarDays },
              { title: "تجهيز التقارير للمحاسب", desc: "إعداد ملفات مرتبة لتسليمها لـ CPA بسهولة.", icon: FileSearch }
            ] : isEs ? [
              { title: "Seguimiento de Ingresos", desc: "Sepa exactamente cuánto dinero ingresa cada mes.", icon: BarChart3 },
              { title: "Organización de Gastos", desc: "Categorice y rastree dónde se gasta su capital.", icon: Calculator },
              { title: "Registros de Facturas", desc: "Mantenga un control claro de facturas pagadas y pendientes.", icon: Receipt },
              { title: "Gestión de Recibos", desc: "Organice recibos físicos y digitales fácilmente.", icon: FolderOpen },
              { title: "Revisión Mensual", desc: "Revisiones constantes para mantener sus datos actualizados.", icon: CalendarDays },
              { title: "Documentación para CPA", desc: "Prepare reportes limpios para su contador autorizado.", icon: FileSearch }
            ] : [
              { title: "Income Tracking", desc: "Know exactly what is coming into your business each month.", icon: BarChart3 },
              { title: "Expense Organization", desc: "Categorize and track where your business capital is being spent.", icon: Calculator },
              { title: "Invoice Records", desc: "Maintain clear records of paid, pending, and overdue invoices.", icon: Receipt },
              { title: "Receipt Management", desc: "Organize physical and digital receipts for easy retrieval.", icon: FolderOpen },
              { title: "Monthly Review", desc: "Consistent check-ins to ensure your records are always up to date.", icon: CalendarDays },
              { title: "Financial Documentation", desc: "Prepare clean reports to hand off to your CPA or tax advisor.", icon: FileSearch }
            ]).map((benefit, i) => (
              <StaggerItem key={i} distance={16} delay={i * 0.08}>
                <div className="h-full bg-white rounded-xl p-8 border border-[var(--color-border)] shadow-sm transition-all duration-[220ms] hover:-translate-y-[6px] hover:shadow-[var(--shadow-md)] hover:border-[var(--color-accent-500)] flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center mb-5">
                    <benefit.icon className="w-6 h-6 text-[var(--color-primary-900)]" />
                  </div>
                  <h3 className="text-[18px] font-semibold mb-3 text-[var(--color-charcoal)]">{benefit.title}</h3>
                  <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 4: WHAT WE HELP WITH
      ========================================= */}
      <section className="bg-white py-[100px] w-full">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
            
            {/* Left: Content */}
            <StaggerContainer className="w-full lg:w-1/2 flex flex-col" delayChildren={0.1}>
              <StaggerItem distance={12}>
                <h2 className="mb-6">{isAr ? "ما نقدمه في هذه الخدمة" : isEs ? "En Qué Le Ayudamos" : "What We Help With"}</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <ul className="flex flex-col gap-5 text-[16px] text-[var(--color-slate)] mb-10">
                  {(isAr ? [
                    "تسجيل وتصنيف المعاملات اليومية بوضوح",
                    "تنظيم وأرشفة الإيصالات الورقية والرقمية",
                    "تتبع وإدارة الفواتير الصادرة والواردة",
                    "إعداد تقارير ملخصة شهرية لحجم النشاط",
                    "تجهيز ملفات منظمة لتسليمها لمحاسبك القانوني",
                    "الإحالة لمكاتب محاسبة قانونية (CPA) معتمدة عند الحاجة"
                  ] : isEs ? [
                    "Registro y clasificación de transacciones diarias",
                    "Organización y digitalización de recibos comerciales",
                    "Seguimiento de facturas emitidas y recibidas",
                    "Mantenimiento de registros financieros mensuales limpios",
                    "Preparación de resúmenes documentados para su contador",
                    "Recomendación a contadores autorizados cuando se requiera"
                  ] : [
                    "Recording and categorizing daily transactions",
                    "Organizing and digitizing business receipts",
                    "Tracking sent and received invoices",
                    "Maintaining clean monthly financial records",
                    "Preparing documented summaries for your accountant",
                    "Referrals to licensed CPAs when tax or advisory services are required"
                  ]).map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <ArrowRightCircle className="w-5 h-5 text-[var(--color-accent-500)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            </StaggerContainer>

            {/* Right: Illustration */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <BookkeepingWorkflowVisual />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: FAQ & DOWNLOADS
      ========================================= */}
      <section className="bg-white py-[100px] w-full" id="downloads">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)] grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: FAQ */}
          <div className="flex flex-col">
            <StaggerItem distance={12}>
              <h2 className="mb-8 text-3xl">{tDict.common.faqTitle}</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <SharedFaqAccordion category="Bookkeeping" />
            </StaggerItem>
          </div>

          {/* Right: Downloads */}
          <div className="flex flex-col">
            <StaggerItem distance={12}>
              <h2 className="mb-8 text-3xl">{isAr ? "ملفات مفيدة للتحميل" : isEs ? "Descargas Útiles" : "Helpful Downloads"}</h2>
            </StaggerItem>
            <div className="flex flex-col gap-4">
              {(isAr ? [
                { title: "قائمة مراجعة حفظ الدفاتر", desc: "دليل بسيط لتنظيم وحفظ الإيصالات والفواتير." },
                { title: "نموذج السجلات الشهري", desc: "جدول أساسي لمتابعة الإيرادات والمصروفات." },
                { title: "دليل التحضير الضريبي", desc: "ما يجب تجهيزه قبل موعد محاسبك الضريبي." }
              ] : isEs ? [
                { title: "Lista de Verificación Contable", desc: "Guía simple para organizar sus recibos." },
                { title: "Plantilla de Registro Mensual", desc: "Hoja básica para rastrear sus ingresos." },
                { title: "Guía de Preparación de Documentos", desc: "Qué reunir antes de su cita de impuestos." }
              ] : [
                { title: "Bookkeeping Checklist", desc: "A simple guide to organizing your receipts." },
                { title: "Monthly Record Template", desc: "A basic spreadsheet to track your income." },
                { title: "Document Preparation Guide", desc: "What to gather before your tax appointment." }
              ]).map((dl, i) => (
                <StaggerItem key={i} distance={12} delay={i * 0.1}>
                  <Link href="/resources" className="group flex items-center justify-between bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-500)] hover:shadow-md transition-all duration-[220ms]">
                    <div className="flex flex-col gap-1">
                      <h4 className="font-semibold text-[16px] text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors">{dl.title}</h4>
                      <p className="text-[14px] text-[var(--color-slate)]">{dl.desc}</p>
                    </div>
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#F8F7F4] flex items-center justify-center group-hover:bg-[var(--color-primary-50)] transition-colors">
                      <Download className="w-4 h-4 text-[var(--color-primary-900)]" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </div>

        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 6: FINAL CTA
      ========================================= */}
      <section className="relative bg-[var(--color-primary-900)] py-[120px] w-full overflow-hidden text-center mt-auto">
        <StaggerContainer className="container relative z-10 mx-auto px-6 max-w-[900px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-4xl md:text-5xl">{isAr ? "دعنا نساعدك في تنظيم أوراقك وسجلاتك" : isEs ? "Mantengamos su Empresa Organizada" : "Let's Keep Your Business Organized"}</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              {isAr ? "احجز استشارتك اليوم واكتشف كيف يسهل التنظيم المحاسبي إدارة أعمالك اليومية." : isEs ? "Reserve una consulta y aprenda cómo la contabilidad organizada simplifica sus operaciones." : "Book a consultation and learn how organized bookkeeping can simplify your business operations."}
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
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white/30 text-white hover:bg-white/10 shadow-none" asChild>
                <a href="tel:9012071660">
                  <Phone className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  {tDict.common.callToday}
                </a>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}
