
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
          <MapPin className="h-6 w-6 text-primary mr-2" />
          Location & Hours
        </h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            <strong>Address:</strong><br />
            Above Puttery NYC<br />
            Meatpacking District<br />
            New York, NY
          </p>
          <p>
            <strong>Hours:</strong><br />
            Wednesday - Sunday: 5:00 PM - 12:00 AM<br />
            Closed Monday - Tuesday
          </p>
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
          <Phone className="h-6 w-6 text-primary mr-2" />
          Reservations & Events
        </h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            <strong>Reservations:</strong><br />
            <a 
              href="https://resy.com/rorysrooftop" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Book through Resy
            </a>
          </p>
          <p>
            <strong>Private Events:</strong><br />
            Use the form below to inquire about private events, corporate gatherings, and special celebrations.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ContactInfo;
