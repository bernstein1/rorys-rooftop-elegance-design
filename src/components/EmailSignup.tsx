
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        variant: "destructive",
        title: "Please enter a valid email address.",
      });
      return;
    }
    setSubmitting(true);
    // Simulate async request (for demo)
    setTimeout(() => {
      setSubmitting(false);
      setEmail("");
      toast({
        title: "Thank you for subscribing!",
        description: "You'll be the first to hear about new events and exclusive deals.",
      });
    }, 1000);
  };

  return (
    <section className="relative z-10 bg-primary/10 py-16 px-4 md:py-20 flex flex-col items-center">
      <div className="max-w-2xl w-full text-center">
        <Mail className="mx-auto mb-4 text-primary" size={40} />
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Stay Informed</h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-8">
          Join the list for exclusive invites, opening parties, and signature rooftop experiences.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4 w-full max-w-lg mx-auto"
        >
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 bg-background border border-primary/60 placeholder:text-muted-foreground md:text-base text-md"
            disabled={submitting}
            required
            aria-label="Email address"
          />
          <Button
            type="submit"
            className="bg-primary text-primary-foreground px-8 font-semibold text-base rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            size="lg"
            disabled={submitting}
          >
            {submitting ? "Joining..." : "Sign Up"}
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-4">
          No spam, ever. We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default EmailSignup;
