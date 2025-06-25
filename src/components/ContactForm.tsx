
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { submitTripleseatLead } from "@/integrations/tripleseat/client";

export default function ContactForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    company: "",
    event_description: "",
    guest_count: "",
    contact_preference: "",
    event_date: "",
    start_time: "",
    end_time: "",
    referral_source_id: "",
    referral_source_other: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    console.log('Form field changed:', e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Form submission started with data:', form);
    
    if (
      !form.first_name ||
      !form.last_name ||
      !form.email_address ||
      !form.phone_number ||
      !form.company ||
      !form.event_description ||
      !form.guest_count
    ) {
      console.log('Validation failed: missing required fields');
      toast({ variant: "destructive", title: "Please fill in all required fields." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email_address)) {
      console.log('Validation failed: invalid email format');
      toast({ variant: "destructive", title: "Enter a valid email address." });
      return;
    }
    
    setSubmitting(true);
    console.log('Starting Supabase insert...');

    try {
      const insertData = {
        name: `${form.first_name} ${form.last_name}`,
        email: form.email_address,
        message: form.message,
      };
      
      console.log('Attempting to insert data:', insertData);
      
      const { error } = await supabase
        .from("contact_messages")
        .insert(insertData);

      console.log('Supabase response - error:', error);

      if (error) {
        console.error('Supabase error details:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
        });
        throw error;
      }

      console.log('Supabase insert successful');

      const lead = {
        first_name: form.first_name,
        last_name: form.last_name,
        email_address: form.email_address,
        phone_number: form.phone_number,
        company: form.company,
        event_description: form.event_description,
        guest_count: Number(form.guest_count),
        contact_preference: form.contact_preference || undefined,
        event_date: form.event_date || undefined,
        start_time: form.start_time || undefined,
        end_time: form.end_time || undefined,
        referral_source_id: form.referral_source_id ? Number(form.referral_source_id) : undefined,
        referral_source_other: form.referral_source_other || undefined,
        additional_information: form.message || undefined,
      };

      const tsPayload = {
        lead,
        lead_form_id: Number(import.meta.env.VITE_TRIPLESEAT_LEAD_FORM_ID),
        ...(import.meta.env.VITE_TRIPLESEAT_LOCATION_ID
          ? { location_id: Number(import.meta.env.VITE_TRIPLESEAT_LOCATION_ID) }
          : {}),
      };

      console.log('Sending lead to Tripleseat:', tsPayload);

      const tsRes = await submitTripleseatLead(tsPayload);
      if (tsRes.errors) {
        const errors = Array.isArray(tsRes.errors)
          ? tsRes.errors.join(', ')
          : Object.values(tsRes.errors).flat().join(', ');
        toast({ variant: 'destructive', title: errors });
      } else {
        console.log('Tripleseat response:', tsRes);
        setForm({
          first_name: '',
          last_name: '',
          email_address: '',
          phone_number: '',
          company: '',
          event_description: '',
          guest_count: '',
          contact_preference: '',
          event_date: '',
          start_time: '',
          end_time: '',
          referral_source_id: '',
          referral_source_other: '',
          message: '',
        });
        toast({
          title: 'Message sent! We\'ll be in touch soon.',
          description: 'Thank you for contacting Rory\'s Rooftop Bar.',
        });
      }
    } catch (error) {
      console.error("Detailed error during form submission:", error);
      
      let errorMessage = "Error sending message. Please try again.";
      if (error instanceof Error) {
        if (error.message.includes('violates row-level security')) {
          errorMessage = "Unable to send message. Please try again.";
        } else if (error.message.includes('relation') && error.message.includes('does not exist')) {
          errorMessage = "Database table not found. Please contact support.";
        } else if (error.message.includes('column') && error.message.includes('does not exist')) {
          errorMessage = "Database schema error. Please contact support.";
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
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              name="first_name"
              placeholder="First Name"
              value={form.first_name}
              onChange={handleChange}
              disabled={submitting}
              required
            />
            <Input
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              disabled={submitting}
              required
            />
          </div>
          <Input
            name="email_address"
            type="email"
            placeholder="Email"
            value={form.email_address}
            onChange={handleChange}
            disabled={submitting}
            required
          />
          <Input
            name="phone_number"
            placeholder="Phone Number"
            value={form.phone_number}
            onChange={handleChange}
            disabled={submitting}
            required
          />
          <Input
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            disabled={submitting}
            required
          />
          <Input
            name="event_description"
            placeholder="Event Description"
            value={form.event_description}
            onChange={handleChange}
            disabled={submitting}
            required
          />
          <Input
            name="guest_count"
            type="number"
            placeholder="Guest Count"
            value={form.guest_count}
            onChange={handleChange}
            disabled={submitting}
            required
          />
          <Input
            name="contact_preference"
            placeholder="Contact Preference"
            value={form.contact_preference}
            onChange={handleChange}
            disabled={submitting}
          />
          <Input
            name="event_date"
            placeholder="Event Date"
            value={form.event_date}
            onChange={handleChange}
            disabled={submitting}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              name="start_time"
              placeholder="Start Time"
              value={form.start_time}
              onChange={handleChange}
              disabled={submitting}
            />
            <Input
              name="end_time"
              placeholder="End Time"
              value={form.end_time}
              onChange={handleChange}
              disabled={submitting}
            />
          </div>
          <Input
            name="referral_source_id"
            placeholder="Referral Source ID"
            value={form.referral_source_id}
            onChange={handleChange}
            disabled={submitting}
          />
          <Input
            name="referral_source_other"
            placeholder="Referral Source Details"
            value={form.referral_source_other}
            onChange={handleChange}
            disabled={submitting}
          />
          <Textarea
            name="message"
            placeholder="Additional Information"
            rows={4}
            value={form.message}
            onChange={handleChange}
            disabled={submitting}
            className="resize-none"
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
