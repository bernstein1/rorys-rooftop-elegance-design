
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <div id="main-content" className="bg-background min-h-screen w-full pb-16 overflow-x-hidden">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-8 animate-fade-in">
        <header className="text-center mb-8">
          <h1 className="font-hero mb-2">Contact Rory's Rooftop Bar</h1>
          <p className="font-body text-lg text-muted-foreground">
            Whether it's for reservations, private events, or just to say hello, we'd love to hear from you. Let's connect.
          </p>
        </header>
        
        {/* Contact Info and Hours in a row */}
        <ContactInfo />
        
        {/* Contact Form in a separate white container below */}
        <ContactForm />
      </main>
    </div>
  );
}
