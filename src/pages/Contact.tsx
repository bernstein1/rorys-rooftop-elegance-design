
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden flex flex-col">
      <Navigation />
      <main id="main-content" className="flex-1 max-w-4xl mx-auto px-4 pt-32 pb-8 animate-fade-in">
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
      <Footer />
    </div>
  );
}
