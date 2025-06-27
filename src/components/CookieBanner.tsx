
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookies-accepted");
    if (!hasAcceptedCookies) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookies-accepted", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="p-4 shadow-lg border-primary/20">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-foreground text-sm">Cookie Notice</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={declineCookies}
            className="h-6 w-6 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mb-4">
          We use cookies to enhance your experience and improve our services. 
          By continuing to use our site, you agree to our cookie policy.
        </p>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={acceptCookies}
            className="bg-primary text-primary-foreground text-xs"
          >
            Accept
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={declineCookies}
            className="text-xs"
          >
            Decline
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;
