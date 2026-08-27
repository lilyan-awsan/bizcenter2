export type ResourceCategory = 
  | "All"
  | "Business Startup"
  | "Bookkeeping"
  | "Business Support"
  | "Applications & Administrative Support"
  | "New to the United States"
  | "Forms & Documents"
  | "FAQs"
  | "Official Resources"

export type ResourceType = 
  | "CHECKLIST"
  | "GUIDE"
  | "FAQ"
  | "FORM"
  | "OFFICIAL RESOURCE"
  | "ARTICLE"
  | "WORKSHEET"

export type ContentBlockType = 
  | "heading"
  | "paragraph"
  | "checklist"
  | "info"
  | "warning"
  | "tip"
  | "quote"

export interface ContentBlock {
  id: string
  type: ContentBlockType
  content?: string // used for heading, paragraph, quote, info text
  items?: { id: string; text: string }[] // used for checklist
}

export interface ResourceItem {
  id: string
  slug: string
  title: string
  description: string
  category: ResourceCategory
  type: ResourceType
  tags: string[]
  featured?: boolean
  downloadable?: boolean
  downloadUrl?: string
  external?: boolean
  url?: string // Internal detail page or external link
  dateUpdated: string
  readingTime?: string
  
  // Phase 7B Additions
  seoTitle?: string
  seoDescription?: string
  content?: ContentBlock[]
  relatedResources?: string[] // array of slugs
}

export const RESOURCES: ResourceItem[] = [
  {
    id: "r1",
    slug: "business-startup-checklist",
    title: "Business Startup Checklist",
    description: "A practical checklist to help organize common steps and information when preparing to start a business.",
    category: "Business Startup",
    type: "CHECKLIST",
    tags: ["startup", "checklist", "organization", "preparation"],
    featured: true,
    downloadable: true,
    downloadUrl: "#pdf-coming-soon",
    dateUpdated: "2024-03-15",
    readingTime: "PDF Checklist",
    seoTitle: "Business Startup Checklist | THE CENTER",
    seoDescription: "Get organized with our comprehensive business startup checklist. Ensure you have the right documents before beginning your business journey.",
    relatedResources: ["business-planning-guide", "bookkeeping-preparation-checklist"],
    content: [
      {
        id: "c1",
        type: "paragraph",
        content: "Starting a business requires significant organization. Having your information, documents, and plans properly sorted before you begin can save you time, reduce stress, and help prevent costly administrative delays."
      },
      {
        id: "c2",
        type: "info",
        content: "Use this checklist as a general organizational guide. Specific requirements may vary depending on your location, industry, and business structure."
      },
      {
        id: "c3",
        type: "heading",
        content: "1. Initial Preparation & Identification"
      },
      {
        id: "c4",
        type: "checklist",
        items: [
          { id: "chk1", text: "Gather valid, government-issued identification (Driver's License, Passport, etc.)." },
          { id: "chk2", text: "Organize secondary proof of address (utility bills, lease agreements)." },
          { id: "chk3", text: "Determine the proposed name for your business." },
          { id: "chk4", text: "Prepare alternative business names in case your first choice is unavailable." }
        ]
      },
      {
        id: "c5",
        type: "heading",
        content: "2. Business Structure & Address"
      },
      {
        id: "c6",
        type: "checklist",
        items: [
          { id: "chk5", text: "Identify the intended physical address for the business." },
          { id: "chk6", text: "Identify the intended mailing address (if different)." },
          { id: "chk7", text: "Outline the primary purpose and activities of the business." },
          { id: "chk8", text: "Determine the names and contact information of all initial owners/partners." }
        ]
      },
      {
        id: "c7",
        type: "warning",
        content: "THE CENTER provides document preparation and organizational support. We do not provide legal or tax advice regarding which business structure is best for your situation. Please consult a licensed CPA or attorney for structural advice."
      },
      {
        id: "c8",
        type: "heading",
        content: "3. Financial Organization"
      },
      {
        id: "c9",
        type: "checklist",
        items: [
          { id: "chk9", text: "Prepare documentation of initial capital or funding sources." },
          { id: "chk10", text: "Identify which bank you intend to use for your business accounts." },
          { id: "chk11", text: "Establish a system for tracking early business expenses." }
        ]
      },
      {
        id: "c10",
        type: "paragraph",
        content: "Once you have gathered this preliminary information, you will be in a much stronger position to begin completing formal applications or meeting with specialized advisors."
      }
    ]
  },
  {
    id: "r2",
    slug: "business-planning-guide",
    title: "Business Planning Guide",
    description: "A comprehensive guide outlining the necessary documentation and organizational steps needed to structure your business effectively.",
    category: "Business Startup",
    type: "GUIDE",
    tags: ["startup", "guide", "planning", "structure"],
    dateUpdated: "2024-03-10",
    readingTime: "8 min read",
    seoTitle: "Business Planning Guide | THE CENTER",
    seoDescription: "Learn how to structure your business planning documents efficiently.",
    relatedResources: ["business-startup-checklist", "business-organization-checklist"],
    content: [
      {
        id: "g1",
        type: "paragraph",
        content: "A well-organized business plan is more than just a document for investors; it is a roadmap for your daily operations. This guide will help you understand how to organize the administrative sections of your planning documents."
      },
      {
        id: "g2",
        type: "heading",
        content: "The Importance of Administrative Planning"
      },
      {
        id: "g3",
        type: "paragraph",
        content: "Many new business owners focus entirely on their product or service, leaving administrative organization as an afterthought. By establishing clear documentation protocols early, you create a foundation that supports growth rather than hindering it."
      },
      {
        id: "g4",
        type: "tip",
        content: "Create a dedicated physical and digital folder structure on Day 1. Label them clearly (e.g., 'Formation Documents', 'Financial Records', 'Contracts')."
      }
    ]
  },
  {
    id: "r3",
    slug: "bookkeeping-preparation-checklist",
    title: "Bookkeeping Preparation Checklist",
    description: "Use this checklist to organize common records and documents before beginning bookkeeping support.",
    category: "Bookkeeping",
    type: "CHECKLIST",
    tags: ["bookkeeping", "checklist", "financial", "records"],
    featured: true,
    downloadable: true,
    downloadUrl: "#pdf-coming-soon",
    dateUpdated: "2024-04-02",
    readingTime: "PDF Checklist"
  },
  {
    id: "r4",
    slug: "monthly-bookkeeping-organization-guide",
    title: "Monthly Bookkeeping Organization Guide",
    description: "A step-by-step guide to maintaining clean, organized monthly records for your business operations.",
    category: "Bookkeeping",
    type: "GUIDE",
    tags: ["bookkeeping", "guide", "monthly", "organization"],
    dateUpdated: "2024-04-05",
    readingTime: "6 min read"
  },
  {
    id: "r5",
    slug: "business-organization-checklist",
    title: "Business Organization Checklist",
    description: "Keep your daily operations running smoothly with this essential administrative organization checklist.",
    category: "Business Support",
    type: "CHECKLIST",
    tags: ["support", "checklist", "organization", "admin"],
    downloadable: true,
    dateUpdated: "2024-02-28",
    readingTime: "PDF Checklist"
  },
  {
    id: "r6",
    slug: "administrative-planning-guide",
    title: "Administrative Planning Guide",
    description: "Learn how to structure your daily administrative tasks to minimize stress and maximize business efficiency.",
    category: "Business Support",
    type: "GUIDE",
    tags: ["support", "guide", "admin", "efficiency"],
    dateUpdated: "2024-03-20",
    readingTime: "5 min read"
  },
  {
    id: "r7",
    slug: "application-preparation-checklist",
    title: "Application Preparation Checklist",
    description: "Organize the critical information and supporting documents you will need before starting a business application.",
    category: "Applications & Administrative Support",
    type: "CHECKLIST",
    tags: ["applications", "checklist", "preparation", "forms"],
    downloadable: true,
    dateUpdated: "2024-03-01",
    readingTime: "PDF Checklist"
  },
  {
    id: "r8",
    slug: "document-preparation-guide",
    title: "Document Preparation Guide",
    description: "Clear instructions on how to properly sort, compile, and prepare your business documents for submission.",
    category: "Applications & Administrative Support",
    type: "GUIDE",
    tags: ["applications", "guide", "documents", "prep"],
    dateUpdated: "2024-03-12",
    readingTime: "7 min read"
  },
  {
    id: "r9",
    slug: "newcomer-checklist",
    title: "Newcomer Checklist",
    description: "A general guide to organizing important documents, contacts, and information when getting started in a new environment.",
    category: "New to the United States",
    type: "CHECKLIST",
    tags: ["newcomer", "checklist", "documents", "getting started"],
    featured: true,
    downloadable: true,
    dateUpdated: "2024-04-10",
    readingTime: "PDF Checklist"
  },
  {
    id: "r10",
    slug: "newcomer-administrative-guide",
    title: "Newcomer Administrative Guide",
    description: "An overview of common administrative processes and how to prepare for them when navigating new business systems.",
    category: "New to the United States",
    type: "GUIDE",
    tags: ["newcomer", "guide", "admin", "processes"],
    dateUpdated: "2024-04-12",
    readingTime: "10 min read"
  },
  {
    id: "r11",
    slug: "frequently-asked-questions",
    title: "Frequently Asked Questions",
    description: "Answers to the most common questions regarding our administrative support, business organization, and consultation processes.",
    category: "FAQs",
    type: "FAQ",
    tags: ["faq", "questions", "support", "general"],
    dateUpdated: "2024-04-15",
    readingTime: "Read FAQ",
    seoTitle: "Frequently Asked Questions | THE CENTER",
    seoDescription: "Answers to common administrative, organizational, and startup questions.",
    content: [
      {
        id: "f1",
        type: "heading",
        content: "What do I need to bring to my first consultation?"
      },
      {
        id: "f2",
        type: "paragraph",
        content: "Please bring any official identification, relevant business registration paperwork, and the specific forms or correspondence you need assistance with."
      },
      {
        id: "f3",
        type: "heading",
        content: "Do you provide legal advice?"
      },
      {
        id: "f4",
        type: "paragraph",
        content: "No. THE CENTER provides administrative support and document organization. We do not act as your legal representative, nor do we provide legal or immigration advice."
      }
    ]
  },
  {
    id: "r12",
    slug: "official-business-resources",
    title: "Official Business Resources",
    description: "A directory of verified state and federal links for official business registration, forms, and compliance information.",
    category: "Official Resources",
    type: "OFFICIAL RESOURCE",
    tags: ["official", "government", "links", "compliance"],
    external: true,
    url: "#official-link-coming-soon",
    dateUpdated: "2024-04-18",
    readingTime: "External Link"
  }
]
