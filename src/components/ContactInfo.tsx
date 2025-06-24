
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Instagram } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contactInfo";

export default function ContactInfo() {
  return (
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
  );
}
