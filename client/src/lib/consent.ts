export type ConsentStatus = "accepted" | "declined" | null;

const COOKIE_CONSENT_KEY = "cookie_consent";

export const getConsentStatus = (): ConsentStatus => {
  if (typeof window === "undefined") return null;
  try {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === "accepted" || consent === "declined") {
      return consent;
    }
  } catch {
    return null;
  }
  return null;
};

export const setConsentStatus = (status: "accepted" | "declined") => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, status);
  } catch {
    console.warn("Could not save consent status to localStorage");
  }
};
