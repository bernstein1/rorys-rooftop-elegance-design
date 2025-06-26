import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-background border-t border-border p-4 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-foreground">
        We use cookies to improve your experience and analyze site traffic.
      </p>
      <Button size="sm" onClick={acceptCookies}>
        Accept
      </Button>
    </div>
  );
};

export default CookieBanner;
