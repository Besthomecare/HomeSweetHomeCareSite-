import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { getConsentStatus, setConsentStatus } from "@/lib/consent";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = getConsentStatus();
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus("accepted");
    setShowBanner(false);
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: "accepted" }));
  };

  const handleDecline = () => {
    setConsentStatus("declined");
    setShowBanner(false);
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: "declined" }));
  };

  if (!showBanner) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-primary shadow-lg z-50 p-4 md:p-6"
      role="dialog"
      aria-label="Cookie consent"
      data-testid="cookie-consent-banner"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-lg font-semibold text-primary mb-1">
                We Value Your Privacy
              </p>
              <p className="text-base leading-relaxed">
                We use cookies to analyze site traffic and improve your experience. 
                You can accept or decline analytics cookies.
              </p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="px-6 py-2 text-base border-primary text-primary hover:bg-secondary"
              data-testid="button-decline-cookies"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="px-6 py-2 text-base bg-primary hover:bg-primary/90 text-white"
              data-testid="button-accept-cookies"
            >
              Accept
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
