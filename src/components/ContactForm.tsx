
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function ContactForm() {
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
  );
}
