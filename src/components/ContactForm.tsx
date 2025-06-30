
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
    <Card className="p-8 shadow-lg mt-8 max-w-4xl mx-auto">
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
        /* Form container with left padding */
        body #tripleseat_embed_form_inline {
          font-family: 'Jubilat', serif;
          max-width: 100%;
          margin: 0;
          padding: 0 0 0 112px;
          color: #2C2E33;
        }

        /* Hide default title */
        body #tripleseat_embed_form_inline h2 {
          display: none;
        }

        /* Clean labels - using site fonts */
        body #tripleseat_embed_form_inline label {
          display: block;
          font-family: 'Jubilat', serif;
          font-weight: 500;
          margin-bottom: 6px;
          color: #2C2E33;
          font-size: 1rem;
        }

        /* All form inputs - consistent styling with site colors */
        body #tripleseat_embed_form_inline input,
        body #tripleseat_embed_form_inline select {
          width: 100%;
          padding: 12px;
          border: 1px solid #B8D4D1;
          border-radius: 6px;
          font-size: 14px;
          font-family: 'Jubilat', serif;
          margin-bottom: 16px;
          background: white;
          box-sizing: border-box;
          color: #2C2E33;
        }

        /* Textarea - keep current size except for specific field */
        body #tripleseat_embed_form_inline textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #B8D4D1;
          border-radius: 6px;
          font-size: 14px;
          font-family: 'Jubilat', serif;
          margin-bottom: 16px;
          background: white;
          box-sizing: border-box;
          color: #2C2E33;
          min-height: 100px;
          resize: vertical;
        }

        /* Make "please answer the following questions below" textarea half size */
        body #tripleseat_embed_form_inline textarea[name*="question"],
        body #tripleseat_embed_form_inline textarea[placeholder*="question"],
        body #tripleseat_embed_form_inline textarea[id*="question"] {
          min-height: 50px;
        }

        /* Focus states using site primary color */
        body #tripleseat_embed_form_inline input:focus,
        body #tripleseat_embed_form_inline textarea:focus,
        body #tripleseat_embed_form_inline select:focus {
          outline: none;
          border-color: #0A9F93;
          box-shadow: 0 0 0 3px rgba(10, 159, 147, 0.1);
        }

        /* Submit button - matching site button style */
        body #tripleseat_embed_form_inline button[type="submit"],
        body #tripleseat_embed_form_inline input[type="submit"],
        body #tripleseat_embed_form_inline .button {
          background: #F6F2DA;
          color: #0A9F93;
          border: none;
          padding: 12px 32px;
          border-radius: 50px;
          font-family: 'Phosphate', sans-serif;
          font-weight: 400;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          width: auto;
          display: inline-block;
          margin: 16px auto 0;
          transition: all 0.3s ease;
        }

        body #tripleseat_embed_form_inline button[type="submit"]:hover,
        body #tripleseat_embed_form_inline input[type="submit"]:hover,
        body #tripleseat_embed_form_inline .button:hover {
          background: #F0ECD0;
          transform: translateY(-1px);
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

        /* Error states using site colors */
        body #tripleseat_embed_form_inline .errorExplanation {
          background: #fef2f2;
          border: 1px solid #fecaca;
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 16px;
          color: #dc2626;
          font-family: 'Jubilat', serif;
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
          body #tripleseat_embed_form_inline {
            padding: 0 0 0 20px;
          }
          
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
