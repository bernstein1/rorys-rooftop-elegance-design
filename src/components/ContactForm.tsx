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
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <Card className="p-8 shadow-lg mt-8 max-w-2xl mx-auto">
      <h2 className="font-section-header text-2xl mb-6 text-primary text-center">Event Inquiry</h2>
      
      <div id="tripleseat_embed_form_inline">
        {/* The TripleSeat form will be injected here */}
      </div>
      
      <div className="text-center mt-6">
        <a id="tripleseat_link" href="https://www.tripleseat.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">
          Private Event Software powered by Tripleseat
        </a>
      </div>

      <style>{`
        /* NUCLEAR OPTION - Override everything with !important */
        
        #tripleseat_embed_form_inline * {
          box-sizing: border-box !important;
        }

        #tripleseat_embed_form_inline {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
          max-width: 100% !important;
          margin: 0 !important;
          padding: 48px 48px 48px 112px !important;
          background: #F6F2DA !important;
          border-radius: 8px !important;
        }

        /* Kill the default title */
        #tripleseat_embed_form_inline h2,
        #tripleseat_embed_form_inline h1 {
          display: none !important;
        }

        /* Form field containers */
        #tripleseat_embed_form_inline .tripleseat_field,
        #tripleseat_embed_form_inline .tripleseat_field_section,
        #tripleseat_embed_form_inline div {
          width: 100% !important;
          margin-bottom: 20px !important;
          padding: 0 !important;
          clear: both !important;
        }

        /* Labels */
        #tripleseat_embed_form_inline label {
          display: block !important;
          font-weight: 600 !important;
          margin-bottom: 8px !important;
          color: #1f2937 !important;
          font-size: 14px !important;
          font-family: inherit !important;
        }

        /* ALL INPUTS - Full reset and redesign */
        #tripleseat_embed_form_inline input,
        #tripleseat_embed_form_inline textarea,
        #tripleseat_embed_form_inline select {
          width: 100% !important;
          max-width: 100% !important;
          padding: 14px 16px !important;
          border: 2px solid #e5e7eb !important;
          border-radius: 8px !important;
          font-size: 16px !important;
          font-family: inherit !important;
          background: #ffffff !important;
          color: #1f2937 !important;
          margin: 0 0 4px 0 !important;
          display: block !important;
          transition: all 0.2s ease !important;
          appearance: none !important;
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
        }

        /* Focus states */
        #tripleseat_embed_form_inline input:focus,
        #tripleseat_embed_form_inline textarea:focus,
        #tripleseat_embed_form_inline select:focus {
          outline: none !important;
          border-color: #3b82f6 !important;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
          background: #ffffff !important;
        }

        /* Textarea specific */
        #tripleseat_embed_form_inline textarea {
          min-height: 120px !important;
          resize: vertical !important;
          font-family: inherit !important;
        }

        /* Select dropdowns */
        #tripleseat_embed_form_inline select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e") !important;
          background-position: right 12px center !important;
          background-repeat: no-repeat !important;
          background-size: 16px !important;
          padding-right: 40px !important;
        }

        /* Checkboxes and radio buttons */
        #tripleseat_embed_form_inline input[type="checkbox"],
        #tripleseat_embed_form_inline input[type="radio"] {
          width: 18px !important;
          height: 18px !important;
          margin: 0 8px 0 0 !important;
          display: inline-block !important;
          vertical-align: middle !important;
          cursor: pointer !important;
        }

        /* Labels for checkboxes */
        #tripleseat_embed_form_inline input[type="checkbox"] + label,
        #tripleseat_embed_form_inline input[type="radio"] + label {
          display: inline-block !important;
          vertical-align: middle !important;
          margin-bottom: 0 !important;
          cursor: pointer !important;
          font-weight: 400 !important;
        }

        /* Submit button */
        #tripleseat_embed_form_inline button[type="submit"],
        #tripleseat_embed_form_inline input[type="submit"],
        #tripleseat_embed_form_inline .button {
          background: #3b82f6 !important;
          color: white !important;
          border: none !important;
          padding: 16px 32px !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          cursor: pointer !important;
          width: auto !important;
          display: block !important;
          margin: 24px auto 0 auto !important;
          transition: all 0.2s ease !important;
          text-transform: none !important;
          letter-spacing: normal !important;
        }

        #tripleseat_embed_form_inline button[type="submit"]:hover,
        #tripleseat_embed_form_inline input[type="submit"]:hover,
        #tripleseat_embed_form_inline .button:hover {
          background: #2563eb !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4) !important;
        }

        /* Error states */
        #tripleseat_embed_form_inline .errorExplanation {
          background: #fef2f2 !important;
          border: 2px solid #fca5a5 !important;
          padding: 16px !important;
          border-radius: 8px !important;
          margin-bottom: 20px !important;
          color: #dc2626 !important;
        }

        #tripleseat_embed_form_inline .errorExplanation h2 {
          display: block !important;
          color: #dc2626 !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          margin: 0 0 8px 0 !important;
        }

        #tripleseat_embed_form_inline input.error,
        #tripleseat_embed_form_inline textarea.error,
        #tripleseat_embed_form_inline select.error {
          border-color: #dc2626 !important;
          background: #fef2f2 !important;
        }

        /* Required asterisk */
        #tripleseat_embed_form_inline .required,
        #tripleseat_embed_form_inline .danger {
          color: #dc2626 !important;
        }

        /* Specific targeting for the "Shareable" question textarea */
        #tripleseat_embed_form_inline textarea[name*="shareable" i],
        #tripleseat_embed_form_inline textarea[placeholder*="shareable" i],
        #tripleseat_embed_form_inline label:contains("Shareable") + textarea,
        #tripleseat_embed_form_inline label[for*="shareable"] + textarea {
          width: 50% !important;
          max-width: 50% !important;
        }

        /* Also target by looking for the specific question text */
        #tripleseat_embed_form_inline label:contains("Are you interested in providing Shareable") + textarea,
        #tripleseat_embed_form_inline textarea[placeholder*="Are you interested" i] {
          width: 50% !important;
          max-width: 50% !important;
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          #tripleseat_embed_form_inline input,
          #tripleseat_embed_form_inline textarea,
          #tripleseat_embed_form_inline select {
            font-size: 16px !important; /* Prevents iOS zoom */
            padding: 12px 14px !important;
          }
          
          #tripleseat_embed_form_inline button[type="submit"],
          #tripleseat_embed_form_inline input[type="submit"],
          #tripleseat_embed_form_inline .button {
            width: 100% !important;
            padding: 14px 24px !important;
          }
        }

        /* Kill any weird positioning */
        #tripleseat_embed_form_inline * {
          position: static !important;
          float: none !important;
        }

        /* Remove any weird margins/padding on containers */
        #tripleseat_embed_form_inline > div,
        #tripleseat_embed_form_inline > form {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </Card>
  );
}
