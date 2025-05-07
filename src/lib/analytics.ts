// Type declarations for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const isProd = typeof window !== 'undefined' && window.location.hostname === 'syntaxsupply.com';

/**
 * Tracks an event in Google Analytics 4, only in production environment
 * @param action The event name to track
 * @param params Additional parameters to send with the event
 */
export const trackEvent = (action: string, params: Record<string, any> = {}) => {
  if (isProd && typeof window.gtag === 'function') {
    window.gtag('event', action, params);
    // Log events to console in development for debugging
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics - DEV ONLY] Event tracked: ${action}`, params);
    }
  }
}; 