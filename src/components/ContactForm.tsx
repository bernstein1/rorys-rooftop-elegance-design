import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import useTripleSeatEmbed from "@/hooks/useTripleSeatEmbed";

export default function ContactForm() {
  const { status, error } = useTripleSeatEmbed({
    containerId: "tripleseat-form-container",
    leadFormId: 44808,
    publicKey: "ea1b9e9398812b6177ebfb0f6c6077f9dd47cd76",
    inline: true,
    loadTimeoutMs: 15000,
  });

  return (
    <Card className="p-8 shadow-lg mt-8 max-w-4xl mx-auto">
      <h2 className="font-section-header text-2xl mb-6 text-primary text-center">
        Event Inquiry
      </h2>

      {/* TripleSeat Form Container */}
      <div id="tripleseat-form-container" className="relative">
        {status !== "ready" && (
          <div className="space-y-3" aria-hidden>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-3/5" />
            <Skeleton className="h-24 w-full" />
            <div className="flex gap-3">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-10 w-1/2" />
            </div>
            <Skeleton className="h-10 w-32 mx-auto" />
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-destructive mt-4 text-center">
          We’re having trouble loading the form. You can still reach us via
          email or use TripleSeat directly below.
        </p>
      )}

      <div className="text-center mt-6">
        <a
          id="tripleseat_link"
          href="https://www.tripleseat.com"
          className="text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          Private Event Software powered by Tripleseat
        </a>
      </div>

      <style>{`
        /* Scope styles to avoid leaking into the rest of the site */
        #tripleseat-form-container #tripleseat_embed_form_inline {
          font-family: 'Jubilat', serif;
          max-width: 100%;
          margin: 0;
          padding: 0;
          color: hsl(var(--foreground));
        }

        /* Hide default title */
        #tripleseat-form-container #tripleseat_embed_form_inline h2 {
          display: none;
        }

        /* Labels */
        #tripleseat-form-container #tripleseat_embed_form_inline label {
          display: block;
          font-family: 'Jubilat', serif;
          font-weight: 500;
          margin-bottom: 6px;
          color: hsl(var(--foreground));
          font-size: 1rem;
        }

        /* Inputs and selects */
        #tripleseat-form-container #tripleseat_embed_form_inline input,
        #tripleseat-form-container #tripleseat_embed_form_inline select {
          width: 100%;
          padding: 12px;
          border: 1px solid hsl(var(--border));
          border-radius: 6px;
          font-size: 14px;
          font-family: 'Jubilat', serif;
          margin-bottom: 16px;
          background: hsl(var(--background));
          box-sizing: border-box;
          color: hsl(var(--foreground));
        }

        /* Textareas */
        #tripleseat-form-container #tripleseat_embed_form_inline textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid hsl(var(--border));
          border-radius: 6px;
          font-size: 14px;
          font-family: 'Jubilat', serif;
          margin-bottom: 16px;
          background: hsl(var(--background));
          box-sizing: border-box;
          color: hsl(var(--foreground));
          min-height: 100px;
          resize: vertical;
        }

        /* Make the long "please answer the following questions" textarea smaller */
        #tripleseat-form-container #tripleseat_embed_form_inline textarea[name*="question"],
        #tripleseat-form-container #tripleseat_embed_form_inline textarea[placeholder*="question"],
        #tripleseat-form-container #tripleseat_embed_form_inline textarea[id*="question"] {
          min-height: 50px;
        }

        /* Focus states */
        #tripleseat-form-container #tripleseat_embed_form_inline input:focus,
        #tripleseat-form-container #tripleseat_embed_form_inline textarea:focus,
        #tripleseat-form-container #tripleseat_embed_form_inline select:focus {
          outline: none;
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.12);
        }

        /* Submit button */
        #tripleseat-form-container #tripleseat_embed_form_inline button[type="submit"],
        #tripleseat-form-container #tripleseat_embed_form_inline input[type="submit"],
        #tripleseat-form-container #tripleseat_embed_form_inline .button {
          background: hsl(var(--secondary));
          color: hsl(var(--primary));
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
          transition: var(--transition-smooth);
        }

        #tripleseat-form-container #tripleseat_embed_form_inline button[type="submit"]:hover,
        #tripleseat-form-container #tripleseat_embed_form_inline input[type="submit"]:hover,
        #tripleseat-form-container #tripleseat_embed_form_inline .button:hover {
          filter: brightness(0.97);
          transform: translateY(-1px);
        }

        /* Checkboxes */
        #tripleseat-form-container #tripleseat_embed_form_inline input[type="checkbox"] {
          width: auto;
          margin-right: 8px;
          margin-bottom: 0;
        }

        /* Field containers */
        #tripleseat-form-container #tripleseat_embed_form_inline .tripleseat_field {
          margin-bottom: 16px;
        }

        /* Error states */
        #tripleseat-form-container #tripleseat_embed_form_inline .errorExplanation {
          background: hsl(var(--destructive) / 0.05);
          border: 1px solid hsl(var(--destructive) / 0.3);
          padding: 12px;
          border-radius: 6px;
          margin-bottom: 16px;
          color: hsl(var(--destructive));
          font-family: 'Jubilat', serif;
        }

        #tripleseat-form-container #tripleseat_embed_form_inline input.error,
        #tripleseat-form-container #tripleseat_embed_form_inline textarea.error,
        #tripleseat-form-container #tripleseat_embed_form_inline select.error {
          border-color: hsl(var(--destructive));
        }

        /* Required indicator */
        #tripleseat-form-container #tripleseat_embed_form_inline .required {
          color: hsl(var(--destructive));
        }

        /* Mobile */
        @media (max-width: 640px) {
          #tripleseat-form-container #tripleseat_embed_form_inline {
            padding: 0;
          }
          #tripleseat-form-container #tripleseat_embed_form_inline input,
          #tripleseat-form-container #tripleseat_embed_form_inline textarea,
          #tripleseat-form-container #tripleseat_embed_form_inline select {
            font-size: 16px; /* Prevents zoom on iOS */
          }
        }
      `}</style>
    </Card>
  );
}
