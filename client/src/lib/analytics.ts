import { getConsentStatus } from "@/lib/consent";

// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

let gaInitialized = false;

// Initialize Google Analytics (only if consent is given)
export const initGA = () => {
  const consent = getConsentStatus();
  
  if (consent !== "accepted") {
    console.log('Google Analytics not loaded - user consent not given');
    return;
  }

  if (gaInitialized) {
    return;
  }

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    return;
  }

  // Add Google Analytics script to the head
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  const script2 = document.createElement('script');
  script2.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}');
  `;
  document.head.appendChild(script2);
  
  gaInitialized = true;
  console.log('Google Analytics initialized with consent');
};

// Listen for consent changes and initialize GA if accepted
export const setupConsentListener = () => {
  window.addEventListener('cookieConsentChanged', (event: Event) => {
    const customEvent = event as CustomEvent;
    if (customEvent.detail === 'accepted') {
      initGA();
    }
  });
  
  // Also try to initialize on load if consent was already given
  initGA();
};

// Track page views - useful for single-page applications
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId) return;
  
  window.gtag('config', measurementId, {
    page_path: url
  });
};

// Track events
export const trackEvent = (
  action: string, 
  category?: string, 
  label?: string, 
  value?: number
) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};