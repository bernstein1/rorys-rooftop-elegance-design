
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid email address.",
      });
      return;
    }

    if (!consent) {
      toast({
        variant: "destructive",
        title: "Please consent to receive marketing emails.",
      });
      return;
    }

    setSubmitting(true);

    try {
      // Insert into the correct table structure matching the database schema
      const { error } = await supabase
        .from("Email Collection")
        .insert([{ 
          Email: email.trim(),
          Name: name.trim() || null
        }]);

      if (error) {
        throw error;
      }

      setEmail("");
      setName("");
      setConsent(false);
      toast({
        title: "Thank you for subscribing!",
        description: "You'll be the first to hear about new events and exclusive deals.",
      });
    } catch (error) {
      console.error("Error inserting email:", error);
      toast({
        variant: "destructive",
        title: "Error submitting email.",
        description: "We couldn't add you to the list. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      className="relative z-10 py-16 px-4 md:py-20 flex flex-col items-center"
      style={{
        background: "#27bfb2",
      }}
      aria-labelledby="email-signup-heading"
    >
      <div className="max-w-2xl w-full text-center">
        <Mail className="mx-auto mb-4 text-primary-foreground" size={40} aria-hidden="true" />
        <h2 id="email-signup-heading" className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Stay Informed
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
          Join the list for exclusive invites, opening parties, and signature rooftop experiences.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full max-w-lg mx-auto"
          noValidate
        >
          <div className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={e => setName(e.target.value)}
              className="bg-secondary border border-primary/60 placeholder:text-muted-foreground md:text-base text-md"
              disabled={submitting}
              aria-label="Name"
            />
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 bg-secondary border border-primary/60 placeholder:text-muted-foreground md:text-base text-md"
                disabled={submitting}
                required
                aria-label="Email address"
                aria-describedby="email-error"
              />
              <Button
                type="submit"
                variant="outline"
                className="border-primary text-primary px-12 py-3"
                size="lg"
                disabled={submitting || !consent}
              >
                {submitting ? "Joining..." : "Sign Up"}
              </Button>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 text-left">
            <Checkbox 
              id="marketing-consent"
              checked={consent}
              onCheckedChange={(checked) => setConsent(!!checked)}
              className="mt-1"
              aria-describedby="consent-description"
            />
            <label htmlFor="marketing-consent" className="text-sm text-primary-foreground cursor-pointer">
              <span id="consent-description">
                I consent to receive marketing emails from Rory's Rooftop Bar. 
                You can unsubscribe at any time.
              </span>
            </label>
          </div>
        </form>
        
        <p className="text-xs text-primary-foreground mt-4">
          No spam, ever. We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default EmailSignup;
