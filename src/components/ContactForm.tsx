
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
    <Card className="p-8 bg-white shadow-lg mt-8 max-w-4xl mx-auto">
      <h2 className="font-section-header text-2xl mb-6 text-primary text-center">Private Event Inquiry</h2>
      
      {/* TripleSeat Form Container */}
      <div id="tripleseat-form-container" className="max-w-3xl mx-auto">
        {/* The TripleSeat form will be injected here */}
      </div>
      
      <div className="text-center mt-6">
        <a id="tripleseat_link" href="https://www.tripleseat.com" className="text-xs text-muted-foreground hover:text-primary transition-colors">
          Private Event Software powered by Tripleseat
        </a>
      </div>

      <style>{`
        /* Custom styling to match website design */
        body #tripleseat_embed_form_inline {
          font-family: 'Jubilat', serif;
          color: #2C2E33;
          max-width: 100%;
        }

        body #tripleseat_embed_form_inline h2 {
          display: none; /* Hide default title since we have our own */
        }

        body #tripleseat_embed_form_inline label {
          font-family: 'Jubilat', serif;
          color: #2C2E33;
          font-weight: 500;
          margin-bottom: 0.5rem;
          display: block;
          clear: both;
          font-size: 0.9rem;
        }

        body #tripleseat_embed_form_inline input,
        body #tripleseat_embed_form_inline textarea,
        body #tripleseat_embed_form_inline select {
          background-color: #F6F2DA;
          border: 1px solid #C8D4D1;
          border-radius: 0.375rem;
          padding: 0.75rem;
          font-family: 'Jubilat', serif;
          color: #2C2E33;
          margin-bottom: 1rem;
          transition: all 0.2s ease;
          clear: both;
          float: none;
        }

        /* Specific field widths for better sizing */
        body #tripleseat_embed_form_inline input[type="text"] {
          width: 280px;
          max-width: 100%;
        }

        body #tripleseat_embed_form_inline input[type="email"] {
          width: 280px;
          max-width: 100%;
        }

        body #tripleseat_embed_form_inline input[type="tel"] {
          width: 150px;
          max-width: 100%;
          display: inline-block;
          margin-right: 10px;
        }

        body #tripleseat_embed_form_inline input[type="number"] {
          width: 100px;
          max-width: 100%;
        }

        body #tripleseat_embed_form_inline input[type="date"] {
          width: 160px;
          max-width: 100%;
        }

        body #tripleseat_embed_form_inline input[type="time"] {
          width: 120px;
          max-width: 100%;
        }

        body #tripleseat_embed_form_inline select {
          width: 200px;
          max-width: 100%;
        }

        body #tripleseat_embed_form_inline textarea {
          width: 100%;
          max-width: 500px;
          min-height: 80px;
          resize: vertical;
        }

        /* Extension field styling - make it inline with phone */
        body #tripleseat_embed_form_inline input[name*="extension"] {
          width: 80px;
          display: inline-block;
          margin-left: 10px;
        }

        /* Newsletter checkbox styling - make it inline */
        body #tripleseat_embed_form_inline input[type="checkbox"] {
          width: auto;
          display: inline-block;
          margin-right: 8px;
          margin-bottom: 0;
          vertical-align: middle;
        }

        body #tripleseat_embed_form_inline label[for*="newsletter"],
        body #tripleseat_embed_form_inline label[for*="email_opt"] {
          display: inline-block;
          margin-bottom: 1rem;
          vertical-align: middle;
        }

        body #tripleseat_embed_form_inline input:focus,
        body #tripleseat_embed_form_inline textarea:focus,
        body #tripleseat_embed_form_inline select:focus {
          outline: none;
          border-color: #0A9F93;
          box-shadow: 0 0 0 2px rgba(10, 159, 147, 0.1);
        }

        body #tripleseat_embed_form_inline .button {
          background-color: #0A9F93;
          color: white;
          border: none;
          border-radius: 0.375rem;
          padding: 0.75rem 1.5rem;
          font-family: 'Phosphate', sans-serif;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          float: none;
          clear: both;
          margin-top: 1rem;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        body #tripleseat_embed_form_inline .button:hover {
          background-color: #088A7E;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(10, 159, 147, 0.2);
        }

        body #tripleseat_embed_form_inline .tripleseat_field {
          margin-bottom: 1.5rem;
          width: auto;
          float: none;
          clear: both;
          margin-right: 0;
        }

        body #tripleseat_embed_form_inline .tripleseat_field_section {
          margin-bottom: 2rem;
          width: 100%;
          float: none;
          clear: both;
        }

        body #tripleseat_embed_form_inline .location_list {
          clear: both;
          float: none;
        }

        body #tripleseat_embed_form_inline .location_list input {
          width: auto;
          margin-right: 0.5rem;
          float: none;
          display: inline-block;
          vertical-align: middle;
        }

        body #tripleseat_embed_form_inline .location_list label {
          margin-left: 0.5rem;
          margin-bottom: 0.5rem;
          display: inline-block;
          float: none;
          vertical-align: middle;
        }

        body #tripleseat_embed_form_inline .location_list div {
          clear: both;
          margin-bottom: 0.5rem;
        }

        body #tripleseat_embed_form_inline .errorExplanation {
          background-color: #FEE2E2;
          border: 1px solid #F87171;
          border-radius: 0.375rem;
          padding: 1rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        body #tripleseat_embed_form_inline .errorExplanation h2 {
          color: #DC2626;
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }

        body #tripleseat_embed_form_inline input.error,
        body #tripleseat_embed_form_inline textarea.error,
        body #tripleseat_embed_form_inline select.error {
          background-color: #FEE2E2;
          border-color: #F87171;
        }

        body #tripleseat_embed_form_inline .help-block {
          font-size: 0.875rem;
          color: #6B7280;
          margin-top: 0.25rem;
          float: none;
          clear: both;
        }

        body #tripleseat_embed_form_inline .danger {
          color: #DC2626;
        }

        body #tripleseat_embed_form_inline .required {
          color: #DC2626;
        }

        /* Clear floats to prevent layout issues */
        body #tripleseat_embed_form_inline .tripleseat_clear {
          clear: both;
        }

        /* Mobile responsiveness */
        @media (max-width: 640px) {
          body #tripleseat_embed_form_inline .tripleseat_field {
            float: none;
            margin-right: 0;
            width: 100%;
          }
          
          body #tripleseat_embed_form_inline input,
          body #tripleseat_embed_form_inline textarea,
          body #tripleseat_embed_form_inline select {
            width: 100%;
            max-width: 100%;
          }

          body #tripleseat_embed_form_inline input[type="tel"] {
            width: 60%;
            display: block;
            margin-bottom: 0.5rem;
          }

          body #tripleseat_embed_form_inline input[name*="extension"] {
            width: 35%;
            display: block;
            margin-left: 0;
            margin-top: 0.5rem;
          }
        }

        /* Custom styling for powered by link */
        #tripleseat_link {
          font-size: 0.75rem;
          color: #9CA3AF;
          text-decoration: none;
          margin-top: 1rem;
          display: inline-block;
        }

        #tripleseat_link:hover {
          color: #0A9F93;
        }
      `}</style>
    </Card>
  );
}
