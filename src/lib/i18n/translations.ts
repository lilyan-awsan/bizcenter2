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
      trustedBadge: "Trusted Local Support"
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
      trustedBadge: "Soporte Local de Confianza"
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
      trustedBadge: "دعم محلي موثوق"
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
    }
  }
}

export function getTranslation(lang: Language): TranslationDictionary {
  return TRANSLATIONS[lang] || TRANSLATIONS.EN
}
