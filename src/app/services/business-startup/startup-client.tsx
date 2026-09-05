"use client"

import * as React from "react"
import Link from "next/link"
import { 
  ArrowRight, Phone, CheckCircle2, FileCheck, 
  Compass, MessageCircle, ShieldCheck, Globe,
  Calendar, MessageSquare, ClipboardCheck, Clock, Download, MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { StartupHeroVisual } from "@/components/ui/startup-hero-visual"
import { StartupAudienceVisual } from "@/components/ui/startup-audience-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"

export default function StartupClientPage() {
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
                {tDict.services.businessStartup.title}
              </span>
            </StaggerItem>

            <StaggerItem distance={16} className="mb-6 max-w-[650px]">
              <h1>{isAr ? "ابدأ مشروعك التجاري بثقة كاملة" : isEs ? "Inicie su Empresa con Total Confianza" : "Start Your Business With Confidence"}</h1>
            </StaggerItem>

            <StaggerItem distance={12} className="mb-10 max-w-[600px]">
              <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                {tDict.services.businessStartup.desc}
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
                  <Link href="#documents">
                    {isAr ? "عرض قائمة التحضير" : isEs ? "Ver Lista de Verificación" : "View Startup Checklist"}
                  </Link>
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* RIGHT 45%: Visual */}
          <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
            <StartupHeroVisual />
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
            
            {/* Quick Overview */}
            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(isAr ? [
                  { title: "تخطيط إداري محكم", desc: "نهج منظم لإطلاق وتأسيس عملك التجاري." },
                  { title: "توجيه تنظيمي", desc: "مساعدة مخصصة لتنظيم الأوراق وتعبئة النماذج." },
                  { title: "المستندات المطلوبة", desc: "قائمة مراجعة شاملة لضمان الاستعداد." },
                  { title: "دعم مستمر", desc: "متابعة دائمة لتجاوز مرحلة الانطلاق بنجاح." }
                ] : isEs ? [
                  { title: "Planificación Empresarial", desc: "Enfoque estructurado para sus operaciones." },
                  { title: "Orientación Administrativa", desc: "Ayuda para navegar formularios complejos." },
                  { title: "Documentos Requeridos", desc: "Lista de verificación organizada para el éxito." },
                  { title: "Apoyo Continuo", desc: "Ayuda más allá de la fase de lanzamiento." }
                ] : [
                  { title: "Business Planning", desc: "Structured approach to operations." },
                  { title: "Admin Guidance", desc: "Help navigating complex forms." },
                  { title: "Required Documents", desc: "Organized checklist for success." },
                  { title: "Ongoing Support", desc: "Help beyond just the launch phase." }
                ]).map((item, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.1}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow duration-[220ms] flex flex-col gap-2">
                      <h3 className="font-semibold text-[17px] text-[var(--color-primary-900)]">{item.title}</h3>
                      <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{item.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* What's Included */}
            <StaggerContainer className="flex flex-col gap-8">
              <StaggerItem distance={12}>
                <h2 className="text-3xl font-semibold text-[var(--color-charcoal)]">{isAr ? "ما تشمله الخدمة" : isEs ? "Lo Que Incluye la Formación" : "What's Included"}</h2>
              </StaggerItem>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(isAr ? [
                  { title: "توجيه إداري أولي", desc: "مراجعة فكرتك ونشاطك التجاري لتحديد النماذج والمتطلبات الإدارية المناسبة." },
                  { title: "تنظيم تجهيز المستندات", desc: "مساعدتك في جمع وتنظيم المستندات الإدارية الأساسية المطلوبة بالتفصيل." },
                  { title: "خطوات التأسيس والتسجيل", desc: "توجيه عملي لكيفية تقديم أوراق التأسيس والحصول على رقم التعريف الضريبي (EIN)." },
                  { title: "إرشادات ما بعد التأسيس", desc: "قائمة توجيهية مرشدة لفتح الحسابات البنكية التجارية وإدارة المعاملات." }
                ] : isEs ? [
                  { title: "Orientación Inicial", desc: "Revisamos la idea de su empresa para identificar los formularios y requisitos necesarios." },
                  { title: "Organización de Documentos", desc: "Le ayudamos a recopilar y estructurar la información requerida." },
                  { title: "Pasos de Registro", desc: "Guía práctica sobre cómo presentar la documentación y solicitar el EIN." },
                  { title: "Orientación Posterior", desc: "Lista de verificación para la apertura de cuentas bancarias y cumplimiento inicial." }
                ] : [
                  { title: "Initial Administrative Orientation", desc: "We review your business concept to identify the necessary administrative steps and form requirements." },
                  { title: "Document Preparation Support", desc: "Assistance organizing the information and personal documents needed for official filings." },
                  { title: "Formation & Filing Steps", desc: "Step-by-step guidance through entity registration, Articles of Organization, and EIN applications." },
                  { title: "Post-Formation Checklist", desc: "Clear advice on setting up your business records, bank account preparation, and local compliance steps." }
                ]).map((feat, i) => (
                  <StaggerItem key={i} distance={16} delay={i * 0.08}>
                    <div className="bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] transition-all duration-[220ms] h-full flex flex-col gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-50)] text-[var(--color-primary-900)] flex items-center justify-center font-bold text-[16px]">
                        {i + 1}
                      </div>
                      <h3 className="text-[19px] font-semibold text-[var(--color-charcoal)]">{feat.title}</h3>
                      <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">{feat.desc}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Process Timeline */}
            <StaggerContainer className="flex flex-col gap-10">
              <StaggerItem distance={12}>
                <h2 className="text-3xl font-semibold text-[var(--color-charcoal)]">{isAr ? "مراحل تأسيس مشروعك معنا" : isEs ? "Nuestro Proceso de Formación" : "The Startup Process"}</h2>
              </StaggerItem>
              <div className="flex flex-col gap-6 relative">
                {(isAr ? [
                  { step: "01", title: "الاستشارة الأولية", desc: "نلتقي لمناقشة أهدافك ونشاطك التجاري واختيار الكيان المناسب." },
                  { step: "02", title: "جمع البيانات والمستندات", desc: "نستلم ونراجع كافة الهويات والبيانات المطلوبة لضمان دقتها." },
                  { step: "03", title: "تجهيز وتقديم الطلبات", desc: "نقوم بإعداد الملفات الإدارية وتقديمها للجهات الرسمية المعنية." },
                  { step: "04", title: "استلام الأوراق وتوفير التوجيه", desc: "نسلمك كافة الوثائق الرسمية المنظمة مع قائمة بالخطوات القادمة." }
                ] : isEs ? [
                  { step: "01", title: "Consulta Inicial", desc: "Nos reunimos para discutir sus objetivos y seleccionar el tipo de entidad adecuado." },
                  { step: "02", title: "Recopilación de Documentos", desc: "Recopilamos y revisamos toda la información e identificaciones necesarias." },
                  { step: "03", title: "Preparación y Envío", desc: "Preparamos cuidadosamente los formularios y los presentamos ante las autoridades." },
                  { step: "04", title: "Entrega y Pasos Siguientes", desc: "Entregamos sus documentos organizados junto con una guía de pasos siguientes." }
                ] : [
                  { step: "01", title: "Initial Consultation", desc: "We meet to discuss your business goals, target structure, and administrative needs." },
                  { step: "02", title: "Information & Document Gathering", desc: "We help gather necessary identification, business details, and ownership info." },
                  { step: "03", title: "Preparation & Submission Support", desc: "We organize filings and guide you through submission to state and federal agencies." },
                  { step: "04", title: "Completion & Next Steps Hand-off", desc: "We deliver organized digital/physical copies of your records with clear next steps." }
                ]).map((proc, i) => (
                  <StaggerItem key={i} distance={12} delay={i * 0.1}>
                    <div className="bg-white rounded-xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col md:flex-row md:items-center gap-6">
                      <span className="text-3xl font-bold text-[var(--color-accent-500)] shrink-0">{proc.step}</span>
                      <div className="flex flex-col gap-1">
                        <h3 className="text-[18px] font-semibold text-[var(--color-charcoal)]">{proc.title}</h3>
                        <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">{proc.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>

            {/* Checklist Anchor Section */}
            <div id="documents">
              <StaggerContainer className="bg-[#F8F7F4] rounded-2xl p-8 md:p-10 border border-[var(--color-border)] flex flex-col gap-6">
                <StaggerItem distance={12}>
                  <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-charcoal)]">{isAr ? "ما يجب إحضاره للاستشارة" : isEs ? "Lo Que Debe Traer a la Consulta" : "What to Bring to Your Consultation"}</h2>
                </StaggerItem>
                <StaggerItem distance={12}>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[15px] text-[var(--color-charcoal)]">
                    {(isAr ? [
                      "إثبات شخصية حكومي ساري المفعول (رخصة قيادة أو جواز سفر)",
                      "اسم المشروع التجاري المقترح والعنوان المفضل",
                      "بيانات الشركاء أو المالكين إذا وجدوا",
                      "إثبات العنوان التجاري أو الشخصي",
                      "أي استفسارات أو أوراق أولية ترغب في مناقشتها"
                    ] : isEs ? [
                      "Identificación oficial válida (licencia de conducir o pasaporte)",
                      "Nombre propuesto para la empresa y dirección preferida",
                      "Información de socios o propietarios si aplica",
                      "Comprobante de domicilio comercial o personal",
                      "Cualquier documento o pregunta inicial que desee consultar"
                    ] : [
                      "Valid government-issued photo ID (Driver's License or Passport)",
                      "Proposed business names (2-3 options)",
                      "Owner/partner contact information and percentage distribution",
                      "Physical and mailing address for the business",
                      "SSN or ITIN information (if applying for EIN)"
                    ]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-[var(--color-border)] shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-600)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* FAQ Section */}
            <StaggerContainer className="flex flex-col gap-8">
              <StaggerItem distance={12}>
                <h2 className="text-3xl font-semibold text-[var(--color-charcoal)]">{tDict.common.faqTitle}</h2>
              </StaggerItem>
              <SharedFaqAccordion category="Business Startup" />
            </StaggerContainer>

          </div>

          {/* RIGHT COLUMN: STICKY SIDEBAR */}
          <aside className="w-full flex flex-col gap-8 sticky top-[100px]">
            
            {/* Consultation Card */}
            <div className="bg-[var(--color-primary-900)] text-white rounded-2xl p-8 shadow-md flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white">{isAr ? "جاهز للبدء؟" : isEs ? "¿Listo para Comenzar?" : "Ready to Get Started?"}</h3>
              <p className="text-[15px] text-[var(--color-primary-100)] leading-relaxed">
                {isAr ? "احجز استشارتك المجانية لمناقشة خطوات تأسيس مشروعك التجاري بثقة." : isEs ? "Reserve su consulta gratuita para discutir los pasos de constitución de su empresa." : "Book a free consultation to review your business setup requirements and get started."}
              </p>
              <Button size="lg" className="w-full bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)] font-semibold" asChild>
                <Link href="/contact">{tDict.nav.bookConsultation}</Link>
              </Button>
              <div className="flex items-center justify-center gap-2 text-sm text-[var(--color-primary-200)] pt-2 border-t border-white/10">
                <Phone className="w-4 h-4" />
                <span>(901) 207-1660</span>
              </div>
            </div>

            {/* Scope Notice */}
            <div className="bg-[#F8F7F4] rounded-2xl p-6 border border-[var(--color-border)] text-sm text-[var(--color-slate)] flex flex-col gap-3">
              <h4 className="font-semibold text-[var(--color-charcoal)] text-[15px]">{tDict.common.regulatoryNoticeTitle}</h4>
              <p className="leading-relaxed">
                {tDict.footer.disclaimer}
              </p>
            </div>

          </aside>

        </div>
      </div>

    </main>
  )
}
