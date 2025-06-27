
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Find us atop the Meatpacking District, where the city meets the sky.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">
              Above Puttery NYC<br />
              Meatpacking District<br />
              New York, NY
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Reservations</h3>
            <p className="text-sm text-muted-foreground">
              <a href="https://resy.com/rorysrooftop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Book on Resy
              </a>
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Hours</h3>
            <p className="text-sm text-muted-foreground">
              Wed-Sun: 5PM-12AM<br />
              Closed Mon-Tue
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Events</h3>
            <p className="text-sm text-muted-foreground">
              <a href="/contact" className="text-primary hover:underline">
                Private Events Inquiry
              </a>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
