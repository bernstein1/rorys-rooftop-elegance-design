
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const PrivacyPolicyModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-background/90 hover:text-secondary p-0 h-auto underline-offset-4 hover:underline">
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p><strong>Last Updated:</strong> June 2024</p>
          
          <section>
            <h3 className="font-semibold mb-2">Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you make a reservation, sign up for our newsletter, or contact us about private events.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">How We Use Your Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>To process reservations and provide our services</li>
              <li>To send you updates about events and promotions (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Information Sharing</h3>
            <p>We do not sell, trade, or share your personal information with third parties except as described in this policy or with your consent.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Cookies</h3>
            <p>We use cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Your Rights</h3>
            <p>You have the right to access, update, or delete your personal information. Contact us at privacy@rorysrooftop.com for assistance.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <p>If you have questions about this privacy policy, please contact us through our contact form or email us directly.</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
