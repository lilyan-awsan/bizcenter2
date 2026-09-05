import { Language } from "@/context/language-context"

export interface TranslationDictionary {
  // Navigation & General UI
  nav: {
    home: string
    services: string
    resources: string
    about: string
    contact: string
    bookConsultation: string
    existingClient: string
    makePayment: string
  }
  // Services List
  services: {
    businessStartup: { title: string; desc: string }
    bookkeeping: { title: string; desc: string }
    businessSupport: { title: string; desc: string }
    applicationsAdmin: { title: string; desc: string }
    newToUS: { title: string; desc: string }
  }
  // Resources Dropdown
  resources: {
    documentChecklist: { title: string; desc: string }
    formsOfficial: { title: string; desc: string }
    faq: { title: string; desc: string }
  }
  // Hero Section
  hero: {
    eyebrow: string
    titlePart1: string
    titlePart2: string
    titlePart3: string
    subtitle: string
    callUs: string
    guidanceTitle: string
    guidanceSubtitle: string
    trustedBadge: string
    businessSetup: string
    stepByStep: string
    setupProgress: string
    verified: string
    consultationHub: string
    bookStrategyCall: string
    directPrivate: string
  }
  // Trust & Scope
  trust: {
    scopeTitle: string
    scopeDesc: string
    bilingualNotice: string
  }
  // Footer
  footer: {
    tagline: string
    quickLinks: string
    contactInfo: string
    hours: string
    address: string
    phone: string
    fax: string
    email: string
    disclaimer: string
    rights: string
  }
  // Common UI Elements across pages
  common: {
    exploreService: string
    exploreOurServices: string
    stepWord: string
    ourCoreServices: string
    designedForSuccess: string
    designedForSuccessDesc: string
    workingTogether: string
    clearPathForward: string
    clearPathForwardDesc: string
    readyForNextStep: string
    readyForNextStepDesc: string
    whoWeHelpTitle: string
    whoWeHelpList: string[]
    whyChooseTitle: string
    whyChooseDesc: string
    whyChooseFeatures: { title: string; desc: string }[]
    privacyNoticeTitle: string
    privacyNoticeText: string
    regulatoryNoticeTitle: string
    regulatoryNoticeText: string
    callToday: string
    sendUsMessage: string
    businessHoursVal: string
    locationTitle: string
    getDirections: string
    messageSentSuccess: string
    messageSentSuccessDesc: string
    sendAnotherMessage: string
    whatHappensNextTitle: string
    whatHappensNext: string
    whatHappensNextSteps: { title: string; desc: string }[]
    faqTitle: string
    faqSubtitle: string
    notSureWhereToStart: string
    notSureWhereToStartDesc: string
    trustedSupport: string
    practicalGuidance: string
    bilingualExperts: string
    timelineSteps: { title: string; desc: string }[]
    firstName: string
    lastName: string
    serviceNeeded: string
    selectService: string
    message: string
    preferredContactMethod: string
    eitherMethod: string
    sendMessage: string
    sending: string
  }
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  EN: {
    nav: {
      home: "Home",
      services: "Services",
      resources: "Resources",
      about: "About",
      contact: "Contact",
      bookConsultation: "Book a Free Consultation",
      existingClient: "Existing Client",
      makePayment: "Make a Payment"
    },
    services: {
      businessStartup: {
        title: "Business Startup",
        desc: "From idea to organized next steps. Setup your entity correctly with complete administrative confidence."
      },
      bookkeeping: {
        title: "Bookkeeping",
        desc: "Keep your financial records organized, clear, and ready month over month."
      },
      businessSupport: {
        title: "Business Support",
        desc: "Ongoing support for everyday business needs, filings, licensing, and document organization."
      },
      applicationsAdmin: {
        title: "Applications & Admin",
        desc: "Organize information and efficiently prepare administrative applications with precision."
      },
      newToUS: {
        title: "New to the U.S.",
        desc: "A clear starting point for administrative steps, document orientation, and local setup."
      }
    },
    resources: {
      documentChecklist: {
        title: "Document Checklist",
        desc: "Prepare the information for your visit."
      },
      formsOfficial: {
        title: "Forms & Official Resources",
        desc: "Information with links to official sources."
      },
      faq: {
        title: "FAQ",
        desc: "Answers to common questions."
      }
    },
    hero: {
      eyebrow: "PROFESSIONAL ADMINISTRATIVE & BUSINESS SUPPORT",
      titlePart1: "Clear Guidance.",
      titlePart2: "Practical Results.",
      titlePart3: "A Better Way Forward.",
      subtitle: "THE CENTER provides trusted support for entrepreneurs, business owners, and individuals navigating startup processes, bookkeeping, and application filings.",
      callUs: "Call (901) 207-1660",
      guidanceTitle: "Personalized Guidance",
      guidanceSubtitle: "Bilingual & Tailored Support",
      trustedBadge: "Trusted Local Support",
      businessSetup: "Business Setup",
      stepByStep: "Clear Step-by-Step",
      setupProgress: "Setup Progress",
      verified: "100% Verified",
      consultationHub: "Consultation Hub",
      bookStrategyCall: "Book Your Strategy Call",
      directPrivate: "Direct & Private"
    },
    trust: {
      scopeTitle: "Knowing Our Scope & Professional Standards",
      scopeDesc: "THE CENTER provides administrative and business organization support. We do not provide legal advice, CPA accounting, or immigration representation.",
      bilingualNotice: "🇬🇧 English • 🇪🇸 Español • 🇸🇦 العربية available for all services"
    },
    footer: {
      tagline: "Your trusted center for practical business setup, bookkeeping, and administrative organization.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Information",
      hours: "Hours: Monday - Friday, 9:00 AM - 5:00 PM",
      address: "5520 Summer Ave #102, Memphis, TN 38122",
      phone: "Phone: (901) 207-1660",
      fax: "Fax: (901) 209-5511",
      email: "Email: info@biz.center",
      disclaimer: "THE CENTER provides document preparation, administrative assistance, and business organization services. We are not an attorney, CPA firm, or government agency, and we do not provide legal or tax advice.",
      rights: "THE CENTER Business Services. All rights reserved."
    },
    common: {
      exploreService: "Explore Service",
      exploreOurServices: "Explore Our Services",
      stepWord: "STEP",
      ourCoreServices: "Our Core Services",
      designedForSuccess: "Designed for Your Success",
      designedForSuccessDesc: "Every business and personal process requires unique attention. We offer practical administrative support tailored to every stage.",
      workingTogether: "Working Together",
      clearPathForward: "A Clear Path Forward",
      clearPathForwardDesc: "Working with THE CENTER is straightforward and transparent. We focus on clear steps and practical results.",
      readyForNextStep: "Ready to Take the Next Step?",
      readyForNextStepDesc: "Schedule a consultation today to discuss your business or administrative needs. We are here to help you move forward with clarity and speed.",
      whoWeHelpTitle: "Who We Help",
      whoWeHelpList: [
        "New entrepreneurs launching their first venture",
        "Existing small businesses needing organizational support",
        "Self-employed professionals managing their own operations",
        "Individuals needing administrative guidance with forms",
        "People new to the United States seeking practical direction"
      ],
      whyChooseTitle: "Why Choose The Center",
      whyChooseDesc: "We are dedicated to providing ethical, organized support.",
      whyChooseFeatures: [
        { title: "Professional Guidance", desc: "Expertise applied practically to your specific business scenario without unnecessary complications." },
        { title: "Clear Communication", desc: "We translate complex administrative jargon into plain language so you always know what's happening." },
        { title: "Organized Process", desc: "Step-by-step workflows that turn overwhelming tasks into manageable actions." },
        { title: "English & Spanish & Arabic Support", desc: "Fully multilingual assistance to ensure nothing is lost in translation during critical setups." }
      ],
      privacyNoticeTitle: "Privacy Notice:",
      privacyNoticeText: "Please do not submit Social Security Numbers (SSNs), ITINs, banking passwords, tax identification numbers, or sensitive immigration identifiers through this web form.",
      regulatoryNoticeTitle: "Important Regulatory Notice:",
      regulatoryNoticeText: "THE CENTER provides administrative assistance, recordkeeping support, and document organization. We are not a legal firm, CPA accounting firm, or government agency.",
      callToday: "Call Today",
      sendUsMessage: "Send Us a Message",
      businessHoursVal: "Monday–Friday 9:00 AM – 5:00 PM",
      locationTitle: "Location",
      getDirections: "Get Directions",
      messageSentSuccess: "Message Sent Successfully",
      messageSentSuccessDesc: "Thank you for contacting THE CENTER. Our team will review your message and get back to you during business hours.",
      sendAnotherMessage: "Send Another Message",
      whatHappensNextTitle: "What Happens Next?",
      whatHappensNext: "What Happens Next?",
      whatHappensNextSteps: [
        { title: "We Learn About Your Needs", desc: "Our team reviews your message and prepares to discuss your specific administrative or business goals." },
        { title: "We Identify the Right Step", desc: "We'll contact you via your preferred method to suggest a practical plan or arrange a free consultation." },
        { title: "We Help You Move Forward", desc: "You receive organized, professional support to streamline your paperwork and business processes." }
      ],
      faqTitle: "Frequently Asked Questions",
      faqSubtitle: "Find quick answers to common questions about our services.",
      notSureWhereToStart: "Not Sure Where To Start?",
      notSureWhereToStartDesc: "You don't need to have everything figured out before contacting us. Book a free consultation and we'll help you organize the path forward.",
      trustedSupport: "Trusted Support",
      practicalGuidance: "Practical Guidance",
      bilingualExperts: "Multilingual Experts",
      timelineSteps: [
        { title: "Book a Consultation", desc: "Schedule a convenient consultation. We provide a welcoming environment to discuss your exact situation." },
        { title: "Share Your Goals", desc: "We listen attentively to your specific needs and gather all necessary documentation." },
        { title: "Receive Customized Plan", desc: "Get a clear step-by-step roadmap tailored to your administrative or business objectives." },
        { title: "Execute with Confidence", desc: "Proceed forward smoothly with continuous assistance and expert organization." }
      ],
      firstName: "First Name",
      lastName: "Last Name",
      serviceNeeded: "Service Needed (Optional)",
      selectService: "Select a service...",
      message: "Message",
      preferredContactMethod: "Preferred Contact Method",
      eitherMethod: "Either",
      sendMessage: "Send Message",
      sending: "Sending..."
    }
  },

  ES: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      resources: "Recursos",
      about: "Nosotros",
      contact: "Contacto",
      bookConsultation: "Reservar Consulta Gratuita",
      existingClient: "Cliente Existente",
      makePayment: "Realizar un Pago"
    },
    services: {
      businessStartup: {
        title: "Inicio de Negocios",
        desc: "De la idea a los pasos organizados. Configure su entidad correctamente con total confianza administrativa."
      },
      bookkeeping: {
        title: "Contabilidad",
        desc: "Mantenga sus registros financieros organizados, claros y listos mes a mes."
      },
      businessSupport: {
        title: "Soporte Empresarial",
        desc: "Apoyo continuo para necesidades comerciales diarias, trámites, licencias y organización de documentos."
      },
      applicationsAdmin: {
        title: "Solicitudes y Administración",
        desc: "Organice la información y prepare solicitudes administrativas de manera eficiente y precisa."
      },
      newToUS: {
        title: "Nuevo en EE. UU.",
        desc: "Un punto de partida claro para trámites administrativos, orientación de documentos y configuración local."
      }
    },
    resources: {
      documentChecklist: {
        title: "Lista de Documentos",
        desc: "Prepare la información necesaria para su visita."
      },
      formsOfficial: {
        title: "Formularios y Recursos Oficiales",
        desc: "Información con enlaces directos a fuentes oficiales."
      },
      faq: {
        title: "Preguntas Frecuentes",
        desc: "Respuestas claras a las dudas más comunes."
      }
    },
    hero: {
      eyebrow: "SOPORTE ADMINISTRATIVO Y EMPRESARIAL PROFESIONAL",
      titlePart1: "Orientación Clara.",
      titlePart2: "Resultados Prácticos.",
      titlePart3: "Un Mejor Camino a Seguir.",
      subtitle: "THE CENTER brinda apoyo de confianza para emprendedores, dueños de negocios e individuos que navegan procesos de inicio, contabilidad y presentación de solicitudes.",
      callUs: "Llamar al (901) 207-1660",
      guidanceTitle: "Orientación Personalizada",
      guidanceSubtitle: "Atención Multilingüe y a la Medida",
      trustedBadge: "Soporte Local de Confianza",
      businessSetup: "Configuración Empresarial",
      stepByStep: "Paso a Paso Claro",
      setupProgress: "Progreso de Configuración",
      verified: "100% Verificado",
      consultationHub: "Centro de Consultas",
      bookStrategyCall: "Reserve su Llamada de Estrategia",
      directPrivate: "Directo y Privado"
    },
    trust: {
      scopeTitle: "Conociendo Nuestro Alcance y Estándares Profesionales",
      scopeDesc: "THE CENTER brinda apoyo administrativo y de organización empresarial. No brindamos asesoría legal, contabilidad CPA ni representación de inmigración.",
      bilingualNotice: "🇬🇧 English • 🇪🇸 Español • 🇸🇦 العربية disponibles para todos los servicios"
    },
    footer: {
      tagline: "Su centro de confianza para la organización práctica de negocios, contabilidad y trámites administrativos.",
      quickLinks: "Enlaces Rápidos",
      contactInfo: "Información de Contacto",
      hours: "Horario: Lunes a Viernes, 9:00 AM - 5:00 PM",
      address: "5520 Summer Ave #102, Memphis, TN 38122",
      phone: "Teléfono: (901) 207-1660",
      fax: "Fax: (901) 209-5511",
      email: "Correo: info@biz.center",
      disclaimer: "THE CENTER ofrece servicios de preparación de documentos, asistencia administrativa y organización empresarial. No somos una firma de abogados, firma de CPA ni agencia gubernamental, y no ofrecemos asesoramiento legal ni fiscal.",
      rights: "THE CENTER Business Services. Todos los derechos reservados."
    },
    common: {
      exploreService: "Explorar Servicio",
      exploreOurServices: "Explorar Nuestros Servicios",
      stepWord: "PASO",
      ourCoreServices: "Nuestros Servicios Principales",
      designedForSuccess: "Diseñado para su Éxito",
      designedForSuccessDesc: "Cada proceso empresarial y personal requiere una atención única. Ofrecemos apoyo administrativo práctico adaptado a cada etapa.",
      workingTogether: "Trabajando Juntos",
      clearPathForward: "Un Camino Claro Hacia Adelante",
      clearPathForwardDesc: "Trabajar con THE CENTER es sencillo y transparente. Nos enfocamos en pasos claros y resultados prácticos.",
      readyForNextStep: "¿Listo para Dar el Siguiente Paso?",
      readyForNextStepDesc: "Programe una consulta hoy para discutir sus necesidades comerciales o administrativas. Estamos aquí para ayudarle a avanzar con claridad y rapidez.",
      whoWeHelpTitle: "A Quién Ayudamos",
      whoWeHelpList: [
        "Nuevos emprendedores lanzando su primera empresa",
        "Pequeñas empresas existentes que necesitan apoyo organizacional",
        "Profesionales independientes que gestionan sus propias operaciones",
        "Personas que necesitan orientación administrativa con formularios",
        "Personas nuevas en los Estados Unidos que buscan dirección práctica"
      ],
      whyChooseTitle: "Por Qué Elegir The Center",
      whyChooseDesc: "Estamos dedicados a brindar un apoyo ético y organizado.",
      whyChooseFeatures: [
        { title: "Orientación Profesional", desc: "Experiencia aplicada prácticamente a su escenario empresarial sin complicaciones innecesarias." },
        { title: "Comunicación Clara", desc: "Traducimos la jerga administrativa compleja a un lenguaje sencillo para que siempre sepa qué sucede." },
        { title: "Proceso Organizado", desc: "Flujos de trabajo paso a paso que convierten tareas abrumadoras en acciones manejables." },
        { title: "Soporte Multilingüe (Inglés, Español y Árabe)", desc: "Asistencia multilingüe completa para garantizar que nada se pierda en la traducción." }
      ],
      privacyNoticeTitle: "Aviso de Privacidad:",
      privacyNoticeText: "Por favor no envíe números de Seguro Social (SSN), ITIN, contraseñas bancarias ni números de documentos de inmigración sensibles a través de este formulario.",
      regulatoryNoticeTitle: "Aviso Regulatorio Importante:",
      regulatoryNoticeText: "THE CENTER brinda asistencia administrativa, mantenimiento de registros y organización de documentos. No somos una firma legal ni de CPA.",
      callToday: "Llamar Hoy",
      sendUsMessage: "Envíenos un Mensaje",
      businessHoursVal: "Lunes a Viernes 9:00 AM – 5:00 PM",
      locationTitle: "Ubicación",
      getDirections: "Obtener Direcciones",
      messageSentSuccess: "Mensaje Enviado con Éxito",
      messageSentSuccessDesc: "Gracias por contactar a THE CENTER. Nuestro equipo revisará su mensaje y se pondrá en contacto pronto.",
      sendAnotherMessage: "Enviar Otro Mensaje",
      whatHappensNextTitle: "¿Qué Sucede Después?",
      whatHappensNext: "¿Qué Sucede Después?",
      whatHappensNextSteps: [
        { title: "Aprendemos Sobre sus Necesidades", desc: "Nuestro equipo revisa su mensaje y se prepara para discutir sus objetivos específicos." },
        { title: "Identificamos el Paso Correcto", desc: "Nos pondremos en contacto según su método preferido para sugerir un plan práctico o consulta." },
        { title: "Le Ayudamos a Avanzar", desc: "Recibirá apoyo profesional organizado para agilizar sus trámites y procesos." }
      ],
      faqTitle: "Preguntas Frecuentes",
      faqSubtitle: "Encuentre respuestas rápidas a las preguntas más comunes sobre nuestros servicios.",
      notSureWhereToStart: "¿No está Seguro de Dónde Empezar?",
      notSureWhereToStartDesc: "No necesita tener todo resuelto antes de contactarnos. Reserve una consulta gratuita y le ayudaremos a organizar el camino a seguir.",
      trustedSupport: "Soporte de Confianza",
      practicalGuidance: "Orientación Práctica",
      bilingualExperts: "Expertos Multilingües",
      timelineSteps: [
        { title: "Reservar una Consulta", desc: "Programe una consulta conveniente. Brindamos un ambiente acogedor para discutir su situación." },
        { title: "Compartir sus Objetivos", desc: "Escuchamos atentamente sus necesidades específicas y reunimos la documentación necesaria." },
        { title: "Recibir Plan Personalizado", desc: "Obtenga una hoja de ruta clara adaptada a sus objetivos administrativos o comerciales." },
        { title: "Ejecutar con Confianza", desc: "Avance sin problemas con asistencia continua y organización experta." }
      ],
      firstName: "Nombre",
      lastName: "Apellido",
      serviceNeeded: "Servicio Requerido (Opcional)",
      selectService: "Seleccione un servicio...",
      message: "Mensaje",
      preferredContactMethod: "Método de Contacto Preferido",
      eitherMethod: "Cualquiera",
      sendMessage: "Enviar Mensaje",
      sending: "Enviando..."
    }
  },

  AR: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      resources: "الموارد",
      about: "من نحن",
      contact: "اتصل بنا",
      bookConsultation: "احجز استشارة مجانية",
      existingClient: "عميل حالي",
      makePayment: "إجراء دفعة مالية"
    },
    services: {
      businessStartup: {
        title: "تأسيس الأعمال",
        desc: "من الفكرة إلى خطوات منظمة. أسس شركتك بشكل صحيح وبثقة إدارية كاملة."
      },
      bookkeeping: {
        title: "مسك الدفاتر المحاسبية",
        desc: "حافظ على تنظيم سجلاتك المالية بوضوح ودقة شهراً بعد شهر."
      },
      businessSupport: {
        title: "دعم الأعمال التجارية",
        desc: "دعم مستمر للمتطلبات اليومية، التراخيص، وحفظ وتنظيم المستندات."
      },
      applicationsAdmin: {
        title: "الطلبات والمعاملات الإدارية",
        desc: "تنظيم المعلومات وإعداد المعاملات الإدارية بدقة وكفاءة عالية."
      },
      newToUS: {
        title: "القادمون الجدد لأمريكا",
        desc: "نقطة بداية واضحة للإجراءات الإدارية، توجيه المستندات، والتأسيس المحلي."
      }
    },
    resources: {
      documentChecklist: {
        title: "قائمة المستندات المطلوبة",
        desc: "جهّز المعلومات والمستندات المطلوبة لزيارتك."
      },
      formsOfficial: {
        title: "النماذج والمصادر الرسمية",
        desc: "معلومات موثقة مع روابط للمصادر الحكومية الرسمية."
      },
      faq: {
        title: "الأسئلة الشائعة",
        desc: "إجابات شاملة عن أكثر الاستفسارات تكراراً."
      }
    },
    hero: {
      eyebrow: "الدعم الإداري والأعمال الاحترافي",
      titlePart1: "توجيه واضح.",
      titlePart2: "نتائج عملية.",
      titlePart3: "طريق أفضل نحو النجاح.",
      subtitle: "يقدم 'ذا سنتر' (THE CENTER) دعماً موثوقاً لرواد الأعمال، أصحاب الشركات، والأفراد في إجراءات التأسيس، مسك الدفاتر، والمعاملات الإدارية.",
      callUs: "اتصل بنا: (901) 207-1660",
      guidanceTitle: "توجيه شخصي مخصص",
      guidanceSubtitle: "دعم متعدد اللغات ومصمم لاحتياجاتك",
      trustedBadge: "دعم محلي موثوق",
      businessSetup: "تأسيس الأعمال",
      stepByStep: "خطوة بخطوة بوضوح",
      setupProgress: "تقدم التأسيس",
      verified: "100% موثق ومكتمل",
      consultationHub: "مركز الاستشارات",
      bookStrategyCall: "احجز جلستك الاستشارية",
      directPrivate: "مباشر وخاص"
    },
    trust: {
      scopeTitle: "نطاق خدماتنا والمعايير المهنية",
      scopeDesc: "يقدم 'ذا سنتر' خدمات التنظيم الإداري ودعم الأعمال. نحن لا نقدم استشارات قانونية، أو محاسبة قانونية (CPA)، أو تمثيل في قضايا الهجرة.",
      bilingualNotice: "🇬🇧 English • 🇪🇸 Español • 🇸🇦 العربية متوفرة لجميع خدماتنا"
    },
    footer: {
      tagline: "مركزك الموثوق لتأسيس الأعمال، مسك الدفاتر المحاسبية، والتنظيم الإداري العملي.",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات الاتصال",
      hours: "أوقات العمل: الاثنين - الجمعة، 9:00 صباحاً - 5:00 مساءً",
      address: "5520 Summer Ave #102, Memphis, TN 38122",
      phone: "الهاتف: 207-1660 (901)",
      fax: "الفاكس: 209-5511 (901)",
      email: "البريد الإلكتروني: info@biz.center",
      disclaimer: "يقدم 'ذا سنتر' خدمات إعداد المستندات والمساعدة الإدارية وتنظيم الأعمال. نحن لسنا مكتب محاماة أو شركة محاسبة قانونية أو جهة حكومية، ولا نقدم استشارات قانونية أو ضريبية.",
      rights: "THE CENTER Business Services. جميع الحقوق محفوظة."
    },
    common: {
      exploreService: "استكشف الخدمة",
      exploreOurServices: "استكشف خدماتنا",
      stepWord: "الخطوة",
      ourCoreServices: "خدماتنا الأساسية",
      designedForSuccess: "مصممة لنجاحك",
      designedForSuccessDesc: "كل معاملة تجارية أو شخصية تتطلب اهتماماً خاصاً. نكفل لك دعماً إدارياً عملياً مخصصاً لكل مرحلة.",
      workingTogether: "العمل معاً",
      clearPathForward: "مسار واضح نحو النجاح",
      clearPathForwardDesc: "العمل مع 'ذا سنتر' يتسم بالبساطة والشفافية. نركز على خطوات واضحة ونتائج عملية.",
      readyForNextStep: "هل أنت مستعد للخطوة التالية؟",
      readyForNextStepDesc: "احجز استشارتك اليوم لمناقشة احتياجاتك التجارية أو الإدارية. نحن هنا لمساعدتك على التقدم بثقة وسرعة.",
      whoWeHelpTitle: "من نساعد",
      whoWeHelpList: [
        "رواد الأعمال الجدد الذين يطلقون مشاريعهم الأولى",
        "الشركات الصغيرة القائمة التي تحتاج إلى دعم تنظيمي",
        "المستقلون وأصحاب المهن الحرة الذين يديرون أعمالهم بأنفسهم",
        "الأفراد الذين يحتاجون إلى توجيه إداري في تعبئة النماذج",
        "القادمون الجدد إلى الولايات المتحدة الذين يطلبون توجيهاً عملياً"
      ],
      whyChooseTitle: "لماذا تختار 'ذا سنتر'",
      whyChooseDesc: "نحن مكرسون لتقديم دعم أخلاقي ومنظم عالي الجودة.",
      whyChooseFeatures: [
        { title: "توجيه احترافي", desc: "خبرة تطبيقية عملية تناسب نشاطك التجاري المحدد دون تعقيدات غير ضرورية." },
        { title: "تواصل واضح", desc: "نشرح المصطلحات الإدارية المعقدة بلغة بسيطة ومفهومة لتكون دائماً على دراية بكل التطورات." },
        { title: "إجراءات منظمة", desc: "خطوات عمل متسلسلة تحول المهام الشاقة إلى خطوات مقدورة وميسرة." },
        { title: "دعم متعدد اللغات (الإنجليزية، الإسبانية، والعربية)", desc: "مساعدة كاملة باللغات الثلاث لضمان عدم ضياع أي تفاصيل أثناء التأسيس والمعاملات." }
      ],
      privacyNoticeTitle: "إشعار الخصوصية والأمان:",
      privacyNoticeText: "يرجى عدم إرسال أرقام الضمان الاجتماعي (SSN)، أرقام ITIN، كلمات مرور الحسابات البنكية، أو أرقام وثائق الهجرة الحساسة عبر هذا النموذج.",
      regulatoryNoticeTitle: "إشعار تنظيمي مهم:",
      regulatoryNoticeText: "يقدم 'ذا سنتر' خدمات الدعم الإداري، حفظ السجلات، وتنظيم الوثائق. نحن لسنا مكتب محاماة أو شركة محاسبة معتمدة (CPA).",
      callToday: "اتصل بنا اليوم",
      sendUsMessage: "أرسل لنا رسالة",
      businessHoursVal: "الاثنين - الجمعة 9:00 صباحاً – 5:00 مساءً",
      locationTitle: "الموقع",
      getDirections: "الحصول على الاتجاهات",
      messageSentSuccess: "تم إرسال الرسالة بنجاح",
      messageSentSuccessDesc: "شكراً لتواصلك مع 'ذا سنتر'. سيقوم فريقنا بمراجعة رسالتك والرد عليك خلال أوقات العمل الرسمية.",
      sendAnotherMessage: "إرسال رسالة أخرى",
      whatHappensNextTitle: "ماذا يحدث بعد ذلك؟",
      whatHappensNext: "ماذا يحدث بعد ذلك؟",
      whatHappensNextSteps: [
        { title: "نتعرف على احتياجاتك", desc: "يقوم فريقنا بمراجعة رسالتك والاستعداد لمناقشة أهدافك الإدارية أو التجارية." },
        { title: "نحدد الخطوة المناسبة", desc: "سنتواصل معك عبر وسيلتك المفضلة لاقتراح خطة عمل عملية أو ترتيب استشارة مجانية." },
        { title: "نساعدك على التقدم بنجاح", desc: "تحصل على دعم احترافي ومنظم لتسهيل معاملتك وإنجاز أعمالك بثقة." }
      ],
      faqTitle: "الأسئلة الشائعة",
      faqSubtitle: "اعثر على إجابات سريعة لأكثر الاستفسارات شيوعاً حول خدماتنا.",
      notSureWhereToStart: "لست متأكداً من أين تبدأ؟",
      notSureWhereToStartDesc: "لا تحتاج إلى معرفة كل شيء قبل التواصل معنا. احجز استشارة مجانية وسنساعدك في تنظيم المسار الصحيح.",
      trustedSupport: "دعم موثوق",
      practicalGuidance: "توجيه عملي",
      bilingualExperts: "خبراء متعددون اللغات",
      timelineSteps: [
        { title: "احجز استشارة", desc: "حدد موعداً يناسبك. نوفر بيئة ترحيبية لمناقشة وضعك بالتفصيل." },
        { title: "شاركنا أهدافك", desc: "نستمع باهتمام لاحتياجاتك الخاصة ونجمع كافة المستندات المطلوبة." },
        { title: "احصل على خطة مخصصة", desc: "احصل على خارطة طريق واضحة ومحددة تناسب أهدافك الإدارية والتجارية." },
        { title: "نفّذ بثقة كاملة", desc: "انطلق بثقة مع المساعدة المستمرة والتنظيم الاحترافي." }
      ],
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      serviceNeeded: "الخدمة المطلوبة (اختياري)",
      selectService: "اختر خدمة...",
      message: "الرسالة",
      preferredContactMethod: "وسيلة التواصل المفضلة",
      eitherMethod: "أيهما",
      sendMessage: "إرسال الرسالة",
      sending: "جاري الإرسال..."
    }
  }
}

export function getTranslation(lang: Language): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS.EN
}
