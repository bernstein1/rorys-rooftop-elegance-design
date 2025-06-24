
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contactInfo";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    console.log('Form field changed:', e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Form submission started with data:', form);
    
    if (!form.name || !form.email || !form.message) {
      console.log('Validation failed: missing fields');
      toast({ variant: "destructive", title: "Please fill in all fields." });
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      console.log('Validation failed: invalid email format');
      toast({ variant: "destructive", title: "Enter a valid email address." });
      return;
    }
    
    setSubmitting(true);
    console.log('Starting Supabase insert...');
    
    try {
      const insertData = {
        Name: form.name,
        Email: form.email,
        message: form.message,
      };
      
      console.log('Attempting to insert data:', insertData);
      
      const { error } = await supabase
        .from("Contact Us")
        .insert(insertData);

      console.log('Supabase response - error:', error);

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code
        });
        throw error;
      }

      console.log('Form submission successful');
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent! We'll be in touch soon.",
        description: "Thank you for contacting Rory's Rooftop Bar.",
      });
    } catch (error) {
      console.error("Detailed error during form submission:", error);
      
      let errorMessage = "Error sending message.";
      if (error instanceof Error) {
        if (error.message.includes('violates row-level security')) {
          errorMessage = "Unable to send message. Please try again.";
        } else if (error.message.includes('relation') && error.message.includes('does not exist')) {
          errorMessage = "Database table not found. Please contact support.";
        } else if (error.message.includes('column') && error.message.includes('does not exist')) {
          errorMessage = "Database schema error. Please contact support.";
        } else if (error.message.includes('Bad Request')) {
          errorMessage = "Invalid request format. Please try again.";
        }
      }
      
      toast({ 
        variant: "destructive", 
        title: errorMessage,
        description: "Please try again or contact support if the issue persists."
      });
    } finally {
      setSubmitting(false);
      console.log('Form submission process completed');
    }
  }

  return (
    <div className="bg-background min-h-screen w-full pb-16 overflow-x-hidden">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-8 animate-fade-in">
        <h1 className="font-hero mb-2 text-center">Contact Rory's Rooftop Bar</h1>
        <p className="font-body text-lg mb-8 text-muted-foreground text-center">
          Whether it's for reservations, private events, or just to say hello, we'd love to hear from you. Let's connect.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6 flex flex-col justify-between relative">
            <img
              src="/lovable-uploads/70c2fc32-5834-4dcc-9911-137b8c8ff451.png"
              alt="Illustration of a person reading under a beach umbrella"
              className="absolute -top-12 -left-20 w-40 h-auto hidden lg:block"
              style={{ transform: "rotate(-10deg)" }}
            />
            <Card className="p-6 relative z-10">
              <div className="flex items-center mb-3">
                <MapPin className="text-primary mr-3" />
                <span className="font-medium">
                  {CONTACT_INFO.addressLines.join(', ')}
                </span>
              </div>
              <div className="flex items-center mb-3">
                <Phone className="text-primary mr-3" />
                <span className="font-medium">{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center mb-3">
                <Mail className="text-primary mr-3" />
                <span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-primary hover:underline transition"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Instagram className="text-primary mr-3" />
                <a
                  href={CONTACT_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  {CONTACT_INFO.instagram.handle}
                </a>
              </div>
            </Card>
            <Card className="p-6 relative z-10">
              <div className="flex items-center mb-4">
                <Clock className="text-primary mr-3" />
                <span className="font-medium">Hours</span>
              </div>
              <div className="space-y-1 font-body text-base">
                {CONTACT_INFO.hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="text-foreground">{time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          {/* Contact Form */}
          <div className="relative">
            <img
              src="/lovable-uploads/36a4f841-7d4d-4be7-931b-f1d83aa744d3.png"
              alt="Illustration of a person on a paddleboard shaped like a can"
              className="absolute -bottom-12 -right-20 w-48 h-auto hidden lg:block"
              style={{ transform: "rotate(10deg)" }}
            />
            <Card className="p-8 bg-secondary shadow-lg relative z-10">
              <h2 className="font-section-header text-2xl mb-4 text-primary">Send a Message</h2>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={submitting}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={submitting}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  disabled={submitting}
                  className="resize-none"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground shadow-md"
                  size="lg"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-2">
                  Response within 24 hours (Mon–Fri)
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
