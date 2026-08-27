"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger"
import { ContactHeroVisual } from "@/components/ui/contact-hero-visual"
import { SharedFaqAccordion } from "@/components/ui/shared-faq-accordion"
import { contactConfig } from "@/lib/config"
import { submitContactMessage } from "@/lib/actions"
import { useConsultation } from "@/components/providers/consultation-provider"
import { trackEvent } from "@/lib/analytics"

const SERVICES = [
  "Business Startup",
  "Bookkeeping",
  "Business Support",
  "Applications & Administrative Support",
  "New to the United States",
  "General Question",
  "Other"
]

export default function ContactClientPage() {
  const { openModal } = useConsultation()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitState, setSubmitState] = React.useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = React.useState("")
  
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredContact: "",
    "bot-field": "" // Honeypot
  })

  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) newErrors.firstName = "Please enter your first name."
    if (!formData.lastName.trim()) newErrors.lastName = "Please enter your last name."
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Please enter at least 10 characters."
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitState("idle")
    setErrorMessage("")

    const data = new FormData()
    Object.entries(formData).forEach(([k, v]) => data.append(k, v))

    try {
      const result = await submitContactMessage(data)
      if (result.success) {
        setSubmitState("success")
        trackEvent("contact_submit", { service: formData.service, contactMethod: formData.preferredContact })
      } else {
        setSubmitState("error")
        setErrorMessage(result.error || "Something went wrong.")
      }
    } catch (err) {
      setSubmitState("error")
      setErrorMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#FCFBF8]">
      
      {/* =========================================
          SECTION 1: HERO
      ========================================= */}
      <section className="bg-[#F8F7F4] pt-[120px] pb-[80px] lg:pb-[100px] border-b border-[var(--color-border)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-[at_50%_50%] from-[var(--color-primary-200)]/30 to-transparent to-70% rounded-full blur-3xl opacity-50 pointer-events-none transform translate-x-1/4 -translate-y-1/4" />
        
        <div className="container mx-auto px-6 max-w-[var(--container-xl)] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <StaggerContainer className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left z-10" delayChildren={0.1}>
              <StaggerItem distance={8}>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[var(--color-accent-500)] mb-4 block">
                  CONTACT THE CENTER
                </span>
              </StaggerItem>

              <StaggerItem distance={16} className="mb-6 max-w-[650px]">
                <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                  Let's Take the<br/>Next Step Together.
                </h1>
              </StaggerItem>

              <StaggerItem distance={12} className="mb-10 max-w-[600px]">
                <p className="text-lg md:text-[20px] text-[var(--color-slate)] leading-relaxed text-balance">
                  Have a question, need administrative support, or want to discuss your business needs? Contact THE CENTER and let us help you understand the right next step.
                </p>
              </StaggerItem>

              <StaggerItem distance={12} className="w-full sm:w-auto flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto px-8" onClick={openModal}>
                  Book a Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 bg-white border-[var(--color-border-strong)]" asChild>
                  <a href={`tel:${contactConfig.phoneRaw}`}>
                    Call {contactConfig.phone}
                  </a>
                </Button>
              </StaggerItem>
            </StaggerContainer>

            <div className="w-full lg:w-[45%] flex justify-center lg:justify-end z-10 mt-8 lg:mt-0">
              <ContactHeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: CONTACT LAYOUT (Cards + Form)
      ========================================= */}
      <section className="py-[80px] lg:py-[120px]">
        <div className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* LEFT: Info Cards */}
            <div className="flex flex-col gap-6">
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Phone Card */}
                <StaggerItem distance={12} delay={0.1}>
                  <a href={`tel:${contactConfig.phoneRaw}`} className="block h-full bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] hover:shadow-md transition-all duration-[220ms] group">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-50)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-100)] transition-colors">
                      <Phone className="w-5 h-5 text-[var(--color-accent-600)]" />
                    </div>
                    <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)] mb-2">Phone</h3>
                    <p className="text-[15px] font-medium text-[var(--color-primary-900)] group-hover:text-[var(--color-accent-600)] transition-colors">{contactConfig.phone}</p>
                  </a>
                </StaggerItem>

                {/* Email Card */}
                <StaggerItem distance={12} delay={0.2}>
                  <a href={`mailto:${contactConfig.email}`} className="block h-full bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm hover:border-[var(--color-accent-400)] hover:shadow-md transition-all duration-[220ms] group">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-50)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent-100)] transition-colors">
                      <Mail className="w-5 h-5 text-[var(--color-accent-600)]" />
                    </div>
                    <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)] mb-2">Email</h3>
                    <p className="text-[15px] font-medium text-[var(--color-primary-900)] group-hover:text-[var(--color-accent-600)] transition-colors">{contactConfig.email}</p>
                  </a>
                </StaggerItem>

                {/* Hours Card */}
                <StaggerItem distance={12} delay={0.3}>
                  <div className="h-full bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#F8F7F4] flex items-center justify-center mb-6">
                      <Clock className="w-5 h-5 text-[var(--color-slate)]" />
                    </div>
                    <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)] mb-2">Business Hours</h3>
                    <p className="text-[15px] text-[var(--color-slate)] leading-relaxed">
                      Monday–Friday<br/>9:00 AM – 5:00 PM
                    </p>
                  </div>
                </StaggerItem>

                {/* Location Card */}
                <StaggerItem distance={12} delay={0.4}>
                  <div className="h-full bg-white p-8 rounded-2xl border border-[var(--color-border)] shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#F8F7F4] flex items-center justify-center mb-6">
                      <MapPin className="w-5 h-5 text-[var(--color-slate)]" />
                    </div>
                    <h3 className="text-[17px] font-semibold text-[var(--color-charcoal)] mb-2">Location</h3>
                    <p className="text-[15px] text-[var(--color-slate)] leading-relaxed mb-4">
                      {contactConfig.address.split(',')[0]}<br/>
                      {contactConfig.address.split(',').slice(1).join(',')}
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-[13px] font-semibold text-[var(--color-primary-900)] hover:text-[var(--color-accent-600)] transition-colors inline-flex items-center">
                      Get Directions <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </StaggerItem>

              </StaggerContainer>

              {/* Trust Privacy Section */}
              <StaggerContainer>
                <StaggerItem distance={12} delay={0.5}>
                  <div className="mt-4 bg-[#F8F7F4] rounded-2xl p-6 border border-[var(--color-border)] flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-[var(--color-primary-900)] shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[var(--color-charcoal)] text-[15px] mb-1">Your Information Matters</h4>
                      <p className="text-[14px] text-[var(--color-slate)] leading-relaxed">
                        We respect your privacy. The information you provide will only be used to respond to your inquiry and provide requested services. <Link href="/privacy" className="underline hover:text-[var(--color-primary-900)]">Privacy Policy</Link>
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* RIGHT: Contact Form */}
            <div>
              {submitState === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="bg-white rounded-3xl p-10 md:p-12 border border-[var(--color-border)] shadow-sm flex flex-col items-center justify-center text-center h-full min-h-[500px]"
                >
                  <div className="w-20 h-20 rounded-full bg-[var(--color-accent-50)] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-[var(--color-accent-600)]" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Message Sent Successfully</h3>
                  <p className="text-[16px] text-[var(--color-slate)] max-w-[400px] mb-8 leading-relaxed">
                    Thank you for contacting THE CENTER. Our team will review your message and get back to you during business hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Button variant="outline" onClick={() => { setSubmitState("idle"); setFormData(f => ({ ...f, message: "" })) }}>
                      Send Another Message
                    </Button>
                    <Button onClick={openModal}>
                      Book a Consultation
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
                  <h2 className="text-3xl mb-8">Send Us a Message</h2>
                  
                  {submitState === "error" && (
                    <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-800 text-[14px]">We Couldn't Send Your Message</h4>
                        <p className="text-red-600 text-[13px] mt-1">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                    {/* Honeypot Field (Hidden from real users, stops bots) */}
                    <div className="hidden" aria-hidden="true">
                      <label>Don't fill this out if you're human: <input type="text" name="bot-field" value={formData["bot-field"]} onChange={e => setFormData(f => ({ ...f, "bot-field": e.target.value }))} tabIndex={-1} /></label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-medium text-[var(--color-charcoal)]" htmlFor="firstName">First Name *</label>
                        <input 
                          id="firstName"
                          type="text"
                          autoComplete="given-name"
                          value={formData.firstName}
                          onChange={e => setFormData(f => ({ ...f, firstName: e.target.value }))}
                          className={`w-full rounded-xl border px-4 py-3.5 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] ${errors.firstName ? 'border-red-400' : 'border-[var(--color-border-strong)]'}`}
                        />
                        {errors.firstName && <span className="text-[13px] text-red-500 font-medium" role="alert">{errors.firstName}</span>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-medium text-[var(--color-charcoal)]" htmlFor="lastName">Last Name *</label>
                        <input 
                          id="lastName"
                          type="text"
                          autoComplete="family-name"
                          value={formData.lastName}
                          onChange={e => setFormData(f => ({ ...f, lastName: e.target.value }))}
                          className={`w-full rounded-xl border px-4 py-3.5 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] ${errors.lastName ? 'border-red-400' : 'border-[var(--color-border-strong)]'}`}
                        />
                        {errors.lastName && <span className="text-[13px] text-red-500 font-medium" role="alert">{errors.lastName}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-medium text-[var(--color-charcoal)]" htmlFor="email">Email Address *</label>
                        <input 
                          id="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                          className={`w-full rounded-xl border px-4 py-3.5 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] ${errors.email ? 'border-red-400' : 'border-[var(--color-border-strong)]'}`}
                        />
                        {errors.email && <span className="text-[13px] text-red-500 font-medium" role="alert">{errors.email}</span>}
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[14px] font-medium text-[var(--color-charcoal)]" htmlFor="phone">Phone Number</label>
                        <input 
                          id="phone"
                          type="tel"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                          className="w-full rounded-xl border border-[var(--color-border-strong)] px-4 py-3.5 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)]"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-medium text-[var(--color-charcoal)]" htmlFor="service">Service Needed (Optional)</label>
                      <div className="relative">
                        <select
                          id="service"
                          value={formData.service}
                          onChange={e => setFormData(f => ({ ...f, service: e.target.value }))}
                          className="w-full rounded-xl border border-[var(--color-border-strong)] px-4 py-3.5 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] appearance-none cursor-pointer"
                        >
                          <option value="">Select a service...</option>
                          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                          <svg className="w-4 h-4 text-[var(--color-slate)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-[14px] font-medium text-[var(--color-charcoal)]" htmlFor="message">Message *</label>
                      <textarea 
                        id="message"
                        value={formData.message}
                        onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                        className={`w-full rounded-xl border px-4 py-3.5 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] min-h-[140px] resize-y ${errors.message ? 'border-red-400' : 'border-[var(--color-border-strong)]'}`}
                      />
                      {errors.message && <span className="text-[13px] text-red-500 font-medium" role="alert">{errors.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-[14px] font-medium text-[var(--color-charcoal)]">Preferred Contact Method</span>
                      <div className="flex gap-4">
                        {["Phone", "Email", "Either"].map(method => (
                          <label key={method} className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="preferredContact" 
                              value={method} 
                              checked={formData.preferredContact === method}
                              onChange={e => setFormData(f => ({ ...f, preferredContact: e.target.value }))}
                              className="w-4 h-4 text-[var(--color-accent-600)] focus:ring-[var(--color-accent-500)] border-[var(--color-border-strong)]"
                            />
                            <span className="text-[14px] text-[var(--color-charcoal)]">{method}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full mt-4 bg-[var(--color-primary-900)] hover:bg-[var(--color-primary-800)] group text-[15px]">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <p className="text-[12px] text-[var(--color-slate)] text-center mt-4 px-4 leading-relaxed">
                      By submitting this form, you acknowledge that the information provided will be handled according to our <Link href="/privacy" className="underline hover:text-[var(--color-primary-900)]">Privacy Policy</Link>. Information provided is for general administrative purposes.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: WHAT HAPPENS NEXT
      ========================================= */}
      <section className="bg-white py-[100px] border-y border-[var(--color-border)]">
        <StaggerContainer className="container mx-auto px-6 max-w-[var(--container-xl)]">
          <StaggerItem distance={12} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl">What Happens Next?</h2>
          </StaggerItem>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "We Learn About Your Needs", desc: "Our team reviews your message and prepares to discuss your specific administrative or business goals." },
              { step: "2", title: "We Identify the Right Step", desc: "We'll contact you via your preferred method to suggest a practical plan or arrange a free consultation." },
              { step: "3", title: "We Help You Move Forward", desc: "You receive organized, professional support to streamline your paperwork and business processes." }
            ].map((item, i) => (
              <StaggerItem key={i} distance={16} delay={i * 0.1}>
                <div className="bg-[#F8F7F4] rounded-2xl p-8 border border-[var(--color-border)] h-full relative overflow-hidden group hover:border-[var(--color-accent-400)] transition-colors duration-[300ms]">
                  <div className="text-[100px] font-bold text-[var(--color-primary-900)]/5 absolute -top-6 -right-2 pointer-events-none select-none group-hover:text-[var(--color-accent-500)]/10 transition-colors duration-[500ms]">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[var(--color-primary-900)] text-white flex items-center justify-center font-bold mb-6 relative z-10 shadow-sm">
                    {item.step}
                  </div>
                  <h3 className="text-[20px] font-semibold text-[var(--color-charcoal)] mb-3 relative z-10">{item.title}</h3>
                  <p className="text-[15px] text-[var(--color-slate)] leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 4: CONTACT FAQ
      ========================================= */}
      <section className="py-[100px]">
        <StaggerContainer className="container mx-auto px-6 max-w-[900px] flex flex-col gap-10">
          <StaggerItem distance={12} className="text-center">
            <h2 className="text-3xl">Frequently Asked Questions</h2>
          </StaggerItem>
          
          <StaggerItem distance={12}>
            {/* Reuse the FAQ Accordion configured for the Consultations category */}
            <SharedFaqAccordion category="Consultations" />
          </StaggerItem>
        </StaggerContainer>
      </section>

      {/* =========================================
          SECTION 5: FINAL CTA
      ========================================= */}
      <section className="bg-[var(--color-primary-900)] py-[100px] text-center mt-auto">
        <StaggerContainer className="container mx-auto px-6 max-w-[700px] flex flex-col items-center">
          <StaggerItem distance={12}>
            <h2 className="mb-6 text-white text-3xl md:text-4xl">Not Sure Where To Start?</h2>
          </StaggerItem>
          <StaggerItem distance={12}>
            <p className="text-[16px] md:text-lg text-[var(--color-primary-100)] mb-8 text-balance">
              You don't need to have everything figured out before contacting us. Book a free consultation and we'll help you organize the path forward.
            </p>
          </StaggerItem>
          <StaggerItem distance={8} className="w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button size="lg" onClick={openModal} className="w-full sm:w-auto px-10 bg-white text-[var(--color-primary-900)] hover:bg-[var(--color-offwhite)]">
                Book a Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 border-white/30 text-white hover:bg-white/10 shadow-none" asChild>
                <a href={`tel:${contactConfig.phoneRaw}`}>Call {contactConfig.phone}</a>
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </section>

    </main>
  )
}
