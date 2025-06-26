
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfServiceModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="link" 
          className="p-0 h-auto text-sm text-background/90 hover:text-secondary underline-offset-4 hover:underline"
        >
          Terms of Service
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm">
            <section>
              <h3 className="font-semibold mb-2">1. Acceptance of Terms</h3>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>
            
            <section>
              <h3 className="font-semibold mb-2">2. Reservations</h3>
              <p>Reservations are subject to availability and confirmation. We reserve the right to refuse service to anyone for any reason at any time.</p>
            </section>
            
            <section>
              <h3 className="font-semibold mb-2">3. Cancellation Policy</h3>
              <p>Cancellations must be made at least 24 hours in advance. Late cancellations or no-shows may be subject to charges.</p>
            </section>
            
            <section>
              <h3 className="font-semibold mb-2">4. Liability</h3>
              <p>Rory's Rooftop Bar is not liable for any direct, indirect, incidental, or consequential damages arising from your use of our services.</p>
            </section>
            
            <section>
              <h3 className="font-semb-2">5. Modifications</h3>
              <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TermsOfServiceModal;
