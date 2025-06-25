import { useEffect } from "react";
import { Card } from "@/components/ui/card";

export default function ContactForm() {
  useEffect(() => {
    // Load the TripleSeat script
    const script = document.createElement('script');
    script.src = 'https://api.tripleseat.com/v1/leads/ts_script.js?lead_form_id=44808&public_key=ea1b9e9398812b6177ebfb0f6c6077f9dd47cd76&inline_form=true';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Card className="p-8 shadow-lg mt-8 max-w-2xl mx-auto">
      <h2 className="font-section-header text-2xl mb-6 text-primary text-center">Event Inquiry</h2>
      
      {/* TripleSeat Form Container */}
      <div id="tripleseat-form-container">
        {/* The TripleSeat form will be injected here */}
      </div>
      
      <div className="text-center mt-6">
        <a id="tripleseat_link" href="https://www.tripleseat.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">
          Private Event Software powered by Tripleseat
        </a>
      </div>

      <style>{`
        /* Clean, simple form styling */
        body #tripleseat_embed_form_inline {
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        /* Hide default title */
        body #tripleseat_embed_form_inline h2 {
          display: none;
        }

        /* Clean labels */
        body #tripleseat_embed_form_inline label {
          display: block;
          font-weight: 500;
          margin-bottom: 6px;
          color: #374151;
        }

        /* All form inputs - consistent styling */
        body #tripleseat_embed_form_inline input,
        body #tripleseat_embed_form_inline textarea,
        body #tripleseat_embed_form_inline select {
          width: 100%;
          padding: 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          margin-bottom: 16px;
          background: white;
          box-sizing: border-box;
        }

        /* Focus states */
        body #tripleseat_embed_form_inline input:focus,
        body #tripleseat_embed_form_inline textarea:focus,
        body #tripleseat_embed_form_inline select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        /* Textarea specific */
        body #tripleseat_embed_form_inline textarea {
          min-height: 100px;
          resize: vertical;
        }

        /* Submit button */
        body #tripleseat_embed_form_inline button[type="submit"],
        body #tripleseat_embed_form_inline input[type="submit"],
        body #tripleseat_embed_form_inline .button {
          background: #3b82f6;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          width: auto;
          display: inline-block;
          margin: 16px auto 0;
        }

        body #tripleseat_embed_form_inline button[type="submit"]:hover,
        body #tripleseat_embed_form_inline input[type="submit"]:hover,
        body #tripleseat_embed_form_inline .button:hover {
          background: #2563eb;
        }

        /* Checkboxes */
        body #tripleseat_embed_form_inline input[type="checkbox"] {
          width: auto;
          margin-right: 8px;
          margin-bottom: 0;
        }

        /* Field containers */
        body #tripleseat_embed_form_inline .tripleseat_field {
          margin-bottom: 16px;
        }

        /* Error states */
        body #tripleseat_embed_form_inline .errorExplanation {
          background: #fef2f2;
          border: 1px solid #fecaca;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 16px;
          color: #dc2626;
        }

        body #tripleseat_embed_form_inline input.error,
        body #tripleseat_embed_form_inline textarea.error,
        body #tripleseat_embed_form_inline select.error {
          border-color: #dc2626;
        }

        /* Required field indicator */
        body #tripleseat_embed_form_inline .required {
          color: #dc2626;
        }

        /* Mobile responsive */
        @media (max-width: 640px) {
          body #tripleseat_embed_form_inline input,
          body #tripleseat_embed_form_inline textarea,
          body #tripleseat_embed_form_inline select {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </Card>
  );
}
