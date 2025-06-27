
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import PrivacyPolicyModal from "./PrivacyPolicyModal";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const fullConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(fullConsent));
    setVisible(false);
  };

  const acceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    setVisible(false);
  };

  const rejectAll = () => {
    const minimalConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookieConsent", JSON.stringify(minimalConsent));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-50 p-4"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <Card className="max-w-4xl mx-auto p-6 shadow-lg border-2">
        <div className="space-y-4">
          <div>
            <h2 id="cookie-banner-title" className="text-lg font-semibold mb-2">
              Cookie Preferences
            </h2>
            <p id="cookie-banner-description" className="text-sm text-muted-foreground">
              We use cookies to enhance your experience, analyze site traffic, and personalize content. 
              You can manage your preferences below or review our <PrivacyPolicyModal /> for more details.
            </p>
          </div>

          {showDetails && (
            <div className="space-y-3 border-t pt-4">
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="necessary" 
                  checked={true} 
                  disabled 
                  aria-describedby="necessary-description"
                />
                <div className="flex-1">
                  <label htmlFor="necessary" className="text-sm font-medium">
                    Necessary Cookies
                  </label>
                  <p id="necessary-description" className="text-xs text-muted-foreground">
                    Required for basic site functionality. Cannot be disabled.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="analytics" 
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({ ...prev, analytics: !!checked }))
                  }
                  aria-describedby="analytics-description"
                />
                <div className="flex-1">
                  <label htmlFor="analytics" className="text-sm font-medium">
                    Analytics Cookies
                  </label>
                  <p id="analytics-description" className="text-xs text-muted-foreground">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="marketing" 
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({ ...prev, marketing: !!checked }))
                  }
                  aria-describedby="marketing-description"
                />
                <div className="flex-1">
                  <label htmlFor="marketing" className="text-sm font-medium">
                    Marketing Cookies
                  </label>
                  <p id="marketing-description" className="text-xs text-muted-foreground">
                    Used to deliver personalized advertisements and track campaign performance.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <Button size="sm" onClick={acceptAll}>
              Accept All
            </Button>
            <Button size="sm" variant="outline" onClick={rejectAll}>
              Reject All
            </Button>
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? 'Hide' : 'Customize'}
            </Button>
            {showDetails && (
              <Button size="sm" variant="secondary" onClick={acceptSelected}>
                Save Preferences
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;
