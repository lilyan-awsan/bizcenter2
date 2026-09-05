"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, LayoutDashboard,
  CalendarClock, MessageSquare, ClipboardCheck, FolderKanban,
  FileCheck, CalendarDays, Clock, Download, MapPin, SearchCheck,
  Building2, Users, FileText, ArrowRightCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { BusinessSupportHeroVisual } from "@/components/ui/business-support-hero-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

export default function BusinessSupportClientPage() {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAr = language === 'AR'
  const isEs = language === 'ES'

  return (
    <main className="flex flex-col w-full relative">
      
      {/* =========================================
          SECTION 1: PAGE HERO (FULL WIDTH)
      ========================================= */}
      <div className="relative bg-[#F8F7F4] overflow-hidden flex flex-col pt-[120px] pb-[100px]">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/20 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform -translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 relative z-10">
          
          {/* LEFT 55%: Content */}
          <StaggerContainer 
            className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left rtl:items-start rtl:text-right rtl:lg:items-start rtl:lg:text-right z-10"
            delayChildren={0.1}
          >
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                {tDict.services.businessSupport.title}
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>{isAr ? "دعم إداري احترافي لتطوير وحوكمة أعمالك" : isEs ? "Soporte Administrativo Profesional para Empresas" : "Professional Administrative Support For Growing Businesses"}</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                {tDict.services.businessSupport.desc}
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
                    {isAr ? "عرض دليل الدعم" : isEs ? "Ver Guía de Soporte" : "View Support Guide"}
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT 45%: Visual */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <BusinessSupportHeroVisual />
          </div>

        </div>
      </div>

      {/* =========================================
          MAIN LAYOUT: CONTENT + STICKY SIDEBAR
      ========================================= */}
      <div className="container mx-auto px-6 max-w-[var(--container-xl)] py-[80px] lg:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: MAIN CONTENT */}
          <div className="flex flex-col gap-24">
            
            {/* Quick Value Bar */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(isAr ? [
                  { title: "دعم إداري مستمر", desc: "إدارة عملية ومستمرة للمهام والأنشطة الإدارية." },
                  { title: "تنظيم سير العمل", desc: "إنشاء خطوات واضحة ومحددة لزيادة الإنتاجية." },
                  { title: "إدارة الوثائق", desc: "أرشفة السجلات والمعاملات لسهولة الوصول." },
                  { title: "شراكة طويلة الأمد", desc: "نعمل كامتداد موثوق لفريقك التجاري." }
                ] : isEs ? [
                  { title: "Soporte Administrativo", desc: "Ayuda operacional continua para su negocio." },
                  { title: "Organización Empresarial", desc: "Flujos de trabajo estructurados y eficientes." },
                  { title: "Gestión de Documentos", desc: "Archivo y clasificación de archivos esenciales." },
                  { title: "Asociación a Largo Plazo", desc: "Una extensión confiable para su equipo." }
                ] : [
                  { title: "Administrative Support", desc: "Day-to-day operational help." },
                  { title: "Business Organization", desc: "Structured, efficient workflows." },
                  { title: "Document Management", desc: "Keeping essential files sorted." },
                  { title: "Long-Term Partnership", desc: "Reliable extension of your team." }
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

            {/* How We Support Your Business */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-8 text-3xl">{isAr ? "دعم إداري يلائم احتياجاتك" : isEs ? "Soporte Administrativo Adaptado a Usted" : "Administrative Support That Works With You"}</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-[16px] text-[var(--color-slate)]">
                {(isAr ? [
                  "تنظيم الأعمال التجارية", "التنسيق الإداري اليومي",
                  "إدارة الملفات والوثائق", "تنظيم السجلات والبيانات",
                  "الدعم التشغيلي المستمر", "تحسين ورفع كفاءة سير العمل",
                  "تجهيز وصياغة المعاملات", "دعم المراسلات والتواصل التجاري"
                ] : isEs ? [
                  "Organización comercial", "Coordinación administrativa",
                  "Gestión documental", "Organización de registros",
                  "Soporte operacional", "Mejora de flujos de trabajo",
                  "Preparación de solicitudes", "Soporte de comunicación comercial"
                ] : [
                  "Business organization", "Administrative coordination",
                  "Document management", "Business record organization",
                  "Operational support", "Workflow improvement",
                  "Application preparation", "Business communication support"
                ]).map((item, i) => (
                  <StaggerItem key={i} distance={8} delay={i * 0.05} className="flex gap-3 items-center">
                    <ArrowRightCircle className="w-5 h-5 text-[var(--color-accent-500)] shrink-0" />
                    <span>{item}</span>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Feature Cards Grid (8 Cards) */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {(isAr ? [
                  { title: "تنظيم المستندات", desc: "ترتيب وأرشفة الملفات والأوراق الرسمية بشكل محكم.", icon: FolderKanban },
                  { title: "السجلات التجارية", desc: "حفظ السجلات التشغيلية السابقة والحديثة بوضوح.", icon: FileCheck },
                  { title: "سير العمل التشغيلي", desc: "تبسيط طريقة انتقال المهام من البداية وحتى الإنجاز.", icon: LayoutDashboard },
                  { title: "مساعدة المواعيد", desc: "تنظيم جدول الأعمال وتفادي تضارب المواعيد.", icon: CalendarClock },
                  { title: "التنسيق الإداري", desc: "العمل كمركز رئيسي لإدارة معاملاتك ومعالجة المهام.", icon: Users },
                  { title: "إدارة البيانات والمعلومات", desc: "هيكلة المعلومات للوصول إليها في أي وقت بسرعة.", icon: SearchCheck },
                  { title: "تنظيم الإجراءات", desc: "تحديد خطوات واضحة ومدروسة للمهام المتكررة.", icon: ClipboardCheck },
                  { title: "التوثيق التجاري", desc: "إعداد وصياغة الأدلة والنماذج والسياسات الداخلية.", icon: FileText },
                ] : isEs ? [
                  { title: "Organización de Documentos", desc: "Clasificación eficiente de archivos importantes.", icon: FolderKanban },
                  { title: "Registros Comerciales", desc: "Mantenimiento de datos operativos accesibles.", icon: FileCheck },
                  { title: "Flujo de Trabajo Operativo", desc: "Optimización de tareas desde su inicio hasta su finalización.", icon: LayoutDashboard },
                  { title: "Asistencia de Agenda", desc: "Organización de calendarios para evitar contratiempos.", icon: CalendarClock },
                  { title: "Coordinación Administrativa", desc: "Centro único de coordinación para su negocio.", icon: Users },
                  { title: "Gestión de Información", desc: "Estructuración de datos para búsqueda rápida.", icon: SearchCheck },
                  { title: "Organización de Procesos", desc: "Pasos claros para sus tareas recurrentes.", icon: ClipboardCheck },
                  { title: "Documentación Comercial", desc: "Redacción de guías, políticas y plantillas internas.", icon: FileText },
                ] : [
                  { title: "Document Organization", desc: "Sorting and managing your crucial business paperwork efficiently.", icon: FolderKanban },
                  { title: "Business Records", desc: "Keeping historical operational data clean and accessible.", icon: FileCheck },
                  { title: "Operational Workflow", desc: "Streamlining how tasks move from inception to completion.", icon: LayoutDashboard },
                  { title: "Scheduling Assistance", desc: "Organizing calendars to prevent missed opportunities.", icon: CalendarClock },
                  { title: "Admin Coordination", desc: "Acting as the central hub for your business tasks.", icon: Users },
                  { title: "Information Management", desc: "Structuring data so you can find what you need instantly.", icon: SearchCheck },
                  { title: "Process Organization", desc: "Defining clear steps for your recurring business duties.", icon: ClipboardCheck },
                  { title: "Business Documentation", desc: "Drafting internal policies, guides, and templates.", icon: FileText },
                ]).map((feature, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.05}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 hover:border-[var(--color-accent-500)] transition-all duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] flex gap-4 h-full items-start group">
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-[var(--color-bg-secondary)] flex items-center justify-center group-hover:bg-[var(--color-primary-50)] transition-colors duration-[220ms]">
                        <feature.icon className="w-5 h-5 text-[var(--color-primary-900)]" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-primary-900)] transition-colors duration-[220ms]">{feature.title}</h3>
                        <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* FAQ Section */}
            <StaggerContainer>
              <StaggerItem distance={12}>
                <h2 className="mb-10 text-3xl">{tDict.common.faqTitle}</h2>
              </StaggerItem>
              <StaggerItem distance={12}>
                <SharedFaqAccordion category="Business Support" />
              </StaggerItem>
            </StaggerContainer>

          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR (Desktop Only) */}
          <aside className="hidden lg:flex flex-col gap-6 sticky top-[120px]">
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-lg text-[var(--color-charcoal)] mb-2">{isAr ? "هل تحتاج إلى دعم؟" : isEs ? "¿Necesita Soporte?" : "Need Support?"}</h3>
                <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                  {isAr ? "تواصل معنا لتنظيم وإدارة أعمالك اليومية." : isEs ? "Discutamos cómo simplificar sus operaciones diarias." : "Let's discuss how we can streamline your daily operations."}
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
            <h2 className="mb-6 text-white text-4xl md:text-5xl">{isAr ? "دعنا نتولى الإدارة والخدمات المساندة" : isEs ? "Permítanos Encargarnos de la Administración" : "Let Us Handle The Administration"}</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-xl text-[var(--color-primary-100)] mb-10 max-w-[650px] mx-auto text-balance">
              {isAr ? "لتركز كلياً على نمو وتوسع تجارتك. احجز استشارتك اليوم مع 'ذا سنتر'." : isEs ? "Para que pueda concentrarse en hacer crecer su empresa. Reserve una consulta hoy." : "So you can focus entirely on growing your business. Book a consultation today to establish a reliable support partnership."}
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
