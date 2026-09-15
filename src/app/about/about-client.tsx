"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Info, CheckCircle2, Building2, FolderSync, Users, ClipboardCheck, Phone, Mail, Globe, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { AboutHeroVisual } from "@/components/ui/about-hero-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { BookConsultationButton } from "@/components/ui/book-consultation-button"
import { useLanguage } from "@/context/language-context"
import { getTranslation } from "@/lib/i18n/translations"
import { aboutData } from "@/lib/about"

export default function AboutClientPage() {
  const { language } = useLanguage()
  const tDict = getTranslation(language)
  const isAr = language === 'AR'
  const isEs = language === 'ES'

  // Localized hero & focus content from biz.center/about
  const heroEyebrow = isAr ? "عن ذا سنتر" : isEs ? "Sobre nosotros" : "About us"
  const heroTitle = isAr ? "ذا سنتر لخدمات الأعمال" : isEs ? "The Center Servicios Empresariales" : "The Center Business Services"
  const heroDescription = isAr
    ? "يجعل 'ذا سنتر' مسك الدفاتر المحاسبية وإدارة الأعمال أمراً بسيطاً. نساعدك في تتبع الإيرادات، المصروفات، والأنشطة المالية في مكان واحد — بسجلات واضحة وتنظيم أفضل."
    : isEs
    ? "THE CENTER simplifica la contabilidad comercial. Le ayudamos a rastrear ingresos, gastos y actividad financiera en un solo lugar, con registros claros y una mejor organización."
    : "THE CENTER makes business bookkeeping simple. We help you track income, expenses, and financial activity in one place—with clear records and better organization."

  const focusEyebrow = isAr ? "تركيزنا" : isEs ? "Nuestro enfoque" : "Our focus"
  const focusTitle = isAr
    ? "أدوات بسيطة لسجلات مالية أكثر وضوحاً."
    : isEs
    ? "Herramientas simples para registros financieros más claros."
    : "Simple tools for clearer financial records."
  const focusDescription = isAr
    ? "بنينا 'ذا سنتر' لتتمكن الشركات من إدارة مهام مسك الدفاتر دون أي تعقيد، والبقاء على اتصال بفريق المحاسبة الخاص بهم، والاحتفاظ بالمستندات جاهزة للمراجعة السنوية والمختصين الضريبيين."
    : isEs
    ? "Construimos THE CENTER para que las empresas puedan administrar las tareas de contabilidad sin complejidades innecesarias, mantenerse conectadas con su equipo contable y tener los documentos listos para la revisión de fin de año y los profesionales tributarios."
    : "We built THE CENTER so businesses can manage bookkeeping tasks without unnecessary complexity, stay connected to their bookkeeping team, and keep documents ready for year-end review and tax professionals."

  const focusFeatures = isAr ? [
    {
      title: "مكان واحد لجميع الأنشطة",
      description: "تبقى الإيرادات والمصروفات والنشاط المالي منظمة في مسار عمل متكامل.",
      icon: FolderSync
    },
    {
      title: "تعاون متكامل مع الفريق",
      description: "شارك المستجدات مع فريق مسك الدفاتر لتبقى المراجعات والمتابعات دقيقة وواضحة.",
      icon: Users
    },
    {
      title: "مستندات يسهل العثور عليها دائماً",
      description: "ارفع واحتفظ بسجلاتك الهامة منظمة للتدقيق، والإعداد الضريبي، والاحتياجات اليومية.",
      icon: ClipboardCheck
    },
    {
      title: "صُمم للشركات والمشاريع الحقيقية",
      description: "من ممفيس، تينيسي، ندعم العمليات المحاسبية العملية بأدوات ميسرة وسلسة.",
      icon: Building2
    }
  ] : isEs ? [
    {
      title: "Un solo lugar para su actividad",
      description: "Los ingresos, los gastos y la actividad financiera se mantienen organizados en un solo flujo de trabajo.",
      icon: FolderSync
    },
    {
      title: "Colaboración lista para el equipo",
      description: "Comparta el contexto con su equipo de contabilidad para que las revisiones y los seguimientos sean claros.",
      icon: Users
    },
    {
      title: "Documentos siempre localizables",
      description: "Suba y mantenga organizados los registros importantes para auditorías, preparación de impuestos y necesidades diarias.",
      icon: ClipboardCheck
    },
    {
      title: "Diseñado para empresas reales",
      description: "Desde Memphis, TN, respaldamos las operaciones prácticas de contabilidad con herramientas que facilitan su día a día.",
      icon: Building2
    }
  ] : aboutData.focus.features

  const contactEyebrow = isAr ? "اتصل بنا" : isEs ? "Contacto" : "Contact"
  const contactTitle = isAr ? "كيفية التواصل معنا." : isEs ? "Cómo comunicarse con nosotros." : "How to reach us."
  const contactSubtitle = isAr
    ? "سواء كنت تفضل البريد الإلكتروني أو الهاتف — فريقنا جاهز لمساعدتك."
    : isEs
    ? "Prefiera correo electrónico o teléfono: nuestro equipo está listo para ayudarlo."
    : "Prefer email or phone—our team is ready to help."

  // Localized values for story
  const storyHeading = isAr 
    ? "لماذا يوجد 'ذا سنتر'؟" 
    : isEs 
    ? "Por Qué Existe THE CENTER" 
    : aboutData.story.heading

  const storyParagraphs = isAr ? [
    "تأسس 'ذا سنتر' بناءً على فلسفة بسيطة: لا ينبغي أن تكون المعاملات الإدارية والتجارية شاقة أو مستحيلة الإنجاز بمفردك.",
    "لاحظنا أن الكثير من رواد الأعمال، أصحاب الشركات الصغيرة، والأفراد—خاصة القادمين الجدد إلى الولايات المتحدة—يواجهون صعوبات ليس لقلة طموحهم، بل لعدم وجود هيكل إداري ميسر ومنظم.",
    "من خلال توفير مركز متخصص في الدعم الاحترافي، التواصل الواضح، والتنظيم العملي، نساعد عملائنا على تحويل الحيرة إلى ثقة وتسهيل كافة الإجراءات الإدارية بثبات."
  ] : isEs ? [
    "THE CENTER se fundó con una filosofía simple: los procesos comerciales y administrativos no tienen por qué ser abrumadores o imposibles de navegar solo.",
    "Reconocimos que muchos emprendedores, dueños de pequeñas empresas e individuos, especialmente aquellos recién llegados a los Estados Unidos, a menudo luchan no por falta de visión, sino por falta de un marco administrativo claro y organizado.",
    "Al crear un lugar dedicado completamente al apoyo profesional, la comunicación clara y la organización práctica, ayudamos a las personas a transformar la confusión en confianza."
  ] : aboutData.story.content

  const visionText = isAr
    ? "مستقبل يتمتع فيه كل رائد أعمال وصاحب عمل بإمكانية الوصول إلى أدوات بسيطة وسجلات مالية أوضح وهيكل محاسبي عملي لتحقيق النجاح."
    : isEs
    ? "Un futuro donde cada emprendedor y dueño de negocio tenga acceso a herramientas simples, registros financieros más claros y la estructura contable práctica que necesita para triunfar."
    : aboutData.vision

  return (
    <main className="flex flex-col w-full min-h-screen">
      
      {/* =========================================
          1. HERO SECTION (Integrated from biz.center/about)
      ========================================= */}
      <section className="bg-[#F8F7F4] pt-[120px] pb-[80px] lg:pb-[100px] border-b border-[var(--color-border)] relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <StaggerContainer className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left rtl:items-start rtl:text-right rtl:lg:items-start rtl:lg:text-right z-10" delayChildren={0.1}>
              <StaggerItem distance={8}>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                  {heroEyebrow}
                </span>
              </StaggerItem>

              <StaggerItem distance={16} className="mb-6 max-w-[650px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                  {heroTitle}
                </h1>
              </StaggerItem>

              <StaggerItem distance={12} className="mb-10 max-w-[600px]">
                <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                  {heroDescription}
                </p>
              </StaggerItem>

              <StaggerItem distance={12} className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
                <BookConsultationButton size="lg" className="w-full sm:w-auto px-8" />
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)]" asChild>
                  <Link href="/services">{tDict.common.exploreOurServices}</Link>
                </Button>
              </StaggerItem>
            </StaggerContainer>

            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
              <AboutHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. OUR FOCUS (Direct from biz.center/about)
      ========================================= */}
      <section className="bg-white py-[90px] lg:py-[120px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <StaggerContainer className="max-w-[750px] mb-16 text-center lg:text-left rtl:text-right" delayChildren={0.1}>
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-600)] mb-3 block">
                {focusEyebrow}
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-charcoal)] mb-6">
                {focusTitle}
              </h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-slate)] leading-relaxed">
                {focusDescription}
              </p>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusFeatures.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <StaggerContainer key={idx} delayChildren={idx * 0.1} className="h-full">
                  <StaggerItem distance={16} className="h-full">
                    <article className="bg-[#F8F7F4] p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent-400)] transition-all duration-300 h-full flex flex-col justify-between group shadow-sm hover:shadow-md">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-[var(--color-accent-600)]" />
                        </div>
                        <h3 className="text-[20px] font-bold text-[var(--color-charcoal)] mb-3">{feature.title}</h3>
                        <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">{feature.description}</p>
                      </div>
                    </article>
                  </StaggerItem>
                </StaggerContainer>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          3. HOW TO REACH US (Direct from biz.center/about)
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[90px] lg:py-[120px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <StaggerContainer className="max-w-[700px] mb-16 text-center lg:text-left rtl:text-right" delayChildren={0.1}>
            <StaggerItem distance={8}>
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-600)] mb-3 block">
                {contactEyebrow}
              </span>
            </StaggerItem>
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-charcoal)] mb-4">
                {contactTitle}
              </h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-lg text-[var(--color-slate)] leading-relaxed">
                {contactSubtitle}
              </p>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Block 1: Email & Web */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center mb-5 text-[var(--color-accent-600)]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[var(--color-charcoal)] mb-4">
                {isAr ? "البريد والموقع" : isEs ? "Correo y web" : "Email & web"}
              </h3>
              <div className="space-y-2 text-[15px]">
                <p>
                  <a href="mailto:info@biz.center" className="text-[var(--color-accent-600)] hover:underline font-medium break-all">
                    info@biz.center
                  </a>
                </p>
                <p>
                  <a href="https://www.biz.center" target="_blank" rel="noopener noreferrer" className="text-[var(--color-slate)] hover:text-[var(--color-charcoal)] transition-colors font-medium">
                    www.biz.center
                  </a>
                </p>
              </div>
            </div>

            {/* Block 2: Office */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center mb-5 text-[var(--color-accent-600)]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[var(--color-charcoal)] mb-4">
                {isAr ? "المكتب" : isEs ? "Oficina" : "Office"}
              </h3>
              <div className="space-y-1 text-[15px] text-[var(--color-slate)]">
                <p className="font-medium text-[var(--color-charcoal)]">5520 Summer Ave #102</p>
                <p>Memphis, TN 38134</p>
              </div>
            </div>

            {/* Block 3: Main Phone */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center mb-5 text-[var(--color-accent-600)]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[var(--color-charcoal)] mb-4">
                {isAr ? "الهاتف الرئيسي" : isEs ? "Teléfono principal" : "Main phone"}
              </h3>
              <div className="space-y-2 text-[15px]">
                <p>
                  <a href="tel:+19012071660" className="text-[var(--color-accent-600)] hover:underline font-semibold">
                    901-207-1660
                  </a>
                </p>
                <p className="text-[var(--color-slate)]">
                  {isAr ? "المكتب: " : isEs ? "Oficina: " : "Office: "}
                  <a href="tel:+19012095511" className="hover:text-[var(--color-charcoal)] font-medium">
                    901-209-5511
                  </a>
                </p>
              </div>
            </div>

            {/* Block 4: Departments */}
            <div className="bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center mb-5 text-[var(--color-accent-600)]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[var(--color-charcoal)] mb-4">
                {isAr ? "الأقسام" : isEs ? "Departamentos" : "Departments"}
              </h3>
              <div className="space-y-2 text-[15px] text-[var(--color-slate)]">
                <p>
                  <span className="text-[var(--color-charcoal)] font-medium">{isAr ? "ضريبة المبيعات: " : isEs ? "Impuestos: " : "Sales Tax: "}</span>
                  <a href="tel:+19013068000" className="hover:underline hover:text-[var(--color-accent-600)]">
                    901-306-8000
                  </a>
                </p>
                <p>
                  <span className="text-[var(--color-charcoal)] font-medium">{isAr ? "الرواتب: " : isEs ? "Nómina: " : "Payroll: "}</span>
                  <a href="tel:+19013069000" className="hover:underline hover:text-[var(--color-accent-600)]">
                    901-306-9000
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. OUR STORY
      ========================================= */}
      <section className="bg-white py-[90px] lg:py-[120px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-lg)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <StaggerContainer className="relative">
              <StaggerItem distance={20}>
                <div className="aspect-[4/5] bg-[#F8F7F4] rounded-2xl border border-[var(--color-border)] relative overflow-hidden flex items-center justify-center p-8">
                  {/* Editorial Graphic Visual */}
                  <div className="w-full h-full border border-[var(--color-border-strong)] rounded-xl flex flex-col gap-6 p-8 relative z-10 bg-white/50 backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-primary-50)] flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-[var(--color-primary-900)]" />
                    </div>
                    <div className="space-y-4">
                      <div className="h-4 w-3/4 bg-[var(--color-primary-900)] rounded-full" />
                      <div className="h-3 w-full bg-[var(--color-slate)]/20 rounded-full" />
                      <div className="h-3 w-5/6 bg-[var(--color-slate)]/20 rounded-full" />
                      <div className="h-3 w-4/5 bg-[var(--color-slate)]/20 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--color-accent-400)]/10 rounded-full blur-3xl" />
                </div>
              </StaggerItem>
            </StaggerContainer>

            <StaggerContainer className="flex flex-col gap-6">
              <StaggerItem distance={12}>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)]">{storyHeading}</h2>
              </StaggerItem>
              {storyParagraphs.map((paragraph, idx) => (
                <StaggerItem key={idx} distance={12} delay={idx * 0.1}>
                  <p className="text-[17px] leading-relaxed text-[var(--color-slate)]">{paragraph}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* =========================================
          5. MISSION & VISION
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] border-b border-[var(--color-border)] text-center">
        <StaggerContainer className="container mx-auto px-6 max-w-[800px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-600)] mb-6 block">
              {isAr ? "رؤيتنا" : isEs ? "NUESTRA VISIÓN" : "OUR VISION"}
            </span>
          </StaggerItem>
          <StaggerItem distance={16}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-[var(--color-primary-900)] mb-10 text-balance">
              "{visionText}"
            </h2>
          </StaggerItem>
          <StaggerItem distance={12} className="w-20 h-1 bg-[var(--color-accent-400)] rounded-full mb-10" />
          <StaggerItem distance={12}>
            <p className="text-lg text-[var(--color-charcoal)] leading-relaxed text-balance">
              {isAr ? "كل خطوة ننظمها وكل اجتماع نقدمه صُمم لتحقيق هذه الرؤية لعملائنا." : isEs ? "Cada proceso que creamos, cada formulario que organizamos y cada reunión que brindamos está diseñada para dar vida a esta visión." : "Every process we build, every record we organize, and every meeting we provide is designed to bring this vision to life for our clients."}
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* =========================================
          6. VALUES GRID
      ========================================= */}
      <section className="bg-white py-[100px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <StaggerContainer className="text-center mb-16" delayChildren={0.1}>
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl font-bold">
                {isAr ? "قيمنا ومبادئنا" : isEs ? "Lo Que Creemos" : "What We Believe"}
              </h2>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(isAr ? [
              { title: "الوضوح البسيط", description: "نشرح الأمور المعقدة بلغة واضحة ومفهومة خالية من الجمل المبهمة.", icon: aboutData.values[0].icon },
              { title: "العمل المنظم", description: "كل خدمة تتبع خطوات مدروسة ومحددة لضمان الدقة وتجنب الأخطاء.", icon: aboutData.values[1].icon },
              { title: "الاستقلالية والتمكين", description: "نعلمك ونوفر لك المعرفة الكافية لتفهم وتدير أمورك بثقة استثنائية.", icon: aboutData.values[2].icon },
              { title: "التواصل بلغات متعددة", description: "دعم متكامل باللغات الإنجليزية والإسبانية والعربية لتسهيل تواصلك.", icon: aboutData.values[3].icon },
              { title: "الأخلاقيات والحدود المهنية", description: "نوضح دائماً نطاق عملنا ونحيل للخبراء المرخصين عند الحاجة.", icon: aboutData.values[4].icon },
              { title: "الدعم المستمر", description: "نحن معك خطوة بخطوة لمساعدتك في التطور والنمو بثبات.", icon: aboutData.values[5].icon },
            ] : isEs ? [
              { title: "Claridad sin Jerga", description: "Explicamos procesos complejos en un lenguaje sencillo y comprensible.", icon: aboutData.values[0].icon },
              { title: "Trabajo Estructurado", description: "Cada servicio sigue pasos sistemáticos y bien definidos para garantizar precisión.", icon: aboutData.values[1].icon },
              { title: "Empoderamiento del Cliente", description: "Le ayudamos a comprender sus procesos para que tome decisiones informadas.", icon: aboutData.values[2].icon },
              { title: "Apoyo Multilingüe", description: "Comunicación clara en inglés, español y árabe para su tranquilidad.", icon: aboutData.values[3].icon },
              { title: "Alcance Ético", description: "Siempre definimos nuestros límites y recomendamos profesionales autorizados cuando se requiere.", icon: aboutData.values[4].icon },
              { title: "Soporte Práctico Continuo", description: "Estamos a su lado en cada paso para ayudarle a avanzar con confianza.", icon: aboutData.values[5].icon },
            ] : aboutData.values).map((value, idx) => {
              const Icon = value.icon
              return (
                <StaggerContainer key={idx} delayChildren={idx * 0.1} className="h-full">
                  <StaggerItem distance={16} className="h-full">
                    <div className="bg-[#F8F7F4] p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-accent-400)] transition-colors duration-300 h-full flex flex-col justify-between group">
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-[var(--color-accent-600)]" />
                        </div>
                        <h3 className="text-[20px] font-semibold text-[var(--color-charcoal)] mb-3">{value.title}</h3>
                        <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          7. OUR APPROACH (Workflow)
      ========================================= */}
      <section className="bg-white py-[100px] border-b border-[var(--color-border)] overflow-hidden">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <StaggerContainer className="mb-16">
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl font-bold text-center">
                {isAr ? "نهج عملي للدعم والإرشاد" : isEs ? "Un Enfoque Práctico de Apoyo" : "A Practical Approach to Support"}
              </h2>
            </StaggerItem>
          </StaggerContainer>

          <div className="relative">
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-[var(--color-border-strong)] z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
              {(isAr ? [
                { step: "1", title: "الاستماع والاستيعاب", description: "نستمع باهتمام لتفاصيل وضعك وأهدافك الخاصة." },
                { step: "2", title: "تحديد المطلوب", description: "نحدد المستندات المطلوبة والخطوات العملية بدقة." },
                { step: "3", title: "التنظيم والتجهيز", description: "نقوم بإعداد وتنظيم كافة البيانات والأوراق بكل احترافية." },
                { step: "4", title: "المتابعة الواضحة", description: "نمكّنك بخطة واضحة ونبقى بجانبك للإجابة عن أي استفسار." }
              ] : isEs ? [
                { step: "1", title: "Escuchar y Comprender", description: "Escuchamos atentamente sus necesidades y objetivos particulares." },
                { step: "2", title: "Identificar Requisitos", description: "Aclaramos exactamente qué documentos e información se necesitan." },
                { step: "3", title: "Organización y Preparación", description: "Estructuramos y preparamos todos los archivos con precisión." },
                { step: "4", title: "Orientación Continua", description: "Le guiamos a través de los siguientes pasos con total claridad." }
              ] : aboutData.approach).map((step, idx) => (
                <StaggerContainer key={idx} delayChildren={idx * 0.15}>
                  <StaggerItem distance={16} className="flex flex-col md:items-center text-left md:text-center rtl:text-right rtl:md:text-center relative">
                    {idx !== aboutData.approach.length - 1 && (
                      <div className="md:hidden absolute top-[50px] bottom-[-40px] left-[24px] rtl:left-auto rtl:right-[24px] w-0.5 bg-[var(--color-border-strong)] z-0" />
                    )}
                    
                    <div className="w-[50px] h-[50px] rounded-full bg-[var(--color-primary-900)] text-white flex items-center justify-center font-bold text-[18px] mb-6 shadow-md relative z-10">
                      {step.step}
                    </div>
                    <div className="pl-[70px] md:pl-0 rtl:pl-0 rtl:pr-[70px] rtl:md:pr-0 -mt-[70px] md:mt-0 relative z-10">
                      <h3 className="text-[18px] font-semibold text-[var(--color-charcoal)] mb-2 md:mt-0 mt-[14px]">{step.title}</h3>
                      <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{step.description}</p>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          8. TRUST & TRANSPARENCY
      ========================================= */}
      <section className="bg-white py-[100px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-lg)]">
          <StaggerContainer className="text-center mb-16">
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl font-bold">
                {isAr ? "الثقة تُبنى بالشفافية الكاملة" : isEs ? "La Confianza se Construye con Transparencia" : "Trust Is Built Through Transparency"}
              </h2>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {(isAr ? [
              { title: "نطاق عمل واضح", description: "نوضح دائماً ما نقدمه وما لا نقدمه مسبقاً وبأعلى قدر من الشفافية." },
              { title: "التواصل بلغات متعددة", description: "شرح كامل باللغتين الإسبانية والعربية إلى جانب الإنجليزية." },
              { title: "بدون مصطلحات شائكة", description: "نضمن فهمك التام لكل وثيقة ومعاملة تقوم بإدارتها معنا." }
            ] : isEs ? [
              { title: "Alcance Claro del Servicio", description: "Definimos exactamente lo que hacemos y lo que no hacemos desde el primer día." },
              { title: "Explicaciones Multilingües", description: "Ofrecemos apoyo comprensible en español e inglés sin barreras." },
              { title: "Sin Letra Pequeña", description: "Nos aseguramos de que comprenda completamente cada documento que gestiona." }
            ] : aboutData.trustPillars).map((pillar, idx) => (
              <StaggerContainer key={idx} delayChildren={idx * 0.1}>
                <StaggerItem distance={16}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-50)] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-5 h-5 text-[var(--color-accent-600)]" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[var(--color-charcoal)] mb-2">{pillar.title}</h3>
                    <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">{pillar.description}</p>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>

          {/* Scope Notice Panel */}
          <StaggerContainer>
            <StaggerItem distance={20}>
              <div className="bg-[#F8F7F4] border border-[var(--color-border-strong)] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-white flex shrink-0 items-center justify-center shadow-sm">
                  <Info className="w-6 h-6 text-[var(--color-primary-900)]" />
                </div>
                <div>
                  <h4 className="text-[18px] font-semibold text-[var(--color-charcoal)] mb-2">
                    {isAr ? "معرفة وقت الإحالة" : isEs ? "Cuándo Recomendamos a Otros Especialistas" : "Knowing When to Refer"}
                  </h4>
                  <p className="text-[15px] text-[var(--color-slate)] leading-relaxed mb-4">
                    {tDict.footer.disclaimer}
                  </p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* =========================================
          9. WHO WE SERVE & LANGUAGE SUPPORT
      ========================================= */}
      <section className="bg-[#F8F7F4] py-[100px] border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <StaggerContainer className="text-center mb-16">
            <StaggerItem distance={12}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{tDict.common.whoWeHelpTitle}</h2>
            </StaggerItem>
            <StaggerItem distance={12}>
              <p className="text-[15px] text-[var(--color-slate)] max-w-[600px] mx-auto bg-white px-4 py-2 rounded-full shadow-sm inline-block border border-[var(--color-border)]">
                🇬🇧 English • 🇪🇸 Español • 🇸🇦 العربية
              </p>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(isAr ? [
              { title: "رواد الأعمال الجدد", description: "مساعدة مخصصة في خطوات التأسيس وتجهيز الوثائق الرسمية الأولى.", link: "/services/business-startup" },
              { title: "أصحاب الشركات الصغرى والقائمة", description: "دعم مستمر في حفظ الدفاتر المحاسبية وإدارة المعاملات الإدارية.", link: "/services/bookkeeping" },
              { title: "القادمون الجدد إلى الولايات المتحدة", description: "توجيه عملي خطوة بخطوة لفهم الإجراءات والأنظمة المحلية بثقة.", link: "/services/new-to-the-united-states" }
            ] : isEs ? [
              { title: "Nuevos Emprendedores", description: "Ayuda estructurada para dar sus primeros pasos de constitución y documentos.", link: "/services/business-startup" },
              { title: "Pequeñas Empresas Existentes", description: "Apoyo constante en contabilidad práctica y gestión administrativa diaria.", link: "/services/bookkeeping" },
              { title: "Recién Llegados a EE. UU.", description: "Orientación práctica paso a paso para comprender procesos locales con confianza.", link: "/services/new-to-the-united-states" }
            ] : aboutData.audiences).map((audience, idx) => (
              <StaggerContainer key={idx} delayChildren={idx * 0.1}>
                <StaggerItem distance={16}>
                  <Link href={audience.link} className="block bg-white p-8 rounded-2xl border border-[var(--color-border)] hover:border-[var(--color-primary-300)] shadow-sm hover:shadow-md transition-all h-full group">
                    <h3 className="text-[20px] font-semibold text-[var(--color-primary-900)] mb-3 group-hover:text-[var(--color-accent-600)] transition-colors">{audience.title}</h3>
                    <p className="text-[15px] text-[var(--color-slate)] leading-relaxed mb-6">{audience.description}</p>
                    <span className="text-[14px] font-medium text-[var(--color-primary-900)] inline-flex items-center">
                      {tDict.common.exploreService} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          10. RESOURCE & FAQ CONNECTION
      ========================================= */}
      <section className="py-[100px] bg-white">
        <StaggerContainer className="container mx-auto px-6 max-w-[900px] flex flex-col gap-10">
          <StaggerItem distance={12} className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {isAr ? "المعرفة يجب أن تكون متاحة للجميع" : isEs ? "El Conocimiento Debe Ser Accesible" : "Knowledge Should Be Accessible"}
            </h2>
            <p className="text-[16px] text-[var(--color-slate)] max-w-[600px] mx-auto mb-6">
              {isAr ? "صُممت مواردنا الإرشادية لمساعدتك في التحضير، وفهم الخطوات، ومعرفة ما تحتاجه قبل بدء اجتماعك." : isEs ? "Nuestros recursos están diseñados para ayudarle a prepararse y comprender los procesos antes de su reunión." : "Our resources are designed to help you prepare, understand processes, and identify useful next steps before you even speak with us."}
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild><Link href="/resources">{isAr ? "استكشف الموارد" : isEs ? "Explorar Recursos" : "Explore Resources"}</Link></Button>
            </div>
          </StaggerItem>
          
          <StaggerItem distance={12} className="mt-8 pt-10 border-t border-[var(--color-border)]">
            <h3 className="text-2xl font-bold text-center mb-8">{tDict.common.faqTitle}</h3>
            <SharedFaqAccordion category="Consultations" />
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* =========================================
          11. FINAL CTA (Book a Free meeting)
      ========================================= */}
      <section className="bg-[var(--color-primary-900)] py-[100px] text-center mt-auto">
        <StaggerContainer className="container mx-auto px-6 max-w-[700px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-3xl md:text-4xl">{tDict.common.readyForNextStep}</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-[16px] md:text-lg text-[var(--color-primary-100)] mb-8 text-balance">
              {tDict.common.readyForNextStepDesc}
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <BookConsultationButton size="lg" className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)]" />
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white/30 text-white hover:bg-white/10 shadow-none" asChild>
                <Link href="/contact">{tDict.common.callToday}</Link>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}
