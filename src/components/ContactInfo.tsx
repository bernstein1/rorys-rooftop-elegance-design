
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contactInfo";

export default function ContactInfo() {
  return (
    <div className="grid md:grid-cols-2 gap-6 relative">
      <img
        src="/lovable-uploads/70c2fc32-5834-4dcc-9911-137b8c8ff451.png"
        alt="Illustration of a person reading under a beach umbrella"
        className="absolute -top-12 -left-20 w-40 h-auto hidden lg:block"
        style={{ transform: "rotate(-10deg)" }}
      />
      
      {/* Contact Details Card */}
      <Card className="p-8 relative z-10">
        <div className="flex items-center mb-2">
          <MapPin className="text-primary mr-3 w-4 h-4" />
          <span className="font-medium text-lg">
            {CONTACT_INFO.addressLines.join(', ')}
          </span>
        </div>
        <div className="flex items-center mb-2">
          <Phone className="text-primary mr-3 w-4 h-4" />
          <span className="font-medium text-lg">{CONTACT_INFO.phone}</span>
        </div>
        <div className="flex items-center mb-2">
          <Mail className="text-primary mr-3 w-4 h-4" />
          <span className="text-lg">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-primary hover:underline transition"
            >
              {CONTACT_INFO.email}
            </a>
          </span>
        </div>
        <div className="flex items-center">
          <Instagram className="text-primary mr-3 w-4 h-4" />
          <a
            href={CONTACT_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline text-lg"
          >
            {CONTACT_INFO.instagram.handle}
          </a>
        </div>
      </Card>

      {/* Hours Card */}
      <Card className="p-8 relative z-10">
        <div className="flex items-center mb-3">
          <Clock className="text-primary mr-3 w-4 h-4" />
          <span className="font-medium text-lg">Hours</span>
        </div>
        <div className="space-y-1 font-body text-lg">
          {CONTACT_INFO.hours.map(({ day, time }) => (
            <div key={day} className="flex justify-between">
              <span className="text-muted-foreground">{day}</span>
              <span className="text-foreground">{time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
