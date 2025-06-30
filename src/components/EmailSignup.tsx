
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
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
    setSubmitting(true);

    try {
      const { error } = await supabase
        .from("Email Collection")
        .insert([{ Email: email }]);

      if (error) {
        throw error;
      }

      setEmail("");
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
        // Use a lighter turquoise, staying brand-aligned
        background: "#27bfb2",
      }}
    >
      <div className="max-w-2xl w-full text-center">
        <Mail className="mx-auto mb-4 text-primary-foreground" size={40} aria-hidden="true" />
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Stay Informed</h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
          Join the list for exclusive invites, opening parties, and signature rooftop experiences.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4 w-full max-w-lg mx-auto"
        >
          <label htmlFor="signup-email" className="sr-only">
            Email address
          </label>
          <Input
            id="signup-email"
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 bg-secondary border border-primary/60 placeholder:text-muted-foreground md:text-base text-md"
            disabled={submitting}
            required
          />
          <Button
            type="submit"
            variant="outline"
            className="border-primary text-primary px-12 py-3"
            size="lg"
            disabled={submitting}
          >
            {submitting ? "Joining..." : "Sign Up"}
          </Button>
        </form>
        <p className="text-xs text-primary-foreground mt-4">
          No spam, ever. We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default EmailSignup;
