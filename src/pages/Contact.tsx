import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import { useState } from "react";

const HOURS = [
  { day: "Mon–Thu", time: "4:00 PM – 10:00 PM" },
  { day: "Friday", time: "4:00 PM – 1:00 AM" },
  { day: "Saturday", time: "12:00 PM – 1:00 AM" },
  { day: "Sunday", time: "12:00 PM – 10:00 PM" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ variant: "destructive", title: "Please fill in all fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast({ variant: "destructive", title: "Enter a valid email address." });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "Message sent! We’ll be in touch soon.",
        description: "Thank you for contacting Rory's Rooftop Bar.",
      });
    }, 1200);
  }

  return (
    <div className="bg-background min-h-screen w-full pb-16">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 pt-32 pb-8 animate-fade-in">
        <h1 className="font-hero mb-2">Contact Rory’s Rooftop Bar</h1>
        <p className="font-body text-lg mb-8 text-muted-foreground text-center">
          Questions, event inquiries or feedback? Reach out — we’d love to connect.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Details */}
          <div className="space-y-6 flex flex-col justify-between">
            <Card className="p-6">
              <div className="flex items-center mb-3">
                <MapPin className="text-primary mr-3" />
                <span className="font-medium">446 W 14th St, New York, NY 10014</span>
              </div>
              <div className="flex items-center mb-3">
                <Phone className="text-primary mr-3" />
                <span className="font-medium">+1 631-212-8501</span>
              </div>
              <div className="flex items-center mb-3">
                <Mail className="text-primary mr-3" />
                <span>
                  <a
                    href="mailto:info@rorysrooftop.com"
                    className="text-primary hover:underline transition"
                  >
                    info@rorysrooftop.com
                  </a>
                </span>
              </div>
              <div className="flex items-center">
                <Instagram className="text-primary mr-3" />
                <a
                  href="https://www.instagram.com/rorysrooftop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  @rorysrooftop
                </a>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="text-primary mr-3" />
                <span className="font-medium">Hours</span>
              </div>
              <div className="space-y-1 font-body text-base">
                {HOURS.map(({ day, time }) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="text-foreground">{time}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          {/* Contact Form */}
          <Card className="p-8 bg-[hsl(46,46%,95%)] shadow-lg">
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
                style={{
                  backgroundColor: "hsl(46,46%,95%)", // beige for form
                  fontFamily: "Montserrat, Inter, sans-serif"
                }}
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
  );
}
