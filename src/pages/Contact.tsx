
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen w-full pb-16 overflow-x-hidden">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-8 animate-fade-in">
        <h1 className="font-hero mb-2 text-center">Contact Rory's Rooftop Bar</h1>
        <p className="font-body text-lg mb-8 text-muted-foreground text-center">
          Whether it's for reservations, private events, or just to say hello, we'd love to hear from you. Let's connect.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
