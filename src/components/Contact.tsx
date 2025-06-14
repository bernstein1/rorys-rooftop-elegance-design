
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Contact = () => {
  const hours = [
    { day: "Monday - Thursday", time: "4:00 PM - 10:00 PM" },
    { day: "Friday", time: "4:00 PM - 1:00 AM" },
    { day: "Saturday", time: "12:00 PM - 1:00 AM" },
    { day: "Sunday", time: "12:00 PM - 10:00 PM" }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Join Us <span className="text-primary">Above It All</span>
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
                  446 W 14th St<br />
                  New York, NY 10014
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
                  +1 631-212-8501
                </p>
                <div className="flex items-center space-x-3">
                  <a href="https://www.instagram.com/rorysrooftop/" className="text-primary hover:text-primary/80">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <span className="text-sm text-muted-foreground">@rorysrooftop</span>
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
                  {hours.map((schedule, index) => (
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

        {/* Important Info */}
        <div className="mt-12 text-center">
          <Card className="p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-3">Important Information</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">Age Requirement</p>
                <p>21+ only, valid ID required</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Payment</p>
                <p>Credit/debit cards only, no cash</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Reservations</p>
                <p>Walk-ins welcome, reservations recommended</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Dress Code</p>
                <p>Smart casual attire preferred</p>
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
            className="px-12 py-3 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition"
          >
            <a href="mailto:hello@rorysrooftop.com">
              Request Information
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
