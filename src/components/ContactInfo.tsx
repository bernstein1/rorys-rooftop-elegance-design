
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Location</h3>
          <p className="text-muted-foreground">
            123 Rooftop Avenue<br />
            New York, NY 10001
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Phone</h3>
          <p className="text-muted-foreground">(555) 123-4567</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Email</h3>
          <p className="text-muted-foreground">hello@rorysrooftop.com</p>
        </div>
      </div>

      <div className="flex items-start space-x-4">
        <Clock className="w-6 h-6 text-primary mt-1" />
        <div>
          <h3 className="font-semibold mb-2">Hours</h3>
          <p className="text-muted-foreground">
            Mon-Thu: 5pm - 12am<br />
            Fri-Sat: 5pm - 2am<br />
            Sun: 4pm - 11pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
