
import { useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function ContactForm() {
  useEffect(() => {
    // Clean up any existing TripleSeat elements first
    const existingScript = document.querySelector(
      'script[data-external-service="tripleseat"]'
    );
    const existingForm = document.getElementById('tripleseat_embed_form_inline');
    
    if (existingScript) {
      existingScript.remove();
    }
    if (existingForm) {
      existingForm.innerHTML = '';
    }

    // Create and load the TripleSeat script
    const script = document.createElement('script');
    script.src =
      'https://api.tripleseat.com/v1/leads/ts_script.js?lead_form_id=44808&public_key=ea1b9e9398812b6177ebfb0f6c6077f9dd47cd76&inline_form=true';
    script.crossOrigin = 'anonymous';
    script.referrerPolicy = 'no-referrer';
    script.setAttribute('data-external-service', 'tripleseat');

    // Add script to the form container so the form renders in place
    const container = document.getElementById('tripleseat-form-container');
    if (container) {
      container.appendChild(script);
    } else {
      document.body.appendChild(script);
    }

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector(
        'script[src*="tripleseat.com"]'
      );
      if (scriptToRemove) {
        if (typeof scriptToRemove.remove === 'function') {
          scriptToRemove.remove();
        } else if (scriptToRemove.parentNode) {
          scriptToRemove.parentNode.removeChild(scriptToRemove);
        }
      }
      const formPlaceholder = document.getElementById('tripleseat_embed_form_inline');
      if (formPlaceholder) {
        formPlaceholder.innerHTML = '';
      }
    };
  }, []);

  return (
    <Card className="p-8 shadow-lg mt-8 max-w-4xl mx-auto">
      <h2 className="font-section-header text-2xl mb-6 text-primary text-center">Event Inquiry</h2>
      
      {/* TripleSeat Form Container */}
      <div
        id="tripleseat-form-container"
        role="form"
        aria-label="Event inquiry form powered by TripleSeat"
        className="min-h-[400px]"
      >
        {/* The TripleSeat form will be automatically injected here by their script */}
        <div id="tripleseat_embed_form_inline" />
      </div>
      
      <div className="text-center mt-6">
        <a 
          id="tripleseat_link" 
          href="https://www.tripleseat.com" 
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Private Event Software powered by Tripleseat (opens in new window)"
        >
          Private Event Software powered by Tripleseat
        </a>
      </div>

      <style>{`
        /* Form container with left padding */
        body #tripleseat_embed_form_inline {
          font-family: 'Jubilat', serif !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 0 0 0 112px !important;
          color: #2C2E33 !important;
        }

        /* Hide default title */
        body #tripleseat_embed_form_inline h2 {
          display: none !important;
        }

        /* Clean labels - using site fonts */
        body #tripleseat_embed_form_inline label {
          display: block !important;
          font-family: 'Jubilat', serif !important;
          font-weight: 500 !important;
          margin-bottom: 6px !important;
          color: #2C2E33 !important;
          font-size: 1rem !important;
        }

        /* Add required field indicators */
        body #tripleseat_embed_form_inline label[required]::after,
        body #tripleseat_embed_form_inline label:has(+ input[required])::after,
        body #tripleseat_embed_form_inline label:has(+ select[required])::after,
        body #tripleseat_embed_form_inline label:has(+ textarea[required])::after {
          content: " *" !important;
          color: #dc2626 !important;
          font-weight: bold !important;
        }

        /* All form inputs - consistent styling with site colors */
        body #tripleseat_embed_form_inline input[type="text"],
        body #tripleseat_embed_form_inline input[type="email"],
        body #tripleseat_embed_form_inline input[type="tel"],
        body #tripleseat_embed_form_inline input[type="number"],
        body #tripleseat_embed_form_inline input[type="date"],
        body #tripleseat_embed_form_inline input[type="time"],
        body #tripleseat_embed_form_inline select {
          width: 100% !important;
          padding: 12px !important;
          border: 1px solid #B8D4D1 !important;
          border-radius: 6px !important;
          font-size: 14px !important;
          font-family: 'Jubilat', serif !important;
          margin-bottom: 16px !important;
          background: white !important;
          box-sizing: border-box !important;
          color: #2C2E33 !important;
        }

        /* Textarea - keep current size except for specific field */
        body #tripleseat_embed_form_inline textarea {
          width: 100% !important;
          padding: 12px !important;
          border: 1px solid #B8D4D1 !important;
          border-radius: 6px !important;
          font-size: 14px !important;
          font-family: 'Jubilat', serif !important;
          margin-bottom: 16px !important;
          background: white !important;
          box-sizing: border-box !important;
          color: #2C2E33 !important;
          min-height: 100px !important;
          resize: vertical !important;
        }

        /* Make "please answer the following questions below" textarea half size */
        body #tripleseat_embed_form_inline textarea[name*="question"],
        body #tripleseat_embed_form_inline textarea[placeholder*="question"],
        body #tripleseat_embed_form_inline textarea[id*="question"] {
          min-height: 50px !important;
        }

        /* Focus states using site primary color - enhanced for accessibility */
        body #tripleseat_embed_form_inline input:focus,
        body #tripleseat_embed_form_inline textarea:focus,
        body #tripleseat_embed_form_inline select:focus {
          outline: 3px solid #0A9F93 !important;
          outline-offset: 2px !important;
          border-color: #0A9F93 !important;
          box-shadow: 0 0 0 3px rgba(10, 159, 147, 0.1) !important;
        }

        /* Submit button - matching site button style */
        body #tripleseat_embed_form_inline button[type="submit"],
        body #tripleseat_embed_form_inline input[type="submit"],
        body #tripleseat_embed_form_inline .button,
        body #tripleseat_embed_form_inline .btn {
          background: #F6F2DA !important;
          color: #0A9F93 !important;
          border: none !important;
          padding: 12px 32px !important;
          border-radius: 50px !important;
          font-family: 'Phosphate', sans-serif !important;
          font-weight: 400 !important;
          font-size: 1rem !important;
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
          cursor: pointer !important;
          width: auto !important;
          display: inline-block !important;
          margin: 16px auto 0 !important;
          transition: all 0.3s ease !important;
          min-height: 44px !important;
        }

        body #tripleseat_embed_form_inline button[type="submit"]:hover,
        body #tripleseat_embed_form_inline input[type="submit"]:hover,
        body #tripleseat_embed_form_inline .button:hover,
        body #tripleseat_embed_form_inline .btn:hover {
          background: #F0ECD0 !important;
          transform: translateY(-1px) !important;
        }

        body #tripleseat_embed_form_inline button[type="submit"]:focus,
        body #tripleseat_embed_form_inline input[type="submit"]:focus,
        body #tripleseat_embed_form_inline .button:focus,
        body #tripleseat_embed_form_inline .btn:focus {
          outline: 3px solid #0A9F93 !important;
          outline-offset: 2px !important;
        }

        /* Checkboxes - enhanced for accessibility */
        body #tripleseat_embed_form_inline input[type="checkbox"] {
          width: 18px !important;
          height: 18px !important;
          margin-right: 8px !important;
          margin-bottom: 0 !important;
          cursor: pointer !important;
        }

        body #tripleseat_embed_form_inline input[type="checkbox"]:focus {
          outline: 3px solid #0A9F93 !important;
          outline-offset: 2px !important;
        }

        /* Field containers */
        body #tripleseat_embed_form_inline .tripleseat_field,
        body #tripleseat_embed_form_inline .form-group,
        body #tripleseat_embed_form_inline .field {
          margin-bottom: 16px !important;
        }

        /* Error states using site colors */
        body #tripleseat_embed_form_inline .errorExplanation,
        body #tripleseat_embed_form_inline .error-message {
          background: #fef2f2 !important;
          border: 1px solid #fecaca !important;
          padding: 12px !important;
          border-radius: 6px !important;
          margin-bottom: 16px !important;
          color: #dc2626 !important;
          font-family: 'Jubilat', serif !important;
        }

        body #tripleseat_embed_form_inline input.error,
        body #tripleseat_embed_form_inline textarea.error,
        body #tripleseat_embed_form_inline select.error {
          border-color: #dc2626 !important;
          background-color: #fef2f2 !important;
        }

        /* Required field indicator */
        body #tripleseat_embed_form_inline .required {
          color: #dc2626 !important;
        }

        /* Ensure form is visible */
        body #tripleseat_embed_form_inline {
          display: block !important;
          visibility: visible !important;
          opacity: 1 !important;
        }

        /* Mobile responsive */
        @media (max-width: 640px) {
          body #tripleseat_embed_form_inline {
            padding: 0 0 0 20px !important;
          }
          
          body #tripleseat_embed_form_inline input,
          body #tripleseat_embed_form_inline textarea,
          body #tripleseat_embed_form_inline select {
            font-size: 16px !important; /* Prevents zoom on iOS */
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          body #tripleseat_embed_form_inline input,
          body #tripleseat_embed_form_inline textarea,
          body #tripleseat_embed_form_inline select {
            border-width: 2px !important;
          }
        }
      `}</style>
    </Card>
  );
}
