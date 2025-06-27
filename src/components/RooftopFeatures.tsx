
import { Card } from "@/components/ui/card";
import { MapPin, Utensils, Music, Users } from "lucide-react";

const RooftopFeatures = () => {
  const features = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Stunning views of the Meatpacking District and Hudson River"
    },
    {
      icon: Utensils,
      title: "Craft Cocktails",
      description: "Expertly crafted drinks with premium spirits and fresh ingredients"
    },
    {
      icon: Music,
      title: "Live Atmosphere",
      description: "DJ sets and live music to complement your rooftop experience"
    },
    {
      icon: Users,
      title: "Private Events",
      description: "Perfect venue for celebrations, corporate events, and special occasions"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Rory's?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            More than just a rooftop bar - we're your gateway to unforgettable NYC experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
              <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RooftopFeatures;
