"use server"

// Mock server actions for form submissions

export async function submitContactMessage(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Basic honeypot check (if it's filled out, it's a bot)
  const honeypot = formData.get("bot-field")
  if (honeypot) {
    return { success: false, error: "Spam detected." }
  }

  // Simulate 95% success rate for development
  const isSuccess = Math.random() > 0.05

  if (isSuccess) {
    return { success: true }
  } else {
    return { success: false, error: "Service temporarily unavailable. Please try again." }
  }
}

export async function submitConsultationRequest(formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const isSuccess = Math.random() > 0.05

  if (isSuccess) {
    return { success: true }
  } else {
    return { success: false, error: "Could not submit request. Please call us directly." }
  }
}
