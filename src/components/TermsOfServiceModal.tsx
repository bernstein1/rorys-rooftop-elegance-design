
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const TermsOfServiceModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-background/90 hover:text-secondary p-0 h-auto underline-offset-4 hover:underline">
          Terms of Service
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p><strong>Last Updated:</strong> June 2024</p>
          
          <section>
            <h3 className="font-semibold mb-2">Acceptance of Terms</h3>
            <p>By accessing and using Rory's Rooftop Bar services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Reservations</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reservations are subject to availability and confirmation</li>
              <li>We reserve the right to cancel or modify reservations due to circumstances beyond our control</li>
              <li>Cancellation policies apply and may vary by booking type</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Code of Conduct</h3>
            <p>We maintain a sophisticated atmosphere and reserve the right to refuse service to anyone who does not comply with our dress code or behavioral standards.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Age Requirements</h3>
            <p>All guests must be 21 years or older. Valid government-issued ID is required for entry.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Private Events</h3>
            <p>Private event bookings are subject to separate terms and conditions provided at the time of booking.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Limitation of Liability</h3>
            <p>Rory's Rooftop Bar shall not be liable for any indirect, incidental, special, or consequential damages.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Contact Information</h3>
            <p>For questions about these terms, please contact us through our website or speak with management during your visit.</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceModal;
