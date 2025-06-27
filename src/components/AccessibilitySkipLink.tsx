
import React from "react";

// Enhanced skip link component with better accessibility
const AccessibilitySkipLink = () => (
  <>
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:no-underline focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
    <a 
      href="#main-navigation" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-20 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:no-underline focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Skip to navigation"
    >
      Skip to navigation
    </a>
  </>
);

export default AccessibilitySkipLink;
