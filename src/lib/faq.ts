export type FaqCategory = 
  | "General"
  | "Business Startup"
  | "Bookkeeping"
  | "Business Support"
  | "Applications & Administrative Support"
  | "New to the United States"
  | "Consultations"
  | "Resources"

export interface FaqItem {
  id: string
  question: string
  answer: string
  category: FaqCategory
  tags: string[]
  popular?: boolean
  relatedService?: string // slug of related service
  relatedResources?: string[] // slugs of related resources
  order: number
}

export const FAQ_DATA: FaqItem[] = [
  // General
  {
    id: "g1",
    question: "What is THE CENTER?",
    answer: "THE CENTER provides comprehensive business and administrative support services. We assist individuals and organizations by streamlining document preparation, organizing financial records, and offering structured guidance to help you navigate administrative processes with confidence.",
    category: "General",
    tags: ["about", "services", "overview"],
    popular: true,
    order: 1
  },
  {
    id: "g2",
    question: "Who can use THE CENTER's services?",
    answer: "Our services are designed for entrepreneurs, established business owners, and individuals who need organized support managing their administrative paperwork, business applications, and daily operational processes. We also specialize in assisting those who are new to the United States.",
    category: "General",
    tags: ["eligibility", "who we help"],
    order: 2
  },
  {
    id: "g3",
    question: "Do I need an appointment?",
    answer: "Yes, we highly recommend scheduling a consultation so we can properly prepare for your visit and ensure a team member is available to give you their undivided attention.",
    category: "General",
    tags: ["appointment", "visit"],
    order: 3
  },
  {
    id: "g4",
    question: "How do I contact THE CENTER?",
    answer: "You can reach us through our secure contact form, by calling our main office during business hours, or by booking a free initial consultation online.",
    category: "General",
    tags: ["contact", "reach us"],
    order: 4
  },
  {
    id: "g5",
    question: "Do you offer consultations?",
    answer: "Yes, we offer free initial consultations to discuss your specific situation and determine how our administrative support and organization services can best assist you.",
    category: "General",
    tags: ["consultation", "meeting"],
    popular: true,
    order: 5
  },

  // Business Startup
  {
    id: "bs1",
    question: "Can THE CENTER help me start a business?",
    answer: "Yes, we provide administrative and organizational support for business formation. We help you prepare the necessary documents, organize your information, and streamline the administrative steps required to get your business up and running.",
    category: "Business Startup",
    tags: ["startup", "formation", "new business"],
    relatedService: "business-startup",
    popular: true,
    order: 10
  },
  {
    id: "bs2",
    question: "What should I bring to a startup consultation?",
    answer: "Please bring a valid government-issued ID, any initial business plans or proposed names, proof of address, and any specific questions you have about the organizational process.",
    category: "Business Startup",
    tags: ["consultation", "preparation", "documents"],
    relatedService: "business-startup",
    order: 11
  },
  {
    id: "bs3",
    question: "Can you help me organize business documents?",
    answer: "Absolutely. Organizing your early business documentation—such as operating agreements, EIN applications, and state registrations—is one of our core specialties.",
    category: "Business Startup",
    tags: ["documents", "organization"],
    relatedService: "business-startup",
    order: 12
  },
  {
    id: "bs4",
    question: "Can you help if I have already started my business?",
    answer: "Yes, we often work with existing businesses to reorganize their administrative structures, prepare new applications, or provide ongoing support.",
    category: "Business Startup",
    tags: ["existing business", "reorganization"],
    relatedService: "business-startup",
    order: 13
  },

  // Bookkeeping
  {
    id: "bk1",
    question: "What bookkeeping support do you provide?",
    answer: "We offer comprehensive bookkeeping support including transaction categorization, monthly record organization, invoice tracking, and basic financial reporting to keep your business records clean and accurate.",
    category: "Bookkeeping",
    tags: ["bookkeeping", "services", "records"],
    relatedService: "bookkeeping",
    popular: true,
    order: 20
  },
  {
    id: "bk2",
    question: "Can you help organize my existing records?",
    answer: "Yes. If your records are currently disorganized or backlogged, we can help sort, categorize, and update your financial data to give you a clear, current view of your business.",
    category: "Bookkeeping",
    tags: ["catch up", "reorganization", "records"],
    relatedService: "bookkeeping",
    order: 21
  },
  {
    id: "bk3",
    question: "How often should bookkeeping be updated?",
    answer: "For most active businesses, we recommend updating your bookkeeping records on a monthly basis. This ensures that you have accurate financial data to make timely business decisions and avoids a stressful rush at year-end.",
    category: "Bookkeeping",
    tags: ["frequency", "monthly", "updates"],
    relatedService: "bookkeeping",
    order: 22
  },
  {
    id: "bk4",
    question: "Do you prepare taxes?",
    answer: "No. THE CENTER provides administrative and organizational bookkeeping support to keep your records accurate. We are not CPAs and do not provide licensed tax preparation or accounting advice. Our organized records will, however, make it much easier for your CPA to file your taxes.",
    category: "Bookkeeping",
    tags: ["taxes", "cpa", "preparation"],
    relatedService: "bookkeeping",
    order: 23
  },

  // Business Support
  {
    id: "sup1",
    question: "What does business support include?",
    answer: "Business support includes ongoing administrative assistance such as document management, operational process organization, scheduling, correspondence handling, and general back-office support.",
    category: "Business Support",
    tags: ["support", "services", "admin"],
    relatedService: "business-support",
    order: 30
  },
  {
    id: "sup2",
    question: "Can business support be ongoing?",
    answer: "Yes, many of our clients utilize our business support services on an ongoing, long-term basis to ensure their operations remain organized and efficient week after week.",
    category: "Business Support",
    tags: ["ongoing", "long term"],
    relatedService: "business-support",
    order: 31
  },
  {
    id: "sup3",
    question: "Can you help organize administrative tasks?",
    answer: "Yes, we specialize in creating structured workflows and organizing complex administrative tasks so you can focus on running your core business.",
    category: "Business Support",
    tags: ["admin", "tasks", "workflows"],
    relatedService: "business-support",
    order: 32
  },
  {
    id: "sup4",
    question: "Do you work with existing businesses?",
    answer: "Absolutely. While we assist many startups, a significant portion of our clients are established businesses looking to improve their administrative efficiency.",
    category: "Business Support",
    tags: ["established", "existing"],
    relatedService: "business-support",
    order: 33
  },

  // Applications & Administrative Support
  {
    id: "app1",
    question: "Can you help me prepare an application?",
    answer: "Yes, we can help you gather necessary information, properly format your documentation, and correctly prepare various business, local, and administrative applications.",
    category: "Applications & Administrative Support",
    tags: ["applications", "preparation", "forms"],
    relatedService: "applications-administrative-support",
    order: 40
  },
  {
    id: "app2",
    question: "Can you organize my documents?",
    answer: "Yes, document organization is a primary service. We ensure that your supporting documents are sorted, complete, and properly compiled for whatever process you are undertaking.",
    category: "Applications & Administrative Support",
    tags: ["documents", "organization"],
    relatedService: "applications-administrative-support",
    order: 41
  },
  {
    id: "app3",
    question: "Can you review paperwork before submission?",
    answer: "We can review your paperwork for administrative completeness and formatting accuracy, ensuring all required fields are addressed. However, we do not provide legal review or guarantee the legal sufficiency of your answers.",
    category: "Applications & Administrative Support",
    tags: ["review", "paperwork"],
    relatedService: "applications-administrative-support",
    order: 42
  },
  {
    id: "app4",
    question: "Can you guarantee that my application will be approved?",
    answer: "No. THE CENTER provides administrative preparation support. We cannot guarantee decisions, approvals, or outcomes made by government agencies, licensing boards, or any other third parties.",
    category: "Applications & Administrative Support",
    tags: ["guarantee", "approval", "outcomes"],
    relatedService: "applications-administrative-support",
    order: 43
  },

  // New to the United States
  {
    id: "new1",
    question: "I am new to the United States. Where should I begin?",
    answer: "We recommend booking a consultation with us. We can help you understand the administrative landscape, outline the documents you will need, and guide you through the practical steps of establishing your business presence.",
    category: "New to the United States",
    tags: ["newcomer", "getting started", "begin"],
    relatedService: "new-to-the-united-states",
    popular: true,
    order: 50
  },
  {
    id: "new2",
    question: "Can you help me organize important documents?",
    answer: "Yes. For individuals new to the U.S., organizing identification, financial records, and official correspondence is critical. We can help you establish clear, organized systems for your records.",
    category: "New to the United States",
    tags: ["documents", "records", "organization"],
    relatedService: "new-to-the-united-states",
    order: 51
  },
  {
    id: "new3",
    question: "Can you explain administrative processes?",
    answer: "We provide clear, step-by-step administrative guidance to help demystify common processes like business registration, local compliance, and record-keeping requirements.",
    category: "New to the United States",
    tags: ["processes", "guidance", "explanation"],
    relatedService: "new-to-the-united-states",
    order: 52
  },
  {
    id: "new4",
    question: "Do you provide immigration legal services?",
    answer: "No. THE CENTER provides administrative, business, and organizational support only. We do not provide immigration advice or legal representation. We strongly recommend consulting with a licensed immigration attorney for any legal matters.",
    category: "New to the United States",
    tags: ["immigration", "legal", "attorney"],
    relatedService: "new-to-the-united-states",
    order: 53
  },

  // Consultations
  {
    id: "con1",
    question: "How do I book a consultation?",
    answer: "You can easily book a consultation by clicking any of the 'Book a Free Consultation' buttons on our website, or by visiting our Contact page.",
    category: "Consultations",
    tags: ["booking", "schedule"],
    order: 60
  },
  {
    id: "con2",
    question: "What happens during the first consultation?",
    answer: "During your initial consultation, we will listen to your specific situation, review any documents you bring, and discuss how our administrative and organizational services can best support your goals.",
    category: "Consultations",
    tags: ["process", "first meeting"],
    order: 61
  },
  {
    id: "con3",
    question: "How long is a consultation?",
    answer: "An initial consultation typically lasts between 30 to 45 minutes, allowing us enough time to understand your needs and outline a potential support plan.",
    category: "Consultations",
    tags: ["duration", "length", "time"],
    order: 62
  },
  {
    id: "con4",
    question: "Can I ask questions before booking?",
    answer: "Absolutely. If you have a quick question before you are ready to book a full consultation, you can send us a message through our secure contact form.",
    category: "Consultations",
    tags: ["questions", "contact"],
    order: 63
  },

  // Resources
  {
    id: "res1",
    question: "Where can I find checklists?",
    answer: "You can find all of our checklists, guides, and practical documents in our Resources Hub, accessible via the main navigation menu.",
    category: "Resources",
    tags: ["checklists", "location"],
    order: 70
  },
  {
    id: "res2",
    question: "Are the resources free?",
    answer: "Yes, the digital resources available in our Resources Hub are provided free of charge to help you begin organizing your processes.",
    category: "Resources",
    tags: ["cost", "free"],
    order: 71
  },
  {
    id: "res3",
    question: "Can I print a checklist?",
    answer: "Yes. All of our detail pages are optimized for printing. Simply click the 'Print Resource' button on the page to generate a clean, ink-friendly document.",
    category: "Resources",
    tags: ["print", "paper"],
    order: 72
  },
  {
    id: "res4",
    question: "Can I download resources?",
    answer: "Yes, many of our resources offer a 'Download PDF' option for you to save and fill out locally.",
    category: "Resources",
    tags: ["download", "pdf"],
    order: 73
  },
  {
    id: "res5",
    question: "Are your resources official government documents?",
    answer: "No. The checklists and guides provided by THE CENTER are organizational tools created by our team. While we provide links to Official Resources where appropriate, our internal guides should not be confused with official state or federal requirements.",
    category: "Resources",
    tags: ["official", "government", "distinction"],
    order: 74
  }
]
