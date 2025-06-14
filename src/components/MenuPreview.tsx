import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MenuPreview = () => {
  const navigate = useNavigate();
  const featuredItems = [
    {
      name: "Manhattan Sunset",
      description: "Bourbon, sweet vermouth, cherry bitters, garnished with orange peel",
      price: "$16",
      image: "/lovable-uploads/6a6bcbe3-b86b-441d-a54c-3c7bd47ea431.png"
    },
    {
      name: "Rooftop Refresh",
      description: "Gin, elderflower, cucumber, lime, topped with prosecco",
      price: "$14",
      image: "/lovable-uploads/6a6bcbe3-b86b-441d-a54c-3c7bd47ea431.png"
    },
    {
      name: "Avocado Toast Elevated",
      description: "Multigrain sourdough, smashed avocado, heirloom tomatoes, microgreens",
      price: "$18",
      image: "/lovable-uploads/97800ff3-e4bd-426e-974e-7ae6c3b68c9e.png"
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Artful Sips & <span className="text-primary">Bites</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a preview of our signature creations, where every drink is a masterpiece and every dish is a discovery. This is just a glimpse—your new favorite awaits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {featuredItems.map((item, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group cursor-pointer h-80 rounded-lg shadow-lg border-0"
              onClick={() => navigate("/menu")}
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-didot text-white drop-shadow-lg">{item.name}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* Remove any custom bg/text, use outline variant which is beige by default */}
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/menu")}
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
