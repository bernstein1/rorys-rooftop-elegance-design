
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { CONTACT_INFO } from "@/lib/contactInfo";

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
              <MapPin className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  {CONTACT_INFO.addressLines[0]}<br />
                  {CONTACT_INFO.addressLines[1]}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Enter through Puttery NYC<br />
                  Take elevator to rooftop
                </p>
              </div>
            </div>
          </Card>

          {/* Contact Card */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground mb-2">
                  {CONTACT_INFO.phone}
                </p>
                <div className="flex items-center space-x-3">
                  <a href={CONTACT_INFO.instagram.url} className="text-primary hover:text-primary/80">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <span className="text-sm text-muted-foreground">{CONTACT_INFO.instagram.handle}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Hours Card */}
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-3">Hours</h3>
                <div className="space-y-2">
                  {CONTACT_INFO.hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
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
            className="px-12 py-3 shadow-lg"
          >
            <a href="https://resy.com/rorysrooftop" target="_blank" rel="noopener noreferrer">
              Make Reservation
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <a href={`mailto:${CONTACT_INFO.email}`}>
              Request Information
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
