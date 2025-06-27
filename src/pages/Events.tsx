
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Card } from "@/components/ui/card";
import { Users, Calendar, Star, MapPin } from "lucide-react";

const eventPackages = [
  {
    name: "Corporate Gathering",
    capacity: "20-50 guests",
    features: ["Dedicated bar area", "Customized menu", "A/V equipment", "Event coordinator"],
    price: "Starting at $75/person"
  },
  {
    name: "Celebration Package",
    capacity: "10-30 guests",
    features: ["Semi-private space", "Cocktail reception", "Passed appetizers", "Dedicated server"],
    price: "Starting at $65/person"
  },
  {
    name: "Full Venue Buyout",
    capacity: "Up to 150 guests",
    features: ["Exclusive rooftop access", "Full bar service", "Custom menu design", "Event planning"],
    price: "Contact for pricing"
  }
];

export default function Events() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" className="max-w-6xl mx-auto px-4 pt-32 pb-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Private Events
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your next celebration into an unforgettable experience high above the Meatpacking District. 
            Our rooftop offers the perfect backdrop for corporate events, celebrations, and exclusive gatherings.
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/cheers.png" 
            alt="Private event celebration at Rory's Rooftop"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Event Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Event Types We Host
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Corporate Events", desc: "Team building, client dinners, product launches" },
              { icon: Calendar, title: "Celebrations", desc: "Birthdays, anniversaries, graduations" },
              { icon: Star, title: "Exclusive Parties", desc: "Private gatherings with premium service" },
              { icon: MapPin, title: "Wedding Events", desc: "Rehearsal dinners, receptions, ceremonies" }
            ].map((type, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <type.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground">{type.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Event Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Event Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {eventPackages.map((pkg, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-4">{pkg.capacity}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-foreground">{pkg.price}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16 bg-secondary rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            Why Choose Rory's for Your Event?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Unmatched Views</h3>
              <p className="text-muted-foreground mb-4">
                Breathtaking panoramic views of Manhattan's skyline and the Hudson River create the perfect backdrop for your event photos and memories.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">Expert Service</h3>
              <p className="text-muted-foreground">
                Our dedicated events team ensures every detail is perfect, from custom menu planning to seamless execution.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Flexible Spaces</h3>
              <p className="text-muted-foreground mb-4">
                Multiple areas can be configured for intimate gatherings or large celebrations, with options for semi-private or full venue buyouts.
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">Prime Location</h3>
              <p className="text-muted-foreground">
                Located in the heart of the Meatpacking District, easily accessible for guests coming from anywhere in NYC.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
