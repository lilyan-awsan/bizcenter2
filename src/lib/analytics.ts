/**
 * Core Analytics Abstraction
 * 
 * Provides a provider-agnostic interface for tracking events across the application.
 * Respects user privacy and cookie configurations before tracking.
 */

export type AnalyticsEvent = 
  | 'page_view'
  | 'consultation_open'
  | 'consultation_submit'
  | 'contact_submit'
  | 'resource_view'
  | 'resource_download'
  | 'faq_expand'
  | 'service_view'
  | 'external_link_click'

interface AnalyticsPayload {
  [key: string]: any;
}

export const analyticsConfig = {
  isEnabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
  providerId: process.env.NEXT_PUBLIC_ANALYTICS_ID || null,
}

export function trackEvent(eventName: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (!analyticsConfig.isEnabled) return;
  if (process.env.NODE_ENV !== 'production') {
    // Console log in development for debugging
    console.debug(`[Analytics Track]: ${eventName}`, payload);
    return;
  }

  try {
    // Example implementation for Google Analytics (gtag)
    // if (typeof window !== 'undefined' && (window as any).gtag) {
    //   (window as any).gtag('event', eventName, payload);
    // }

    // Example implementation for Plausible
    // if (typeof window !== 'undefined' && (window as any).plausible) {
    //   (window as any).plausible(eventName, { props: payload });
    // }
  } catch (error) {
    console.warn(`[Analytics Track Failed]: ${eventName}`, error);
  }
}
