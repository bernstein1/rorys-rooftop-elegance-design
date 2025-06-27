
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Calendar, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivateEvents = () => {
  const navigate = useNavigate();

  const eventTypes = [
    {
      icon: Users,
      title: "Corporate Events",
      description: "Impress clients with stunning city views and premium service"
    },
    {
      icon: Calendar,
      title: "Celebrations",
      description: "Birthdays, anniversaries, and special milestones deserve the best"
    },
    {
      icon: Star,
      title: "Exclusive Parties",
      description: "Private access to our rooftop with customized experiences"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Private Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Make your next event unforgettable with exclusive access to NYC's premier rooftop venue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {eventTypes.map((type, idx) => (
            <Card key={idx} className="p-6 text-center">
              <type.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={() => navigate("/events")}
            className="bg-primary text-primary-foreground px-8 py-3"
          >
            Plan Your Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PrivateEvents;
