"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X, ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitConsultationRequest } from "@/lib/actions"
import { trackEvent } from "@/lib/analytics"

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

const SERVICES = [
  "Business Startup",
  "Bookkeeping",
  "Business Support",
  "Applications & Administrative Support",
  "New to the United States",
  "Not Sure"
]

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [step, setStep] = React.useState(1)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitState, setSubmitState] = React.useState<"idle" | "success" | "error">("idle")
  
  // Form State
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredContact: "",
    preferredDay: "",
    preferredTime: ""
  })
  
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  // Reset state when closed
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1)
        setSubmitState("idle")
        setErrors({})
        // Optional: keep form data or reset it
      }, 300)
    }
  }, [isOpen])

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  const validateStep = () => {
    const newErrors: Record<string, string> = {}
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required."
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required."
      if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address."
      }
    } else if (step === 2) {
      if (!formData.service) newErrors.service = "Please select a service."
    } else if (step === 4) {
      if (!formData.preferredContact) newErrors.preferredContact = "Please select a contact method."
    } else if (step === 5) {
      if (!formData.preferredDay) newErrors.preferredDay = "Please select a preferred day."
      if (!formData.preferredTime) newErrors.preferredTime = "Please select a preferred time."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) setStep(s => Math.min(s + 1, 6))
  }

  const handleBack = () => setStep(s => Math.max(s - 1, 1))

  const handleSubmit = async () => {
    if (!validateStep()) return
    setIsSubmitting(true)
    
    // Convert state to FormData for the server action
    const data = new FormData()
    Object.entries(formData).forEach(([key, value]) => data.append(key, value))

    try {
      const result = await submitConsultationRequest(data)
      if (result.success) {
        setSubmitState("success")
        trackEvent("consultation_submit", { service: formData.service, contactMethod: formData.preferredContact })
      } else {
        setSubmitState("error")
      }
    } catch (e) {
      setSubmitState("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[var(--color-primary-900)]/40 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-3xl shadow-[var(--shadow-2xl)] pointer-events-auto flex flex-col relative no-scrollbar"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[var(--color-accent-50)]">
                    <Calendar className="w-5 h-5 text-[var(--color-accent-600)]" />
                  </div>
                  <h2 id="modal-title" className="text-[16px] font-semibold text-[var(--color-charcoal)]">
                    Book Consultation
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#F8F7F4] hover:bg-[var(--color-border)] transition-colors text-[var(--color-slate)]"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Bar */}
              {submitState === "idle" && (
                <div className="w-full h-1 bg-[#F8F7F4]">
                  <div 
                    className="h-full bg-[var(--color-accent-500)] transition-all duration-300"
                    style={{ width: `${(step / 6) * 100}%` }}
                  />
                </div>
              )}

              {/* Content Area */}
              <div className="p-6 md:p-8 flex-1">
                {submitState === "success" && (
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-[var(--color-accent-50)] flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[var(--color-accent-600)]" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">Consultation Request Received</h3>
                    <p className="text-[16px] text-[var(--color-slate)] max-w-[400px] mb-8 leading-relaxed">
                      Thank you. We have received your request. Our team will contact you shortly to confirm a convenient time for our meeting.
                    </p>
                    <Button size="lg" onClick={onClose} className="w-full sm:w-auto px-10">
                      Done
                    </Button>
                  </div>
                )}

                {submitState === "error" && (
                  <div className="flex flex-col items-center justify-center text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center mb-6">
                      <AlertCircle className="w-10 h-10 text-red-500" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">Something Went Wrong</h3>
                    <p className="text-[16px] text-[var(--color-slate)] max-w-[400px] mb-8 leading-relaxed">
                      We couldn't submit your request right now. Please try again or contact us directly.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" onClick={() => setSubmitState("idle")}>Try Again</Button>
                      <Button asChild><a href="tel:9012071660">Call THE CENTER</a></Button>
                    </div>
                  </div>
                )}

                {submitState === "idle" && (
                  <div className="flex flex-col h-full">
                    
                    {/* STEP 1: Personal Info */}
                    {step === 1 && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h3 className="text-2xl">Let's Get Started</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[14px] font-medium text-[var(--color-charcoal)]">First Name *</label>
                            <input 
                              type="text"
                              value={formData.firstName}
                              onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))}
                              className={`w-full rounded-lg border px-4 py-3 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] ${errors.firstName ? 'border-red-400' : 'border-[var(--color-border-strong)]'}`}
                              placeholder="Jane"
                            />
                            {errors.firstName && <span className="text-[13px] text-red-500">{errors.firstName}</span>}
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <label className="text-[14px] font-medium text-[var(--color-charcoal)]">Last Name *</label>
                            <input 
                              type="text"
                              value={formData.lastName}
                              onChange={e => setFormData(p => ({ ...p, lastName: e.target.value }))}
                              className={`w-full rounded-lg border px-4 py-3 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] ${errors.lastName ? 'border-red-400' : 'border-[var(--color-border-strong)]'}`}
                              placeholder="Doe"
                            />
                            {errors.lastName && <span className="text-[13px] text-red-500">{errors.lastName}</span>}
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[14px] font-medium text-[var(--color-charcoal)]">Email Address *</label>
                          <input 
                            type="email"
                            value={formData.email}
                            onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                            className={`w-full rounded-lg border px-4 py-3 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] ${errors.email ? 'border-red-400' : 'border-[var(--color-border-strong)]'}`}
                            placeholder="jane@example.com"
                          />
                          {errors.email && <span className="text-[13px] text-red-500">{errors.email}</span>}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[14px] font-medium text-[var(--color-charcoal)]">Phone Number (Optional)</label>
                          <input 
                            type="tel"
                            value={formData.phone}
                            onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                            className="w-full rounded-lg border border-[var(--color-border-strong)] px-4 py-3 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)]"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Service Selection */}
                    {step === 2 && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h3 className="text-2xl">What Can We Help You With?</h3>
                        {errors.service && <div className="p-3 rounded-lg bg-red-50 text-red-600 text-[14px]">{errors.service}</div>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {SERVICES.map(svc => (
                            <button
                              key={svc}
                              onClick={() => setFormData(p => ({ ...p, service: svc }))}
                              className={`text-left p-4 rounded-xl border-2 transition-all ${
                                formData.service === svc 
                                  ? 'border-[var(--color-primary-900)] bg-[var(--color-primary-50)]' 
                                  : 'border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
                              }`}
                            >
                              <span className={`text-[15px] font-medium ${formData.service === svc ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)]'}`}>
                                {svc}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Message */}
                    {step === 3 && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h3 className="text-2xl">Tell Us A Little More</h3>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[14px] font-medium text-[var(--color-charcoal)]">How can we help? (Optional)</label>
                          <textarea 
                            value={formData.message}
                            onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                            className="w-full rounded-lg border border-[var(--color-border-strong)] px-4 py-3 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] min-h-[150px] resize-y"
                            placeholder="Briefly describe your current situation or specific needs..."
                          />
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Contact Method */}
                    {step === 4 && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h3 className="text-2xl">Preferred Contact Method</h3>
                        {errors.preferredContact && <div className="p-3 rounded-lg bg-red-50 text-red-600 text-[14px]">{errors.preferredContact}</div>}
                        <div className="flex flex-col gap-3">
                          {["Phone", "Email", "Either"].map(method => (
                            <button
                              key={method}
                              onClick={() => setFormData(p => ({ ...p, preferredContact: method }))}
                              className={`text-left p-4 rounded-xl border-2 transition-all ${
                                formData.preferredContact === method 
                                  ? 'border-[var(--color-primary-900)] bg-[var(--color-primary-50)]' 
                                  : 'border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
                              }`}
                            >
                              <span className={`text-[15px] font-medium ${formData.preferredContact === method ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)]'}`}>
                                {method}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 5: Day & Time */}
                    {step === 5 && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div>
                          <h3 className="text-2xl mb-2">Choose a Time</h3>
                          <p className="text-[14px] text-[var(--color-slate)]">Our team will contact you to arrange a convenient consultation time based on your preferences.</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[14px] font-medium text-[var(--color-charcoal)]">Preferred Day *</label>
                          <input 
                            type="date"
                            min={new Date().toISOString().split('T')[0]} // Prevent past dates
                            value={formData.preferredDay}
                            onChange={e => setFormData(p => ({ ...p, preferredDay: e.target.value }))}
                            className={`w-full rounded-lg border px-4 py-3 bg-[#F8F7F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-500)] ${errors.preferredDay ? 'border-red-400' : 'border-[var(--color-border-strong)]'}`}
                          />
                          {errors.preferredDay && <span className="text-[13px] text-red-500">{errors.preferredDay}</span>}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[14px] font-medium text-[var(--color-charcoal)]">Preferred Time of Day *</label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {["Morning", "Afternoon", "Evening"].map(time => (
                              <button
                                key={time}
                                onClick={() => setFormData(p => ({ ...p, preferredTime: time }))}
                                className={`p-3 rounded-lg border-2 transition-all text-center ${
                                  formData.preferredTime === time 
                                    ? 'border-[var(--color-primary-900)] bg-[var(--color-primary-50)]' 
                                    : 'border-[var(--color-border)] hover:border-[var(--color-border-strong)]'
                                }`}
                              >
                                <span className={`text-[14px] font-medium ${formData.preferredTime === time ? 'text-[var(--color-primary-900)]' : 'text-[var(--color-charcoal)]'}`}>
                                  {time}
                                </span>
                              </button>
                            ))}
                          </div>
                          {errors.preferredTime && <span className="text-[13px] text-red-500 mt-1">{errors.preferredTime}</span>}
                        </div>
                      </div>
                    )}

                    {/* STEP 6: Summary */}
                    {step === 6 && (
                      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <h3 className="text-2xl">Review Your Request</h3>
                        <div className="bg-[#F8F7F4] rounded-xl p-5 border border-[var(--color-border)] flex flex-col gap-4">
                          
                          <div className="flex justify-between items-start border-b border-[var(--color-border)] pb-3">
                            <div>
                              <span className="block text-[12px] uppercase tracking-wider font-bold text-[var(--color-slate)] mb-1">Name & Contact</span>
                              <p className="text-[15px] font-medium text-[var(--color-charcoal)]">{formData.firstName} {formData.lastName}</p>
                              <p className="text-[14px] text-[var(--color-slate)]">{formData.email}</p>
                              {formData.phone && <p className="text-[14px] text-[var(--color-slate)]">{formData.phone}</p>}
                            </div>
                            <button onClick={() => setStep(1)} className="text-[13px] font-medium text-[var(--color-accent-600)] hover:underline">Edit</button>
                          </div>

                          <div className="flex justify-between items-start border-b border-[var(--color-border)] pb-3">
                            <div>
                              <span className="block text-[12px] uppercase tracking-wider font-bold text-[var(--color-slate)] mb-1">Service</span>
                              <p className="text-[15px] font-medium text-[var(--color-charcoal)]">{formData.service}</p>
                            </div>
                            <button onClick={() => setStep(2)} className="text-[13px] font-medium text-[var(--color-accent-600)] hover:underline">Edit</button>
                          </div>

                          <div className="flex justify-between items-start">
                            <div>
                              <span className="block text-[12px] uppercase tracking-wider font-bold text-[var(--color-slate)] mb-1">Preferences</span>
                              <p className="text-[14px] text-[var(--color-charcoal)]">Contact via {formData.preferredContact}</p>
                              <p className="text-[14px] text-[var(--color-charcoal)]">Prefers {formData.preferredTime} on {formData.preferredDay}</p>
                            </div>
                            <button onClick={() => setStep(4)} className="text-[13px] font-medium text-[var(--color-accent-600)] hover:underline">Edit</button>
                          </div>

                        </div>
                      </div>
                    )}

                    {/* Navigation Footer */}
                    <div className="mt-8 flex items-center justify-between pt-6 border-t border-[var(--color-border)]">
                      <Button 
                        variant="ghost" 
                        onClick={handleBack}
                        disabled={step === 1 || isSubmitting}
                        className={step === 1 ? 'opacity-0 pointer-events-none' : ''}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                      </Button>

                      {step < 6 ? (
                        <Button onClick={handleNext} className="group px-8">
                          Next <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      ) : (
                        <div className="flex flex-col items-end w-full sm:w-auto">
                          <Button onClick={handleSubmit} disabled={isSubmitting} className="px-8 w-full bg-[var(--color-accent-600)] hover:bg-[var(--color-accent-700)] text-white">
                            {isSubmitting ? "Submitting..." : "Submit Request"}
                          </Button>
                        </div>
                      )}
                    </div>
                    {step === 6 && (
                      <p className="text-[12px] text-center text-[var(--color-slate)] mt-6 px-4 leading-relaxed">
                        By requesting a consultation, you agree to our <Link href="/privacy" onClick={onClose} className="underline hover:text-[var(--color-primary-900)]">Privacy Policy</Link>. This consultation provides administrative guidance and does not establish an attorney-client relationship.
                      </p>
                    )}
                  </div>
                )}
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
