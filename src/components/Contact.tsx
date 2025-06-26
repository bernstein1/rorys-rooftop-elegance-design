
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contactInfo";

const Contact = () => {
  return (
    <section 
      id="contact" 
      className="py-20 bg-muted/30"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit <span className="text-primary">Rory's Rooftop</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your table with a view is waiting. Find us in the heart of the Meatpacking District.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Card */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <address className="text-muted-foreground not-italic">
                  {CONTACT_INFO.addressLines[0]}<br />
                  {CONTACT_INFO.addressLines[1]}
                </address>
                <p className="text-sm text-muted-foreground mt-2">
                  Enter through Puttery NYC<br />
                  Take elevator to rooftop
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Card */}
          <Card className="p-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="text-primary mr-3" aria-hidden="true" />
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="font-medium hover:text-primary transition"
                  aria-label={`Call us at ${CONTACT_INFO.phone}`}
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="text-primary mr-3" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-primary hover:underline transition"
                  aria-label={`Email us at ${CONTACT_INFO.email}`}
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center">
                <Instagram className="text-primary mr-3" aria-hidden="true" />
                <a
                  href={CONTACT_INFO.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                  aria-label={`Follow us on Instagram ${CONTACT_INFO.instagram.handle} (opens in new window)`}
                >
                  {CONTACT_INFO.instagram.handle}
                </a>
              </div>
            </div>
          </Card>

          {/* Hours Card */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-primary mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold mb-3">Hours</h3>
                <div className="space-y-2" role="list">
                  {CONTACT_INFO.hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm" role="listitem">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="text-foreground font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
          <Button
            asChild
            size="lg"
            className="px-12 py-3 shadow-lg min-h-[44px]"
          >
            <a 
              href="https://resy.com/rorysrooftop" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Make a reservation (opens in new window)"
            >
              Make Reservation
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-h-[44px]"
          >
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label={`Request information via email to ${CONTACT_INFO.email}`}
            >
              Request Information
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
